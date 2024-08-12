"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient, LampDemo } from "@/components/ui";
import Link from "next/link";
export default function Landing() {
    return (
        <main className="w-full mx-auto rounded-md h-screen">
            <LampDemo>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Bem-vindo ao meu Portfólio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-4 mb-2 text-center text-lg text-slate-300 md:text-2xl"
                >
                    Aqui você encontrará uma coleção dos meus melhores projetos,
                    demonstrando minhas habilidades em desenvolvimento web. Explore e aproveite!
                </motion.p>
                <motion.div>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
                        <Link href='/portfolio'>Acessar</Link>
                    </HoverBorderGradient>
                </motion.div>
            </LampDemo>
        </main>
    )
}
