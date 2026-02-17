import { eq } from 'drizzle-orm';
import { db } from '../../db/index';
import { seoOverrides } from '../../db/schema';
import { jsonResponse, errorResponse } from './_lib/json';

export default async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');

    if (!path) {
      return jsonResponse({ ok: false, error: 'Missing path query parameter' }, 400);
    }

    const [row] = await db
      .select()
      .from(seoOverrides)
      .where(eq(seoOverrides.routePath, path))
      .limit(1);

    if (!row || !row.isActive) {
      return jsonResponse({ ok: false, error: 'SEO override not found' }, 404);
    }

    return jsonResponse({ ok: true, data: row });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'SEO fetch failed';
    return errorResponse(message);
  }
}
