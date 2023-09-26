import { answers_init } from "../../formulario/form_typing";
import {InputField, RequiredInputField } from "./FormBlocks";
import generate_raw_text from "../../formulario/generator";
import { CONTATO } from "../../toldosmania_info";
import { createEffect, createSignal, For, type JSX } from "solid-js";
import { CoberturaSection, CortinaSection, TelaSection, ToldosSection, VidrosSection } from "./FormSections";

export default function OrcamentoFormulario(): JSX.Element {
  const [product_element, setProductElement] = createSignal<JSX.Element>(<></>);
  const [current_product, setProduct] = createSignal<string>("");
  const [product_answers, setProductAnswers] = createSignal(answers_init);
  const [user_info, setUserInfo] = createSignal({
    "nome_completo": "",
    "email": "",
    "telefone": "",
    "endereco": "",
    "outros_dados": "",
  });

  createEffect(() => {
    setProductAnswers(answers_init);
    switch (current_product()) {
      case "Toldos":
        setProductElement(ToldosSection(product_answers, setProductAnswers));
        break;
      case "Coberturas":
        setProductElement(CoberturaSection(product_answers, setProductAnswers));
        break;
      case "Vidros":
        setProductElement(VidrosSection(product_answers, setProductAnswers));
        break;
      case "Telas":
        setProductElement(TelaSection(product_answers, setProductAnswers));
        break;
      case "Cortinas Rolô":
        setProductElement(CortinaSection(product_answers, setProductAnswers));
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
        onInput={e => { user_info().nome_completo = e.currentTarget.value; setUserInfo(user_info()) }}
        autocomplete="on"
      />
      <RequiredInputField
        text="Email"
        id="email"
        placeholder="exemplo@site.com.br"
        onInput={e => { user_info().email = e.currentTarget.value; setUserInfo(user_info()) }}
      />
      <RequiredInputField text="Celular ou Telefone"
        id="celular"
        placeholder="(11) 91234-5678"
        onInput={e => { user_info().telefone = e.currentTarget.value; setUserInfo(user_info()) }}
      />
      <RequiredInputField
        text="Endereço"
        id="endereco"
        placeholder="Rua Exemplo nº1234. São Paulo, SP"
        onInput={e => { user_info().endereco = e.currentTarget.value; setUserInfo(user_info()) }}
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
        labelText="Outros Dados"
        labelId="outros_dados"
        onInput={e => { user_info().outros_dados = e.currentTarget.value; setUserInfo(user_info()) }}
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
          location.href = `${CONTATO.whatsapp}?text=${encodeURI(generate_raw_text(current_product(), user_info(), product_answers()))}`
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
          location.href = `${CONTATO.email}?subject=Resposta de Formulario de Orçamento ToldosMania&body=${encodeURI(generate_raw_text(current_product(), user_info(), product_answers()))}`
        }}
      >Enviar Por Email
      </button>
    </div>
  );
}