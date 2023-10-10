let BASE_URL = "https://toldosmania.com.br";

const CONTATO = {
  facebook: "https://www.facebook.com/Toldos-Mania-976788302365509/?fref=ts",
  instagram: "https://www.instagram.com/toldosmania/?ref=badge",
  phone: "tel:26856588",
  whatsapp: "https://wa.me/5511964201127",
  email: "mailto:vendas@toldosmania.com.br",
  maps: "https://goo.gl/maps/su5as6pW1eMrF8JH6",
};

type GalleryItem = {
  title: string;
  url: string;
  description: string;
};

export { BASE_URL, CONTATO };
export type { GalleryItem };