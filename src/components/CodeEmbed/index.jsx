import { useState, useEffect } from "preact/hooks";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { CodeFrame } from "./frame";

/*
 * A more featured code embed component that uses CodeMirror
 *
 * Props: {
 *   initialValue?: string;
 *   editable: boolean;
 *   previewable: boolean;
 * }
 */
export const CodeEmbed = (props) => {
  const [rendered, setRendered] = useState(false);
  const initialCode = props.initialValue ?? "";
  const [codeString, setCodeString] = useState(initialCode);
  const [previewCodeString, setPreviewCodeString] = useState(codeString);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered) return <div className="code-placeholder" />;

  return (
    <>
      <CodeMirror
        value={codeString}
        theme="light"
        minimalSetup={{
          highlightSpecialChars: false,
          history: true,
          drawSelection: true,
          syntaxHighlighting: true,
          defaultKeymap: true,
          historyKeymap: true,
        }}
        indentWithTab={false}
        extensions={[javascript()]}
        onChange={(val) => setCodeString(val)}
        editable={props.editable}
        onCreateEditor={(editorView) =>
          (editorView.contentDOM.ariaLabel = "Code Editor")
        }
      />
      {props.previewable ? (
        <>
          <button
            onClick={() => {
              console.log("updating code");
              setPreviewCodeString(codeString);
            }}
          >
            Run Code
          </button>
          <button
            onClick={() => {
              console.log("resetting code");
              setCodeString(initialCode);
              setPreviewCodeString(initialCode);
            }}
          >
            Reset
          </button>
          <CodeFrame jsCode={previewCodeString} />
        </>
      ) : null}
    </>
  );
};

export default CodeEmbed;
