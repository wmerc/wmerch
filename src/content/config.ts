import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: z.object({
		order: z.number(),
		isPublished: z.boolean().optional(),
		company: z.string(),
		companyDescription: z.string(),
		workDates: z.string(),
		coverImage: z.string(),
		tags: z.array(z.string()),
		jobDescription: z.string(),
		accomplishments: z.array(z.string()),
		projectLinks: z.array(z.object({
			projectName: z.string(),
			projectLink: z.string(),
		}))
	}),
});

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		company: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		cover: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});


export const collections = { blog, work, project };