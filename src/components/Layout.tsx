import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="w-full h-screen flex flex-col gap-4">
            <Navbar />
            <main className="container mx-auto px-4 md:px-32 lg:px-40">
                {children}
            </main>
        </div>
    );
};
export default Layout;
