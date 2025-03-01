function LinksSection() {

    return (
        <div className="flex flex-col w-screen">
            <div className="rounded-xl text-center border-2 border-primary mx-16 mt-0 p-6 bg-secondary w-[700px]">
                <p className="text-[15px] font-medium text-tertiary">Abra seu Booster agora e descubra o que está esperando por você!<br/>Tem algo especial reservado, e você não vai querer perder. <br/>O que será que está dentro? Só você pode descobrir! Boa sorte!</p>
                <button className="bg-primary p-2 rounded-xl font-medium text-xl w-full mt-5">Descubra</button>
            </div>
            <div className="rounded-xl text-center border-2 border-primary m-16 mt-4 p-6 bg-secondary w-[700px]">
                <p className="text-[15px] font-medium text-tertiary">Hora de conferir suas cartas Pokémon favoritas! Dê uma olhada nas cartas mais raras e poderosas! Tem alguma carta lendária que esteja procurando?! Clique e descubra! Boa sorte, treinador!</p>
                <button className="bg-primary p-2 rounded-xl font-medium text-xl w-full mt-5">Descubra</button>
            </div>
        </div>
        
        
    )
}

export default LinksSection;