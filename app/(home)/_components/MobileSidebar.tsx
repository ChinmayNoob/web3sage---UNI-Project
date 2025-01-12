import React from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SideBar from './SideBar'

function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-gray-200'>
                <SideBar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar