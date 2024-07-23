

"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" hidden md:flex md:space-x-2 ">
        <NavigationMenuItem className="space-x-6 justify-between"> 
        <NavigationMenuLink> <Link href="/" > Emotions </Link></NavigationMenuLink>
        <NavigationMenuLink><Link href="./" >Manifestation</Link></NavigationMenuLink>
        <NavigationMenuLink><Link href="/" >Self awareness test</Link></NavigationMenuLink>
        <NavigationMenuLink><Link href="/" >Work with Us</Link></NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

