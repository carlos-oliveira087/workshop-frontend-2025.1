import { useEffect, useState } from "react";
import Header from "./Header";

function Booster() {

    const limit = 11;
    const [card, setCard] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect (() => {
    
            fetch("https://api.pokemontcg.io/v2/cards", {
            headers: {
                "X-Api-Key": "56b44746-0db7-4594-8fe9-a1b20ffeda04" 
            }
            })
            .then(response => response.json())
            .then(data => {
                const randomCards = data.data.sort(() => Math.random() - 0.5)
                const selectedCards = randomCards.slice(0, limit);
                setCard(selectedCards)
            })
            .catch(error => console.error("Erro:", error));  
        }, [])
        
    return (
        <div>
            <Header/>

            {open == false ? (

                <div className="flex flex-col justify-center items-center relative">
                    <div className="flex flex-col bg-white rounded-2xl rounded-t-none border-2 border-primary border-t-0 w-auto h-[900px] justify-center items-center">
                        <h1 className="text-4xl mb-5">Booster Supresa</h1>
                        <img src="/assets/booster.png" alt="Booster" className="w-[650px] ml-8 mb-10" />
                        <button className="bg-primary w-56 h-12 rounded-xl text-2xl text-tertiary" onClick={() => setOpen(true)}
                        >ABRIR</button>
                    </div>
                </div>

            ) : (

                <div className="ml-40 grid grid-cols-3 gap-y-10 mt-10 mb-10">
                    {card.map((card) => (
                        <div key={card.id} className="bg-white border-2 border-primary rounded-xl w-60 flex flex-col items-center p-5">
                            <img src={card.images.small} alt={card.name}/>
                            <h2 className="text-lg  text-center mt-5 mb-2 text-secondary">{card.name}</h2>
                            <h3 className="text-sm text-center text-secondary">
                                {card.types.map((type, index) => (
                                    <span key={index}>Tipo: {type}</span>
                                ))}
                            </h3>
                            
                        </div>
                    ))}
                    <button className="bg-primary mt-20 w-60 h-14 rounded-xl text-2xl text-tertiary" 
                    onClick={() => {
                        setOpen(false);
                        window.location.reload();
                    }}>Abrir de novo</button>
                </div>
            )}  
        </div>
        
    )
}

export default Booster;