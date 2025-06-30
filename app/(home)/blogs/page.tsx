import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='flex flex-col mt-8 p-4 gap-8'>
            <h1 className='text-6xl text-center font-bold text-neutral-800 font-Canopee'>Blogs</h1>
            <div className='grid grid-cols-3 gap-4'>
                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Account Abstractions in Ethereum: Part 1</CardTitle>
                        <CardDescription className='text-sm'>What is Account Abstraction? Account abstraction is an innovative concept in blockchain that seeks...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://blog.web3labs.com/account-abstraction-in-ethereum">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Smart Contract Security Best Practices</CardTitle>
                        <CardDescription className='text-sm'>Learn essential security practices for developing robust smart contracts and protecting against common vulnerabilities...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://consensys.github.io/smart-contract-best-practices/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>DeFi Protocols and Yield Farming</CardTitle>
                        <CardDescription className='text-sm'>Explore the world of decentralized finance, liquidity mining, and how to maximize your crypto yields safely...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://defipulse.com/blog/what-is-yield-farming">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>NFTs and Digital Ownership</CardTitle>
                        <CardDescription className='text-sm'>Understanding Non-Fungible Tokens, their use cases, and how they're revolutionizing digital ownership...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://ethereum.org/en/nft/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Layer 2 Scaling Solutions</CardTitle>
                        <CardDescription className='text-sm'>Discover how Layer 2 solutions like Polygon, Arbitrum, and Optimism are solving Ethereum's scalability issues...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://ethereum.org/en/layer-2/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Decentralized Autonomous Organizations (DAOs)</CardTitle>
                        <CardDescription className='text-sm'>Learn about DAOs, how they work, and their role in creating decentralized governance structures...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://ethereum.org/en/dao/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Cryptocurrency Wallets and Security</CardTitle>
                        <CardDescription className='text-sm'>Essential guide to crypto wallet types, security best practices, and protecting your digital assets...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://ethereum.org/en/wallets/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Blockchain Consensus Mechanisms</CardTitle>
                        <CardDescription className='text-sm'>Understanding Proof of Work, Proof of Stake, and other consensus algorithms that secure blockchain networks...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://ethereum.org/en/developers/docs/consensus-mechanisms/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>Web3 Development with Solidity</CardTitle>
                        <CardDescription className='text-sm'>Get started with Solidity programming, smart contract development, and building decentralized applications...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://docs.soliditylang.org/">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='w-80 h-96 flex flex-col'>
                    <CardContent className='p-0'>
                        <Image src="/images/etherium.png" alt='image' width={200} height={150} className='w-full h-40 object-cover' />
                    </CardContent>
                    <CardHeader className='flex-1 p-4'>
                        <CardTitle className='text-lg'>The Future of Decentralized Finance</CardTitle>
                        <CardDescription className='text-sm'>Exploring emerging trends in DeFi, cross-chain protocols, and the evolution of financial services...</CardDescription>
                    </CardHeader>
                    <CardContent className='p-4 pt-0'>
                        <Link href="https://defipulse.com/blog/what-is-defi">
                            <Button className='w-full'> Read More</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default page