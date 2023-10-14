import type ProductData from "./form_typing";

const isNullable = (value: any) => {
  return (value === undefined || value === "" || value === null);
}

const defaultOrValue = <T>(default_thing: T, value: T) => {
  return isNullable(value) && default_thing || value;
}

export default function genRawText(current_product: string, userinfo: Record<string, string>, product_answers: Record<string, ProductData>) {
  const DEFAULT_NO_ANSWER: string = "Não informado";
  let product_specific_text: string | null = null;

  if (isNullable(current_product)) {
    product_specific_text = "Nenhum produto selecionado."
  } else {
    switch (current_product) {
      case "Toldos":
        product_specific_text = `Produto selecionado: ${current_product}
Tipo: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.toldo!.data.tipo)}
Material: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.toldo!.data.material)}
Acionamento: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.toldo!.data.tipo_acionamento)}
Medidas: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.toldo!.data.projecao)}
`;
        break;
      case "Coberturas":
        product_specific_text = `Produto selecionado: ${current_product}
Material: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.cobertura!.data.material)}
Medidas: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.cobertura!.data.medidas)}
`;
        break;
      case "Telas":
        product_specific_text = `Produto selecionado: ${current_product}
Projeção: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.tela!.data.projecao)}
`;
        break;
      case "Vidros":
        product_specific_text = `Produto selecionado: ${current_product}
Tipo de Vidro: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.vidro!.data.tipo)}
`;
        break;
      case "Cortinas Rolô":
        product_specific_text = `Produto selecionado: ${current_product}
Projeção: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.cortina_rolo!.data.projecao)}
Material: ${defaultOrValue(DEFAULT_NO_ANSWER, product_answers.cortina_rolo!.data.material)}
`;
        break;
      default:
        break;
    }
  }

  return `---
Nome: ${defaultOrValue(DEFAULT_NO_ANSWER, userinfo.nome_completo)}
Email para contato: ${defaultOrValue(DEFAULT_NO_ANSWER, userinfo.email)}
Endereço: ${defaultOrValue(DEFAULT_NO_ANSWER, userinfo.endereco)}
Telefone: ${defaultOrValue(DEFAULT_NO_ANSWER, userinfo.telefone)}
Outras observações para contato: ${defaultOrValue(DEFAULT_NO_ANSWER, userinfo.outros_dados)}
---

${product_specific_text}
`}