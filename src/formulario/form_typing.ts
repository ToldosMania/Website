export type Nullable<T> = T | undefined | null;

export interface Product {
  pretty_name: string | undefined,
  data: Record<string, Nullable<string>>
}

export const answers_init: Record<string, Product> = {
  toldo: {
    pretty_name: "Toldos",
    data: {
      "tipo": "",
      "material": "",
      "tipo_acionamento": "",
      "projecao": "",
      "altura": "",
    },
  },
  cobertura: {
    pretty_name: "Coberturas",
    data: {
      "material": "",
      "projecao": "",
    }
  },
  vidro: {
    pretty_name: "Vidros",
    data: {
      "tipo": "",
      "tipo_janela": "",
    }
  },
  tela: {
    pretty_name: "Telas",
    data: {
      "projecao": ""
    },
  },
  cortina_rolo: {
    pretty_name: "Cortinas Rolô",
    data: {
      "projecao": "",
    },
  },
};