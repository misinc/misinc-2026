import { site } from './site'

/**
 * JSON-LD builders for the shapes that repeat across pages.
 *
 * Detail pages (services, works, platforms, migrations) build their own schema
 * inline because each is a different type. What repeats — and what was missing
 * from every index page — is the breadcrumb trail and the "this page is a list
 * of those pages" relationship. Both live here so the four index pages cannot
 * drift apart.
 */

export interface Crumb {
  name: string
  /** Root-relative path, e.g. `/portfolio`. Omit on the current page. */
  href?: string
}

/** Home is prepended automatically — pass only the trail below it. */
export function breadcrumbs(crumbs: Crumb[]) {
  const trail: Crumb[] = [{ name: 'Home', href: '/' }, ...crumbs]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${site.url}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  }
}

export interface CollectionItem {
  name: string
  /** Root-relative path to the item's own page. */
  href: string
}

/**
 * An index page and the items it lists. `mainEntity` is an ItemList rather
 * than a bare list of URLs so the order shown on the page is the order
 * declared to search engines.
 */
export function collectionPage(opts: {
  name: string
  description: string
  path: string
  items: CollectionItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    isPartOf: { '@id': `${site.url}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: `${site.url}${item.href}`,
      })),
    },
  }
}
