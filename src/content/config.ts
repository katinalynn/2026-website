import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

// Posts from the retired katinarogers.com WordPress blog (2011–2022).
// Files live at archive/YYYY/MM/DD/slug.md so URLs match the old dated paths.
const archive = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    original_url: z.string().url(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, archive };
