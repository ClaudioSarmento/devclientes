export function Create(){

    async function handleAddCustomer(){
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
        <div>
            <h1>Página Novo cliente!!!</h1>
            <button onClick={handleAddCustomer}>CADASTRAR</button>
        </div>
    )
}