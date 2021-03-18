# Projeto Final Movieflix - Bootcamp DevSuperior

## Visão Geral e finalidade do projeto
O sistema MovieFlix consiste numa base de dados de filmes, os quais podem ser listados e avaliados pelos utilizadores. 
Utilizadores autenticados que podem ser visitantes (VISITOR) e membros (MEMBER). Apenas utilizadores membros podem inserir avaliações aos filmes no sistema.

Ao aceder ao sistema, o utilizador deverá fazer o login. Apenas utilizadores autenticados podem visualizar os filmes disponíveis. 
Após fazer o login, o utlizador será direcionado para uma listagem dos filmes disponíveis de forma paginada, ordenados alfabeticamente por título sendo que o utilizador poderá filtrar os filmes por gênero.

Ao selecionar um dos filmes disponíveis o utilizador é reecaminhado para a página de detalhes desse mesmo filme, podendo visualizar todos os detalhes desse filme e as suas avaliações. 
Caso o utilizador seja utilizador do tipo membro, ele pode ainda adicionar uma nova avaliação ao filme que está a ver.

## Modelo Conceitual
![alt text](https://i.imgur.com/McJqku4.png)

## Casos de uso

#### Efetuar login
1. [IN] O utilizador anônimo informa o seu email e password
2. [OUT] O sistema informa um token válido

#### Listar filmes
1. [OUT] O sistema apresenta uma listagem dos nomes de todos gêneros, bem como uma listagem paginada com título, subtítulo, ano e imagem dos filmes, ordenada alfabeticamente por título.
2. [IN] O utilizador visitante ou membro seleciona, opcionalmente, um gênero.
3. [OUT] O sistema apresenta a listagem atualizada, restringindo somente ao gênero selecionado.

#### Visualizar detalhes do filme
1. [IN] O utilizador visitante ou membro seleciona um filme
2. [OUT] O sistema informa título, subtítulo, ano, imagem e sinopse do filme, e também uma listagem dos textos das avaliações daquele filme juntamente com nome do utilizador que fez cada avaliação.
3. [IN] O utilizador membro informa, opcionalmente, um texto para avaliação do filme.
4. [OUT] O sistema apresenta os dados atualizados, já aparecendo também a avaliação feita pelo utilizador.

# Implementações

## Layout Frontend Web

![alt text](https://i.imgur.com/8SAB9Fr.png)
![alt text](https://i.imgur.com/6wR3cpR.png)
![alt text](https://i.imgur.com/wXTcf8s.png)
![alt text](https://i.imgur.com/fV7U7oe.png)


# Tecnologias

-> Padrão de camadas
-> Web service REST

## Back end

-> Java 11

-> Spring boot 2.3

-> Maven

-> Cloud OAuth2

-> JPA

-> Swagger

-> Base de dados H2

-> Postman

-> JUnit

## Front end

-> HTML 

-> CSS 

-> TypeScript

-> ReactJS

-> React Navigation

-> Axios

-> React Content Loader

-> React Hook Form

## Implantação em produção

-> Backend: Heroku

-> Frontend web: Vercel

-> Banco de dados: Postgresql

# [Acesso e testes de usabilidade](https://leodelmiro-movieflix.netlify.app/)

```bash
# Utilizador tipo visitante:
user: bob@gmail.com
password: 123456

# Utilizador tipo membro:
user: ana@gmail.com
password: 123456
```

# Como executar o projeto

## Instalação (Clone)

## Backend
-> Exemplo de compilador para abrir: 
Spring Boot Suite

```bash
# Clonar repositório GitHub
git clone https://github.com/isdma8/bds-movieflix

# Entrar na pasta do projeto backend
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Frontend web
-> Exemplo de compilador para abrir: 
Visual Studio Code

```bash
# clonar repositório
git clone https://github.com/isdma8/bds-movieflix

# entrar na pasta do projeto front-web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

### Licença
Free :)


