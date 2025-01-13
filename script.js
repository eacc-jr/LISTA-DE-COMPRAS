import { criarItemLista } from "./src/criarItemLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemLista();
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia();
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
  const itensLista = listaDeCompras.querySelectorAll("li");
  if (itensLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}
verificarListaVazia();
