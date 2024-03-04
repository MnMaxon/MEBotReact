"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"

import {cn} from "@/lib/utils"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"

const examples = [
    {
        name: "Roles",
        href: "/roles",
    },
    {
        name: "Channels",
        href: "/channels",
    },
    {
        name: "Server",
        href: "/server",
    },
    {
        name: "User",
        href: "/user",
    },
    {
        name: "Permissions",
        href: "/permissions",
    },
    {
        name: "Log Out",
        href: "/logout",
    }
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function ExamplesNav({className, ...props}: ExamplesNavProps) {
    const pathname = usePathname()

    return (
        <div className="relative">
            <ScrollArea className="max-w-[600px] lg:max-w-none">
                <div className={cn("mb-4 flex items-center", className)} {...props}>
                    {examples.map((example) => (
                        <Link
                            href={example.href}
                            key={example.href}
                            className={cn(
                                "flex items-center px-4",
                                pathname?.startsWith(example.href)
                                    ? "font-bold text-primary"
                                    : "font-medium text-muted-foreground"
                            )}
                        >
                            {example.name}
                        </Link>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="invisible"/>
            </ScrollArea>
        </div>
    )
}

interface ExampleCodeLinkProps {
    pathname: string | null
}