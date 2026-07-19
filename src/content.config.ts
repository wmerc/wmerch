import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
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
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
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
	loader: glob({ pattern: '**/*.md', base: './src/content/project' }),
	schema: z.object({
		title: z.string(),
		company: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		cover: z.string().optional(),
		tags: z.array(z.string()).optional(),
		// Set to true to keep the case study in the repo but exclude it from
		// the build (no route generated, not reachable).
		draft: z.boolean().default(false),
	}),
});


export const collections = { blog, work, project };
