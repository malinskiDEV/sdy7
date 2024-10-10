    let opcao = ""
    let fila = []
    while (opcao !== "3") {
    
        let paciente = ""
        for (let i=0; i < fila.length; i++  ) {
            paciente += (i+1) + "o - " + fila[i] + "\n"
        }


opcao = prompt(`
    Paciente:
    ${[paciente]}
    1- Novo Paciente
    2- Consultar Paciente
    3- Sair`)

switch (opcao) {
    case "1":
        let novoPaciente = prompt("digite o nome do paciente")
        fila.push(novoPaciente)
        break;
        case "2":
            let consultaPaciente = lista.shift()
            if (!consultaPaciente){
                alert("Não existe paciente na fila!")
            } else {
                alert(`${consultaPaciente} foi atendido `)
            }
        break;  
        case "3":
            let sair = confirm("deseja sair do programa?")
        if (sair) {
            alert("saindo")
        } else {
            opcao = ""
        }
        break;
    default:
        break;
}

}