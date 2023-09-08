import type { ComponentChildren } from "preact";
import type { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

const valid_produtos: Record<string, Partial<Array<string>>> = {
    "toldos": ["Lona", "Policarbonato"],
    "coberturas": ["Lona", "Policarbonato", "Zincada"],
    "telas": [],
    "vidros": ["8mm"],
    "cortina rolô": [],
};

let toldos_options = {
    "tipo_toldo": "",
    "tipo_acionamento": "",
    "material": "",
    "projecao": "",
    "altura": "",
};

const input_field_styling = "input input-bordered input-info input-md bg-white join-item";
const InputField = (props: { labelText: string, labelId: string, children: ComponentChildren }) => {
    return (<div class="flex flex-col m-3 w-full max-w-xl">
        <label htmlFor={props.labelId}>{props.labelText}</label>
        {props.children}
    </div>);
}

export default function FormularioCSR() {
    const [product_element, set_product_element] = useState(<></>);
    const [current_product, set_product] = useState("");

    useEffect(() => {
        // Handle the selection change and set the appropriate content
        switch (current_product) {
            case "toldos":
                set_product_element(ToldosSection());
                break;
            case "coberturas":
                set_product_element(CoberturaSection());
                break;
            case "vidros":
                set_product_element(VidrosSection());
                break;
            default:
                set_product_element(GenericSection());
                break;
        };
    }, [current_product]);

    return (
        <div class="p-3 py-10 bg-white text-black min-h-screen flex flex-wrap flex-col items-center">
            <InputField labelText="Nome Completo" labelId="nome_completo">
                <input
                    id="nome_completo"
                    type="text"
                    placeholder="exemplo@site.com.br"
                    class={input_field_styling}
                />
            </InputField>
            <InputField labelText="Email" labelId="email">
                <input
                    id="email"
                    type="text"
                    placeholder="exemplo@site.com.br"
                    class={input_field_styling}
                />
            </InputField>
            <InputField labelText="Celular ou Telefone" labelId="celular">
                <input
                    id="celular"
                    type="text"
                    placeholder="(11) 91234-5678"
                    class={input_field_styling}
                />
            </InputField>
            <InputField labelText="Endereço" labelId="endereco">
                <input
                    id="endereco"
                    type="text"
                    class={input_field_styling}
                />
            </InputField>
            <InputField labelText="Cidade de SP" labelId="endereco_cidade">
                <input
                    id="endereco_cidade"
                    type="text"
                    class={input_field_styling}
                />
            </InputField>

            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="produto_selected">Produto</label>
                <select 
                    id="produto_selected" 
                    class="select select-info w-full bg-white font-normal uppercase" 
                    value={current_product} 
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => set_product(e.currentTarget.value)}
                >
                    {Object.keys(valid_produtos).map(key =>
                        <option value={key} key={key} class="uppercase">
                            {key}
                        </option>)}
                </select>
            </div>

            {product_element}

            <InputField labelText="Outros Dados" labelId="outros_dados">
                <input id="outros_dados" type="text" class={input_field_styling} />
            </InputField>

            <button class="btn btn-accent mt-3" onClick={() => console.log(toldos_options)}>Enviar Por Whatsapp</button>
            <button class="btn btn-accent mt-3">Enviar Por Email</button>
        </div>
    )
}

const GenericSection = () => {
    return (<></>)
}

const VidrosSection = () => {
    return (
    <>
    </>
    )
}

const CoberturaSection = () => {
    return (
    <>
    </>
    )
}


const ToldosSection = () => {
    return (
        <>
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="toldo_tipo">Tipo de Toldo</label>
                <div class="border border-sky-400 bg-white rounded-xl p-3">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Fixo</span>
                            <input
                                type="radio"
                                name="tipo_toldo"
                                class="radio checked:bg-blue-500"
                                value="fixo"
                                checked={toldos_options.tipo_toldo === "fixo"}
                                onChange={(e) => toldos_options.tipo_toldo = e.currentTarget.value}
                            />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Enrolavel</span>
                            <input
                                type="radio"
                                name="tipo_toldo"
                                class="radio checked:bg-blue-500"
                                value="enrolavel"
                                checked={toldos_options.tipo_toldo === "enrolavel"}
                                onChange={(e) => toldos_options.tipo_toldo = e.currentTarget.value}
                            />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Outro</span>
                            <input
                                type="radio"
                                name="tipo_toldo"
                                class="radio checked:bg-blue-500"
                                value="outro"
                                checked={toldos_options.tipo_toldo === "outro"}
                                onChange={(e) => toldos_options.tipo_toldo = e.currentTarget.value}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="toldo_tipo">Material de Toldo</label>
                <div class="border border-sky-400 bg-white rounded-xl p-3">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Lona</span>
                            <input
                                type="radio"
                                name="material_toldo"
                                class="radio checked:bg-blue-500"
                                value="lona"
                                checked={toldos_options.tipo_toldo === "lona"}
                                onChange={(e) => toldos_options.material = e.currentTarget.value}
                            />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Policarbonato</span>
                            <input 
                                type="radio" 
                                name="material_toldo" 
                                class="radio checked:bg-blue-500" 
                                value="policarbonato"
                                checked={toldos_options.material === "policarbonato"}
                                onChange={(e) => toldos_options.material = e.currentTarget.value}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="toldo_tipo">Tipo de Acionamento</label>
                <div class="border border-sky-400 bg-white rounded-xl p-3">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Manual</span>
                            <input 
                                type="radio" 
                                name="acionamento_toldo" 
                                class="radio checked:bg-blue-500" 
                                value="manual"
                                checked={toldos_options.tipo_acionamento === "manual"}
                                onChange={(e) => toldos_options.tipo_acionamento = e.currentTarget.value}
                            />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text text-black">Automático</span>
                            <input 
                                type="radio" 
                                name="acionamento_toldo" 
                                class="radio checked:bg-blue-500" 
                                value="automatico"
                                checked={toldos_options.tipo_acionamento === "automatico"}
                                onChange={(e) => toldos_options.tipo_acionamento = e.currentTarget.value}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="projecao_toldo">Projeção</label>
                <input 
                    id="projecao_toldo" 
                    type="text" 
                    class="input input-bordered input-info input-md bg-white join-item" 
                    onChange={(e) => toldos_options.projecao = e.currentTarget.value}
                />
            </div>
            <InputField labelId="altura_toldo" labelText="Altura">
                <input
                    id="altura_toldo"
                    type="text"
                    placeholder="2.31m"
                    class="input input-bordered input-info input-md bg-white join-item" 
                    onChange={(e) => toldos_options.altura = e.currentTarget.value}
                />
            </InputField>
        </>
    );
}
