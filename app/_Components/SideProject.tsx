import {LucideIcon} from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string,
    url: string
}

export const SideProject = (props: SideProjectProps) => {
    return(
        <Link href={props.url} target={"_blank"} className={"inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"}>
            <span className={"bg-accent text-accent-foreground p-3 rounded"}>
                <props.Logo/>
            </span>
            <div>
                <p className={"text-lg font-mono"}>{props.title}</p>
                <p className={"text-sm text-muted-foreground"}>{props.description}</p>
            </div>
        </Link>
    )
};