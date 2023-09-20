import { InputField, RadioForm, RadioContainer } from "./FormBlocks";
import { type Product } from "../../formulario/form_typing";
import type { Accessor, JSX, Setter } from "solid-js";

type AccessorProduct = Accessor<Record<string, Product>>;
type SetterProduct = Setter<Record<string, Product>>;

export const CortinaSection = (product_answers: AccessorProduct, setProductAnswers: SetterProduct): JSX.Element => {
  return (
    <InputField
      labelId="projecao_tela"
      labelText="Projeção"
      onInput={(e) => {
        product_answers().cortina!.data.projecao = e.currentTarget.value;
        setProductAnswers(product_answers());
      }
      }
    />
  );
};

export const TelaSection = (product_answers: AccessorProduct, setProductAnswers: SetterProduct): JSX.Element => {
  return (
    <InputField
      labelId="projecao_tela"
      labelText="Projeção"
      onInput={
        (e) => {
          product_answers().tela!.data.projecao = e.currentTarget.value
          setProductAnswers(product_answers());
        }
      }
    />
  );
}

export const VidrosSection = (product_answers: AccessorProduct, setProductAnswers: SetterProduct): JSX.Element => {
  return (
    <RadioContainer labelId="vidro_tipo" labelText="Tipo de Produto de Vidro">
      <RadioForm
        title="Box"
        name="vidro_tipo"
        checked={product_answers().vidro!.data.tipo === "box"}
        onInput={() => { product_answers().vidro!.data.tipo = "box"; setProductAnswers(product_answers()); }}
      />
      <RadioForm
        title="Janela 2 Folhas"
        name="vidro_tipo"
        checked={product_answers().vidro!.data["tipo"] === "janela_2_folhas"}
        onInput={() => { product_answers().vidro!.data["tipo"] = "janela_2_folhas"; setProductAnswers(product_answers()); }}
      />
      <RadioForm
        title="Janela 4 Folhas"
        name="vidro_tipo"
        checked={product_answers().vidro!.data["tipo"] === "janela_4_folhas"}
        onInput={() => { product_answers().vidro!.data.tipo = "janela_4_folhas"; setProductAnswers(product_answers()); }}
      />
      <RadioForm
        title="Porta"
        name="vidro_tipo"
        checked={product_answers().vidro!.data.tipo === "porta"}
        onInput={() => { product_answers().vidro!.data.tipo = "porta"; setProductAnswers(product_answers()); }}
      />
    </RadioContainer>
  );
}


export const CoberturaSection = (product_answers: AccessorProduct, setProductAnswers: SetterProduct): JSX.Element => {
  return (
    <>
      <RadioContainer labelId="cobertura_material" labelText="Material da Cobertura">
        <RadioForm
          title="Lona"
          name="cobertura_material"
          checked={product_answers().cobertura!.data.material === "lona"}
          onInput={() => { product_answers().cobertura!.data.material = "lona"; setProductAnswers(product_answers()) }}
        />
        <RadioForm
          title="Policarbonato"
          name="cobertura_material"
          checked={product_answers().cobertura!.data.material === "policarbonato"}
          onInput={() => { product_answers().cobertura!.data.material = "policarbonato"; setProductAnswers(product_answers()) }}
        />
        <RadioForm
          title="Zinco"
          name="cobertura_material"
          checked={product_answers().cobertura!.data.material === "zinco"}
          onInput={() => { product_answers().cobertura!.data.material = "zinco"; setProductAnswers(product_answers()) }}
        />
      </RadioContainer>
      <InputField
        labelText="Projeção"
        labelId="cobertura_projecao"
        onInput={(e) => { product_answers().cobertura!.data.projecao = e.currentTarget.value; setProductAnswers(product_answers()) }}
      />
      <InputField
        labelText="Altura"
        labelId="cobertura_projecao"
        placeholder="2.31m"
        onInput={(e) => { product_answers().cobertura!.data.altura = e.currentTarget.value; setProductAnswers(product_answers()) }}
      />
    </>
  );
};

export const ToldosSection = (product_answers: AccessorProduct, setProductAnswers: SetterProduct): JSX.Element => {
  return (
    <>
      <RadioContainer labelId="toldo_tipo" labelText="Tipo de Toldo">
        <RadioForm
          title="Fixo"
          name="tipo_toldo"
          checked={product_answers().toldo!.data.tipo === "fixo"}
          onInput={() => { product_answers().toldo!.data.tipo = "fixo"; setProductAnswers(product_answers()) }}
        />
        <RadioForm
          title="Enrolável"
          name="tipo_toldo"
          checked={product_answers().toldo!.data.tipo === "enrolavel"}
          onInput={() => { product_answers().toldo!.data.tipo = "enrolavel"; setProductAnswers(product_answers()) }}
        />
      </RadioContainer>
      <RadioContainer labelId="material_toldo" labelText="Material de Toldo">
        <RadioForm
          title="Lona"
          name="material_toldo"
          checked={product_answers().toldo!.data.material === "lona"}
          onInput={() => { product_answers().toldo!.data.material = "lona"; setProductAnswers(product_answers()) }}
        />
        <RadioForm
          title="Policarbonato"
          name="material_toldo"
          checked={product_answers().toldo!.data.material === "policarbonato"}
          onInput={() => { product_answers().toldo!.data.material = "policarbonato"; setProductAnswers(product_answers()) }}
        />
      </RadioContainer>

      <RadioContainer labelId="acionamento_tipo" labelText="Tipo de Acionamento">
        <RadioForm
          title="Manual"
          name="acionamento_toldo"
          checked={
            product_answers().toldo!.data.tipo_acionamento === "manual"}
          onInput={() => { product_answers().toldo!.data.tipo_acionamento = "manual"; setProductAnswers(product_answers()) }}
        />
        <RadioForm
          title="Retratil"
          name="acionamento_toldo"
          checked={product_answers().toldo!.data.tipo_acionamento === "retratil"}
          onInput={() => { product_answers().toldo!.data.tipo_acionamento = "retratil"; setProductAnswers(product_answers()) }}
        />
      </RadioContainer>

      <InputField
        labelId="projecao_toldo"
        labelText="Projeção"
        onInput={(e) => { product_answers().toldo!.data.projecao = e.currentTarget.value; setProductAnswers(product_answers()) }}
      />
      <InputField
        labelId="altura_toldo"
        labelText="Altura"
        placeholder="2.31m"
        onInput={(e) => { product_answers().toldo!.data.altura = e.currentTarget.value; setProductAnswers(product_answers()) }}
      />
    </>
  );
};