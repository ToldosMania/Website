import { answers_init } from "../../formulario/form_typing";
import { RadioForm, RadioContainer, InputField, RequiredInputField, INPUT_FIELD_STYLE } from "./FormBlocks";
import generate_raw_text from "../../formulario/generator";
import { CONTATO } from "../../toldosmania_info";
import { createEffect, createSignal, For, type Component, type JSX, type Signal } from "solid-js";

let user_info = {
  "nome_completo": "",
  "email": "",
  "telefone": "",
  "endereco": "",
  "outros_dados": "",
};


export default function OrcamentoFormulario(): JSX.Element {
  const [product_element, setProductElement] = createSignal<JSX.Element>(<></>);
  const [current_product, setProduct] = createSignal<string>("");
  const [product_answers, setProductAnswers] = createSignal(answers_init);

  createEffect(() => {
    product_answers = answers_init;
    switch (current_product()) {
      case "Toldos":
        setProductElement(ToldosSection);
        break;
      case "Coberturas":
        setProductElement(CoberturaSection);
        break;
      case "Vidros":
        setProductElement(VidrosSection);
        break;
      case "Telas":
        setProductElement(TelaSection);
        break;
      case "Cortinas Rolô":
        setProductElement(CortinaSection);
        break;
      default:
        setProductElement(<></>);
        break;
    }
  });

  return (
    <div class="flex min-h-screen flex-col flex-wrap items-center bg-base-100 p-3 py-10 text-base-content">
      <RequiredInputField
        text="Nome Completo"
        id="nome_completo"
        onInput={e => user_info.nome_completo = e.currentTarget.value}
        autocomplete="on"
      />
      <RequiredInputField
        text="Email"
        id="email"
        placeholder="exemplo@site.com.br"
        onInput={e => user_info.email = e.currentTarget.value}
      />
      <RequiredInputField text="Celular ou Telefone"
        id="celular"
        placeholder="(11) 91234-5678"
        onInput={e => user_info.telefone = e.currentTarget.value}
      />
      <RequiredInputField
        text="Endereço"
        id="endereco"
        placeholder="Rua Exemplo nº1234. São Paulo, SP"
        onInput={e => user_info.endereco = e.currentTarget.value}
      />

      <div class="m-3 flex w-full max-w-xl flex-col">
        <label for="produto_selected">Produto</label>
        <select
          id="produto_selected"
          class="select select-primary w-full bg-base-300 font-normal uppercase text-base-content"
          value={current_product()}
          onChange={(e) =>
            setProduct(e.currentTarget.value)
          }
        >
          <For each={Object.values(answers_init)}>
            {(product) => (
              <option
                value={product.pretty_name!}
                class="uppercase">
                {product.pretty_name!}
              </option>
            )}
          </For>
        </select>
      </div>

      {product_element()}

      <InputField
        text="Outros Dados"
        id="outros_dados"
        onInput={e => user_info.outros_dados = e.currentTarget.value}
      />

      <button class="btn btn-accent mt-3"
        onClick={() => {
          let anyfound = false;
          (document.querySelectorAll(".required-element") as NodeListOf<HTMLInputElement>).forEach(
            (element: HTMLInputElement) => {
              if (element.value === "" || element.value.length == 0 || element.value == undefined) {
                anyfound = true;
                element.scrollIntoView();
                return;
              }
            }
          );
          if (anyfound) {
            return;
          }
          location.href = `${CONTATO.whatsapp}?text=${encodeURI(generate_raw_text(current_product(), user_info, product_answers))}`
        }}
      >
        Enviar Por Whatsapp
      </button>
      <button
        class="btn btn-accent mt-3"
        onClick={() => {
          let anyfound = false;
          (document.querySelectorAll(".required-element") as NodeListOf<HTMLInputElement>).forEach(
            (element: HTMLInputElement) => {
              if (element.value === "" || element.value.length == 0 || element.value == undefined) {
                anyfound = true;
                element.scrollIntoView();
                return;
              }
            }
          );
          if (anyfound) {
            return;
          }
          location.href = `${CONTATO.email}?subject=Resposta de Formulario de Orçamento ToldosMania&body=${encodeURI(generate_raw_text(current_product(), user_info, product_answers))}`
        }}
      >Enviar Por Email
      </button>
    </div>
  );
}

const CortinaSection = 

const TelaSection =
  <InputField
    id="projecao_tela"
    text="Projeção"
    onInput={(e) => (product_answers["tela"]!.data["projecao"] = e.currentTarget.value)}
  />;

