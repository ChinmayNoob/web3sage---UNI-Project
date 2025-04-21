'use client'
import React from 'react';
import Link from 'next/link';
import { Search, Plus, BookOpen, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TeacherDashboard() {
    // Sample courses data
    const courses = [
        {
            id: 1,
            title: "Solidity Smart Contract Development",
            description: "Learn to build secure and efficient smart contracts on Ethereum",
            students: 247,
            lessons: 18,
            level: "Intermediate",
            image: "/images/bitcoin.png",
            progress: 100,
            revenue: "$12,450",
            createdAt: "Mar 15, 2025"
        },
        {
            id: 2,
            title: "NFT Marketplace Development",
            description: "Build a complete NFT marketplace from scratch with React and Solidity",
            students: 189,
            lessons: 24,
            level: "Advanced",
            image: "/images/etherium.png",
            progress: 100,
            revenue: "$9,720",
            createdAt: "Feb 3, 2025"
        },
        {
            id: 3,
            title: "DeFi Protocol Engineering",
            description: "Learn to build decentralized finance applications and protocols",
            students: 124,
            lessons: 15,
            level: "Advanced",
            image: "/images/etherium.png",
            progress: 100,
            revenue: "$5,340",
            createdAt: "Apr 2, 2025"
        },
        {
            id: 4,
            title: "Web3 Authentication Systems",
            description: "Implement secure authentication using wallets and blockchain",
            students: 92,
            lessons: 12,
            level: "Intermediate",
            image: "/images/defi.png",
            progress: 100,
            revenue: "$3,210",
            createdAt: "Apr 10, 2025"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-6">
                {/* Header section */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Course Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage your Web3 courses and track your progress</p>
                    </div>
                    <Link href="/teacher/create">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Course
                        </Button>
                    </Link>
                </div>

                {/* Search and filter section */}
                <div className="flex items-center space-x-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search courses..."
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline">Filter</Button>
                    <Button variant="outline">Sort</Button>
                </div>

                {/* Stats overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Students</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center">
                                <Users className="h-5 w-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold">652</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Active Courses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center">
                                <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                                <span className="text-2xl font-bold">4</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center">
                                <BarChart className="h-5 w-5 text-purple-600 mr-2" />
                                <span className="text-2xl font-bold">$30,720</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Courses section */}
                <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card key={course.id} className="overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                        {course.level}
                                    </Badge>
                                </div>
                                <CardDescription className="mt-2">{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between text-sm">
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-1 text-gray-500" />
                                        <span>{course.students} students</span>
                                    </div>
                                    <div className="flex items-center">
                                        <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                                        <span>{course.lessons} lessons</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium">Revenue</span>
                                        <span className="font-medium text-green-600">{course.revenue}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Created</span>
                                        <span className="text-gray-500">{course.createdAt}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t pt-4 flex justify-between">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm">View Analytics</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}