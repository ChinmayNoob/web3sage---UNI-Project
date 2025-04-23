'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, Plus, Trash2, DollarSign, Clock, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function CreateCoursePage() {
  const router = useRouter();
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    thumbnailUrl: '',
    tags: '',
    price: '',
    enrollmentLimit: '',
    certificateEnabled: false,
    discussionEnabled: true,
    freePreviewEnabled: true,
    blockchainCertEnabled: false,
  });

  // Lessons state
  const [lessons, setLessons] = useState([
    { id: 1, title: 'Introduction to Web3', videoUrl: '', duration: '', status: 'pending', order: 1 }
  ]);
  
  // Exercises state
  const [exercises, setExercises] = useState([
    { id: 1, title: 'Basic Smart Contract Creation', difficulty: 'Beginner', content: '', order: 1 }
  ]);

  // Handle form input changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle switch toggles
  const handleSwitchChange = (name: string, value: boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle lesson changes
  const updateLesson = (id: number, field: string, value: string) => {
    setLessons(prev => 
      prev.map(lesson => 
        lesson.id === id ? { ...lesson, [field]: value } : lesson
      )
    );
  };

  // Handle exercise changes
  const updateExercise = (id: number, field: string, value: string) => {
    setExercises(prev => 
      prev.map(exercise => 
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      )
    );
  };

  // Add new lesson
  const addNewLesson = () => {
    const newId = lessons.length ? Math.max(...lessons.map(l => l.id)) + 1 : 1;
    const newOrder = lessons.length ? Math.max(...lessons.map(l => l.order || 0)) + 1 : 1;
    setLessons([...lessons, { id: newId, title: 'New Lesson', videoUrl: '', duration: '', status: 'pending', order: newOrder }]);
  };

  // Add new exercise
  const addNewExercise = () => {
    const newId = exercises.length ? Math.max(...exercises.map(e => e.id)) + 1 : 1;
    const newOrder = exercises.length ? Math.max(...exercises.map(e => e.order || 0)) + 1 : 1;
    setExercises([...exercises, { id: newId, title: 'New Exercise', difficulty: 'Beginner', content: '', order: newOrder }]);
  };

  // Remove lesson
  const removeLesson = (id: number) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  // Remove exercise
  const removeExercise = (id: number) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  // Handle form submission
  const handleSubmit = async (status = 'draft') => {
    try {
      setIsSubmitting(true);
      
      // Data type conversion to match schema
      const price = formData.price ? parseInt(formData.price, 10) : 0;
      const enrollmentLimit = formData.enrollmentLimit ? parseInt(formData.enrollmentLimit, 10) : null;
      
      // Prepare data for submission
      const submissionData = {
        ...formData,
        price,
        enrollmentLimit,
        status,
        lessons: lessons.map(({ id, ...rest }) => ({
          ...rest,
          videoUrl: rest.videoUrl || null,
          duration: rest.duration || null
        })),
        exercises: exercises.map(({ id, ...rest }) => ({
          ...rest,
          content: rest.content || null
        })),
      };
      
      // Send data to API
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create course');
      }
      
      // Use Sonner toast
      toast.success(
        status === 'published' 
          ? "Course published successfully" 
          : "Course saved as draft", 
        {
          description: status === 'published' 
            ? "Your course is now available to students" 
            : "You can continue editing your course later"
        }
      );
      
      // Redirect to course dashboard or edit page
      router.push(`/dashboard/courses/${result.courseId}`);
      
    } catch (error) {
      // Error handling with Sonner
      toast.error("Failed to save course", {
        description: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className='flex flex-col justify-center items-center w-full'>
            <h1 className="text-3xl font-bold text-gray-900">Create New Course</h1>
            <p className="text-gray-500 mt-1">Create a new Web3 course for your students</p>
          </div>
        </div>

        {/* Main form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Course details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="details">Course Details</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              {/* Course Details Tab */}
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Define the core details of your Web3 course</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title</Label>
                      <Input 
                        id="title" 
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g. Mastering Ethereum Development" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Course Description</Label>
                      <Textarea 
                        id="description" 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Provide a detailed description of your course..." 
                        className="h-32" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select 
                          value={formData.category}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blockchain">Blockchain Fundamentals</SelectItem>
                            <SelectItem value="smartcontracts">Smart Contracts</SelectItem>
                            <SelectItem value="dapps">DApp Development</SelectItem>
                            <SelectItem value="defi">DeFi</SelectItem>
                            <SelectItem value="nft">NFT Development</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="level">Difficulty Level</Label>
                        <Select
                          value={formData.level}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="thumbnailUrl">Course Thumbnail URL</Label>
                      <Input 
                        id="thumbnailUrl" 
                        name="thumbnailUrl"
                        value={formData.thumbnailUrl}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg" 
                      />
                      <p className="text-xs text-gray-400 mt-1">Enter a URL for your course thumbnail</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input 
                        id="tags" 
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="e.g. ethereum, solidity, web3 (comma separated)" 
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Content Tab */}
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>Add videos and manage your course lessons</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Course Lessons</h3>
                      <Button onClick={addNewLesson} size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Lesson
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {lessons.map((lesson) => (
                        <div key={lesson.id} className="flex flex-col p-4 border rounded-lg">
                          <div className="mb-3">
                            <Label htmlFor={`lesson-title-${lesson.id}`}>Lesson Title</Label>
                            <Input 
                              id={`lesson-title-${lesson.id}`}
                              value={lesson.title} 
                              onChange={(e) => updateLesson(lesson.id, 'title', e.target.value)}
                              className="mb-2"
                            />
                          </div>
                          
                          <div className="mb-3">
                            <Label htmlFor={`lesson-video-${lesson.id}`}>Video URL (Optional)</Label>
                            <Input 
                              id={`lesson-video-${lesson.id}`}
                              value={lesson.videoUrl || ''} 
                              onChange={(e) => updateLesson(lesson.id, 'videoUrl', e.target.value)}
                              placeholder="https://example.com/video.mp4"
                              className="mb-2"
                            />
                          </div>
                          
                          <div className="flex justify-end space-x-2 mt-2">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeLesson(lesson.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Exercises Tab */}
              <TabsContent value="exercises">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Exercises</CardTitle>
                    <CardDescription>Add hands-on exercises for your students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Exercise List</h3>
                      <Button onClick={addNewExercise} size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Exercise
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {exercises.map((exercise) => (
                        <div key={exercise.id} className="flex flex-col p-4 border rounded-lg">
                          <div className="mb-3">
                            <Label htmlFor={`exercise-title-${exercise.id}`}>Exercise Title</Label>
                            <Input 
                              id={`exercise-title-${exercise.id}`}
                              value={exercise.title} 
                              onChange={(e) => updateExercise(exercise.id, 'title', e.target.value)}
                              className="mb-2"
                            />
                          </div>
                          
                          <div className="mb-3">
                            <Label htmlFor={`exercise-difficulty-${exercise.id}`}>Difficulty</Label>
                            <Select 
                              value={exercise.difficulty}
                              onValueChange={(value) => updateExercise(exercise.id, 'difficulty', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select difficulty" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                <SelectItem value="Advanced">Advanced</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="mb-3">
                            <Label htmlFor={`exercise-content-${exercise.id}`}>Content (Optional)</Label>
                            <Textarea 
                              id={`exercise-content-${exercise.id}`}
                              value={exercise.content || ''} 
                              onChange={(e) => updateExercise(exercise.id, 'content', e.target.value)}
                              placeholder="Exercise instructions or content..."
                              className="h-24"
                            />
                          </div>
                          
                          <div className="flex justify-end space-x-2 mt-2">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeExercise(exercise.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Settings</CardTitle>
                    <CardDescription>Configure publishing and access options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Course Price (USD)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="price" 
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="99" 
                            className="pl-10" 
                            type="number"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="enrollment">Enrollment Limit</Label>
                        <Input 
                          id="enrollmentLimit" 
                          name="enrollmentLimit"
                          value={formData.enrollmentLimit}
                          onChange={handleInputChange}
                          placeholder="e.g. 100 (leave empty for unlimited)" 
                          type="number"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-certificate" className="text-base">Certificate of Completion</Label>
                          <p className="text-sm text-gray-500">Issue a certificate when students complete the course</p>
                        </div>
                        <Switch 
                          id="toggle-certificate" 
                          checked={formData.certificateEnabled}
                          onCheckedChange={(checked) => handleSwitchChange('certificateEnabled', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-discussion" className="text-base">Discussion Forum</Label>
                          <p className="text-sm text-gray-500">Enable discussion forum for students</p>
                        </div>
                        <Switch 
                          id="toggle-discussion" 
                          checked={formData.discussionEnabled}
                          onCheckedChange={(checked) => handleSwitchChange('discussionEnabled', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-preview" className="text-base">Free Preview</Label>
                          <p className="text-sm text-gray-500">Allow students to preview first lesson for free</p>
                        </div>
                        <Switch 
                          id="toggle-preview" 
                          checked={formData.freePreviewEnabled}
                          onCheckedChange={(checked) => handleSwitchChange('freePreviewEnabled', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-blockchain" className="text-base">Blockchain Certificate</Label>
                          <p className="text-sm text-gray-500">Issue certificates on blockchain (NFT)</p>
                        </div>
                        <Switch 
                          id="toggle-blockchain" 
                          checked={formData.blockchainCertEnabled}
                          onCheckedChange={(checked) => handleSwitchChange('blockchainCertEnabled', checked)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right column - Preview and publish */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Course Preview</CardTitle>
                <CardDescription>See how your course will look like</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  {formData.thumbnailUrl ? (
                    <img 
                      src={formData.thumbnailUrl} 
                      alt="Course Thumbnail" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <p className="text-gray-500">No thumbnail</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">{formData.title || 'Course Name Here'}</h3>
                  <p className="text-sm text-gray-500">{formData.description || 'Your course description will appear here...'}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{lessons.length} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{exercises.length} exercises</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleSubmit('draft')}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : 'Save as Draft'}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => router.push('/preview')} // You'd need to implement a preview page
                  disabled={isSubmitting}
                >
                  Preview Course
                </Button>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleSubmit('published')}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Publishing...' : 'Publish Course'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}