import { ReactNode } from "react"

export const MainTitle = ({children, className}: {children: ReactNode, className?: string}) => {
    return <h1 className={`xl:text-[50px] md:text-[48px] text-[32px] font-bold uppercase ${className}`}>{children}</h1>
}