
import { IconLoader } from "@tabler/icons-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <IconLoader className="animate-spin text-red-500" size={48} />
    </div>
  );
}