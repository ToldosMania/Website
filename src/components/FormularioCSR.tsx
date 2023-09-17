import type { ComponentChildren } from "preact";
import type { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import * as forminfo from "../formulario/forminfo";
import generate_raw_text from "../formulario/generator";

const VALID_PRODUTOS: string[] = [
  "toldos",
  "coberturas",
  "telas",
  "vidros",
  "cortina rolô",
];
const INPUT_FIELD_STYLE =
  "input input-bordered input-primary input-md bg-base-300 text-base-content join-item";

let answers: Map<string, Map<string, string>> = new Map();

const InputField = (props: {
  labelText: string;
  labelId: string;
  children: ComponentChildren;
}) => {
  return (
    <div class="m-3 flex w-full max-w-xl flex-col">
      <label htmlFor={props.labelId} class="text-base-content">
        {props.labelText}
      </label>
        <input
          id={props.labelId}
          type="text"
          class={INPUT_FIELD_STYLE}
          onChange={e => element.get("userinfo").set("nome",e.currentTarget.value)}
          onChange={e => answers.userinfo.nome = e.currentTarget.value}
        />
      {props.children}
    </div>
  );
};

const RadioContainer = (props: {
  labelText: string;
  labelId: string;
  children: ComponentChildren;
}) => {
  return (
    <InputField labelText={props.labelText} labelId={props.labelId}>
      <div class="rounded-xl border border-primary-focus bg-base-300 p-3">
        {props.children}
      </div>
    </InputField>
  );
};

const RadioForm = (props: { title: string; children: ComponentChildren }) => {
  return (
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text text-base-content">{props.title}</span>
        {props.children}
      </label>
    </div>
  );
};

export default function FormularioCSR() {
  const [product_element, set_product_element] = useState(<></>);
  const [current_product, set_product] = useState("");

  useEffect(() => {
    answers = new Map(); 
    switch (current_product) {
      case "toldos":
        set_product_element(ToldosSection);
        break;
      case "coberturas":
        set_product_element(CoberturaSection);
        break;
      case "vidros":
        set_product_element(VidrosSection);
        break;
      case "telas":
        set_product_element(TelaSection);
        break;
      case "cortinas":
        set_product_element(CortinaSection);
        break;
      default:
        set_product_element(GenericSection);
        break;
    }
  }, [current_product]);

  return (
    <div class="flex min-h-screen flex-col flex-wrap items-center bg-base-100 p-3 py-10 text-base-content">
      <InputField labelText="Nome Completo" labelId="nome_completo">

      </InputField>
      <InputField labelText="Email" labelId="email">
        <input
          id="email"
          type="text"
          placeholder="exemplo@site.com.br"
          class={INPUT_FIELD_STYLE}
          onChange={e => answers.userinfo.email = e.currentTarget.value}
          autocomplete="on"
        />
      </InputField>
      <InputField labelText="Celular ou Telefone" labelId="celular">
        <input
          id="celular"
          type="text"
          placeholder="(11) 91234-5678"
          class={INPUT_FIELD_STYLE}
          onChange={e => answers.userinfo.telefone = e.currentTarget.value}
        />
      </InputField>
      <InputField labelText="Endereço" labelId="endereco">
        <input
          id="endereco"
          type="text"
          placeholder="Rua Exemplo nº1234. São Paulo, SP"
          class={INPUT_FIELD_STYLE}
          onChange={e => answers.userinfo.endereco = e.currentTarget.value}
        />
      </InputField>

      <div class="m-3 flex w-full max-w-xl flex-col">
        <label htmlFor="produto_selected">Produto</label>
        <select
          id="produto_selected"
          class="select select-primary w-full bg-base-300 font-normal uppercase text-base-content"
          value={current_product}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            set_product(e.currentTarget.value)
          }
        >
          {VALID_PRODUTOS.map((key) => (
            <option value={key} key={key} class="uppercase">
              {key}
            </option>
          ))}
        </select>
      </div>

      {product_element}

      <InputField labelText="Outros Dados" labelId="outros_dados">
        <input
          id="outros_dados"
          type="text"
          class={INPUT_FIELD_STYLE}
          onChange={e => answers.userinfo.outros_dados = e.currentTarget.value}
        />
      </InputField>

      <button class="btn btn-accent mt-3" onClick={() => console.log(generate_raw_text(answers))}>
        Enviar Por Whatsapp
      </button>
      <button class="btn btn-accent mt-3">Enviar Por Email</button>
    </div>
  );
}

const GenericSection = <></>;

const CortinaSection = <InputField labelId="projecao_cortina" labelText="Projeção">
  <input
    id="projecao_tela"
    type="text"
    class={INPUT_FIELD_STYLE}
    onChange={(e) => (answers.cortina.projecao = e.currentTarget.value)}
  />
</InputField>;

const TelaSection = <InputField labelId="projecao_toldo" labelText="Projeção">
  <input
    id="projecao_tela"
    type="text"
    class={INPUT_FIELD_STYLE}
    onChange={(e) => (answers.tela.projecao = e.currentTarget.value)}
  />
</InputField>;

