import { criarItemLista } from "./src/criarItemLista.js";
import verificarListaVazia from "./src/verificarLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");


const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemLista();
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);
