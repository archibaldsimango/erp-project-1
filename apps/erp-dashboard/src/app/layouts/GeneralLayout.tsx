import { ReactNode } from "react"
import Navbar from "../components/navigation/Navbar"

interface Props {
    children?: ReactNode
}

const GeneralLayout = ({ children }: Props) => {
    return (
        <div className="flex bg-slate-200 min-h-screen flex-col">
            <Navbar />
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