import {Section} from "@/app/_Components/Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/_Components/contactCard";

export const Contact = ()=>{
    return(
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={'outline'}>Socials</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Let&#39;s get in touch</h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                <ContactCard
                    image={"/image/Me.png"}
                    mediumImage={"/image/icons/linkedin.png"}
                    name={"Linkedin/hanakhin"}
                    description={"my linkedin "}
                    url={"https://www.linkedin.com/in/hanakhin-nouni-massotte-b6360b30b/"}
                />
                <ContactCard
                    image={"/image/Me.png"}
                    name={"gmail/hanakhin"}
                    mediumImage={"/image/icons/gmail.png"}
                    description={"You have questions ? email me here"}
                    url={"mailto:hanakhin.nounimassotte@gmail.com"}
                />
            </div>
        </Section>
    )
}