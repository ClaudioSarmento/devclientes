import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom";

export function Home() {
    const queryClient = useQueryClient();

    // Buscar os clientes
    const { data } = useQuery({queryKey: ["customers"], queryFn: async () => {
        const response = await window.api.fethAllCustomers();
        return response;
    }})

    // async function handleAdd() {
    //     const response = await window.api.fethAllCustomers();
    //     console.log(response);
    // }

    // async function handleDeleteCustomer() {
    //     const response = await window.api.deleteCustomer("")
    // }

    // async function handleCustomerById() {
    //     const response = await window.api.fetchCustomerById("")
    // }
    return (
        <div className="flex-1 flex flex-col py-12 text-white">
            <div className="px-10">
                <h1 className="text-white text-xl lg:text-3xl font-semibold mb-4">
                    Todos clientes
                </h1>
            </div>
            <section className="flex flex-col gap-6 w-full h-screen overflow-y-auto px-10 pb-[200px]">
                {data?.map((customer) => (
                    <Link 
                        to="/" 
                        key={customer._id}
                        className="bg-gray-800 px-4 py-3 rounded"
                    >
                        <p className="mb-2 font-semibold tet-lg">{customer.name}</p>
                        <p><span className="font-semibold">Email: </span>{customer.email}</p>
                        {customer.phone && (
                            <p>
                                <span className="font-semibold">Telefone: </span> {customer.phone}
                            </p>
                        )}
                        <p><span className="font-semibold">Cargo: </span>{customer.role}</p>
                    </Link>
                ))}
            </section>
        </div>
    )
}