import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			author: z
				.object({
					name: z.string().min(2).max(80),
					title: z.string().min(2).max(120).optional(),
					bio: z.string().min(10).max(500).optional(),
					avatarText: z.string().min(1).max(3).optional(),
				})
				.optional(),
			authorName: z.string().min(2).max(80).optional(),
			authorTitle: z.string().min(2).max(120).optional(),
			authorBio: z.string().min(10).max(500).optional(),
		}),
});

export const collections = { blog };
