import { useState, useEffect } from "react";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";

function Cards() {

    const [card, setCard] = useState([]);
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])
    const limit = 200;

    useEffect (() => {

        fetch("https://api.pokemontcg.io/v2/cards", {
        headers: {
            "X-Api-Key": "56b44746-0db7-4594-8fe9-a1b20ffeda04" 
        }
        })
        .then(response => response.json())
        .then(data => setCard(data.data.slice(0, limit)))
        .catch(error => console.error("Erro:", error));  
    }, [])

    
    const filtrar = () => {
        const filterData = card.filter((card) => card.name.toLowerCase().includes(search.toLowerCase()))
        setFilterData(filterData)
    }

        
    return (
        <div>
            <Header/>

            <div className="flex justify-center items-center min-h-screen relative">

                <div className="flex flex-row absolute top-8 right-auto font-medium text-[15px]">

                    <input type="text" className="bg-tertiary w-[700px] h-10 border-2 border-secondary rounded-xl rounded-r-none pl-3" placeholder="Buscar Pokémon" onChange={(e) => setSearch(e.target.value)}/>

                    <button className="flex justify-center items-center bg-secondary border-2 w-10 border-secondary border-l-0 rounded-xl rounded-l-none text-tertiary hover:bg-primary" onClick={filtrar}><FaSearch/></button>
                </div>
            
                <div className="my-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                
                    {filterData.length > 0 ? (

                        filterData.map((card) => (
                            <div key={card.id} className="bg-white border-2 border-primary rounded-xl w-72 flex flex-col items-center p-5">
                                <img src={card.images.small} alt={card.name}/>
                                <h2 className="text-lg  text-center mt-5 mb-2 text-secondary">{card.name}</h2>
                                <h3 className="text-sm text-center text-secondary">
                                    {card.types.map((type, index) => (
                                        <span key={index}>Tipo: {type}</span>
                                    ))}
                                </h3>
                            </div>
                        ))

                        ) : (

                        card.map((card) => (
                            <div key={card.id} className="bg-white border-2 border-primary rounded-xl w-72 flex flex-col items-center p-5">
                                <img src={card.images.small} alt={card.name}/>
                                <h2 className="text-lg  text-center mt-5 mb-2 text-secondary">{card.name}</h2>
                                <h3 className="text-sm text-center text-secondary">
                                    {card.types.map((type, index) => (
                                        <span key={index}>Tipo: {type}</span>
                                    ))}
                                </h3>
                            </div>
                        ))
                    
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default Cards;