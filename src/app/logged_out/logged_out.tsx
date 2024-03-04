import {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"

import React from "react";
import DiscordLogin from "@/app/logged_out/discord_login";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}
const testLog = () => {
    console.log("test");
    print()
};


export default function LoggedOutHome() {
    console.log('auth page loading')
    return (
        <>
            <div className="md:hidden">
            </div>
            <div
                className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900"/>
                    <div className="relative z-20 flex items-center text-2xl font-medium">
                        About
                    </div>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        Acme Inc
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg"> Planned Features (TODO):</p>
                            <p>Channel/Role Joining Webpage + Commands</p>
                            <p>Channel/Role Management Webpage + Commands</p>
                            <p>Channel/Role Request Webpage + Commands</p>
                            <p></p>
                            <footer className="text-sm">
                                Website made by Mason: <Link href="https://github.com/MnMaxon/">GitHub Link</Link><br/>
                                Made with <Link href="https://react.dev">React</Link>, <Link href="https://nextjs.org">next.js</Link>, website template from <Link href="https://ui.shadcn.com">shadcn-ui example</Link><br/>
                                TODO: Add proper links
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Log In with Discord:
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                There is not a lot to do without logging in
                            </p>
                        </div>

                        {/*<CookiesProvider defaultSetOptions={{path: '/'}}>*/}
                        {/*<DiscordLoginVerify/>*/}
                        <DiscordLogin/>
                        {/*</CookiesProvider>*/}
                        <p className="px-8 text-center text-sm text-muted-foreground"><br/><br/>
                            This website will use cookies to track your logged in session <br/><br/>
                            You will probably generate logs on the website
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
