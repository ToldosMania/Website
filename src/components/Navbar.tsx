import { useEffect } from 'preact/hooks';

let prevScrollpos = window.scrollY;
const navbar_identifier = "navbar_init_main";
//const base_url = "/toldosmania-web";

const scrollHandler = (event: Event | null) => {
    event = null;
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById(navbar_identifier)!.style.top = "0";
    } else {
        document.getElementById(navbar_identifier)!.style.top = "-75px";
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
        <div class="navbar bg-blue-500 text-white p-4 fixed z-50 transition-all" id={navbar_identifier}>
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
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a href="/toldosmania-web/">Início</a></li>
                        <li><a href="/toldosmania-web/galeria/toldos">Toldos</a></li>
                        <li><a href="/toldosmania-web/galeria/coberturas">Coberturas</a></li>
                        <li><a href="/toldosmania-web/galeria/telas">Telas</a></li>
                        <li><a href="/toldosmania-web/galeria/vidros">Vidros</a></li>
                        <li><a href="/toldosmania-web/galeria/cortinas">Cortinas</a></li>
                        <li><a href="/toldosmania-web/#contato">Contato</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl hidden lg:block" href="/toldosmania-web/"
                ><img
                        src="/toldosmania-web/logo.jpg"
                        alt="Logo ToldosMania"
                        class="object-scale-down h-12 w-32 rounded-xl border-4 bg-white border-white"
                    /></a
                >
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 xl:text-lg">
                    <li><a href="/toldosmania-web/">Início</a></li>
                    <li><a href="/toldosmania-web/galeria/toldos">Toldos</a></li>
                    <li><a href="/toldosmania-web/galeria/coberturas">Coberturas</a></li>
                    <li><a href="/toldosmania-web/galeria/telas">Telas</a></li>
                    <li><a href="/toldosmania-web/galeria/vidros">Vidros</a></li>
                    <li><a href="/toldosmania-web/galeria/cortinas">Cortinas</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a
                    href="/toldosmania-web/#contato"
                    class="btn btn-info text-white sm:btn-md border-b-4 hover:bg-white hover:text-gray-800 hover:border-blue-200 hidden lg:flex"
                >Contato</a>
                <a class="btn btn-ghost normal-case text-xl lg:hidden" href="/toldosmania-web/"
                ><img
                        src="/toldosmania-web/logo.jpg"
                        alt="Logo ToldosMania"
                        class="object-scale-down h-12 w-32 rounded-xl border-4 bg-white border-white"
                    /></a
                >
            </div>
        </div>
    )
}