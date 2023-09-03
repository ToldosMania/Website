import { useEffect } from 'preact/hooks';

let prevScrollpos = window.scrollY;
const navbar_identifier = "navbar_init_main";

const scrollHandler = (event: Event | null) => {
    event = null;
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById(navbar_identifier)!.style.top = "0";
    } else {
        document.getElementById(navbar_identifier)!.style.top = "-75px"
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
        <div class="navbar bg-blue-500 text-white p-4 sticky top-10 z-50 transition-all" style="top: 0px" id={navbar_identifier}>
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"></path></svg
                        >
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white text-gray-800"
                    >
                        <li><a href={base_url}>Início</a></li>
                        <li><a href={base_url + "galeria/toldos"}>Toldos</a></li>
                        <li><a href={base_url + "galeria/coberturas"}>Coberturas</a></li>
                        <li><a href={base_url + "galeria/telas"}>Telas</a></li>
                        <li><a href={base_url + "galeria/vidros"}>Vidros</a></li>
                        <li><a href={base_url + "galeria/cortinas"}>Cortinas</a></li>
                        <li><a href={base_url + "#contato"}>Contato</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl hidden lg:block" href={base_url}
                ><img
                        src={base_url + "logo.jpg"}
                        alt="Logo ToldosMania"
                        loading="lazy"
                        decoding="async"
                        class="object-scale-down h-12 w-32 rounded-xl border-4 bg-white border-white"
                    /></a
                >
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 xl:text-lg">
                    <li><a href={base_url}>Início</a></li>
                    <li><a href={base_url + "galeria/toldos"}>Toldos</a></li>
                    <li><a href={base_url + "galeria/coberturas"}>Coberturas</a></li>
                    <li><a href={base_url + "galeria/telas"}>Telas</a></li>
                    <li><a href={base_url + "galeria/vidros"}>Vidros</a></li>
                    <li><a href={base_url + "galeria/cortinas"}>Cortinas</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a
                    href={base_url + "#contato"}
                    class="btn btn-info text-white sm:btn-md border-b-4 border-blue-400 hover:bg-blue-400 hover:border-blue-400 hidden lg:flex"
                >Contato</a>
                <a class="btn btn-ghost normal-case text-xl lg:hidden" href={base_url}
                ><img
                        src={base_url + "logo.jpg"}
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