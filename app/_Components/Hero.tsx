import {Section} from "@/app/_Components/Section";
import Image from "next/image";
import {ReactIcon} from "@/app/_Components/icons/ReactIcon";
import {FigmaIcon} from "@/app/_Components/icons/FigmaIcon";
import {NextIcon} from "@/app/_Components/icons/NextIcon";
import Link from "next/link";
import {Code} from "@/app/_Components/Code";
import {Download} from "lucide-react";

const Cv = '/ressources/Nouni-MassotteHanakhin-cv.pdf'

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-center gap-4 ">
            <div className="flex-[3] flex flex-col gap-4 ">
                <h2 className={"font-anek text-4xl"}>Hanakhin nouni-massotte</h2>
                <h3 className={"text-xl font-anek"}>Student in web Development/design</h3>
                <p className={"leading-6"}>I love to code using <Code><ReactIcon size={16} className={"inline"}/> React.js</Code>,
                    particularly with <Code><NextIcon size={16} className={"inline"}/>Next.js</Code>
                    I also have knowledge in <Code> <FigmaIcon size={16} className={"inline"}/>Figma</Code> <br/>
                    I am Currently open for work !
                </p>

            </div>
            <div className={"flex-2 max-md:m-auto flex flex-col justify-center items-center gap-2 "}>
                <Image
                    src={"/image/Me.png"}
                    alt={"Hero image"}
                    width={300}
                    height={300}
                    className={"rounded-full h-auto max-w-sm max-md:w-56"}
                />
                <Link href={Cv} target={'_blank'} rel="noopener noreferrer"><Code className={"p-1 inline-flex items-center gap-2 cursor-pointer"}> Get my cv <Download size={18}/> </Code></Link>
            </div>
        </Section>
    );
};