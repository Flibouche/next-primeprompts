import Image from "next/image"

const Main = () => {
    return (
        <main className="flex justify-center flex-1">
            <div className="w-full max-w-[1120px] flex flex-col items-center justify-around gap-[30px] px-[10px] py-[20px]">
                <MainHero />
                <MainFeatures />
            </div>
        </main>
    )
}

const MainHero = () => {
    return (
        <div className="flex flex-col gap-[24px] items-center justify-center">
            <h1 className="text-[length:var(--headline-font-size)] font-bold text-center">
                Organisez vos prompts IA <br /> <span className="md:block hidden">rapidement, efficacement.</span>
            </h1>
            <p className="text-[length:var(--subheadline-font-size)] text-center md:block hidden">
                Une application simple pour gérer et retrouver <br />
                facilement vos prompts IA.
            </p>
            <p className="text-[length:var(--subheadline-font-size)] md:hidden text-center">Gérez et retrouvez <br /> facilement <br /> vos prompts IA.</p>
            <button className="py-[10px] px-[15px] text-[length:var(--body-font-size)] text-[color:rgb(var(--secondary-color))] bg-[rgb(var(--blue-color))] rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[rgba(var(--blue-color),0.8)]">Essayer PrimePrompts</button>
        </div>
    )
}

const features = [
    {
        src: "/add.svg",
        alt: "Add",
        title: "Ajout de Prompts",
        description: "Ajoutez de nouveaux prompts à votre <br /> collection en quelques clics.",
        bgColor: "rgb(var(--red-color))",
    },
    {
        src: "/sort.svg",
        alt: "Sort",
        title: "Classer par catégorie",
        description: "Organisez les prompts en différentes <br /> catégories pour une gestion facile.",
        bgColor: "rgb(var(--yellow-color))",
    },
    {
        src: "/manage.svg",
        alt: "Manage",
        title: "Gérer les Prompts",
        description: "Recherchez des prompts spécifiques, <br /> modifiez ou supprimez-les.",
        bgColor: "rgb(var(--green-color))",
    },
]

const MainFeatures = () => {
    return (
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[16px]">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col p-[20px] gap-[20px] rounded-[10px] text-[rgb(var(--secondary-color))]" style={{ backgroundColor: feature.bgColor }}>
                    <Image src={feature.src} alt={feature.alt} width={50} height={50} />
                    <h3 className="text-[length:var(--subheadline-font-size)] font-bold">{feature.title}</h3>
                    <p className="text-[length:var(--body-font-size)]" dangerouslySetInnerHTML={{__html: feature.description}}></p>
                </div>
            ))}
        </div>
    )
}

export default Main;