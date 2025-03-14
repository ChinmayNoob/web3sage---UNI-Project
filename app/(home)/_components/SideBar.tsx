'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart, Bot, Compass, LayoutDashboard, List, SquareLibrary } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname();

    const isActive = (href: string) =>
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const isTeacherMode = pathname?.includes("/teacher");

    const sidebarItems = [
        { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/browse', icon: Compass, label: 'Browse' },
        { href: '/chatbot', icon: Bot, label: 'Need Some Help' },
        { href: '/blogs', icon: SquareLibrary, label: 'Blogs' },
    ];

    const teacherItems = [
        { href: '/teacher/courses', icon: List, label: 'Courses' },
        { href: '/teacher/analytics', icon: BarChart, label: 'Analytics' },
    ];

    const itemsToShow = isTeacherMode ? teacherItems : sidebarItems;

    return (
        <div className="h-full w-56 flex-col fixed inset-y-0 z-50 pb-10 bg-gray-200 dark:bg-neutral-900">
            <div className='p-2 flex justify-between'>
                <div>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src='/logo.webp'
                            width={40}
                            height={40}
                            alt='Web3Sage logo'
                            className='rounded-full'
                        />
                        <p className="text-2xl font-semibold font-Canopee">Web3S4ge</p>
                    </Link>
                </div>
            </div>
            <div className="py-2">
                {itemsToShow.map((item) => (
                    <div className="relative" key={item.href}>
                        <Button
                            asChild
                            variant={isActive(item.href) ? "secondary" : "ghost"}
                            className={`w-full p-7 h-10 justify-start flex gap-2 text-black dark:text-white ${isActive(item.href) ? 'bg-gray-300 dark:bg-neutral-800 text-blue-500 font-bold' : ''}`}
                        >
                            <Link href={item.href}>
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.label}
                            </Link>
                        </Button>
                        {isActive(item.href) && (
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;