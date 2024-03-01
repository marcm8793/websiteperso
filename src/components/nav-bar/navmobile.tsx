"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { routes } from "./routes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "../ModeToggle";
import AIChatButton from "../ai/AIChatButton";

export function MobileNav({ children, onClick }: any) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <ViewVerticalIcon className="size-6" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7 flex justify-between">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Menu className="mr-2 size-4" aria-hidden="true" />
            <span className="font-bold">{"/"}</span>
            <span className="sr-only">Home</span>
          </Link>
          <div className="p-2 place-items-center flex justify-between space-x-1 gap-2">
            <AIChatButton />
            <ModeToggle />
          </div>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col pl-1 pr-7">
            {routes.map((route, key) => {
              const { Icon, href, title } = route;
              return (
                <Link href={href} key={title} onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="left-0 right-0">
                    <Icon />
                    {title}
                  </Button>
                  <Separator />
                </Link>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
