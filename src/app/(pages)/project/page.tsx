'use client';
import WrappedProjectPage from "@/components/projects/WrappedProjectPage";
import LoadingComponent from "@/components/shared/LoadingComponent";
import queryClient from "@/data/contexts/queryClient";
import { Suspense } from "react";
import { QueryClientProvider } from "react-query";

export default function Project() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingComponent />}>
                <WrappedProjectPage />
            </Suspense >
        </QueryClientProvider>
    );
}
