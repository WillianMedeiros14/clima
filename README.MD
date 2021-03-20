# CLIMA

## ✅ Descrição do Projeto
<p> Este projeto foi construído no Insider 2.0, workshop gratuido realizado pelo Matheus do <a href="https://sujeitoprogramador.com/"> Sujeito Programador</a>, com foco no desenvolvimento em <a href="https://reactnative.dev/"> React Native</a>. </p>
<p> O Evento ocorreu do dia 10 ao dia 13 de março de 2021. Foram desenvolvidos 2 aplicativos, um Gerador de senhas e um de Clima. O código aqui presente neste repositório é referente ao do Clima.</p>
<p> O objetivo foi mostrar como acontece a construção de um aplicativo com funcionalodades mais avançadas, como navegações entre telas e consumo de api. </p>

<p> Após o termino do workshop foram deixado duas funcionalidades para serem implementadas como desafio, o "Aviso de sem conexão com a internet" e "Informações de detalhes ao pesquisar uma cidade". </p>
<p> O resultado da aplicação pode ser obervado abaixo: </p>

## 🎁 Demonstração de como ficou o aplicativo
<h1 align="center">
  <img alt="Aplicativo de Clima" title="#Insider2.0" src="Imagens/telaClima.gif" width=300/>
</h1>

## 🎲 Pré-requisitos e como rodar a aplicação

Estes passos são para rodar o aplicativo pelo [Expo](https://expo.io/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de código, recomendo o [VSCode](https://code.visualstudio.com/).

Baixe também o aplicativo [Expo Go](https://expo.io/client) em seu celular, pois é por ele que você poderá ver o aplicativo rodando.

### Rodando e executando a aplicação 
#### - Clone este repositório
- git clone <https://github.com/WillianMedeiros14/clima.git>

#### - Acesse a pasta do projeto no terminal/cmd
- cd clima

#### -  Instale as dependências, com npm ou yarn
- npm install 
- yarn install

### Rodando o projeto, escolha a seu critério
- expo start
- npm start
- yarn start

Após isso, irá abrir uma janela no seu navegador, aguarde aparecer um qrcode no canto inferior esquerdo.

### Visualizando o aplicativo rodando em seu celular
- Quando o qrcode aparecer na aba que abriu em seu navegador, abra o aplicativo Expo Go em seu celular e escaneie o qrcode.
- Aguarde a porcentagem chegar a 100% e o aplicativo abrirá em seu celular.

## Como ultilizar e informações do aplicativo

- Após abrir o aplicativo ele irá carregar as informações do clima referentes ao seu local atual.
- Você pode navegar pelas telas existentes atavés do menu lateal.
- Na janela de pesquisar, pode ser pesquisado o clima e previsões de uma cidade especìfica.
- Caso a sua conexão com a internet seja interrompida, irá aparecer uma tela de aviso, que só desaparecerá quando a conexão for reestabelecida.

### 🛠 Tecnologias

As seguintes ferramentas foram ultilizada na construção do projeto:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)https://hgbrasil.com/status/weather
- A api ultilizada, foi foi a versão gratuita da [HG Weather](https://hgbrasil.com/status/weather), que disponibiliza informações atuais e previsões para o clima das cidades brasileiro.