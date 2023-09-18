import { useEffect } from "preact/hooks";
import { BASE_URL, CONTATO } from "../toldosmania_info";

let prevScrollpos = window.scrollY;
const navbar_identifier = "navbar_init_main";

const scrollHandler = (event: Event | null) => {
  event = null;
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById(navbar_identifier)!.style.top = "0";
  } else {
    document.getElementById(navbar_identifier)!.style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      id={navbar_identifier}
      class="navbar sticky top-10 z-50 border-b-2 border-base-300 bg-base-100 p-2 text-neutral-content shadow-md transition-all"
      style="top: 0px"
    >
      <div class="navbar-start">
        <div class="dropdown bg-base-100 text-base-content">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <img
              src={`${BASE_URL}/icon/mdi-menu.svg`}
              alt="Menu"
              class="block h-12 w-12 object-scale-down lg:hidden"
              decoding="async"
              loading="lazy"
            />
          </label>
          <ul
            tabindex="0"
            class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2"
          >
            <li>
              <a href={BASE_URL}>Início</a>
            </li>
            <li>
              <a href={`${BASE_URL}/dicas`}>Dicas</a>
            </li>
            <li>
              <a href={`${BASE_URL}/orcamento`}>Orçamento</a>
            </li>
            <li>
              <a href={`${BASE_URL}/#contato`}>Contato</a>
            </li>
            <li>
              <a href={`${BASE_URL}/galeria/toldos`}>Toldos</a>
            </li>
            <li>
              <a href={`${BASE_URL}/galeria/coberturas`}>Coberturas</a>
            </li>
            <li>
              <a href={`${BASE_URL}/galeria/telas`}>Telas</a>
            </li>
            <li>
              <a href={`${BASE_URL}/galeria/vidros`}>Vidros</a>
            </li>
            <li>
              <a href={`${BASE_URL}/galeria/cortinas`}>Cortinas</a>
            </li>
          </ul>
        </div>
        <a
          class="btn btn-ghost hidden text-xl normal-case lg:block"
          href={BASE_URL}
        >
          <img
            src={`${BASE_URL}/logo_slim.png`}
            alt="Logo ToldosMania"
            loading="lazy"
            decoding="async"
            class="h-12 w-32 rounded-xl border-4 border-white bg-white object-scale-down"
          />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-base-content xl:text-lg">
          <li>
            <a href={BASE_URL}>Início</a>
          </li>
          <li>
            <a href={`${BASE_URL}/dicas`}>Dicas</a>
          </li>
          <li>
            <a href={`${BASE_URL}/orcamento`}>Orçamento</a>
          </li>
          <li>
            <details>
              <summary>Toldos</summary>
              <ul class="bg-base-200 p-2 text-base-content">
                <li>
                  <a href={`${BASE_URL}/galeria/toldos#lona`}>Lona</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/galeria/toldos#policarbonato`}>
                    Policarbonato
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Coberturas</summary>
              <ul class="bg-base-200 p-2 text-base-content">
                <li>
                  <a href={`${BASE_URL}/galeria/coberturas#lona`}>Lona</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/galeria/coberturas#policarbonato`}>
                    Policarbonato
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/galeria/coberturas#zincada`}>Zincada</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Vidros</summary>
              <ul class="bg-base-200 p-2 text-base-content">
                <li>
                  <a href={`${BASE_URL}/galeria/vidros#box`}>Box</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/galeria/vidros#portas`}>Portas</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/galeria/vidros#janela_2_folhas`}>
                    Janelas
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href={`${BASE_URL}/galeria/telas`}>Telas</a>
          </li>
          <li>
            <a href={`${BASE_URL}/galeria/cortinas`}>Cortinas</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn btn-ghost ml-10" href={CONTATO.phone}>
          <img src={`${BASE_URL}/icon/mdi-phone.svg`} alt="Telefone" class="h-10 w-10" />
        </a>
        <a class="btn btn-ghost" href={CONTATO.whatsapp}>
          <img src={`${BASE_URL}/icon/mdi-whatsapp.svg`} alt="Whatsapp" class="h-10 w-10" />
        </a>
        <a class="hidden lg:flex" href={CONTATO.phone}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Telefone</title>
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          </svg>
        </a>
        <a
          href={`${BASE_URL}/#contato`}
          class="btn btn-primary hidden border-b-4 border-primary-focus text-primary-content sm:btn-md hover:border-primary-focus hover:bg-primary-focus lg:flex"
        >
          Contato
        </a>
        <a class="btn btn-ghost text-xl normal-case lg:hidden" href={BASE_URL}>
          <img
            src={`${BASE_URL}/logo.jpg`}
            alt="Logo ToldosMania"
            class="h-12 w-32 rounded-xl border-4 border-white bg-white object-scale-down"
            decoding="async"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}