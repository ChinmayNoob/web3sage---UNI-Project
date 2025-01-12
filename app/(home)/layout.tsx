import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>

            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <SideBar />
            </div>
            <main className="flex-1 md:pl-56 pt-[80px] overflow-y-auto">
                {children}
            </main>
        </div>
    );
}