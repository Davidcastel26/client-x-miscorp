import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { navbarLinks } from "../../interfaces/inavbar"



export const NavLink: React.FC<navbarLinks> = ({ to, children }) => {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <a className={isActive ? "active " : ""}>
            <Link 
                to={to} 
                className={ 'block text-[#ADB7BE] sm:text-xl sm:font-medium rounded md:p-0 hover:text-white hover:underline' 
                }  
            >
                {children}
            </Link>
        </a>
    )
}