const VidrosSection =
  (
    <RadioContainer labelId="vidro_tipo" labelText="Tipo de Produto de Vidro">
      <RadioForm title="Box">
        <input
          type="radio"
          name="vidro_tipo"
          class="radio checked:bg-primary-focus"
          checked={answers.vidro.tipo === forminfo.TipoVidro.Box}
          onChange={() => answers.vidro.tipo = forminfo.TipoVidro.Box}
        />
      </RadioForm>
      <RadioForm title="Janela">
        <input
          type="radio"
          name="vidro_tipo"
          class="radio checked:bg-primary-focus"
          checked={answers.vidro.tipo === forminfo.TipoVidro.Janela}
          onChange={() => answers.vidro.tipo = forminfo.TipoVidro.Janela}
        />
      </RadioForm>
      <RadioForm title="Porta">
        <input
          type="radio"
          name="vidro_tipo"
          class="radio checked:bg-primary-focus"
          checked={answers.vidro.tipo === forminfo.TipoVidro.Porta}
          onChange={() => answers.vidro.tipo = forminfo.TipoVidro.Porta}
        />
      </RadioForm>
    </RadioContainer>
  );

const CoberturaSection = <>
  <RadioContainer labelId="cobertura_material" labelText="Material da Cobertura">
    <RadioForm title="Lona">
      <input
        type="radio"
        name="cobertura_material"
        class="radio checked:bg-primary-focus"
        checked={answers.cobertura.material === forminfo.MaterialCobertura.Lona}
        onChange={() => (answers.cobertura.material = forminfo.MaterialCobertura.Lona)}
      />
    </RadioForm>
    <RadioForm title="Policarbonato">
      <input
        type="radio"
        name="cobertura_material"
        class="radio checked:bg-primary-focus"
        checked={answers.cobertura.material === forminfo.MaterialCobertura.Policarbonato}
        onChange={() => (answers.cobertura.material = forminfo.MaterialCobertura.Policarbonato)}
      />
    </RadioForm>
    <RadioForm title="Zinco">
      <input
        type="radio"
        name="cobertura_material"
        class="radio checked:bg-primary-focus"
        checked={answers.cobertura.material === forminfo.MaterialCobertura.Zinco}
        onChange={() => (answers.cobertura.material = forminfo.MaterialCobertura.Zinco)}
      />
    </RadioForm>
  </RadioContainer>
  <InputField labelText="Projeção" labelId="cobertura_projecao">
    <input
      id="cobertura_projecao"
      type="text"
      class={INPUT_FIELD_STYLE}
      onChange={(e) => (answers.cobertura.projecao = e.currentTarget.value)}
    />
  </InputField>
</>;

const ToldosSection = (
  <>
    <RadioContainer labelId="toldo_tipo" labelText="Tipo de Toldo">
      <RadioForm title="Fixo">
        <input
          type="radio"
          name="tipo_toldo"
          class="radio checked:bg-primary-focus"
          checked={answers.toldo.tipo === forminfo.TipoToldo.Fixo}
          onChange={() => (answers.toldo.tipo = forminfo.TipoToldo.Fixo)}
        />
      </RadioForm>
      <RadioForm title="Enrolavel">
        <input
          type="radio"
          name="tipo_toldo"
          class="radio checked:bg-primary-focus"
          checked={answers.toldo.tipo === forminfo.TipoToldo.Enrolavel}
          onChange={() => (answers.toldo.tipo = forminfo.TipoToldo.Enrolavel)}
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
          onChange={() =>
            (answers.toldo.material = forminfo.MaterialToldo.Lona)
          }
        />
      </RadioForm>
      <RadioForm title="Policarbonato">
        <input
          type="radio"
          name="material_toldo"
          class="radio checked:bg-primary-focus"
          checked={
            answers.toldo.material === forminfo.MaterialToldo.Policarbonato
          }
          onChange={() =>
            (answers.toldo.material = forminfo.MaterialToldo.Policarbonato)
          }
        />
      </RadioForm>
    </RadioContainer>

    <RadioContainer labelId="acionamento_tipo" labelText="Tipo de Acionamento">
      <RadioForm title="Manual">
        <input
          type="radio"
          name="acionamento_toldo"
          class="radio checked:bg-primary-focus"
          checked={
            answers.toldo.tipo_acionamento ===
            forminfo.TipoAcionamentoToldo.Manual
          }
          onChange={() =>
          (answers.toldo.tipo_acionamento =
            forminfo.TipoAcionamentoToldo.Manual)
          }
        />
      </RadioForm>
      <RadioForm title="Retratil">
        <input
          type="radio"
          name="acionamento_toldo"
          class="radio checked:bg-primary-focus"
          checked={
            answers.toldo.tipo_acionamento ===
            forminfo.TipoAcionamentoToldo.Retratil
          }
          onChange={() =>
          (answers.toldo.tipo_acionamento =
            forminfo.TipoAcionamentoToldo.Retratil)
          }
        />
      </RadioForm>
    </RadioContainer>

    <InputField labelId="projecao_toldo" labelText="Projeção">
      <input
        id="projecao_toldo"
        type="text"
        class={INPUT_FIELD_STYLE}
        onChange={(e) => (answers.toldo.projecao = e.currentTarget.value)}
      />
    </InputField>
    <InputField labelId="altura_toldo" labelText="Altura">
      <input
        id="altura_toldo"
        type="text"
        placeholder="2.31m"
        class={INPUT_FIELD_STYLE}
        onChange={(e) => (answers.toldo.altura = e.currentTarget.value)}
      />
    </InputField>
  </>
);