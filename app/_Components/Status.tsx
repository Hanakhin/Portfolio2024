import {Section} from "@/app/_Components/Section";
import {Card} from "@/components/ui/card";
import {Gamepad2, Fish, Sun} from "lucide-react";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {SideProject, SideProjectProps} from "@/app/_Components/SideProject";
import {WorkProps, WORKS} from "@/app/_Components/Works";
import {ContactCard} from "@/app/_Components/contactCard";

export const Status = () =>{
    return(
        <Section className={"flex max-md:flex-col items-start gap-4"}>
            <div className={"flex-[3] w-full flex-col "}>
                <Card className="flex flex-col gap-2 p-4 w-full">
                    <p className={"text-muted-foreground text-lg"}>Side,fun projects</p>
                    <div className={"flex flex-col gap-4"}>
                        {SIDE_PROJECTS.map((project,index)=>(
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>

                </Card>
            </div>
            <div className={'flex-[2] flex flex-col gap-4 w-full'}>
                <Card className={"p-4 flex-1"}>
                    <p className={"text-muted-foreground text-lg"}>Works</p>
                    <div className={"flex flex-col gap-4"}>
                        {WORKS.map((work, index)=>(
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className={"p-4 gap-2 flex flex-col "}>
                    <p className={"text-muted-foreground text-lg"}>Contact me</p>
                    <ContactCard
                        image={"/image/Me.jpeg"}
                        mediumImage={"/image/icons/linkedin.png"}
                        name={"Linkedin/hanakhin"}
                        description={"my linkedin"}
                        url={"https://www.linkedin.com/in/hanakhin"}
                    />
                    <ContactCard
                        image={"/image/Me.jpeg"}
                        name={"Gmail/hanakhin"}
                        mediumImage={"/image/icons/gmail.png"}
                        description={"my Gmail"}
                        url={"mailto:hanakhin.nounimassotte@gmail.com"}
                    />
                </Card>
            </div>
        </Section>
    )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Gamepad2,
        title: "GameZone",
        description: "This project is a videoGame shop made with Next/Mongodb/typescript.",
        url: "https://github.com/Hanakhin/ProjectFinal"
    },
    {
        Logo: Fish,
        title: "Fishing3000",
        description: "This is a fullStack app made in nextjs - Springboot java , its a fishing shop/events planner",
        url:"https://github.com/Hanakhin/next-java"
    },
    {
        Logo: Sun,
        title: "Transat reservation app",
        description: "This project was made in the context of a symfony course. It's fully made in symfony.",
        url:"https://github.com/Hanakhin/TransatAppSymfoMongo"

    }
]

const Work = (props: WorkProps) => {
    return(
        <Link href={props.url} target={"_blank"} className={"inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"}>
                <img
                    src={props.image}
                    alt={props.title}
                    className={"w-10 h-10 object-contain rounded-md"}
                />
            <div className={"mr-auto"}>
                <div className={"flex items-center gap-2"}>
                    <p className={"text-lg font-mono"}>{props.title}</p>
                    {props.freelance && <Badge variant={"outline"}>mission</Badge> }
                </div>
                <p className={"text-sm text-muted-foreground"}>{props.role}</p>
            </div>
            <div className={"ml-auto"}>
                <p className={"text-xs text-end text-muted-foreground"}>{props.date}</p>
            </div>
        </Link>
    )
};