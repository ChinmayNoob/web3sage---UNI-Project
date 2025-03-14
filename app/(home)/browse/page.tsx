import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <section className='flex flex-col mt-8 p-4 gap-8'>
      <h1 className='text-6xl text-center font-bold text-neutral-800 font-Canopee'>Courses</h1>
      <div className='grid grid-cols-3 gap-y-4'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl'>The Road to Web3</CardTitle>
            <CardDescription>by Alchemy</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p>
              A 10-week self paced program to make you an advanced web3 developer.
            </p>
            <Link href="https://www.web3.university/tracks/road-to-web3">
              <Button>Join Course</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl'>Create your first Smart Contract</CardTitle>
            <CardDescription>by Alchemy</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p>
              Learn to write , deploy and interact with an Etherium Smart Contract
            </p>
            <Link href="https://www.web3.university/tracks/create-a-smart-contracts">
              <Button>Join Course</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl'>How to Build your first nft.</CardTitle>
            <CardDescription>by Alchemy</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p>
              Learn to code an NFT,mint on ether.js and build a full stack NFT dApp
            </p>
            <Link href="https://www.web3.university/tracks/road-to-web3">
              <Button>Join Course</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl'>The Road to Web3</CardTitle>
            <CardDescription>by Alchemy</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p>
              A 10-week self paced program to make you an advanced web3 developer.
            </p>
            <Link href="https://www.web3.university/tracks/road-to-web3">
              <Button>Join Course</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl'>The Road to Web3</CardTitle>
            <CardDescription>by Alchemy</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p>
              A 10-week self paced program to make you an advanced web3 developer.
            </p>
            <Link href="https://www.web3.university/tracks/road-to-web3">
              <Button>Join Course</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl'>The Road to Web3</CardTitle>
            <CardDescription>by Alchemy</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p>
              A 10-week self paced program to make you an advanced web3 developer.
            </p>
            <Link href="https://www.web3.university/tracks/road-to-web3">
              <Button>Join Course</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Page