import {Header} from "@/app/_Components/Header";
import {Hero} from "@/app/_Components/Hero";
import {Spacing} from "@/app/_Components/Spacing";
import {Status} from "@/app/_Components/Status";
import {Skills} from "@/app/_Components/Skills";
import {Contact} from "@/app/_Components/Contact";
import {Footer} from "@/app/_Components/Footer";


export default function Home() {
  return (
    <main>
        <Header/>
        <Spacing size={"md"}/>
        <Hero/>
        <Spacing size={"md"}/>
        <Status/>
        <Spacing size={"md"}/>
        <Skills/>
        <Spacing size={"md"}/>
        <Contact/>
        <Spacing size={"md"}/>
        <Footer/>
    </main>
  );
}
