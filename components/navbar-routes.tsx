'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button';
import { LogOut, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function NavbarRoutes() {
    const pathname = usePathname();
    const router = useRouter();
    const { setTheme } = useTheme()
    
    const isTeacherPage = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/chapter")
    const isContentPage = pathname?.startsWith("/content")
    
    return (
        <div className="flex w-full items-center justify-between">
            <div>
                {isContentPage && (
                    <Button 
                        onClick={() => router.back()} 
                        variant="ghost" 
                        size="sm"
                        className="flex items-center"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                    </Button>
                )}
            </div>
            <div className="flex items-center gap-x-2">
                {(isTeacherPage || isPlayerPage) ? (
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            <LogOut className="h-4 w-4 mr-2" />
                            Exit
                        </Button>
                    </Link>
                ) : (
                    <Link href="/teacher/courses">
                        <Button variant="ghost" size="sm">
                            Teacher Mode
                        </Button>
                    </Link>
                )}
                
                
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default NavbarRoutes