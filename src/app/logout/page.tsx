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
import {redirect} from "next/navigation";
import React from "react";

export default async function IndexPage() {
    console.log("Launching page (Logout)")
    //TODO Delete from api (post request or something) <- This doesn't need to be a screen, reloading the page should redirect to logout
    return (
        <></>
    )
}

