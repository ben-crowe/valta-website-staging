"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const services = [
  {
    title: "Multifamily Properties",
    href: "/services/multifamily",
    description: "Comprehensive valuations for apartment buildings and residential complexes.",
  },
  {
    title: "Self-Storage Facilities",
    href: "/services/self-storage",
    description: "Specialized appraisals for self-storage and mini-storage properties.",
  },
  {
    title: "Commercial Properties",
    href: "/services/commercial",
    description: "Professional valuations for office, retail, and industrial properties.",
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span className="hidden font-bold sm:inline-block">Valta Property Valuations</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>News</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <span className="font-bold">Valta Property Valuations</span>
                </Link>
              </SheetTitle>
              <SheetDescription>Commercial Real Estate Appraisal Services</SheetDescription>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-3 pt-6">
                  <h4 className="font-medium">Services</h4>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/news" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                  News
                </Link>
                <Link href="/contact" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="font-bold">Valta</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button asChild size="sm">
              <Link href="/request-appraisal">Request Appraisal</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
