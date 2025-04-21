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
import Image from 'next/image';

export default function CreateCoursePage() {
  const [lessons, setLessons] = useState([
    { id: 1, title: 'Introduction to Web3', duration: '12:30', status: 'uploaded' },
    { id: 2, title: 'Setting Up Your Development Environment', duration: '18:45', status: 'uploaded' },
    { id: 3, title: 'Understanding Smart Contracts', duration: '', status: 'pending' }
  ]);
  
  const [exercises, setExercises] = useState([
    { id: 1, title: 'Basic Smart Contract Creation', difficulty: 'Beginner' },
    { id: 2, title: 'Contract Deployment Exercise', difficulty: 'Intermediate' }
  ]);

  const addNewLesson = () => {
    const newId = lessons.length ? Math.max(...lessons.map(l => l.id)) + 1 : 1;
    setLessons([...lessons, { id: newId, title: 'New Lesson', duration: '', status: 'pending' }]);
  };

  const addNewExercise = () => {
    const newId = exercises.length ? Math.max(...exercises.map(e => e.id)) + 1 : 1;
    setExercises([...exercises, { id: newId, title: 'New Exercise', difficulty: 'Beginner' }]);
  };

  const removeLesson = (id: number) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const removeExercise = (id: number) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
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
                      <Input id="title" placeholder="e.g. Mastering Ethereum Development" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Course Description</Label>
                      <Textarea id="description" placeholder="Provide a detailed description of your course..." className="h-32" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
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
                        <Select>
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
                      <Label htmlFor="thumbnail">Course Thumbnail</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Drag and drop your image here or click to browse</p>
                        <p className="text-xs text-gray-400 mt-1">Recommended size: 1280x720px</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Upload Thumbnail
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input id="tags" placeholder="e.g. ethereum, solidity, web3 (comma separated)" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Content Tab */}
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>Upload videos and manage your course lessons</CardDescription>
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
                        <div key={lesson.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <div className="flex-1">
                            <Input 
                              value={lesson.title} 
                              onChange={(e) => {
                                const updatedLessons = lessons.map(l => 
                                  l.id === lesson.id ? { ...l, title: e.target.value } : l
                                );
                                setLessons(updatedLessons);
                              }}
                              className="mb-2"
                            />
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{lesson.duration || 'No duration'}</span>
                              <Badge 
                                className="ml-3" 
                                variant={lesson.status === 'uploaded' ? 'outline' : 'secondary'}
                              >
                                {lesson.status === 'uploaded' ? 'Uploaded' : 'Pending'}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Upload className="h-4 w-4 mr-1" />
                              {lesson.status === 'uploaded' ? 'Replace' : 'Upload'}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeLesson(lesson.id)}
                            >
                              <Trash2 className="h-4 w-4" />
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
                        <div key={exercise.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <div className="flex-1">
                            <Input 
                              value={exercise.title} 
                              onChange={(e) => {
                                const updatedExercises = exercises.map(ex => 
                                  ex.id === exercise.id ? { ...ex, title: e.target.value } : ex
                                );
                                setExercises(updatedExercises);
                              }}
                              className="mb-2"
                            />
                            <div className="flex items-center text-sm">
                              <Select 
                                defaultValue={exercise.difficulty}
                                onValueChange={(value) => {
                                  const updatedExercises = exercises.map(ex => 
                                    ex.id === exercise.id ? { ...ex, difficulty: value } : ex
                                  );
                                  setExercises(updatedExercises);
                                }}
                              >
                                <SelectTrigger className="w-40 h-8">
                                  <SelectValue placeholder="Difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <FileText className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeExercise(exercise.id)}
                            >
                              <Trash2 className="h-4 w-4" />
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
                          <Input id="price" placeholder="99.99" className="pl-10" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="enrollment">Enrollment Limit</Label>
                        <Input id="enrollment" placeholder="e.g. 100 (leave empty for unlimited)" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-certificate" className="text-base">Certificate of Completion</Label>
                          <p className="text-sm text-gray-500">Issue a certificate when students complete the course</p>
                        </div>
                        <Switch id="toggle-certificate" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-discussion" className="text-base">Discussion Forum</Label>
                          <p className="text-sm text-gray-500">Enable discussion forum for students</p>
                        </div>
                        <Switch id="toggle-discussion" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-preview" className="text-base">Free Preview</Label>
                          <p className="text-sm text-gray-500">Allow students to preview first lesson for free</p>
                        </div>
                        <Switch id="toggle-preview" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="toggle-blockchain" className="text-base">Blockchain Certificate</Label>
                          <p className="text-sm text-gray-500">Issue certificates on blockchain (NFT)</p>
                        </div>
                        <Switch id="toggle-blockchain" />
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
                    <Image src="/images/frame.png" alt='preview' height={600} width={600} className='w-full h-full object-cover rounded-lg'/>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Course Name Here</h3>
                  <p className="text-sm text-gray-500">Your course description will appear here...</p>
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Save as Draft
                </Button>
                <Button variant="outline" className="w-full">
                  Preview Course
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Publish Course
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}