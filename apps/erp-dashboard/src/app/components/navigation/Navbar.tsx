import { data } from "@utils/data"
import { Link } from "react-router-dom"

type Props = {}

function Navbar({ }: Props) {
    return (
        <nav className='fle flex-row items-center py-4 '>
            <div className="mx-w-7xl px-4 w-full mx-auto flex space-x-4 flex-row items-center">
                <Link to='/' className="text-slate-900 font-bold ">ERP-HR</Link>
                <div className="flex flex-row space-x-4 flex-1">
                    {
                        data.nav_options.map(item => (
                            <Link className="text-sm font-medium" to={item.location} key={item._id}>{item.name}</Link>
                        ))
                    }
                </div>
                <p>logout</p>
            </div>
        </nav>
    )
}

export default Navbar