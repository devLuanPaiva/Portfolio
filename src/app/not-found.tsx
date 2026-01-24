"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";


export default function NotFoundPage() {
  return (
    <div className="flex flex-col max-w-screen relative" id="home-page">
      <Suspense fallback={<Loading />}>
 
        <main id="main-content" role="main" aria-label="Conteúdo principal">
          <div className="mx-auto w-11/12 max-w-7xl">
            <div className="w-full h-screen flex flex-col sm:flex-row items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-10 sm:mb-0 sm:mr-12"
              >
                <Image
                  height={400}
                  width={400}
                  src={`/logo.png`}
                  alt="Logo JUSRN"
                  className="opacity-90"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center sm:text-left max-w-xl"
              >
                <h1 className="text-red-500 text-6xl sm:text-7xl mb-4">
                  404
                </h1>
                <h2 className=" text-3xl sm:text-4xl text-red-500 mb-4 font-bold">
                  Página não encontrada{" "}
                  <span className="">&#58;&#40;</span>
                </h2>
                <p className="text-neutral-250 text-lg mb-8">
                  A página que você tentou acessar não existe. Volte para a
                  página inicial e continue navegando em nossos projetos.
                </p>

                <Link href={"/"} className="w-full">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={` px-6 sm:px-8 py-2 sm:py-3 rounded-full uppercase font-maax-rounded-bold text-xs sm:text-sm  text-center bg-red-500 text-white hover:bg-red-800 cursor-pointer w-fit sm:w-auto inline-block `}
                  >
                    Voltar para o início
                  </motion.p>
                </Link>
              </motion.div>
            </div>
          </div>
        </main>
      </Suspense>
    </div>
  );
}