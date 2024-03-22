import {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button"
import React from "react";
export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}
const testLog = () => {
    console.log("test");
    print()
};

export default function AuthenticationPageExample() {
    console.log('auth page loading')
    return (
        <>
            <div className="md:hidden">
            </div>
            <div
                className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900"/>
                    {/* Example Text on left side*/}
                    {/*<div className="relative z-20 flex items-center text-lg font-medium">*/}
                    {/*    Acme Inc*/}
                    {/*</div>*/}
                    {/*<div className="relative z-20 mt-auto">*/}
                    {/*    <blockquote className="space-y-2">*/}
                    {/*        <p className="text-lg">*/}
                    {/*            This is bottom text;*/}
                    {/*        </p>*/}
                    {/*        <footer className="text-sm">Small footer</footer>*/}
                    {/*    </blockquote>*/}
                    {/*</div>*/}
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Logged in!
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                This page is pretty useless, click on the tabs above
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
