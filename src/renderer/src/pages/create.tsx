import { useQueryClient, useMutation } from '@tanstack/react-query'
import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

interface DataMutation {
    name: string;
    address: string;
    email: string;
    phone: string;
    role: string;
}

export function Create() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const nameRef = useRef<HTMLInputElement | null>(null)
    const addressRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    const roleRef = useRef<HTMLInputElement | null>(null)

    const { isPending, mutateAsync: createCustomer } = useMutation({mutationFn: async (data: DataMutation) => {
        await window.api.addCustomer({
            name: data.name,
            address: data.address,
            email: data.email,
            phone: data.phone,
            role: data.role,
            status: true
        }).then((response) => {
            navigate("/")
        })
        .catch((err) => {

        })       
    },
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["customers"]})
    }})

    async function handleAddCustomer(e: FormEvent) {
        e.preventDefault();
        const name = nameRef.current?.value;
        const address = addressRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const role = roleRef.current?.value;

        if(!name || !address || !email || !phone || !role){
            return
        }

        await createCustomer({
            name: name,
            address:address,
            email:email,
            phone:phone,
            role: role
        })
    }

    return (
        <div className="flex-1 flex flex-col py-12 px-10 gap-8 overflow-y-auto">
            <section className="flex flex-1 flex-col items-center">
                <h1 className="text-white text-xl lg:text-3xl font-semibold">
                    Cadastrar novo cliente
                </h1>
                <form className="w-full max-w-96 mt-4" onSubmit={handleAddCustomer}>
                    <div className="mb-2">
                        <label className="text-lg">Nome:</label>
                        <input ref={nameRef} type="text" placeholder="Digite o nome do cliente..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                    <div className="mb-2">
                        <label className="text-lg">Endereço:</label>
                        <input ref={addressRef} type="text" placeholder="Endereço completo..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                    <div className="mb-2">
                        <label className="text-lg">Email:</label>
                        <input ref={emailRef} type="email" placeholder="Digite o email..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                    <div className="mb-2">
                        <label className="text-lg">Telefone:</label>
                        <input ref={phoneRef} type="text" placeholder="Digite o telefone..." className="w-full h-9 rounded text-black px-2" />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg">Cargo:</label>
                        <input ref={roleRef} type="text" placeholder="Digite o cargo..." className="w-full h-9 rounded text-black px-2" />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 rounded flex items-center justify-center w-full h-9 disabled:bg-gray-500"
                        disabled={isPending}>
                        Cadastrar
                    </button>
                </form>

            </section>
        </div>
    )
}