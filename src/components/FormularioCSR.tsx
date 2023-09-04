import type { KeyValuePair } from "tailwindcss/types/config";

export default function FormularioCSR() {
    //const base_url = import.meta.env.BASE_URL;
    const valid_produtos: KeyValuePair<string, Array<string | null>> = {
        "toldos": ["Lona", "Policarbonato"],
        "coberturas": ["Lona","Policarbonato", "Zincada"],
        "telas": [null],
        "Vidros": [""],
    };


    return (
        <form action="post" class="p-3 py-10 bg-white text-black min-h-screen flex flex-wrap flex-col items-center">
            <div class="flex flex-col m-3">
                <label htmlFor="nome_completo">Nome Completo</label>
                <input id="nome_completo" type="text" class="input input-bordered input-info input-md bg-white w-full max-w-xl" />
            </div>
            <div class="flex flex-col m-3">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" class="input input-bordered input-info input-md bg-white w-full max-w-xl" />
            </div>
            <div class="flex flex-col m-3">
                <label htmlFor="endereco">Endereço</label>
                <input id="endereco" type="text" class="input input-bordered input-info input-md bg-white w-full max-w-xl" />

                <label htmlFor="endereco">Cidade de SP</label>
                <input id="endereco_cidade" type="text" class="input input-bordered input-info input-md bg-white w-full max-w-xl" />
            </div>

            <div class="flex flex-col m-3">
                <label htmlFor="produto_selected">Produto</label> 
                <select id="produto_selected" class="select select-info w-full bg-white font-normal">
                </select>
            </div>

            <button class="btn btn-accent">Enviar</button>
        </form>
    )
}