
export function dataFormatada(){

    let data = new Date().toLocaleDateString("it-IT")

    let diaDaSemana = new Date().toLocaleDateString("it-IT", {
    weekday: "long",})
    
    let horaDoDia = new Date().toLocaleTimeString("it-IT",{
        hour: "numeric",
        minute: "numeric"
    })
    return `${diaDaSemana} (${data}) as ${horaDoDia}`

}
