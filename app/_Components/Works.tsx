

export const WORKS:WorkProps[]=[
    {
        image:"/image/wslogo.png",
        title:"Web&Style",
        role:"Lead-Dev",
        date:"2024",
        url:"https://webstyle.tech",
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
        image:"https://www.agence418.fr/agence-418-developpemen-web-perpignan-white.ico\n",
        title:"Agence 418",
        role:"Software developer",
        date:"2024-2025",
        url:"https://www.agence418.fr/",
        freelance: false
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