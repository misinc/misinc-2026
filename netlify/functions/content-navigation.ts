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

const fallbackDropdownItems: Record<string, { label: string; href: string }[]> = {
  Solutions: [
    { label: 'Small Businesses', href: '/solutions/small-businesses' },
    { label: 'Real Estate', href: '/solutions/real-estate' },
    { label: 'Nonprofits', href: '/solutions/nonprofits' },
    { label: 'Professional Services', href: '/solutions/professional-services' },
    { label: 'Startups & SaaS', href: '/solutions/startups-saas' },
  ],
  Resources: [
    { label: 'Blog Listing', href: '/resources#blog' },
    { label: 'Webflow vs WordPress Guide', href: '/resources#guides' },
    { label: 'Website Redesign Checklist', href: '/resources#guides' },
    { label: 'Cost of Web Design in Albuquerque', href: '/resources#guides' },
    { label: 'AI for Small Businesses Guide', href: '/resources#guides' },
    { label: 'Web Design FAQ', href: '/resources#faqs' },
    { label: 'Webflow FAQ', href: '/resources#faqs' },
    { label: 'AI & AEO FAQ', href: '/resources#faqs' },
  ],
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

    const menu = topLevel.map((root) => {
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
          type: 'dropdown' as const,
          label: root.label,
          href: root.href,
          position: root.position,
          items: dynamicServiceItems,
        };
      }

      const fallbackChildren = fallbackDropdownItems[root.label] ?? [];
      const dropdownItems = mappedChildren.length > 0 ? mappedChildren : fallbackChildren;

      if (dropdownItems.length > 0) {
        return {
          type: 'dropdown' as const,
          label: root.label,
          href: root.href,
          position: root.position,
          items: dropdownItems,
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
