import fs from "fs";
import { Octokit } from "octokit";
import { join } from "path";
import dotenv from "dotenv";

dotenv.config();

const basePath = "src/content/examples/en";
const octokit = new Octokit({ auth: process.env.GITHUB_API_TOKEN });

async function getExampleAuthors() {
  const categories = fs.readdirSync(basePath);

  const authorEntries = await Promise.all(categories.map(getAuthorsInCategory));

  return Object.fromEntries(authorEntries);
}

async function getAuthorsInCategory(category: string) {
  const exampleNames = fs.readdirSync(join(basePath, category));

  const authorEntries = await Promise.all(
    exampleNames.map((exampleName) =>
      getAuthorsInExample(
        exampleName,
        `${basePath}/${category}/${exampleName}/code.js`,
      ),
    ),
  );

  return [category, Object.fromEntries(authorEntries)] as const;
}

async function requestCommitsAtPath(path: string) {
  return await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "calebfoss",
    repo: "p5.js-website",
    path,
    per_page: 100,
  });
}

async function checkRenamed(sha: string, path: string) {
  type FileData = { filename: string; previous_filename: string };

  const response = (await octokit.paginate(
    "GET /repos/{owner}/{repo}/commits/{ref}",
    {
      owner: "calebfoss",
      repo: "p5.js-website",
      ref: sha,
    },
  )) as { files: FileData[] }[];

  const files = response.reduce(
    (list, data) => list.concat(...data.files),
    [] as FileData[],
  );

  const file = files.find((f) => f.filename === path);

  if (file === undefined) {
    console.warn(`File for ${path} in ${sha} is undefined`);
    return undefined;
  }

  return file.previous_filename;
}

async function getAuthorsInExample(exampleName: string, path: string) {
  const response = await requestCommitsAtPath(path);

  const commits = response.data.toReversed();

  const authors = commits.reduce(
    (authorList, commitData) => {
      const author = commitData.commit.author;

      if (
        author === null ||
        authorList.some((other) => other !== null && author.name === other.name)
      )
        return authorList;

      return authorList.concat(author);
    },
    [] as (typeof commits)[number]["commit"]["author"][],
  );

  if (commits.length > 0) {
    const firstCommit = commits[0];

    const previousPath = await checkRenamed(firstCommit.sha, path);

    if (previousPath === undefined) return [exampleName, authors] as const;

    const previousAuthors = (await getAuthorsInExample(
      exampleName,
      previousPath,
    )) as [string, typeof authors];

    console.log(
      `Found previous authors for ${path}: ${previousAuthors[1].map((author) => author?.name)}`,
    );

    return [exampleName, previousAuthors[1].concat(...authors)];
  }

  return [exampleName, authors] as const;
}

const authors = await getExampleAuthors();

fs.writeFileSync("exampleAuthors.json", JSON.stringify(authors), {
  encoding: "utf-8",
});
