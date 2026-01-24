
import { Header } from "@/components/template/Header";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
