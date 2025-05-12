export function Create() {

    async function handleAddCustomer() {
        const doc = {
            name: "Claudio Sarmento",
            email: "teste@gmail.com",
            phone: "28777777777",
            address: "Rua Y, centro",
            role: "Fullstack",
            status: true
        }
        const response = await window.api.addCustomer(doc)

    }

    return (
        <div className="flex-1 flex flex-col py-12 px-10 gap-8 overflow-y-auto">
            <section className="flex flex-1 flex-col items-center">
                <h1 className="text-white text-xl lg:text-3xl font-semibold">
                    Cadastrar novo cliente
                </h1>
                <form className="w-full max-w-96 mt-4">
                    <div className="mb-2">
                        <label className="text-lg">Nome:</label>
                        <input type="text" placeholder="Digite o nome do cliente..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                     <div className="mb-2">
                        <label className="text-lg">Endereço:</label>
                        <input type="text" placeholder="Endereço completo..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                     <div className="mb-2">
                        <label className="text-lg">Email:</label>
                        <input type="email" placeholder="Digite o email..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                    <div className="mb-2">
                        <label className="text-lg">Telefone:</label>
                        <input type="text" placeholder="Digite o telefone..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                     <div className="mb-4">
                        <label className="text-lg">Cargo:</label>
                        <input type="text" placeholder="Digite o cargo..." className="w-full h-9 rounded text-black px-2" />
                    </div>

                    <button 
                        type="submit"
                        className="bg-blue-500 rounded flex items-center justify-center w-full h-9">
                        Cadastrar
                    </button>
                </form>
                
            </section>
        </div>
    )
}