'use client';
import WrappedProjectPage from "@/components/projects/WrappedProjectPage";
import LoadingComponent from "@/components/shared/LoadingComponent";
import { Suspense } from "react";

export default function Project() {
    return (
        <Suspense fallback={<LoadingComponent />}>
            <WrappedProjectPage />
        </Suspense >
    );
}
