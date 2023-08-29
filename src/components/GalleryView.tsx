import { useState } from "preact/hooks";

const close_gallery = (id: string) => {
    document.getElementById(id)!.classList.add("hidden");
}

const show_gallery = (id: string) => {
    document.getElementById(id)!.classList.remove("hidden");
}

type GalleryItem = {
    title: string,
    url: string,
    description: string
};

export default function GalleryView(props: { product_type: string, gallery_items: GalleryItem[] }) {
    const base_web = "/toldosmania-web";
    const id_gallery_viewer = "unique_gallery_viewer";
    const id_gallery_fullscreen = "gallery_viewer_fullscreen";

    const [selected_image, set_selected_image] = useState("");
    const [current_item, set_current_item] = useState({} as GalleryItem);
    return (
        <>
            <div id={id_gallery_viewer} style="z-index: 9999;" class="bg-base-100 bg-opacity-75 w-full h-full inset-0 fixed hidden">
                <div class="flex justify-end ">
                    <div class="bg-white rounded-2xl flex flex-row flex-wrap">
                        <a onClick={() => {
                            document.getElementById(id_gallery_viewer)?.requestFullscreen();
                        }}>
                            <img src={base_web + "/icon/mdi-fullscreen.svg"} alt="Tela Cheia" class="h-24 w-24 text-white" id={id_gallery_fullscreen} />
                        </a>
                        <a onClick={() => close_gallery(id_gallery_viewer)}>
                            <img src={base_web + "/icon/mdi-close-circle.svg"} alt="Fechar" class="h-24 w-24 text-white" />
                        </a>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center" style="height: 70vh;">
                    <div class="flex flex-col justify-center bg-white max-w-md rounded-xl p-10">
                        <img src={base_web + "/gallery/" + selected_image} alt={current_item.title} class="scale-110" />
                        <p class="text-2xl py-3 mt-3">{current_item.title}</p>
                        <p class="text-lg text-left">{current_item.description}</p>
                    </div>
                </div>
            </div>
            {props.gallery_items.map(item =>
                <img
                    id={props.product_type + "/" + item.url}
                    onClick={() => {
                        set_selected_image(props.product_type + "/" + item.url);
                        set_current_item(item);
                        show_gallery(id_gallery_viewer);
                    }}
                    src={base_web + "/gallery/" + props.product_type + "/" + item.url}
                    alt={item.title}
                    class="rounded-2xl w-1/3 h-1/3 lg:w-1/6 lg:h-1/6 transition-transform ease-in-out hover:scale-105 m-3" />
            )}
        </>
    );
}