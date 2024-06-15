import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full h-[300px] lg:h-[150px]  flex justify-center bg-black text-white">
            <div className="w-full max-w-[1120px] flex flex-col lg:flex-row justify-between items-center px-[10px] py-[20px] lg:py-0 gap-[50px] lg:gap-0">
                <FooterLegal />
                <Footerinfo />
            </div>
        </footer>
    )
}

const FooterLegal = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-2 items-center">
            <p>&copy; 2024 PrimePrompts Labs</p>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
        </div>
    )
}

const Footerinfo = () => {
    return (
        <div className="flex flex-col gap-5">
            <FooterLogo />
            <FooterSocials />
        </div>
    )
}

const FooterLogo = () => {
    return (
        <div className="flex items-center gap-[14px]">
            <Image src="/logo.svg" alt="Logo" width={100} height={40} className="w-[75px] md:w-[100px]" />
            <h3 className="text-[length:var(--subheadline-font-size)] font-bold">PrimePrompts</h3>
        </div>
    )
}

const socials = [
    {
        href: "https://twitter.com",
        src: "/socials/twitter.svg",
        alt: "Twitter"
    },
    {
        href: "https://instagram.com",
        src: "/socials/instagram.svg",
        alt: "Instagram"
    },
    {
        href: "https://linkedin.com",
        src: "/socials/linkedin.svg",
        alt: "LinkedIn"
    },
    {
        href: "https://facebook.com",
        src: "/socials/facebook.svg",
        alt: "Facebook"
    },
    {
        href: "https://youtube.com",
        src: "/socials/youtube.svg",
        alt: "YouTube"
    }
]

const FooterSocials = () => {
    return (
        <div className="flex justify-between">
            {socials.map((social, index) => (
                <Link href={social.href} key={index}>
                    <Image src={social.src} alt={social.alt} width={24} height={24} />
                </Link>
            ))}
        </div>
    )
}

export default Footer;