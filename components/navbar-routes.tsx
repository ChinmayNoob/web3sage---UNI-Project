'use client'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

function NavbarRoutes() {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/chapter")
    return (
        <div className='flex items-center gap-x-2 ml-auto'>
            {(isTeacherPage || isPlayerPage) ? (
                <Link href="/dashboard">
                    <Button size="sm" variant="ghost">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>

            ) : (
                <Link href='/teacher/courses'>
                    <Button size="sm" variant="ghost">
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default NavbarRoutes