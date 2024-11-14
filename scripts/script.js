/*****************************************Variables*********************************************/

const audio = new Audio();
audio.src = "../assets/sounds/tecla_sonido.MP3";

let player

let player_points = 0;

let enemy_points = 0;

let rounds = 0;

/******************************************Jugadas***********************************************/

function piedra() {
    player = 0
}
function papel() {
    player = 1
}
function tijera() {
    player = 2
}

/*******************************************Jugar**********************************************/

function jugar() {
    if (player == 0) {
        alert("Elegiste piedra")
    } else if (player == 1) {
        alert("Elegiste papel")
    } else if (player == 2) {
        alert("Elegiste tijera")
    }

    let enemy = Math.round(Math.random() * 2);

    if (enemy == 0) {
        alert("El enemigo eligió piedra")
    } else if (enemy == 1) {
        alert("El enemigo eligió papel")
    } else if (enemy == 2) {
        alert("El enemigo eligió tijera")
    };

    if (player == enemy) {
        alert("Empate")
    } else if (player == 0 && enemy == 2) {
        alert("GANASTE")
        player_points++
        rounds++
        console.log(("Player ") + player_points)
        console.log(("Rounds ") + rounds)
        document.getElementById('player_stats').innerHTML = "Player: " + player_points
        document.getElementById('rounds').innerHTML = "Round: " + rounds
    } else if (player == 1 && enemy == 0) {
        alert("GANASTE")
        player_points++
        rounds++
        console.log(("Player ") + player_points)
        console.log(("Rounds ") + rounds)
        document.getElementById('player_stats').innerHTML = "Player: " + player_points
        document.getElementById('rounds').innerHTML = "Round: " + rounds
    } else if (player == 2 && enemy == 1) {
        alert("GANASTE")
        player_points++
        rounds++
        console.log(("Player ") + player_points)
        console.log(("Rounds ") + rounds)
        document.getElementById('player_stats').innerHTML = "Player: " + player_points
        document.getElementById('rounds').innerHTML = "Round: " + rounds
    } else if (player == undefined) {
        alert("No eligíste ninguna opción")
    } else {
        alert("Perdiste")
        enemy_points++
        rounds++
        console.log(("Enemy ") + enemy_points)
        console.log(("Rounds ") + rounds)
        document.getElementById('enemy_stats').innerHTML = "Enemy: " + enemy_points
        document.getElementById('rounds').innerHTML = "Round: " + rounds
    }
    /*************Ganar/Perder*************/
    if (rounds == 3 && player_points >= 2) {
        ocultar_mostrar_G()
    } else if (rounds == 3 && enemy_points >= 2) {
        ocultar_mostrar_P()
    }
}

/***********************************Contador de puntos*****************************************/

document.getElementById('player_stats').innerHTML = "Player: " + player_points

document.getElementById('enemy_stats').innerHTML = "Enemy: " + enemy_points

/************************************Contador de rondas****************************************/

document.getElementById('rounds').innerHTML = "Round: " + rounds

/************************************Funciones*************************************************/

function ocultar_mostrar_G() {
    document.getElementById('ocultar').style.display = 'none'
    document.getElementById('ocultar_botones').style.display = 'none'
    document.getElementById('ganasteid').style.display = 'block'
}
function ocultar_mostrar_P() {
    document.getElementById('ocultar').style.display = 'none'
    document.getElementById('ocultar_botones').style.display = 'none'
    document.getElementById('perdisteid').style.display = 'block'
}


/*
    Detectar cuando el jugador gana o pierde
*/