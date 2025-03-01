import { useState, useEffect } from "react";
import Header from "./Header";

function Cards() {

    const [card, setCard] = useState([]);
    const limit = 20;

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

    
        
    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center min-h-screen relative">
                <div className="my-14 grid grid-cols-4 gap-10">
                
                    {card.map((card) => (
                        <div key={card.id} className="bg-white border-2 border-primary rounded-xl w-72 flex flex-col items-center p-5">
                            <img src={card.images.small} alt={card.name}/>
                            <h2 className="text-lg  text-center mt-5 mb-2 text-secondary">{card.name}</h2>
                            <h3 className="text-sm text-center text-secondary">
                                {card.types.map((type, index) => (
                                    <span key={index}>Tipo: {type}</span>
                                ))}
                            </h3>
                        </div>
                    ))}
      
                </div>
            </div>
        </div>
        
    )
}

export default Cards;