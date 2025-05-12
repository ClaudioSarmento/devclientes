
export function Home(){
    async function handleAdd(){
        const response = await window.api.fethAllCustomers();
        console.log(response);
    }

    return (
        <div>
            <h1>Página Home!!!</h1>
            <br/><br/>
            <button onClick={handleAdd}>
                BUSCAR USUARIOS
            </button>
        </div>
    )
}