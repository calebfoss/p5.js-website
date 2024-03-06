import { z, defineCollection, reference } from "astro:content";
import { image } from "../shared";

export const pastEventsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date({ coerce: true }),
    description: z.string().optional(),
    featuredImage: image().optional(),
    relatedPastEvents: z.array(reference("past-events")).optional(),
  }),
});
