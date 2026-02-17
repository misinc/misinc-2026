import { asc, eq } from 'drizzle-orm';
import { db } from '../../db/index';
import { services } from '../../db/schema';
import { jsonResponse, errorResponse } from './_lib/json';

export default async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const [service] = await db
        .select()
        .from(services)
        .where(eq(services.slug, slug))
        .limit(1);

      if (!service) {
        return jsonResponse({ ok: false, error: 'Service not found' }, 404);
      }

      return jsonResponse({ ok: true, data: service });
    }

    const allServices = await db
      .select({
        slug: services.slug,
        serviceName: services.serviceName,
        heroDescription: services.heroDescription,
        canonicalPath: services.canonicalPath,
      })
      .from(services)
      .where(eq(services.isPublished, true))
      .orderBy(asc(services.serviceName));

    return jsonResponse({ ok: true, data: allServices });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Services fetch failed';
    return errorResponse(message);
  }
}
