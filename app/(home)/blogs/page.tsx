import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='flex flex-col mt-8 p-4 gap-8'>
            <h1 className='text-6xl text-center font-bold text-neutral-800 font-Canopee'>Blogs</h1>
            <div className='grid grid-cols-3 gap-y-4'>
                <Card>
                    <CardContent>
                        <Image src="/images/etherium.png" alt='image' width={200} height={200} className='w-full' />
                    </CardContent>
                    <CardHeader>
                        <CardTitle className='text-2xl'>Account Abstractions in Etherium: Part 1</CardTitle>
                        <CardDescription>What is Account Abstraction? Account abstraction is an innovative concept in blockchain that seeks...</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://blog.web3labs.com/account-abstraction-in-ethereum">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default page