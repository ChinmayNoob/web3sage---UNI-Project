'use client'
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Slider } from '@/components/ui/slider';
import { ChevronDown, ChevronRight, Play, Pause, Volume2, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LearningPage() {
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [volume, setVolume] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Course content sections with open/closed state
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        'solidity-basics': true,
        'smart-contracts': false,
        'defi-development': false,
        'security-best-practices': false,
    });

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (value: number[]) => {
        const newTime = value[0];
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const changePlaybackRate = () => {
        const rates = [0.5, 1, 1.25, 1.5, 2];
        const nextIndex = rates.indexOf(playbackRate) + 1;
        const newRate = rates[nextIndex % rates.length];
        if (videoRef.current) {
            videoRef.current.playbackRate = newRate;
            setPlaybackRate(newRate);
        }
    };

    const handleVolumeChange = (value: number[]) => {
        const newVolume = value[0];
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
            setIsFullScreen(true);
        } else {
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    };

    const toggleSection = (sectionId: string) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    return (
        <div className="flex flex-col md:flex-row bg-white min-h-screen p-4 gap-4">
            {/* Left Column: Video Player */}
            <div className="w-full md:w-2/3 flex flex-col">
                <Card className="overflow-hidden">
                    <div ref={containerRef} className="relative">
                        <video
                            ref={videoRef}
                            className="w-full aspect-video"
                            src="/solidity.mp4"
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                        />

                        {/* Custom Video Controls */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex flex-col">
                            {/* Progress Bar */}
                            <div className="flex items-center mb-2 px-2">
                                <span className="text-sm mr-2">{formatTime(currentTime)}</span>
                                <div className="flex-grow mx-2">
                                    <Slider
                                        value={[currentTime]}
                                        min={0}
                                        max={duration || 100}
                                        step={0.1}
                                        onValueChange={handleSeek}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <span className="text-sm ml-2">{formatTime(duration)}</span>
                            </div>

                            {/* Control Buttons */}
                            <div className="flex items-center justify-between px-2">
                                <div className="flex items-center space-x-4">
                                    <Button
                                        onClick={togglePlay}
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-white hover:text-blue-400 hover:bg-transparent"
                                    >
                                        {playing ? <Pause size={20} /> : <Play size={20} />}
                                    </Button>

                                    {/* Volume Control */}
                                    <div className="flex items-center space-x-2">
                                        <Volume2 size={18} />
                                        <div className="w-16">
                                            <Slider
                                                value={[volume]}
                                                min={0}
                                                max={1}
                                                step={0.1}
                                                onValueChange={handleVolumeChange}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    {/* Playback Speed Button */}
                                    <Button
                                        onClick={changePlaybackRate}
                                        variant="ghost"
                                        className="h-7 text-xs text-white hover:text-blue-400 hover:bg-transparent"
                                    >
                                        {playbackRate}x
                                    </Button>

                                    {/* Fullscreen Button */}
                                    <Button
                                        onClick={toggleFullScreen}
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-white hover:text-blue-400 hover:bg-transparent"
                                    >
                                        {isFullScreen ? <Minimize size={18} /> : <Maximize size={18} />}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Video Information */}
                <div className="mt-4">
                    <h1 className="text-2xl font-bold">Introduction to Solidity</h1>
                    <p className="text-gray-600 mt-1">Learn to build smart contracts on Ethereum and other EVM-compatible blockchains</p>
                </div>

                {/* Exercise Section */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Exercise: Create Your First Smart Contract</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-medium text-lg">Instructions:</h3>
                            <p className="mt-1">Create a simple token contract with basic functionality for minting and transferring tokens.</p>
                        </div>

                        <Card className="bg-muted">
                            <CardContent className="p-4">
                                <pre className="text-sm font-mono overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleToken {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    
    // TODO: Add a mapping for balances
    // TODO: Add events for Transfer and Mint
    // TODO: Add mint and transfer functions
}`}
                                </pre>
                            </CardContent>
                        </Card>

                        <div>
                            <h3 className="font-medium">Submit Your Answer:</h3>
                            <Textarea
                                className="w-full h-40 mt-2 font-mono text-sm"
                                placeholder="Complete the smart contract here..."
                            />
                            <Button className="mt-3">
                                Submit Answer
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Course Content */}
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
                <Card className="sticky top-4">
                    <CardHeader>
                        <CardTitle>Course Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Course Sections - Using Collapsible */}
                        <Collapsible open={openSections['solidity-basics']} onOpenChange={() => toggleSection('solidity-basics')}>
                            <CollapsibleTrigger className="flex w-full items-center justify-between text-left font-medium py-2 hover:bg-muted/50 rounded-md px-2 transition-colors">
                                <span>1. Solidity Basics</span>
                                {openSections['solidity-basics'] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <ul className="ml-6 mt-2 space-y-2">
                                    <li className="flex items-center text-blue-600 group cursor-pointer hover:bg-blue-50 rounded-md px-2 py-1 transition-colors">
                                        <Play size={16} className="mr-2 flex-shrink-0" />
                                        <span className="text-sm flex-grow">Introduction to Solidity</span>
                                        <span className="text-xs text-gray-500 ml-2">14:20</span>
                                    </li>
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Data Types and Variables</span>
                                        <span className="text-xs text-gray-500 ml-2">18:30</span>
                                    </li>
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Functions and Modifiers</span>
                                        <span className="text-xs text-gray-500 ml-2">16:15</span>
                                    </li>
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible open={openSections['smart-contracts']} onOpenChange={() => toggleSection('smart-contracts')}>
                            <CollapsibleTrigger className="flex w-full items-center justify-between text-left font-medium py-2 hover:bg-muted/50 rounded-md px-2 transition-colors">
                                <span>2. Smart Contract Development</span>
                                {openSections['smart-contracts'] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <ul className="ml-6 mt-2 space-y-2">
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">ERC-20 Token Standard</span>
                                        <span className="text-xs text-gray-500 ml-2">22:45</span>
                                    </li>
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">ERC-721 NFT Development</span>
                                        <span className="text-xs text-gray-500 ml-2">24:10</span>
                                    </li>
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Testing Smart Contracts</span>
                                        <span className="text-xs text-gray-500 ml-2">19:35</span>
                                    </li>
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible open={openSections['defi-development']} onOpenChange={() => toggleSection('defi-development')}>
                            <CollapsibleTrigger className="flex w-full items-center justify-between text-left font-medium py-2 hover:bg-muted/50 rounded-md px-2 transition-colors">
                                <span>3. DeFi Development</span>
                                {openSections['defi-development'] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <ul className="ml-6 mt-2 space-y-2">
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Building a DEX</span>
                                        <span className="text-xs text-gray-500 ml-2">28:15</span>
                                    </li>
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Yield Farming Contracts</span>
                                        <span className="text-xs text-gray-500 ml-2">26:40</span>
                                    </li>
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible open={openSections['security-best-practices']} onOpenChange={() => toggleSection('security-best-practices')}>
                            <CollapsibleTrigger className="flex w-full items-center justify-between text-left font-medium py-2 hover:bg-muted/50 rounded-md px-2 transition-colors">
                                <span>4. Security Best Practices</span>
                                {openSections['security-best-practices'] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <ul className="ml-6 mt-2 space-y-2">
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Common Attack Vectors</span>
                                        <span className="text-xs text-gray-500 ml-2">23:50</span>
                                    </li>
                                    <li className="flex items-center text-gray-600 group cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
                                        <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                                        <span className="text-sm flex-grow">Auditing Your Contracts</span>
                                        <span className="text-xs text-gray-500 ml-2">20:15</span>
                                    </li>
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>

                        {/* Progress */}
                        <div className="mt-6">
                            <div className="flex justify-between text-sm mb-2">
                                <span>Your progress</span>
                                <span>8%</span>
                            </div>
                            <Progress value={8} className="h-2" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}