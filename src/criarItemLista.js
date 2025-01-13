const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemLista() {
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox- " + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);

  itemDaLista.appendChild(containerItemDaLista);

  const diaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });

  const data = new Date().toLocaleDateString("pt-BR");
  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  const dataCompleta = `${diaSemana} (${data}) às ${hora}`;
  const dataHora = document.createElement("p");
  dataHora.classList.add("texto-data");
  dataHora.innerText = dataCompleta;

  itemDaLista.appendChild(dataHora);

  return itemDaLista;
}
