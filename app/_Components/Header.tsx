"use client"

import {Section} from "@/app/_Components/Section";
import {GithubIcon} from "@/app/_Components/icons/GithubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {LinkedInIcon} from "@/app/_Components/icons/LinkedInIcon";
import Image from "next/image";
import {useEffect, useState} from "react";

export const Header = ()=>{

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return(
        <header className={cn(`sticky top-0 py-4 ${scrollPosition > 50 ? "bg-primary-foreground/50 transition-all" : ""}`)}>
            <Section className="flex items-center">
                <Image src={"/image/iconv2.svg"} alt={"my logo"} width={100} height={100} />
                <div className={"flex flex-1 justify-end"}>
                    <ul className={"flex items-center gap-4"}>
                        <Link href={"https://github.com/Hanakhin"} target={"_blank"} className={cn(buttonVariants({variant: "outline"}) ,"size-8 p-2")} >
                            <GithubIcon size={12} className={"text-foreground"}/>
                        </Link>

                        <Link href={"https://www.linkedin.com/in/hanakhin-nouni-massotte-b6360b30b/"} target={"_blank"} className={cn(buttonVariants({variant: "outline"}) ,"size-8 p-2")} >
                            <LinkedInIcon size={12} className={"text-foreground"}/>
                        </Link>
                    </ul>
                </div>
            </Section>
        </header>
    );
}