// db/schema.ts
import { pgTable, serial, varchar, text, boolean, integer, timestamp } from 'drizzle-orm/pg-core';

// Course Table
export const courses = pgTable('courses', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }),
    description: text('description'),
    category: varchar('category', { length: 100 }),
    level: varchar('level', { length: 50 }),
    thumbnailUrl: varchar('thumbnail_url', { length: 255 }),
    tags: text('tags'),
    price: integer('price'),
    enrollmentLimit: integer('enrollment_limit'),
    certificateEnabled: boolean('certificate_enabled').default(false),
    discussionEnabled: boolean('discussion_enabled').default(true),
    freePreviewEnabled: boolean('free_preview_enabled').default(true),
    blockchainCertEnabled: boolean('blockchain_cert_enabled').default(false),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    status: varchar('status', { length: 50 }).default('draft'),
});

// Lesson Table
export const lessons = pgTable('lessons', {
    id: serial('id').primaryKey(),
    courseId: integer('course_id').references(() => courses.id),
    title: varchar('title', { length: 255 }),
    videoUrl: varchar('video_url', { length: 255 }),
    duration: varchar('duration', { length: 50 }),
    status: varchar('status', { length: 50 }).default('pending'),
    order: integer('order'),
    createdAt: timestamp('created_at').defaultNow(),
});

// Exercise Table
export const exercises = pgTable('exercises', {
    id: serial('id').primaryKey(),
    courseId: integer('course_id').references(() => courses.id),
    title: varchar('title', { length: 255 }),
    difficulty: varchar('difficulty', { length: 50 }),
    content: text('content'),
    order: integer('order'),
    createdAt: timestamp('created_at').defaultNow(),
});