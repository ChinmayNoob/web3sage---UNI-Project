// app/api/courses/route.ts
import { NextResponse } from 'next/server';
import { courses, lessons, exercises } from '@/db/schema';
import { db } from '@/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Start a transaction to ensure all related data is saved
    // First, create the course
    const [courseResult] = await db.insert(courses).values({
      title: data.title,
      description: data.description,
      category: data.category,
      level: data.level,
      thumbnailUrl: data.thumbnailUrl,
      tags: data.tags,
      price: data.price ? parseInt(data.price) : null,
      enrollmentLimit: data.enrollmentLimit ? parseInt(data.enrollmentLimit) : null,
      certificateEnabled: data.certificateEnabled,
      discussionEnabled: data.discussionEnabled,
      freePreviewEnabled: data.freePreviewEnabled,
      blockchainCertEnabled: data.blockchainCertEnabled,
      status: 'draft',
    }).returning({ id: courses.id });

    const courseId = courseResult.id;

    // Insert lessons if provided
    if (data.lessons && data.lessons.length > 0) {
      const lessonsData = data.lessons.map((lesson: any, index: number) => ({
        courseId: courseId,
        title: lesson.title,
        videoUrl: lesson.videoUrl || null,
        duration: lesson.duration || null,
        status: lesson.status || 'pending',
        order: index + 1,
      }));
      
      await db.insert(lessons).values(lessonsData);
    }

    // Insert exercises if provided
    if (data.exercises && data.exercises.length > 0) {
      const exercisesData = data.exercises.map((exercise: any, index: number) => ({
        courseId: courseId,
        title: exercise.title,
        difficulty: exercise.difficulty,
        content: exercise.content || null,
        order: index + 1,
      }));
      
      await db.insert(exercises).values(exercisesData);
    }

    return NextResponse.json({ success: true, courseId });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}