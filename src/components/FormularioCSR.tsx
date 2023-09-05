type Nullable<T> = T | null;

export default function FormularioCSR() {
    const valid_produtos = new Map<string, Nullable<Array<string>>>([
        ["toldos", ["Lona", "Policarbonato"]],
        ["coberturas", ["Lona","Policarbonato", "Zincada"]],
        ["telas", null],
        ["vidros", ["8mm"]],
    ]);

    return (
        <form action="post" class="p-3 py-10 bg-white text-black min-h-screen flex flex-wrap flex-col items-center">
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="nome_completo">Nome Completo</label>
                <input id="nome_completo" type="text" class="input input-bordered input-info input-md bg-white" />
            </div>
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="exemplo@site.com.br" class="input input-bordered input-info input-md bg-white join-item" />
            </div>
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="celular">Celular ou Telefone</label>
                <input id="celular" type="text" placeholder="(11) 91234-5678" class="input input-bordered input-info input-md bg-white" />
            </div>
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="endereco">Endereço</label>
                <input id="endereco" type="text"  class="input input-bordered input-info input-md bg-white" />

                <label htmlFor="endereco">Cidade de SP</label>
                <input id="endereco_cidade" type="text" class="input input-bordered input-info input-md bg-white" />
            </div>

            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="produto_selected">Produto</label> 
                <select id="produto_selected" class="select select-info w-full bg-white font-normal">
                </select>
            </div>

            <button class="btn btn-accent">Enviar</button>
        </form>
    )
}