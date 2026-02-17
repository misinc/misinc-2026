import { and, asc, eq } from 'drizzle-orm';
import { db } from '../../db/index';
import { navigationItems, services } from '../../db/schema';
import { jsonResponse, errorResponse } from './_lib/json';

type NavItem = {
  id: number;
  label: string;
  href: string;
  position: number;
  parentId: number | null;
};

export default async function handler() {
  try {
    const rows = await db
      .select({
        id: navigationItems.id,
        label: navigationItems.label,
        href: navigationItems.url,
        position: navigationItems.position,
        parentId: navigationItems.parentId,
      })
      .from(navigationItems)
      .where(and(eq(navigationItems.location, 'header'), eq(navigationItems.isVisible, true)))
      .orderBy(asc(navigationItems.position), asc(navigationItems.id));

    const servicesRows = await db
      .select({ slug: services.slug, serviceName: services.serviceName })
      .from(services)
      .where(eq(services.isPublished, true))
      .orderBy(asc(services.serviceName));

    const topLevel = rows.filter((row) => row.parentId === null);
    const childMap = new Map<number, NavItem[]>();

    for (const row of rows.filter((entry) => entry.parentId !== null)) {
      const parentKey = row.parentId as number;
      const existing = childMap.get(parentKey) ?? [];
      existing.push(row);
      childMap.set(parentKey, existing);
    }

    const dropdowns = topLevel
      .map((root) => {
        const children = childMap.get(root.id) ?? [];
        const mappedChildren = children.map((entry) => ({
          label: entry.label,
          href: entry.href,
        }));

        if (root.label === 'Services') {
          const dynamicServiceItems = servicesRows.map((service) => ({
            label: service.serviceName,
            href: `/services/${service.slug}`,
          }));

          return {
            label: root.label,
            href: root.href,
            items: dynamicServiceItems,
          };
        }

        if (mappedChildren.length === 0) {
          return null;
        }

        return {
          label: root.label,
          href: root.href,
          items: mappedChildren,
        };
      })
      .filter((entry): entry is { label: string; href: string; items: { label: string; href: string }[] } =>
        Boolean(entry),
      );

    const dropdownLabels = new Set(dropdowns.map((entry) => entry.label));
    const links = topLevel
      .filter((entry) => !dropdownLabels.has(entry.label))
      .map((entry) => ({ label: entry.label, href: entry.href }));

    return jsonResponse({ ok: true, data: { dropdowns, links } });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Navigation fetch failed';
    return errorResponse(message);
  }
}
