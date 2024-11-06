

export const WORKS:WorkProps[]=[
    {
        image:"/image/wslogo.png",
        title:"Web&Style",
        role:"Lead-Dev",
        date:"2024 - Present",
        url:"https://webstyle.vercel.app/",
        freelance: false
    },
    {
        image:"https://hanakhin.github.io/PortfolioSerious/Logo/logo.png",
        title:"Personnal website v1",
        role:"Software developer",
        date:"2024",
        url:"https://hanakhin.github.io/PortfolioSerious/",
        freelance: false
    },
    {
        image:"https://www.mountainodes.com/img/logo.png",
        title:"Mountain nodes",
        role:"Software developer",
        date:"2022",
        url:"https://www.mountainodes.com/",
        freelance: true
    }


]

export type WorkProps = {
    image: string,
    title: string,
    role: string,
    date: string
    url: string
    freelance?: boolean
}