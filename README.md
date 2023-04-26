<h1 align="center"> GitHub Users Navigator</h1>
<h3>Este projeto busca um usuário no github e depois mostra seus melhores projetos</h3>
<p>
Construído com o intuito de colocar em prática a Stack: HTML, CSS, React e TypeScript/Javascript.
</p>
<p>
Foi consumida uma API pública do GitHub utilizando Typescript para exibir os resultados.
</p>

> Clonando este repositório: `git clone https://github.com/IasmimFGodoy/github_users_navigator.git`

> Baixando as dependências: Navegue até a pasta raíz e digite `npm install`

> Rodando o projeto: `npm run dev`

<div align="center">

![image](https://user-images.githubusercontent.com/106850969/234610852-2905537a-029f-4346-86de-492319a5246b.png)

</div>

> <b>src</b>: é o diretório que contém toda a lógica da aplicação

> <b>assets</b>: é o diretório em que está localizado a imagem de fundo inserida no body do HTML

> <b>components</b>: é o diretório que contém os componentes e seus estilos, que vão ser renderizados posteriormente pelo Virtual DOM quando fizermos alguma alteração em sua estrutura

> <b>routes</b>: é o diretório que contém as páginas da aplicação, que nada mais são do que componentes que chamam nossos outros componentes do diretório components para formar uma interface completa. Esses componentes devem ser chamados no arquivo main.tsx.

> <b>main.tsx</b>: é o arquivo que chama nossas rotas e é onde nós devemos importar o react-router-dom para que póssamos completar o desenvolvimento da navegação entre as páginas.
<div align="center">

![image](https://user-images.githubusercontent.com/106850969/234614031-b7733c0a-ff45-496e-bee8-469e8d54b789.png)

</div>

<h4 align="center"> No código de src/main.tsx acima podemos ver: </h4>

> 1. A importação do ReactDOM, App, index.css, createBrowserRouter, RouterProvider, Home e ReposPage

> 2. Criação do objeto 'router' com a função `createBrowserRouter` do pacote 'react-router-dom'. Neste objeto é onde são passadas informações de nossas páginas Home (`/`) e ReposPage(`/repos/:login`), que são: Página de busca de usuário e Exibição dos melhores repositórios do usuário buscado, respectivamente. As duas páginas são renderizadas dentro do componente `App`.

> 3. Chama a função `ReactDOM.createRoot()` para renderizar a aplicação na DOM. `createRoot()` é utilizado para inicializar um novo sistema de renderização React, e recebe como parâmetro o elemento do DOM onde a aplicação será renderizada. O método `render()` recebe como parâmetro um componente que será renderizado na aplicação, e nesse caso, o componente é `RouterProvider` do pacote `react-router-dom`, que recebe o objeto `router` criado anteriormente.

> 4. O componente `RouterProvider` é responsável por fornecer a rota para a aplicação, e assm permite que o pacote `react-router-dom` manipule a rota para renderizar a página correspondente.


<h3 align="center">Veja abaixo o projeto funcionando:</h3>

<h4 align="center"> Funciona pressionando o enter ou clicando no botão de pesquisa graças à seguinte função: </h4>

<div align="center">

![image](https://user-images.githubusercontent.com/106850969/234618306-52254716-9f9f-47cc-9efe-557df7bc721a.png)

</div>

https://user-images.githubusercontent.com/106850969/234607520-490be4c7-7830-4f73-bc5e-d3b6fb8c63f1.mp4

<h4 align="center"> Qualquer dúvida não exite em me contactar</h4>
<p align="center">através do email: iasmimfgodoy@outlook.com ou linkedin: https://www.linkedin.com/in/iasmimgodoydevweb/</p>
