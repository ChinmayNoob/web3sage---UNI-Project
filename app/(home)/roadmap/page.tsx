'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Award, BookOpen, Code, Sparkles } from "lucide-react";

export default function Web3RoadmapPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">90-Day Web3 Developer Roadmap</h1>
          <p className="text-muted-foreground">Your path to blockchain mastery, one day at a time</p>
        </div>
        
        <Tabs defaultValue="beginner" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="beginner" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Beginner</span>
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Intermediate</span>
              </TabsTrigger>
              <TabsTrigger value="expert" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Expert</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Beginner Content */}
          <TabsContent value="beginner">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Beginner Path (Days 1-30)</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Week 1 */}
                <Card>
                  <CardHeader className="bg-blue-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">1</span>
                      Week 1: Web3 Foundations
                    </CardTitle>
                    <CardDescription>Days 1-7</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "Blockchain fundamentals & history",
                        "Cryptography basics (public/private keys)",
                        "Understanding decentralization",
                        "Setting up a crypto wallet",
                        "Exploring block explorers",
                        "Web2 vs Web3 differences",
                        "Your first blockchain interaction"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 2 */}
                <Card>
                  <CardHeader className="bg-blue-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">2</span>
                      Week 2: Ethereum Essentials
                    </CardTitle>
                    <CardDescription>Days 8-14</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "Ethereum network architecture",
                        "Gas fees & transaction models",
                        "Introduction to Solidity",
                        "Ethereum Virtual Machine (EVM)",
                        "Account types & transactions",
                        "Setting up development environment",
                        "Create a simple token tracker"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 3 */}
                <Card>
                  <CardHeader className="bg-blue-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">3</span>
                      Week 3: Smart Contract Basics
                    </CardTitle>
                    <CardDescription>Days 15-21</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "Solidity syntax & data types",
                        "Contract structure & lifecycle",
                        "Functions & modifiers",
                        "Events & logging",
                        "Testing smart contracts",
                        "Hardhat development framework",
                        "Build a simple voting contract"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 4 */}
                <Card className="md:col-span-2 lg:col-span-3">
                  <CardHeader className="bg-blue-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">4</span>
                      Week 4: First dApp
                    </CardTitle>
                    <CardDescription>Days 22-30</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Frontend Basics</h3>
                        <ul className="space-y-3">
                          {[
                            "Introduction to Web3.js/Ethers.js",
                            "Connecting to Ethereum networks",
                            "Metamask integration",
                            "Reading blockchain data",
                            "Handling wallet connections"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Backend Integration</h3>
                        <ul className="space-y-3">
                          {[
                            "Setting up a React dApp",
                            "Contract ABIs & interfaces",
                            "Building transaction forms",
                            "Error handling with Web3",
                            "Working with testnet faucets"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Projects</h3>
                        <ul className="space-y-3">
                          {[
                            "Simple token balance checker",
                            "Wallet connection interface",
                            "Basic NFT viewer",
                            "Token transfer interface",
                            "Beginner phase review & reflection"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Intermediate Content */}
          <TabsContent value="intermediate">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-indigo-500" />
                <h2 className="text-xl font-semibold">Intermediate Path (Days 31-60)</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Week 5 */}
                <Card>
                  <CardHeader className="bg-indigo-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">5</span>
                      Week 5: Advanced Smart Contracts
                    </CardTitle>
                    <CardDescription>Days 31-37</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "Contract inheritance & interfaces",
                        "Optimizing gas costs",
                        "Security best practices",
                        "Oracle integration (Chainlink)",
                        "Advanced Solidity patterns",
                        "Token standards (ERC20, ERC721)",
                        "Build a fungible token contract"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 6 */}
                <Card>
                  <CardHeader className="bg-indigo-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">6</span>
                      Week 6: NFTs & Tokenization
                    </CardTitle>
                    <CardDescription>Days 38-44</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "NFT fundamentals & standards",
                        "Creating collectible contracts",
                        "Metadata & IPFS integration",
                        "NFT marketplaces architecture",
                        "Royalties & revenue streams",
                        "On-chain vs off-chain metadata",
                        "Build an NFT collection"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 7 */}
                <Card>
                  <CardHeader className="bg-indigo-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">7</span>
                      Week 7: DeFi Foundations
                    </CardTitle>
                    <CardDescription>Days 45-51</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "DeFi ecosystem overview",
                        "DEX architecture & AMMs",
                        "Lending protocols & liquidations",
                        "Yield farming mechanisms",
                        "Stablecoin implementations",
                        "Flash loans & arbitrage",
                        "Build a simple swap interface"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 8 */}
                <Card className="md:col-span-2 lg:col-span-3">
                  <CardHeader className="bg-indigo-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">8</span>
                      Week 8: dApp Architecture
                    </CardTitle>
                    <CardDescription>Days 52-60</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Frontend Frameworks</h3>
                        <ul className="space-y-3">
                          {[
                            "React with Web3 hooks",
                            "Ethers.js advanced patterns",
                            "State management for dApps",
                            "Real-time blockchain updates",
                            "Wallet connection patterns"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Infrastructure</h3>
                        <ul className="space-y-3">
                          {[
                            "IPFS & decentralized storage",
                            "The Graph for blockchain data",
                            "Subgraphs & indexing",
                            "Layer 2 solutions & rollups",
                            "ENS integration & resolution"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Projects</h3>
                        <ul className="space-y-3">
                          {[
                            "NFT marketplace frontend",
                            "DeFi dashboard with data fetching",
                            "Web3 social profile integration",
                            "Multi-chain wallet interface",
                            "Intermediate phase review & reflection"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Expert Content */}
          <TabsContent value="expert">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                <h2 className="text-xl font-semibold">Expert Path (Days 61-90)</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Week 9 */}
                <Card>
                  <CardHeader className="bg-purple-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">9</span>
                      Week 9: Smart Contract Security
                    </CardTitle>
                    <CardDescription>Days 61-67</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "Common security vulnerabilities",
                        "Auditing tools & techniques",
                        "Formal verification methods",
                        "Test coverage & fuzzing",
                        "EVM deep dive & bytecode",
                        "Security frameworks & libraries",
                        "Conduct a security audit"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 10 */}
                <Card>
                  <CardHeader className="bg-purple-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">10</span>
                      Week 10: Advanced DeFi
                    </CardTitle>
                    <CardDescription>Days 68-74</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "Building automated strategies",
                        "MEV & front-running protection",
                        "Cross-chain bridges & solutions",
                        "Protocol governance models",
                        "DeFi primitives & legos",
                        "Zero-knowledge proofs",
                        "Build a yield aggregator"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 11 */}
                <Card>
                  <CardHeader className="bg-purple-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">11</span>
                      Week 11: DAOs & Governance
                    </CardTitle>
                    <CardDescription>Days 75-81</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {[
                        "DAO architecture & models",
                        "On-chain governance systems",
                        "Tokenomics & incentive design",
                        "Treasury management",
                        "Decentralized identity",
                        "Multisig wallet implementation",
                        "Build a DAO voting system"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 12-13 */}
                <Card className="md:col-span-2 lg:col-span-3">
                  <CardHeader className="bg-purple-50 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">12-13</span>
                      Weeks 12-13: Capstone Project
                    </CardTitle>
                    <CardDescription>Days 82-90</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Planning Phase</h3>
                        <ul className="space-y-3">
                          {[
                            "Web3 project architecture",
                            "Smart contract system design",
                            "Tokenomics & incentive planning",
                            "Security considerations",
                            "UX/UI for blockchain applications"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Implementation</h3>
                        <ul className="space-y-3">
                          {[
                            "Smart contract development",
                            "Web3 frontend integration",
                            "Testing & security auditing",
                            "Subgraph implementation",
                            "Multi-chain compatibility"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Launch & Review</h3>
                        <ul className="space-y-3">
                          {[
                            "Testnet deployment",
                            "Community documentation",
                            "Mainnet preparation",
                            "Post-deployment monitoring",
                            "Final project review & reflection"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 mx-auto max-w-lg text-center rounded-lg border bg-slate-50 p-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="h-5 w-5 text-slate-700" />
            <h3 className="text-lg font-medium">Estimated Daily Commitment</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800">2-3</div>
              <div className="text-sm text-slate-600">Hours/day (Beginner)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">3-4</div>
              <div className="text-sm text-slate-600">Hours/day (Intermediate)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">4-5</div>
              <div className="text-sm text-slate-600">Hours/day (Expert)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}