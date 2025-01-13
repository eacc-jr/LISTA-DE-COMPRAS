const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

export default function verificarListaVazia(listaDeCompras) {
  const itensLista = listaDeCompras.querySelectorAll("li");
  if (itensLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
    ("");
  }
}
