"use client"
import ThemeComponent from "@/mui/theme/Provider"
import { useAppSelector } from "@/redux/hook"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const setting = useAppSelector(state => state.UIReducer.value)
    return (
        <html lang="en">
            <body >
                <ThemeComponent settings={setting} >

                    {children}
                </ThemeComponent>

            </body>
        </html>
    )
}
