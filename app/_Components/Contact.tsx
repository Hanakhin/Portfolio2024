"use client"

import {Section} from "@/app/_Components/Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/_Components/contactCard";
import {ArrowUp} from "lucide-react";

export const Contact = ()=>{

    const handleScrollTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={'outline'}>Socials</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Let&#39;s get in
                touch</h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                <ContactCard
                    image={"/image/Me.png"}
                    mediumImage={"/image/icons/linkedin.png"}
                    name={"Linkedin/hanakhin"}
                    description={"Contact me"}
                    url={"https://www.linkedin.com/in/hanakhin-nouni-massotte-b6360b30b/"}
                />
                <ContactCard
                    image={"/image/Me.png"}
                    name={"gmail/hanakhin"}
                    mediumImage={"/image/icons/gmail.png"}
                    description={"Any questions ?"}
                    url={"mailto:hanakhin.nounimassotte@gmail.com"}
                />
            </div>

            <div className={
                "bg-primary-foreground/50 p-1 rounded-full w-max justify-center self-center flex cursor-pointer"
            }
                 onClick={handleScrollTop}
            >
                <ArrowUp className={"hover:-translate-y-0.5 transition-all"} />
            </div>

        </Section>
    )
}