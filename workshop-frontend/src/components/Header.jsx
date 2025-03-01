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
                <Link to="/" className="text-black hover:text-primary">INÍCIO</Link>
                <Link to="/Booster" className="text-black hover:text-primary">MEU BOOSTER</Link>
                <Link to="/Cards" className="text-black hover:text-primary">POKÉDEX</Link>
  
            </div>
            
        </div>
        
    )
}

export default Header;
