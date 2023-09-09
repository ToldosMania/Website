container_default_name := "test_toldos"

prod-image:
    buildah build -f Containerfile -t prod_toldos .

dev-image:
    buildah build -f dev.Containerfile -t dev_toldos .

prod-container:
    podman run --name prod_toldos -p 4321:4321 prod_toldos 

dev-container:
    podman run -v .:/app:Z --name dev_toldos -p 4321:4321 dev_toldos 

start-dev:
    podman start dev_toldos

start-prod:
    podman start prod_toldos