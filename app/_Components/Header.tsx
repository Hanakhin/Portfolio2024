import {Section} from "@/app/_Components/Section";
import {GithubIcon} from "@/app/_Components/icons/GithubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {LinkedInIcon} from "@/app/_Components/icons/LinkedInIcon";

export const Header = ()=>{
    return(
        <header className={"sticky top-0 py-4"}>
            <Section className="flex items-baseline">
                <h1 className={"text-lg font-bold text-primary"}>Hanakhin.com</h1>
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