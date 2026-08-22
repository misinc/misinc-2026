/**
 * Archive screenshots of sites MIS built, oldest first. Sourced from local
 * backups, not a live crawl, so these are real captures rather than
 * re-creations. Used by the "How we got here" gallery on the About page.
 *
 * Each `slug` maps to a pre-generated pair of images in
 * public/img/old-screenshots/thumbs/{slug}.jpg (gallery strip) and
 * full/{slug}.jpg (lightbox) — see docs/adding-content.md if that ever needs
 * regenerating from a new batch of source screenshots.
 */
export const OLD_DESIGNS = [
  { slug: '1996-misinc', year: 1996, client: 'MIS, Inc.' },
  { slug: '1998-spikes-spider', year: 1998, client: 'Spike’s Spider' },
  { slug: '1998-sunsoft', year: 1998, client: 'Sunsoft' },
  { slug: '1999-the-ranch-finder', year: 1999, client: 'The Ranch Finder' },
  { slug: '1999-pdqabq', year: 1999, client: 'PDQABQ' },
  { slug: '1999-richard-schalk', year: 1999, client: 'Richard Schalk' },
  { slug: '1999-nm-ranch-land', year: 1999, client: 'NM Ranch Land' },
  { slug: '2000-misinc', year: 2000, client: 'MIS, Inc.' },
  { slug: '2000-wheels-museum', year: 2000, client: 'Wheels Museum' },
  { slug: '2000-you-can-sell', year: 2000, client: 'You Can Sell' },
  { slug: '2000-nm-ranch-sales', year: 2000, client: 'NM Ranch Sales' },
  { slug: '2000-insnm', year: 2000, client: 'INSNM' },
  { slug: '2001-kasuba-works', year: 2001, client: 'Kasuba Works' },
  { slug: '2001-strength-for-today', year: 2001, client: 'Strength for Today' },
  { slug: '2001-miriams-cyberwell', year: 2001, client: 'Miriam’s Cyberwell' },
  { slug: '2002-make-a-wish-nm', year: 2002, client: 'Make-A-Wish New Mexico' },
  { slug: '2003-walking-stick', year: 2003, client: 'Walking Stick' },
  { slug: '2003-sweet-hots', year: 2003, client: 'Sweet Hots' },
  { slug: '2004-fast-ditch', year: 2004, client: 'Fast Ditch' },
  { slug: '2004-tobb-deloro', year: 2004, client: 'Tobb Del’Oro' },
  { slug: '2005-valleyland', year: 2005, client: 'ValleyLand' },
  { slug: '2007-my-name-is-iran', year: 2007, client: 'My Name is Iran' },
  { slug: '2011-double-reeds', year: 2011, client: 'Double Reeds' },
  { slug: '2013-super-sightseeing', year: 2013, client: 'Super Sightseeing' },
  { slug: '2013-misinc', year: 2013, client: 'MIS, Inc.' },
  { slug: '2016-misinc', year: 2016, client: 'MIS, Inc.' },
] as const
