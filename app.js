/*
Variables let 
Constantes const
Ventana emergente prompt
Alerta emergente alert 
*/

let username = prompt("Por favor ingrese su nombre")
alert("Bienvenido " + username)

let frmNotes = document.getElementById("frm-notes")

let note1 = document.getElementById("txt-note1")
let note2 = document.getElementById("txt-note2")
let note3 = document.getElementById("txt-note3")

let pResolve = document.getElementById("p-resolve")

frmNotes.addEventListener("submit", calculeNotes)

function calculeNotes(event){
    event.preventDefault() // No elimina los datos de los input despues de hacer el submit
    let data1 = note1.value
    let data2 = note2.value
    let data3 = note3.value

    let response = 

    pResolve.textContent = ` Data1: ${typeof data1}`
}