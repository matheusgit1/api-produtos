<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    
    
# API-PRODUTOS

## Sobre este projeto

Este projeto tem por principal objetivo o desenvolvimento de uma api de produtos que seráconsumida pelo front-emd commerce suite, disponivel em: https://github.com/matheusgit1/commerce-suit


## Autores

- [Matheus Alves Pereira](https://www.linkedin.com/in/matheus-alves-pereira-4b3781222/)

## Stack utilizada


**Back-end:**
Node,
Express,
nestjs,
typescript,
javascrip,
aws,
Sql,
banco de dados postgress

**Ferramentas de teste:**
jest, postman




## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

no diretorio raíz copie e cole as chaves do arquivo ".env.example" em seu ".env" com os valores adequados

- exemplo
PORT = 3000



## Rodando localmente

### requisitos

nodejs na versao 15.x ou superior

pode ser baixado aqui: https://nodejs.org/pt-br/download/

verifique se o node foi instalado corretamente com o seguinte comendo no cmd ou powerShell

```bash
  node --version
```
#### em caso de comando não reconheciod, reinicie seu computador

#### baixe o aplicativo "expo" na playstore ou apple store.


####  (opcional) instale o yarn para o usar a cli do yarn
no seu cmd ou powerShell use o comando


```bash
  npm install yarn --global
```
verifique se o yarn foi instalado corretamente com o seguinte comendo no cmd ou powerShell

```bash
  yarn --version
```

Clone o projeto com o  seguinto comando no cmd, powerShell, wsl ou qualquer gerenciador
de sub sistemas de sua preferência


```bash
  git clone https://github.com/matheusgit1/api-produtos.git
```

Entre no diretório do projeto

```bash
  cd api-autenticacao
```

Instale as dependências

```bash
  yarn install
```

ou

```bash
  npm install
```

Inicie o servidor

```bash
  yarn start:dev
```
ou

```bash
  npm run yarn start:dev
```

## Condições iniciais

#### para o funcionamento adequado é necessario que suas variaveis de ambientes estejam corretas


# Documentação da api

a collection postman dessa api está idisponivel dentro desse repositório: em: [https://github.com/matheusgit1/api-enderecos/blob/main/adress.api.docs](https://github.com/matheusgit1/api-produtos/blob/main/products.api.collection)

### variaveis

#### URL_API_PRODUTOS: variavel onde a api estará rodando localmente

#### TOKEN: token de atuenticação (você só consegue ele na rota de login da api de autenticação)

### Retornos padronizados

status 400 - Bad request

status 404 - Recurso não encontrado

status 500 - erro interno

stauts 200 - ok

## Rotas


#### Criar um novo recurso no contexto de produtos

```http
  POST /product/create
```


| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação|


| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. nome do produto|
| `price` | `number` | **Obrigatório**. preço (em reais)|
| `description` | `string` | **Obrigatório**.  breve descrição do produto|
| `categories` | `array de string` | **Obrigatório**.  categorias que seu produto se encaixa|
| `mainCategories` | `string` | **Obrigatório**.  categoria principal |
| `installments` | `number` | **Obrigatório**.  número maximo de parcelas | 
| `images` | `array de string` | **Obrigatório**.  array de string contendo os links de suas fotos | 
| `discount` | `number` | **Obrigatório**.  desconto | 
| `marc` | `string` | **Obrigatório**.  marca | 
| `conditions` | `string` | **Obrigatório**.  condições (novo, usad0, semi-novo ....) | 
| `features` | `array de objetos` | **Opcional**. caractersticas de seu produto| 

#### campo features deve ser um array de objetos com o segune formato, obrigatóriamente.

```JSON
{
    "title": string,
    "body":{
        [x: string] : string
    }
}
```

#### exemplo de features
```JSON
[
    {
        "title": "gerais",
        "body":{
            "tipo":"eletronico",
            "peso": "30kg"
        }
    },
    {
        "title": "especifico",
        "body":{
            "marca":"marca",
            "autonomia": "blá blá blá",
            ...
        }
    },
    ...
]
```

#### Retorna status 201 caso tudo esteja no formato esperado

#### Recupera um produto especifico

```http
  POST /product/:id
```

| params   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id do produto |

#### Retorna status 200 caso tudo esteja no formato esperado com o seguinte objeto

```JSON
{
    "id": "bc9b1acb-6f81-4546-bc56-148ac7bd3a0c",
    "name": "maquina de lavar",
    "price": "350",
    "description": "Maquina de lavar autonoma com economia de energia",
    "categories": [
        "eletronico",
        "domestico",
        "para casa"
    ],
    "mainCategories": "domestico",
    "installments": "4",
    "images": [
        "https://electrolux.vtexassets.com/arquivos/ids/203660/lavadora-turbo-economia-lac09-com-dispenser-autoclean-e-tecnologia-jeteclean-cor-branca-Detalhe1.jpg?v=637394240050630000",
        "https://s2.glbimg.com/NzitoDQGhjN6--RWdU8z85QMKmw=/e.glbimg.com/og/ed/f/original/2018/12/21/lava__seca_samsung_wd4000_de_10.2kg.jpg"
    ],
    "userId": "7d15a6fb-69df-4af8-ac29-5b75ab634d88",
    "discount": "0",
    "marc": "eletrolux",
    "conditions": "novo",
    "features": [
        {
            "title": "gerais",
            "body": {
                "tipo": "eletronico",
                "peso": "30kg"
            }
        },
        {
            "title": "gerais",
            "body": {
                "tipo": "eletronico",
                "peso": "30kg"
            }
        }
    ],
    "createdAt": "2022-08-11T19:38:35.335Z",
    "updatedAt": "2022-08-11T19:38:35.335Z"
}
```

#### Recupera umm lista de produtos

```http
  POST /product/list/:pagination
```

| params   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `pagination` | `number` | **Obrigatório**. pagnição da lista |

#### Retorna status 200 caso tudo esteja no formato esperado com o seguinte objeto

```JSON
[
    {
        "id": "3b836249-ee65-488c-bee1-6c40615b594e",
        "name": "maquina de lavar",
        "price": "350",
        "description": "Maquina de lavar autonoma com economia de energia",
        "categories": [
            "eletronico",
            "domestico",
            "para casa"
        ],
        "mainCategories": "domestico",
        "installments": "4",
        "images": [
            "https://electrolux.vtexassets.com/arquivos/ids/203660/lavadora-turbo-economia-lac09-com-dispenser-autoclean-e-tecnologia-jeteclean-cor-branca-Detalhe1.jpg?v=637394240050630000",
            "https://s2.glbimg.com/NzitoDQGhjN6--RWdU8z85QMKmw=/e.glbimg.com/og/ed/f/original/2018/12/21/lava__seca_samsung_wd4000_de_10.2kg.jpg"
        ],
        "userId": "7d15a6fb-69df-4af8-ac29-5b75ab634d88",
        "discount": "0",
        "marc": "eletrolux",
        "conditions": "novo",
        "features": [
            {
                "title": "gerais",
                "body": {
                    "tipo": "eletronico",
                    "peso": "30kg"
                }
            },
            {
                "title": "gerais",
                "body": {
                    "tipo": "eletronico",
                    "peso": "30kg"
                }
            }
        ],
        "createdAt": "2022-08-11T17:01:03.626Z",
        "updatedAt": "2022-08-11T17:01:03.626Z"
    }
    ....
]
```

##### a api retorna 20 em 20 produtos com base na paginação, passado nos parametros da rota (:pagination)


### Atualiza um recurso no contexto de produtos

```http
  PUT /product/update
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação|


| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. nome do produto|
| `price` | `number` | **Obrigatório**. preço (em reais)|
| `description` | `string` | **Obrigatório**.  breve descrição do produto|
| `categories` | `array de string` | **Obrigatório**.  categorias que seu produto se encaixa|
| `mainCategories` | `string` | **Obrigatório**.  categoria principal |
| `installments` | `number` | **Obrigatório**.  número maximo de parcelas | 
| `images` | `array de string` | **Obrigatório**.  array de string contendo os links de suas fotos | 
| `discount` | `number` | **Obrigatório**.  desconto | 
| `marc` | `string` | **Obrigatório**.  marca | 
| `conditions` | `string` | **Obrigatório**.  condições (novo, usad0, semi-novo ....) | 
| `features` | `array de objetos` | **Opcional**. caractersticas de seu produto| 
| `features` | `array de objetos` | **Opcional**. id do produto| 

#### Retorna status 200 caso tudo esteja no formato esperado


### desativa um recurso no contexto de produtos

```http
  PATCH /product/desactive
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação|


| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id do produto|

#### Retorna status 200 caso tudo esteja no formato esperado

### delete um recurso no contexto de produtos

```http
  DELETE /product/desactive
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação|


| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id do produto|

### faz upload de imagens para o bucket s3 da aws
#### consfigureo antes de executar essa rota com base nessa mesma documentação

```http
  POST /product/upload
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação|


#### um array com no máximo 8 fotos

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `image` | `multpart/form-data` | **Obrigatório**. foto do produtp|


#### Retorna status 200 caso tudo esteja no formato esperado com o seguinte objeto:

```JSON
[
    {
        "fieldname": "image",
        "originalname": "perfil.PNG",
        "encoding": "7bit",
        "mimetype": "image/png",
        "size": 395692,
        "bucket": "commerce-suit",
        "key": "productd_images/7d15a6fb-69df-4af8-ac29-5b75ab634d88/4929d25b-2985-4fa8-af8b-145026f4ce8a-perfil.PNG",
        "acl": "public-read",
        "contentType": "image/png",
        "contentDisposition": null,
        "contentEncoding": null,
        "storageClass": "STANDARD",
        "serverSideEncryption": null,
        "location": "https://commerce-suit.s3.us-east-1.amazonaws.com/productd_images/7d15a6fb-69df-4af8-ac29-5b75ab634d88/4929d25b-2985-4fa8-af8b-145026f4ce8a-perfil.PNG",
        "etag": "\"53350e3f757ee4dcd920f49e62ccbe0d\""
    },
    {
        "fieldname": "image",
        "originalname": "perfil - Copia.PNG",
        "encoding": "7bit",
        "mimetype": "image/png",
        "size": 395692,
        "bucket": "commerce-suit",
        "key": "productd_images/7d15a6fb-69df-4af8-ac29-5b75ab634d88/241532b0-fa4d-4e99-ac5d-24e48b55dfc8-perfil - Copia.PNG",
        "acl": "public-read",
        "contentType": "image/png",
        "contentDisposition": null,
        "contentEncoding": null,
        "storageClass": "STANDARD",
        "serverSideEncryption": null,
        "location": "https://commerce-suit.s3.us-east-1.amazonaws.com/productd_images/7d15a6fb-69df-4af8-ac29-5b75ab634d88/241532b0-fa4d-4e99-ac5d-24e48b55dfc8-perfil%20-%20Copia.PNG",
        "etag": "\"53350e3f757ee4dcd920f49e62ccbe0d\""
    }
]
```

#### use o atributo location para encaminhar na requisção da criação de recurso

