CREATE TABLE "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"description" text,
	"category" varchar(100),
	"level" varchar(50),
	"thumbnail_url" varchar(255),
	"tags" text,
	"price" integer,
	"enrollment_limit" integer,
	"certificate_enabled" boolean DEFAULT false,
	"discussion_enabled" boolean DEFAULT true,
	"free_preview_enabled" boolean DEFAULT true,
	"blockchain_cert_enabled" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"status" varchar(50) DEFAULT 'draft'
);
--> statement-breakpoint
CREATE TABLE "exercises" (
	"id" serial PRIMARY KEY NOT NULL,
	"course_id" integer,
	"title" varchar(255),
	"difficulty" varchar(50),
	"content" text,
	"order" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "lessons" (
	"id" serial PRIMARY KEY NOT NULL,
	"course_id" integer,
	"title" varchar(255),
	"video_url" varchar(255),
	"duration" varchar(50),
	"status" varchar(50) DEFAULT 'pending',
	"order" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;