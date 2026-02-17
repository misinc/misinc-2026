import { desc, eq } from 'drizzle-orm';
import { db } from '../../db/index';
import { blogPosts } from '../../db/schema';
import { jsonResponse, errorResponse } from './_lib/json';

export default async function handler() {
  try {
    const rows = await db
      .select({
        slug: blogPosts.slug,
        title: blogPosts.title,
        excerpt: blogPosts.excerpt,
        imageUrl: blogPosts.imageUrl,
        publishedAt: blogPosts.publishedAt,
      })
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))
      .orderBy(desc(blogPosts.publishedAt));

    return jsonResponse({ ok: true, data: rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Blog posts fetch failed';
    return errorResponse(message);
  }
}
