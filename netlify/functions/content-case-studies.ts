import { asc, desc, eq } from 'drizzle-orm';
import { db } from '../../db/index';
import { caseStudies } from '../../db/schema';
import { jsonResponse, errorResponse } from './_lib/json';

export default async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const [row] = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug)).limit(1);
      if (!row) {
        return jsonResponse({ ok: false, error: 'Case study not found' }, 404);
      }
      return jsonResponse({ ok: true, data: row });
    }

    const rows = await db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.status, 'published'))
      .orderBy(desc(caseStudies.featured), asc(caseStudies.title));

    return jsonResponse({ ok: true, data: rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Case studies fetch failed';
    return errorResponse(message);
  }
}
