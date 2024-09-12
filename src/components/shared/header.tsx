import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: Readonly<HeaderProps>) {
    return (
        <header className="w-full h-28 bg-indigo-900 flex items-center justify-center mb-3"
            style={{
                backgroundImage: "radial-gradient(88% 100% at top, rgba(34, 34, 34, 0.5), rgba(0, 0, 0, 0))",
                boxShadow: "0 10px 32px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.4), 0 24px 108px rgba(0, 0, 0, 0.6)",
            }}>
            <Link href={'portfolio'}><IconChevronLeft
                size={50} /></Link>
            <h1 className="w-full text-center mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{title}</h1>
        </header>
    )
}