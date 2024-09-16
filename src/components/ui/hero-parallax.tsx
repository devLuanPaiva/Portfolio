"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroParallaxProps } from "@/data/interfaces";

export const HeroParallax = (props: Readonly<HeroParallaxProps>) => {
    const {products, subtitle, titleHero} = props
    const [isCarouselActive, setIsCarouselActive] = useState(false);
    const firstRow = products.slice(0, 3);
    const secondRow = products.slice(3, 6);
    const thirdRow = products.slice(6, 10);
    const allProducts = products
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 100]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 40]),
        springConfig
    );
    const [translateYValue, setTranslateYValue] = useState(translateY.get());

    useEffect(() => {
        const unsubscribe = translateY.onChange((value) => {
            setTranslateYValue(value);
        });

        return () => unsubscribe(); 
    }, [translateY]);

    useEffect(() => {
        if (translateYValue < 35) {
            setIsCarouselActive(true);
        } else {
            setIsCarouselActive(false);
        }
    }, [translateYValue]);
    const carrosselAnimation = {
        x: [0, -3000],
        transition: {
            repeat: Infinity,
            duration: 50,
            ease: "linear",
        },
    };

    
    return (
        <div
            ref={ref}
            className="z-0 flex flex-col [perspective:1000px] [transform-style:preserve-3d] overflow-hidden"
        >
            <Header titleHero={titleHero} subtitle={subtitle} />
            <motion.div
                style={isCarouselActive ? {
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                } : {
                    rotateX,
                    translateY,
                    opacity,
                }}
                className={`flex ${isCarouselActive ? 'flex-wrap' : 'flex-nowrap'}`}
            >
                {isCarouselActive ? (
                    <>
                        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20" >
                            {firstRow.map((product) => (
                                <ProductCard
                                    product={product}
                                    translate={translateX}
                                    key={product.title}
                                />
                            ))}
                        </motion.div>
                        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20" >
                            {secondRow.map((product) => (
                                <ProductCard
                                    product={product}
                                    translate={translateXReverse}
                                    key={product.title}
                                />
                            ))}
                        </motion.div>
                        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20" >
                            {thirdRow.map((product) => (
                                <ProductCard
                                    product={product}
                                    translate={translateX}
                                    key={product.title}
                                />
                            ))}
                        </motion.div>
                    </>
                ) : (
                    <motion.div className="flex space-x space-x-20 m-20 gap-4" animate={carrosselAnimation}>
                        {allProducts.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                )}

            </motion.div>
        </div>
    );
};

export const Header = ({titleHero, subtitle}: Partial<HeroParallaxProps>) => {
    return (
        <div className=" mx-auto py-20 md:py-40 px-4 w-full">
            <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
                Desenvolvimento <br /> {titleHero}
            </h2>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                {subtitle}
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] flex-shrink-0 relative"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl"
            >
                <Image
                    src={product.thumbnail}
                    height="400"
                    width="600"
                    className="object-contain object-center absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
