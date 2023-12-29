import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

const GeneralLayout = ({ children }: Props) => {
    return (
        <div className="flex bg-slate-200 min-h-screen flex-col">
            <div className="nv">
                nvbar
            </div>
            <div className="flex flex-1">
                {children}
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    )
}

export default GeneralLayout