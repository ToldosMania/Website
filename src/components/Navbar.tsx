import { useEffect } from 'preact/hooks';

let prevScrollpos = window.scrollY;
const navbar_identifier = "navbar_init_main";

const scrollHandler = (event: Event | null) => {
    event = null;
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById(navbar_identifier)!.style.top = "0";
    } else {
        document.getElementById(navbar_identifier)!.style.top = "-60px"
    }
    prevScrollpos = currentScrollPos;
};

export default function Navbar() {
    const base_url = import.meta.env.BASE_URL;

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div id={navbar_identifier} class="navbar bg-white text-gray-50 p-2 sticky top-10 z-50 transition-all border-b-2 shadow-md" style="top: 0px">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden text-black">
                        <img
                            src={`${base_url}/icon/mdi-menu.svg`}
                            alt="Menu"
                            class="object-scale-down h-12 w-12 block lg:hidden"
                            decoding="async"
                            loading="lazy"
                        />
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white text-gray-800"
                    >
                        <li><a href={base_url}>Início</a></li>
                        <li><a href={`${base_url}/orcamento`}>Orçamento</a></li>
                        <li><a href={`${base_url}/dicas`}>Dicas</a></li>
                        <li><a href={`${base_url}/galeria/toldos`}>Toldos</a></li>
                        <li><a href={`${base_url}/galeria/coberturas`}>Coberturas</a></li>
                        <li><a href={`${base_url}/galeria/telas`}>Telas</a></li>
                        <li><a href={`${base_url}/galeria/vidros`}>Vidros</a></li>
                        <li><a href={`${base_url}/galeria/cortinas`}>Cortinas</a></li>
                        <li><a href={`${base_url}/#contato`}>Contato</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl hidden lg:block" href={base_url}
                ><img
                        src={`${base_url}/logo_slim.png`}
                        alt="Logo ToldosMania"
                        loading="lazy"
                        decoding="async"
                        class="object-scale-down h-12 w-32 rounded-xl border-4 bg-white border-white"
                    /></a
                >
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 xl:text-lg text-gray-800">
                    <li><a href={base_url}>Início</a></li>
                    <li><a href={`${base_url}/dicas`}>Dicas</a></li>
                    <li>
                        <details>
                            <summary>
                               Toldos
                            </summary>
                            <ul class="p-2 bg-white text-black">
                                <li><a href={`${base_url}/galeria/toldos#lona`}>Lona</a></li>
                                <li><a href={`${base_url}/galeria/toldos#policarbonato`}>Policarbonato</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><details>
                            <summary>
                               Coberturas
                            </summary>
                            <ul class="p-2 bg-white text-black">
                                <li><a href={`${base_url}/galeria/coberturas#lona`}>Lona</a></li>
                                <li><a href={`${base_url}/galeria/coberturas#policarbonato`}>Policarbonato</a></li>
                                <li><a href={`${base_url}/galeria/coberturas#zincada`}>Zincada</a></li>
                            </ul>
                        </details></li>
                    <li><a href={`${base_url}/galeria/telas`}>Telas</a></li>
                    <li><a href={`${base_url}/galeria/vidros`}>Vidros</a></li>
                    <li><a href={`${base_url}/galeria/cortinas`}>Cortinas</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a
                    href={`${base_url}/orcamento`}
                    class="btn btn-info sm:btn-md btn-ghost hidden lg:flex text-black"
                >Orçamento</a>
                <a
                    href={`${base_url}/#contato`}
                    class="btn btn-info text-white sm:btn-md border-b-4 border-blue-400 hover:bg-blue-400 hover:border-blue-400 hidden lg:flex"
                >Contato</a>
                <a class="btn btn-ghost normal-case text-xl lg:hidden" href={base_url}
                ><img
                        src={`${base_url}/logo.jpg`}
                        alt="Logo ToldosMania"
                        class="object-scale-down h-12 w-32 rounded-xl border-4 bg-white border-white"
                        decoding="async"
                        loading="lazy"
                    /></a
                >
            </div>
        </div>
    )
}