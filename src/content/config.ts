import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		language: z.string(),
		index: z.boolean(),
		publication_date: z.coerce.date(),
		update_date: z.coerce.date().optional(),
		thumbnail: z.string().optional(),
		meta_title: z.string().optional(),
		meta_description: z.string().optional(),
		topic: z.string().optional(),
		status: z.string().optional(),
		tags: z.string().optional()
	}),
});

export const collections = {
	"blog": blogCollection,
	"projects": blogCollection
};
