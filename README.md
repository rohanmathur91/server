### To run via docker-compose

```sh
docker compose up
```

### To run via docker

```sh
docker build -t server ./
```

```sh
docker run --init --name express-server --rm -p 8080:8080 -e PORT=8080 server
```
