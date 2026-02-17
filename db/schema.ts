import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).notNull().default("owner"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  websiteUrl: text("website_url"),
  logoUrl: text("logo_url"),
  industry: varchar("industry", { length: 120 }),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  type: varchar("type", { length: 40 }).notNull().default("general"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  serviceName: varchar("service_name", { length: 255 }).notNull(),
  heroTitle: text("hero_title").notNull(),
  heroDescription: text("hero_description").notNull(),
  quickAnswer: text("quick_answer").notNull(),
  challenges: jsonb("challenges").notNull().default([]),
  outcomes: jsonb("outcomes").notNull().default([]),
  deliverables: jsonb("deliverables").notNull().default([]),
  idealFor: jsonb("ideal_for").notNull().default([]),
  proofQuote: text("proof_quote").notNull(),
  proofAttribution: text("proof_attribution").notNull(),
  proofMetrics: jsonb("proof_metrics").notNull().default([]),
  caseStudyHref: text("case_study_href").notNull().default("/case-studies"),
  solutionHref: text("solution_href").notNull().default("/solutions"),
  relatedServiceSlugs: jsonb("related_service_slugs").notNull().default([]),
  faqs: jsonb("faqs").notNull().default([]),
  seoTitle: text("seo_title").notNull(),
  seoDescription: text("seo_description").notNull(),
  canonicalPath: text("canonical_path").notNull(),
  isPublished: boolean("is_published").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const solutions = pgTable("solutions", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  summary: text("summary"),
  url: text("url").notNull(),
  isPublished: boolean("is_published").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  body: text("body").notNull().default(""),
  imageUrl: text("image_url"),
  status: varchar("status", { length: 30 }).notNull().default("published"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  authorId: integer("author_id").references(() => authors.id, { onDelete: "set null" }),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const blogPostCategories = pgTable(
  "blog_post_categories",
  {
    id: serial("id").primaryKey(),
    postId: integer("post_id")
      .notNull()
      .references(() => blogPosts.id, { onDelete: "cascade" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (table) => ({
    postCategoryUnique: uniqueIndex("blog_post_categories_post_category_unique").on(
      table.postId,
      table.categoryId,
    ),
  }),
);

export const blogPostTags = pgTable(
  "blog_post_tags",
  {
    id: serial("id").primaryKey(),
    postId: integer("post_id")
      .notNull()
      .references(() => blogPosts.id, { onDelete: "cascade" }),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => ({
    postTagUnique: uniqueIndex("blog_post_tags_post_tag_unique").on(table.postId, table.tagId),
  }),
);

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  industry: varchar("industry", { length: 255 }),
  problem: text("problem"),
  strategy: text("strategy"),
  outcome: text("outcome"),
  metric: varchar("metric", { length: 255 }),
  categories: jsonb("categories").notNull().default([]),
  imageUrl: text("image_url"),
  imageAlt: text("image_alt"),
  featured: boolean("featured").notNull().default(false),
  status: varchar("status", { length: 30 }).notNull().default("published"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  clientId: integer("client_id").references(() => clients.id, { onDelete: "set null" }),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  canonicalPath: text("canonical_path"),
  detail: jsonb("detail").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const caseStudyIndustries = pgTable(
  "case_study_industries",
  {
    id: serial("id").primaryKey(),
    caseStudyId: integer("case_study_id")
      .notNull()
      .references(() => caseStudies.id, { onDelete: "cascade" }),
    industryCategoryId: integer("industry_category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (table) => ({
    caseStudyIndustryUnique: uniqueIndex("case_study_industries_unique").on(
      table.caseStudyId,
      table.industryCategoryId,
    ),
  }),
);

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),
  personName: varchar("person_name", { length: 255 }).notNull(),
  personTitle: varchar("person_title", { length: 255 }),
  companyName: varchar("company_name", { length: 255 }),
  headshotUrl: text("headshot_url"),
  caseStudyId: integer("case_study_id").references(() => caseStudies.id, { onDelete: "set null" }),
  isPublished: boolean("is_published").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const mediaAssets = pgTable("media_assets", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }),
  url: text("url").notNull(),
  alt: text("alt"),
  mimeType: varchar("mime_type", { length: 120 }),
  width: integer("width"),
  height: integer("height"),
  source: varchar("source", { length: 50 }).notNull().default("pagescms"),
  metadata: jsonb("metadata").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 120 }).notNull().unique(),
  value: jsonb("value").notNull().default({}),
  description: text("description"),
  updatedByUserId: integer("updated_by_user_id").references(() => users.id, {
    onDelete: "set null",
  }),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const navigationItems = pgTable("navigation_items", {
  id: serial("id").primaryKey(),
  location: varchar("location", { length: 50 }).notNull().default("header"),
  label: varchar("label", { length: 255 }).notNull(),
  url: text("url").notNull(),
  parentId: integer("parent_id"),
  position: integer("position").notNull().default(0),
  openInNewTab: boolean("open_in_new_tab").notNull().default(false),
  isVisible: boolean("is_visible").notNull().default(true),
  metadata: jsonb("metadata").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const redirects = pgTable("redirects", {
  id: serial("id").primaryKey(),
  fromPath: text("from_path").notNull().unique(),
  toPath: text("to_path").notNull(),
  statusCode: integer("status_code").notNull().default(301),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const formSubmissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  formType: varchar("form_type", { length: 80 }).notNull(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 80 }),
  company: varchar("company", { length: 255 }),
  message: text("message"),
  metadata: jsonb("metadata").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  status: varchar("status", { length: 50 }).notNull().default("subscribed"),
  subscribedAt: timestamp("subscribed_at", { withTimezone: true }).defaultNow().notNull(),
  unsubscribedAt: timestamp("unsubscribed_at", { withTimezone: true }),
});

export const contentRevisions = pgTable("content_revisions", {
  id: serial("id").primaryKey(),
  entityType: varchar("entity_type", { length: 60 }).notNull(),
  entityId: varchar("entity_id", { length: 120 }).notNull(),
  changedByUserId: integer("changed_by_user_id").references(() => users.id, {
    onDelete: "set null",
  }),
  changeSummary: text("change_summary"),
  snapshot: jsonb("snapshot").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const seoOverrides = pgTable("seo_overrides", {
  id: serial("id").primaryKey(),
  routePath: varchar("route_path", { length: 400 }).notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  canonicalUrl: text("canonical_url"),
  ogType: varchar("og_type", { length: 40 }).notNull().default("website"),
  robots: varchar("robots", { length: 120 }).notNull().default("index,follow"),
  isActive: boolean("is_active").notNull().default(true),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const posts = pgTable("posts", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull().default(""),
});
