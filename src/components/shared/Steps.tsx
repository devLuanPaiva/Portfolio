'use client'
import { StepsProps } from "@/data/interfaces"
import { useState } from "react";

export default function Steps(props: Readonly<StepsProps>) {
    const [currentStep, setCurrentStep] = useState(0)

    const changeStep = (stepIndex: number) => {
        setCurrentStep(stepIndex);
        props.changeNextStep(stepIndex > currentStep);
    }

    const renderStep = () => {
        return (
            <ul className="flex flex-col md:flex-row gap-4 md:gap-7">
                {props.labels.map((label, i) => {
                    return (
                        <button key={label} className="flex items-center gap-2 cursor-pointer" onClick={() => changeStep(i)}>
                            <span
                                className={`flex justify-center items-center w-9 h-9 p-1 rounded-full font-bold ${i === currentStep ? "bg-white text-black" : "text-zinc-500 bg-zinc-700"}`}>
                                {i + 1}
                            </span>
                            <h2 className={i === currentStep ? "text-white" : "text-zinc-700"}>
                                {label}
                            </h2>
                        </button>
                    )
                })}
            </ul>
        )
    }

    return (
        <section >
            {renderStep()}
            <section className="mt-5">{props.children?.[currentStep] ?? props.children}</section>
        </section>
    )
}
