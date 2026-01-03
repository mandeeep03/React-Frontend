import { Link } from "react-router-dom"
import Search from "./Search"
function NavBar(){
    
    return (
        <>
        <nav className="w-full flex justify-around p-4 items-center bg-black text-white h-[5rem]">
            <div>
                <Link to='/' className="text-xl">Movie App</Link>
            </div>
            <div>
                <Search/>
            </div>
            
            <div className="flex gap-x-4 text-lg">
                <Link to='/'>Home</Link>
                <Link to = '/favorites'>Favorites</Link>
            </div>
        </nav>
        </>
    )
}
export default NavBar