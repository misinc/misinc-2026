import { and, asc, eq } from 'drizzle-orm';
import { db } from '../../db/index';
import { navigationItems } from '../../db/schema';
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
    const rows = (await db
      .select({
        id: navigationItems.id,
        label: navigationItems.label,
        href: navigationItems.url,
        position: navigationItems.position,
        parentId: navigationItems.parentId,
      })
      .from(navigationItems)
      .where(and(eq(navigationItems.location, 'header'), eq(navigationItems.isVisible, true)))
      .orderBy(asc(navigationItems.position), asc(navigationItems.id)))
      .filter((entry) => !(entry.label === 'Real Estate (Add On IDX)' && entry.href === '/solutions/real-estate'));

    const childMap = new Map<number, NavItem[]>();

    for (const row of rows.filter((entry) => entry.parentId !== null)) {
      const parentKey = row.parentId as number;
      const existing = childMap.get(parentKey) ?? [];
      existing.push(row);
      childMap.set(parentKey, existing);
    }

    const buildItems = (parentId: number) => {
      const children = childMap.get(parentId) ?? [];
      return children.map((entry) => {
        const nestedItems = buildItems(entry.id);
        return nestedItems.length > 0
          ? {
              label: entry.label,
              href: entry.href,
              items: nestedItems,
            }
          : {
              label: entry.label,
              href: entry.href,
            };
      });
    };

    const topLevel = rows.filter((row) => row.parentId === null);
    const menu = topLevel.map((root) => {
      const mappedChildren = buildItems(root.id);
      if (mappedChildren.length > 0) {
        return {
          type: 'dropdown' as const,
          label: root.label,
          href: root.href,
          position: root.position,
          items: mappedChildren,
        };
      }

      return {
        type: 'link' as const,
        label: root.label,
        href: root.href,
        position: root.position,
      };
    });

    const dropdowns = menu
      .filter((entry) => entry.type === 'dropdown')
      .map((entry) => ({ label: entry.label, href: entry.href, items: entry.items }));
    const links = menu
      .filter((entry) => entry.type === 'link')
      .map((entry) => ({ label: entry.label, href: entry.href }));

    return jsonResponse({ ok: true, data: { menu, dropdowns, links } });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Navigation fetch failed';
    return errorResponse(message);
  }
}