const VidrosSection =
  <RadioContainer labelId="vidro_tipo" labelText="Tipo de Produto de Vidro">
    <RadioForm
      title="Box"
      name="vidro_tipo"
      checked={product_answers["vidro"]!.data["tipo"] === "box"}
      onInput={() => product_answers["vidro"]!.data["tipo"] = "box"}
    />
    <RadioForm
      title="Janela 2 Folhas"
      name="vidro_tipo"
      checked={product_answers["vidro"]!.data["tipo"] === "janela_2_folhas"}
      onInput={() => product_answers["vidro"]!.data["tipo"] = "janela_2_folhas"}
    />
    <RadioForm
      title="Janela 4 Folhas"
      name="vidro_tipo"
      checked={product_answers["vidro"]!.data["tipo"] === "janela_4_folhas"}
      onInput={() => product_answers["vidro"]!.data["tipo"] = "janela_4_folhas"}
    />
    <RadioForm
      title="Porta"
      name="vidro_tipo"
      checked={product_answers["vidro"]!.data["tipo"] === "porta"}
      onInput={() => product_answers["vidro"]!.data["tipo"] = "porta"}
    />
  </RadioContainer>;


const CoberturaSection = <>
  <RadioContainer labelId="cobertura_material" labelText="Material da Cobertura">
    <RadioForm
      title="Lona"
      name="cobertura_material"
      checked={product_answers["cobertura"]!.data["material"] === "lona"}
      onInput={() => (product_answers["cobertura"]!.data["material"] = "lona")}
    />
    <RadioForm
      title="Policarbonato"
      name="cobertura_material"
      checked={product_answers["cobertura"]!.data["material"] === "policarbonato"}
      onInput={() => (product_answers["cobertura"]!.data["material"] = "policarbonato")}
    />
    <RadioForm
      title="Zinco"
      name="cobertura_material"
      checked={product_answers["cobertura"]!.data["material"] === "zinco"}
      onInput={() => (product_answers["cobertura"]!.data["material"] = "zinco")}
    />
  </RadioContainer>
  <InputField
    text="Projeção"
    id="cobertura_projecao"
    onInput={(e) => (product_answers["cobertura"]!.data["projecao"] = e.currentTarget.value)}
  />
</>;

const ToldosSection = <>
  <RadioContainer labelId="toldo_tipo" labelText="Tipo de Toldo">
    <RadioForm
      title="Fixo"
      name="tipo_toldo"
      checked={product_answers["toldo"]!.data["tipo"] === "fixo"}
      onInput={() => (product_answers["toldo"]!.data["tipo"] = "fixo")}
    />
    <RadioForm
      title="Enrolável"
      name="tipo_toldo"
      checked={product_answers["toldo"]!.data["tipo"] === "enrolavel"}
      onInput={() => (product_answers["toldo"]!.data["tipo"] = "enrolavel")}
    />
  </RadioContainer>
  <RadioContainer labelId="toldo_tipo" labelText="Material de Toldo">
    <RadioForm
      title="Lona"
      name="material_toldo"
      checked={
        product_answers["toldo"]!.data["material"] ===
        "lona"
      }
      onInput={() =>
        product_answers["toldo"]!.data["material"] =
        "lona"
      }
    />
    <RadioForm
      title="Policarbonato"
      name="material_toldo"
      checked={
        product_answers["toldo"]!.data["material"] ===
        "policarbonato"
      }
      onInput={() =>
        product_answers["toldo"]!.data["material"] =
        "policarbonato"
      }
    />
  </RadioContainer>

  <RadioContainer labelId="acionamento_tipo" labelText="Tipo de Acionamento">
    <RadioForm
      title="Manual"
      name="acionamento_toldo"
      checked={
        product_answers["toldo"]!.data["tipo_acionamento"] ===
        "manual"
      }
      onInput={() =>
      (product_answers["toldo"]!.data["tipo_acionamento"] =
        "manual")
      }
    />
    <RadioForm
      title="Retratil"
      name="acionamento_toldo"
      checked={
        product_answers["toldo"]!.data["tipo_acionamento"] ===
        "retratil"
      }
      onInput={() =>
      (product_answers["toldo"]!.data["tipo_acionamento"] =
        "retratil")
      }
    />
  </RadioContainer>

  <InputField
    id="projecao_toldo"
    text="Projeção"
    onInput={(e) => (product_answers["toldo"]!.data["projecao"] = e.currentTarget.value)}
  />
  <InputField
    id="altura_toldo"
    text="Altura"
    placeholder="2.31m"
    onInput={(e) => (product_answers["toldo"]!.data["altura"] = e.currentTarget.value)}
  />
</>;