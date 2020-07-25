# Painel SAFECIRCLE

## Para iniciar o projeto

### Usando o docker (e docker-compose)

#### Iniciando a aplicação

```bash
make
```
ou

```bash
docker-compose up
```

#### Parando a aplicação:

```bash
make down
```
ou

```bash
docker-compose down
```

#### Limpando o ambiente (usado pra resolver alguns bugs):

```bash
make down-all
```
ou

```bash
docker-compose down -v --rmi all
```

### Usando NPM e yarn

#### Adicionando Repositorios:

```js
yarn
```

#### Iniciando a aplicação:

```js
yarn start
```