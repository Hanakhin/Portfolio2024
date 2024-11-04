import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

export const Code = ({className,...props}: ComponentPropsWithoutRef<"span">)=>{
    return <span className={cn("bg-accent/20 border border-accent px-1 py-0.5 hover:bg-accent/50 cursor-default font-mono rounded text-primary inline-flex items-center gap-1 transition-colors",className)}{...props}/>
}