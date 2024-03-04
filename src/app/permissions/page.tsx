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
    console.log("Launching page Roles")
    return (
        <div className="container relative">
        </div>
    )
}

