import type { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { answers_init } from "../formulario/form_typing"; 
import { RadioForm, RadioContainer, InputField } from "../formulario/components";
import generate_raw_text from "../formulario/generator";
import { CONTATO } from "../toldosmania_info";

const INPUT_FIELD_STYLE =
  "input input-bordered input-primary input-md bg-base-300 text-base-content join-item";

let user_info = {
  "nome_completo": "",
  "email": "",
  "telefone": "",
  "endereco": "",
  "outros_dados": "",
};

let product_answers = answers_init;

export default function FormularioCSR() {
  const [product_element, set_product_element] = useState(<></>);
  const [current_product, set_product] = useState("");

  useEffect(() => {
    product_answers = answers_init;
    switch (current_product) {
      case "Toldos":
        set_product_element(ToldosSection);
        break;
      case "Coberturas":
        set_product_element(CoberturaSection);
        break;
      case "Vidros":
        set_product_element(VidrosSection);
        break;
      case "Telas":
        set_product_element(TelaSection);
        break;
      case "Cortinas Rolô":
        set_product_element(CortinaSection);
        break;
      default:
        set_product_element(<></>);
        break;
    }
  }, [current_product]);

  return (
    <div class="flex min-h-screen flex-col flex-wrap items-center bg-base-100 p-3 py-10 text-base-content">
      <InputField labelText="Nome Completo" labelId="nome_completo">
        <input
          id="nome_completo"
          type="text"
          class={INPUT_FIELD_STYLE}
          onChange={e => user_info.nome_completo = e.currentTarget.value}
          autocomplete="on"
        />
      </InputField>
      <InputField labelText="Email" labelId="email">
        <input
          id="email"
          type="text"
          placeholder="exemplo@site.com.br"
          class={INPUT_FIELD_STYLE}
          onChange={e => user_info.email = e.currentTarget.value}
          autocomplete="on"
        />
      </InputField>
      <InputField labelText="Celular ou Telefone" labelId="celular">
        <input
          id="celular"
          type="text"
          placeholder="(11) 91234-5678"
          class={INPUT_FIELD_STYLE}
          onChange={e => user_info.telefone = e.currentTarget.value}
        />
      </InputField>
      <InputField labelText="Endereço" labelId="endereco">
        <input
          id="endereco"
          type="text"
          placeholder="Rua Exemplo nº1234. São Paulo, SP"
          class={INPUT_FIELD_STYLE}
          onChange={e => user_info.endereco = e.currentTarget.value}
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
          {Object.values(answers_init).map(product => (
            <option value={product.pretty_name} key={product.pretty_name} class="uppercase">
              {product.pretty_name}
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
          onChange={e => user_info.outros_dados = e.currentTarget.value}
        />
      </InputField>

      <button class="btn btn-accent mt-3" 
        onClick={() => location.href = `${CONTATO.whatsapp}?text=${encodeURI(generate_raw_text(current_product,user_info, product_answers))}`}
      >
        Enviar Por Whatsapp
      </button>
      <button class="btn btn-accent mt-3">Enviar Por Email</button>
    </div>
  );
}

const CortinaSection =
  <InputField labelId="projecao_cortina" labelText="Projeção">
    <input
      id="projecao_tela"
      type="text"
      class={INPUT_FIELD_STYLE}
      onChange={(e) => (product_answers.cortina_rolo!.data!.projecao = e.currentTarget.value)}
    />
  </InputField>;

const TelaSection = <InputField labelId="projecao_toldo" labelText="Projeção">
  <input
    id="projecao_tela"
    type="text"
    class={INPUT_FIELD_STYLE}
    onChange={(e) => (product_answers["tela"]!.data["projecao"] = e.currentTarget.value)}
  />
</InputField>;

const VidrosSection = (
  <RadioContainer labelId="vidro_tipo" labelText="Tipo de Produto de Vidro">
    <RadioForm title="Box">
      <input
        type="radio"
        name="vidro_tipo"
        class="radio checked:bg-primary-focus"
        checked={product_answers["vidro"]!.data["tipo"] === "box"}
        onChange={() => product_answers["vidro"]!.data["tipo"] = "box"}
      />
    </RadioForm>
    <RadioForm title="Janela 2 Folhas">
      <input
        type="radio"
        name="vidro_tipo"
        class="radio checked:bg-primary-focus"
        checked={product_answers["vidro"]!.data["tipo"] === "janela_2_folhas"}
        onChange={() => product_answers["vidro"]!.data["tipo"] = "janela_2_folhas"}
      />
    </RadioForm>
    <RadioForm title="Janela 4 Folhas">
      <input
        type="radio"
        name="vidro_tipo"
        class="radio checked:bg-primary-focus"
        checked={product_answers["vidro"]!.data["tipo"] === "janela_4_folhas"}
        onChange={() => product_answers["vidro"]!.data["tipo"] = "janela_4_folhas"}
      />
    </RadioForm>
    <RadioForm title="Porta">
      <input
        type="radio"
        name="vidro_tipo"
        class="radio checked:bg-primary-focus"
        checked={product_answers["vidro"]!.data["tipo"] === "porta"}
        onChange={() => product_answers["vidro"]!.data["tipo"] = "porta"}
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
        checked={product_answers["cobertura"]!.data["material"] === "lona"}
        onChange={() => (product_answers["cobertura"]!.data["material"] = "lona")}
      />
    </RadioForm>
    <RadioForm title="Policarbonato">
      <input
        type="radio"
        name="cobertura_material"
        class="radio checked:bg-primary-focus"
        checked={product_answers["cobertura"]!.data["material"] === "policarbonato"}
        onChange={() => (product_answers["cobertura"]!.data["material"] = "policarbonato")}
      />
    </RadioForm>
    <RadioForm title="Zinco">
      <input
        type="radio"
        name="cobertura_material"
        class="radio checked:bg-primary-focus"
        checked={product_answers["cobertura"]!.data["material"] === "zinco"}
        onChange={() => (product_answers["cobertura"]!.data["material"] = "zinco")}
      />
    </RadioForm>
  </RadioContainer>
  <InputField labelText="Projeção" labelId="cobertura_projecao">
    <input
      id="cobertura_projecao"
      type="text"
      class={INPUT_FIELD_STYLE}
      onChange={(e) => (product_answers["cobertura"]!.data["projecao"] = e.currentTarget.value)}
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
          checked={product_answers["toldo"]!.data["tipo"] === "fixo"}
          onChange={() => (product_answers["toldo"]!.data["tipo"] = "fixo")}
        />
      </RadioForm>
      <RadioForm title="Enrolável">
        <input
          type="radio"
          name="tipo_toldo"
          class="radio checked:bg-primary-focus"
          checked={product_answers["toldo"]!.data["tipo"] === "enrolavel"}
          onChange={() => (product_answers["toldo"]!.data["tipo"] = "enrolavel")}
        />
      </RadioForm>
    </RadioContainer>
    <RadioContainer labelId="toldo_tipo" labelText="Material de Toldo">
      <RadioForm title="Lona">
        <input
          type="radio"
          name="material_toldo"
          class="radio checked:bg-primary-focus"
          checked={
            product_answers["toldo"]!.data["material"] ===
            "lona"
          }
          onChange={() =>
            product_answers["toldo"]!.data["material"] =
            "lona"
          }
        />
      </RadioForm>
      <RadioForm title="Policarbonato">
        <input
          type="radio"
          name="material_toldo"
          class="radio checked:bg-primary-focus"
          checked={
            product_answers["toldo"]!.data["material"] ===
            "policarbonato"
          }
          onChange={() =>
            product_answers["toldo"]!.data["material"] =
            "policarbonato"
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
            product_answers["toldo"]!.data["tipo_acionamento"] ===
            "manual"
          }
          onChange={() =>
          (product_answers["toldo"]!.data["tipo_acionamento"] =
            "manual")
          }
        />
      </RadioForm>
      <RadioForm title="Retratil">
        <input
          type="radio"
          name="acionamento_toldo"
          class="radio checked:bg-primary-focus"
          checked={
            product_answers["toldo"]!.data["tipo_acionamento"] ===
            "retratil"
          }
          onChange={() =>
          (product_answers["toldo"]!.data["tipo_acionamento"] =
            "retratil")
          }
        />
      </RadioForm>
    </RadioContainer>

    <InputField labelId="projecao_toldo" labelText="Projeção">
      <input
        id="projecao_toldo"
        type="text"
        class={INPUT_FIELD_STYLE}
        onChange={(e) => (product_answers["toldo"]!.data["projecao"] = e.currentTarget.value)}
      />
    </InputField>
    <InputField labelId="altura_toldo" labelText="Altura">
      <input
        id="altura_toldo"
        type="text"
        placeholder="2.31m"
        class={INPUT_FIELD_STYLE}
        onChange={(e) => (product_answers["toldo"]!.data["altura"] = e.currentTarget.value)}
      />
    </InputField>
  </>
);