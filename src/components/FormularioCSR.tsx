import type { ComponentChildren } from "preact";
import type { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import  * as forminfo from "../formulario_typing";

const VALID_PRODUTOS: string[] = ["toldos","coberturas","telas","vidros","cortina rolô"];
const INPUT_FIELD_STYLE = "input input-bordered input-primary input-md bg-primary-content join-item";

let answers = {
    userinfo: {} as forminfo.UserInfo,
    toldo: {} as forminfo.ToldoInfo,
    cobertura: {} as forminfo.CoberturaInfo,
    vidro: {} as forminfo.VidroInfo,
    tela: {} as forminfo.TelaInfo,
    cortina: {} as forminfo.CortinaInfo
} as forminfo.UserAnswers;

const InputField = (props: { labelText: string, labelId: string, children: ComponentChildren }) => {
    return (
        <div class="flex flex-col m-3 w-full max-w-xl">
            <label htmlFor={props.labelId}>{props.labelText}</label>
            {props.children}
        </div>
    );
}

const RadioContainer = (props: { labelText: string, labelId: string, children: ComponentChildren }) => {
    return (
        <InputField labelText={props.labelText} labelId={props.labelId}>
            <div class="border border-primary-focus bg-primary-content rounded-xl p-3">
                {props.children}
            </div>
        </InputField>
    );
}

const RadioForm = (props: { title: string, children: ComponentChildren }) => {
    return (
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text text-black">{props.title}</span>
                {props.children}
            </label>
        </div>
    );
}

export default function FormularioCSR() {
    const [product_element, set_product_element] = useState(<></>);
    const [current_product, set_product] = useState("");

    useEffect(() => {
        switch (current_product) {
            case "toldos":
                set_product_element(ToldosSection);
                break;
            case "coberturas":
                set_product_element(CoberturaSection());
                break;
            case "vidros":
                set_product_element(VidrosSection());
                break;
            default:
                set_product_element(GenericSection);
                break;
        };
    }, [current_product]);

    return (
        <div class="p-3 py-10 bg-primary-content text-black min-h-screen flex flex-wrap flex-col items-center">
            <InputField labelText="Nome Completo" labelId="nome_completo">
                <input
                    id="nome_completo"
                    type="text"
                    class={INPUT_FIELD_STYLE}
                />
            </InputField>
            <InputField labelText="Email" labelId="email">
                <input
                    id="email"
                    type="text"
                    placeholder="exemplo@site.com.br"
                    class={INPUT_FIELD_STYLE}
                />
            </InputField>
            <InputField labelText="Celular ou Telefone" labelId="celular">
                <input
                    id="celular"
                    type="text"
                    placeholder="(11) 91234-5678"
                    class={INPUT_FIELD_STYLE}
                />
            </InputField>
            <InputField labelText="Endereço" labelId="endereco">
                <input
                    id="endereco"
                    type="text"
                    placeholder="Rua Exemplo nº1234. São Paulo, SP"
                    class={INPUT_FIELD_STYLE}
                />
            </InputField>

            <div class="flex flex-col m-3 w-full max-w-xl">
                <label htmlFor="produto_selected">Produto</label>
                <select
                    id="produto_selected"
                    class="select select-primary w-full bg-primary-content font-normal uppercase"
                    value={current_product}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => set_product(e.currentTarget.value)}
                >
                    {VALID_PRODUTOS.map(key =>
                        <option value={key} key={key} class="uppercase">
                            {key}
                        </option>)}
                </select>
            </div>

            {product_element}

            <InputField labelText="Outros Dados" labelId="outros_dados">
                <input id="outros_dados" type="text" class={INPUT_FIELD_STYLE} />
            </InputField>

            <button class="btn btn-accent mt-3" onClick={() => console.log(answers)}>Enviar Por Whatsapp</button>
            <button class="btn btn-accent mt-3">Enviar Por Email</button>
        </div>
    )
}

const GenericSection = <></>;
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

const ToldosSection = (<>
    <RadioContainer labelId="toldo_tipo" labelText="Tipo de Toldo">
        <RadioForm title="Fixo">
            <input
                type="radio"
                name="tipo_toldo"
                class="radio checked:bg-blue-500"
                checked={answers.toldo.tipo === forminfo.TipoToldo.Fixo}
                onChange={() => answers.toldo.tipo = forminfo.TipoToldo.Fixo}
            />
        </RadioForm>
        <RadioForm title="Enrolavel">
            <input
                type="radio"
                name="tipo_toldo"
                class="radio checked:bg-blue-500"
                checked={answers.toldo.tipo === forminfo.TipoToldo.Enrolavel}
                onChange={() => answers.toldo.tipo = forminfo.TipoToldo.Enrolavel}
            />
        </RadioForm>
    </RadioContainer>

    <RadioContainer labelId="toldo_tipo" labelText="Material de Toldo">
        <RadioForm title="Lona">
            <input
                type="radio"
                name="material_toldo"
                class="radio checked:bg-primary-focus"
                checked={answers.toldo.material === forminfo.MaterialToldo.Lona}
                onChange={() => answers.toldo.material = forminfo.MaterialToldo.Lona}
            />
        </RadioForm>
        <RadioForm title="Policarbonato">
            <input
                type="radio"
                name="material_toldo"
                class="radio checked:bg-primary-focus"
                checked={answers.toldo.material === forminfo.MaterialToldo.Policarbonato}
                onChange={() => answers.toldo.material = forminfo.MaterialToldo.Policarbonato}
            />
        </RadioForm>
    </RadioContainer>

    <RadioContainer labelId="acionamento_tipo" labelText="Tipo de Acionamento">
        <RadioForm title="Manual">
            <input
                type="radio"
                name="acionamento_toldo"
                class="radio checked:bg-primary-focus"
                checked={answers.toldo.tipo_acionamento === forminfo.TipoAcionamentoToldo.Manual}
                onChange={() => answers.toldo.tipo_acionamento = forminfo.TipoAcionamentoToldo.Manual}
            />
        </RadioForm>
        <RadioForm title="Retratil">
            <input
                type="radio"
                name="acionamento_toldo"
                class="radio checked:bg-primary-focus"
                checked={answers.toldo.tipo_acionamento === forminfo.TipoAcionamentoToldo.Retratil}
                onChange={() => answers.toldo.tipo_acionamento = forminfo.TipoAcionamentoToldo.Retratil}
            />
        </RadioForm>
    </RadioContainer>
    
    <InputField labelId="projecao_toldo" labelText="Projeção">
        <input
            id="projecao_toldo"
            type="text"
            class={INPUT_FIELD_STYLE}
            onChange={(e) => answers.toldo.projecao = e.currentTarget.value}
        />
    </InputField>
    <InputField labelId="altura_toldo" labelText="Altura">
        <input
            id="altura_toldo"
            type="text"
            placeholder="2.31m"
            class={INPUT_FIELD_STYLE}
            onChange={(e) => answers.toldo.altura = e.currentTarget.value}
        />
    </InputField>
</>
);
