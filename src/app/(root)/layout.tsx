import { currentUser } from "@/actions/user";
import Header from "@/components/root/header";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUser()
    return (
        <>
            <Header user={user} />
            <main className="max-h[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden">
                <div className="flex h-full w-full">
                    <div className="w-12 border-black bg-black">

                    </div>
                    <div className="flex-1 bg-black">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}

export default RootLayout;