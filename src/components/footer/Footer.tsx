'use client'
import Link from "next/link";
import TitleSection from "../shared/TitleSection";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMailFilled } from '@tabler/icons-react'
import React, { useState } from "react";

export default function Footer() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isMessageFocused, setIsMessageFocused] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const formattedMessage = `Nome: ${name}\n${message}`
        const encodedMessage = encodeURIComponent(formattedMessage)
        const phoneNumber = '5584996322535'
        const whatsappUrl = `https:////api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

        window.open(whatsappUrl, '_blank')
    }

    return (
        <footer
            className="relative min-w-full -mb-3 p-4 -mx-3 flex flex-col bg-indigo-900 rounded-t-xl z-10"
            style={{
                backgroundImage: "radial-gradient(88% 100% at top, rgba(34, 34, 34, 0.5), rgba(0, 0, 0, 0))",
                boxShadow: "0 10px 32px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.4), 0 24px 108px rgba(0, 0, 0, 0.6)",
            }}
        >
            <TitleSection>Contatos</TitleSection>
            <section className="flex mt-2 w-full gap-4 justify-around">
                <ul className="flex flex-col gap-1">
                    <li>
                        <Link
                            href="mailto:devluanpaiva@gmail.com"
                            target="_blank"
                            className="flex gap-1 p-3 rounded text-white font-semibold text-base md:text-lg py-2 px-4 hover:bg-gradient-to-tr hover:from-indigo-600"
                        >
                            <IconMailFilled /> devluanpaiva@gmail.com
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://api.whatsapp.com/send?phone=5584996322535&text=Ol%C3%A1,%20Luan"}
                            target="_blank"
                            className="flex gap-1 p-3 rounded text-white font-semibold text-base md:text-lg py-2 px-4 hover:bg-gradient-to-tr hover:from-indigo-600"
                        >
                            <IconBrandWhatsapp />(84) 99632-2535
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://www.linkedin.com/in/devLuanpaiva/"}
                            target="_blank"
                            className="flex gap-1 p-3 rounded text-white font-semibold text-base md:text-lg py-2 px-4 hover:bg-gradient-to-tr hover:from-indigo-600"
                        >
                            <IconBrandLinkedin /> in/devLuanpaiva
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/devLuanPaiva"} target="_blank" className="flex gap-1 p-3 rounded text-white font-semibold text-base md:text-lg py-2 px-4 hover:bg-gradient-to-tr hover:from-indigo-600">
                            <IconBrandGithub /> devLuanPaiva
                        </Link>
                    </li>
                </ul>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
                    <div className={`relative transition-all duration-300`}>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => setIsNameFocused(true)}
                            onBlur={() => setIsNameFocused(false)}
                            className="peer w-full bg-gray-800 text-white border-b-2 rounded border-indigo-600 focus:outline-none focus:border-white px-3 py-2 focus:py-3"
                        />
                        <label
                            htmlFor="name"
                            className={`absolute left-3 top-2 text-gray-400 transition-all duration-300 
                            ${isNameFocused || name ? 'top-[-0.1rem] text-sm text-indigo-600' : 'top-2'} 
                            ${name ? 'opacity-0' : ''}`}
                        >
                            Nome
                        </label>
                    </div>
                    <div className={`relative transition-all duration-300 ${isMessageFocused ? 'h-32' : 'h-20'}`}>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onFocus={() => setIsMessageFocused(true)}
                            onBlur={() => setIsMessageFocused(false)}
                            className="peer w-full bg-gray-800 text-white border-b-2 rounded border-indigo-600 focus:outline-none focus:border-white px-3 py-2 h-full"
                        />
                        <label
                            htmlFor="message"
                            className={`absolute left-3 top-2 text-gray-400 transition-all duration-300 
                            ${isMessageFocused || message ? 'top-[-0.1rem] text-sm text-indigo-600' : 'top-2'} 
                            ${message ? 'opacity-0' : ''}`}
                        >
                            Mensagem
                        </label>
                    </div>
                    <button type="submit" className="self-start bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700">
                        Enviar
                    </button>
                </form>
            </section>
        </footer>
    )
}
