import {Section} from "@/app/_Components/Section";
import {Badge} from "@/components/ui/badge";
import {ReactIcon} from "@/app/_Components/icons/ReactIcon";
import {MongodbIcon} from "@/app/_Components/icons/MongodbIcon";
import {Code} from "@/app/_Components/Code";
import {TailwindIcon} from "@/app/_Components/icons/TailwindIcon";
import {FigmaIcon} from "@/app/_Components/icons/FigmaIcon";

export const Skills = ()=>{
    return(
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={'outline'}>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">I love working
                with...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <ReactIcon
                        size={42}
                        className={"animate-spin"}
                        style={{animationDuration: "10s"}}
                    />

                    <h3 className="text-xl font-semibold tracking-tight">React.js</h3>
                    <p className="text-sm text-muted-foreground">
                        <Code>React.js</Code> is my main framework, I also use <Code>Next.js</Code> as a backend and
                        frontend framework.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <TailwindIcon
                        size={42}
                    />

                    <h3 className="text-xl font-semibold tracking-tight">Tailwindcss</h3>
                    <p className="text-sm text-muted-foreground">
                        <Code>Tailwindcss</Code> is my Go-to when i want to create beautiful applications rapidely.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <FigmaIcon
                        size={42}
                    />

                    <h3 className="text-xl font-semibold tracking-tight">Figma</h3>
                    <p className="text-sm text-muted-foreground">
                        <Code>Figma</Code> is my main design application, i use it for the conception part of my websites.
                    </p>
                </div>
            </div>
        </Section>
    )
}