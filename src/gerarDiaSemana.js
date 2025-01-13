 function gerarDiaSemana() {
    
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
    
    return dataCompleta;
}

export default gerarDiaSemana;