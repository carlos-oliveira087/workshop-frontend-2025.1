import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <div className="flex flex-col border-2 border-secondary rounded-b-xl">
                <div className="bg-primary h-6 border-b-2 border-secondary"/>
                <div className="bg-white h-10 rounded-b-xl"/>
                <div className="absolute left-1/2 top-1 bg-white border-[6px] border-secondary rounded-full w-14 h-14"/>
            </div>
            <div className="flex flex-row gap-7 absolute top-9 left-40 font-medium text-[15px]">
                <Link to="/" className="text-black">INÍCIO</Link>
                <Link to="/Booster" className="text-black">MEU BOOSTER</Link>
                <Link to="/Cards" className="text-black">POKÉDEX</Link>
                
            </div>
            <div className="flex flex-row absolute top-8 right-32 font-medium text-[15px]">
                <input type="text" className="bg-tertiary w-72 border-2 border-secondary rounded-xl rounded-r-none pl-3"/>
                <button className="flex justify-center items-center bg-secondary border-2 w-7 border-secondary border-l-0 rounded-xl rounded-l-none text-tertiary"><FaSearch/></button>
            </div>
        </div>
        
    )
}

export default Header;
