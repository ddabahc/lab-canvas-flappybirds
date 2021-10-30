/**
 * Archivo para variables que utiliza mi video juego
 */

 const canvas = document.getElementById("canvas")
 const ctx = canvas.getContext("2d")
 
let frames = 0
const gravity = 0.1

// arrays Pipes
let pipes = []

let points = 0
let diff = 1
let requestId



// audio
const audio = new Audio ()
//audio.src = ""






// ejemplo valores para heroe

let dylanDefault ={
    vida: 3,
    status: "pequeño", // pequeño, grande , rojo, especial...
    monedas:0
}