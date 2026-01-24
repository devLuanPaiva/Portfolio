import { LoaderFive } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderFive text="Carregando..." />
    </div>
  );
}