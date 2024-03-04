'use server'

import Image from "next/image"
import Link from "next/link"
//import { ArrowRightIcon } from "@radix-ui/react-icons"

import {siteConfig} from "@/config/site"
import {cn} from "@/lib/utils"
import {ExamplesNav} from "@/components/examples-nav"
import {Icons} from "@/components/icons"
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header"
import {buttonVariants} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import LoggedOutHome from "@/app/logged_out/logged_out";
import {cookies} from "next/headers";

const SESSION_ID = 'sessionId'

export default async function IndexPage() {
    console.log("Launching page (Logged Out)")
    return (
        <div className="container relative">

            <PageHeader className="pb-8">
                <Link
                    href="/docs/changelog"
                    className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
                >
                    <Separator className="mx-2 h-4" orientation="vertical"/>{" "}
                    <span className="sm:hidden">Style, a new CLI and more.</span>
                    {/*<ArrowRightIcon className="ml-1 h-4 w-4" />*/}
                </Link>
                <PageHeaderHeading>Meme Elitist Discord </PageHeaderHeading>
                <PageHeaderDescription>
                    /meme - run commands in discord - Or use this website
                </PageHeaderDescription>
                <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={siteConfig.links.github}
                        className={cn(buttonVariants({variant: "outline"}))}
                    >
                        <Icons.gitHub className="mr-2 h-4 w-4"/>
                        GitHub
                    </Link>
                </div>
            </PageHeader>
            <ExamplesNav className="[&>a:first-child]:text-primary"/>
            <section
                className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
                <Image
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="hidden dark:block"
                />
            </section>
            <section className="hidden md:block">
                <div className="overflow-hidden rounded-lg border bg-background shadow">
                    <LoggedOutHome/>
                </div>
            </section>
        </div>
    )
}

