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
import AuthenticationPageExample from "@/app/page_auth_example"

export default function IndexPage() {
    console.log("Launching page (Index)")
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
                    {/*<CookiesProvider defaultSetOptions={{path: '/'}}>*/}
                        <AuthenticationPageExample/>
                    {/*</CookiesProvider>*/}
                </div>
            </section>
        </div>
    )
}