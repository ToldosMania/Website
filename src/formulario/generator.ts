import * as forminfo from './forminfo';

export default function gen_raw_text(answers: forminfo.UserAnswers) {
  const DEFAULT_NO_ANSWER: string = "Não informado";
  let product_specific_text: string | null = null;
  let selected_product: forminfo.ValidProduct | undefined = {} as forminfo.CortinaInfo;

  [
    answers.cobertura,
    answers.cortina,
    answers.vidro,
    answers.tela,
    answers.toldo
  ].every((infoelement: forminfo.ValidProduct | undefined) => {
    if (infoelement != undefined || infoelement != null) {
      selected_product = infoelement; 
      return false;
    }
    return true;
  });

  return `---
Nome: ${answers.userinfo.nome ?? DEFAULT_NO_ANSWER}
Email para contato: ${answers.userinfo.email ?? DEFAULT_NO_ANSWER}
Endereço: ${answers.userinfo.endereco ?? DEFAULT_NO_ANSWER}
Telefone: ${answers.userinfo.telefone ?? DEFAULT_NO_ANSWER}
Outras observações para contato: ${answers.userinfo.outros_dados ?? DEFAULT_NO_ANSWER}
---

Gostaria de entrar em contato sobre o seguinte produto:
${typeof selected_product}
`}