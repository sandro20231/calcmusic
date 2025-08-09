// ao clicar no botão calcular:

var btncalcular = document.querySelector('.btncalcular');
var tonalidade = document.querySelector('#tonalidade');
var escala = document.querySelector('.escala');
var lig = document.querySelector('.lig');

// buscando os campos do html
// linha 1
var c1 = document.querySelector('.campo1');
var c2 = document.querySelector('.campo2');
var c31 = document.querySelector('.campo3');
var c4 = document.querySelector('.campo4');
var c5 = document.querySelector('.campo5');
var c6 = document.querySelector('.campo6');
var c7 = document.querySelector('.campo7');
// linha 2
var c8 = document.querySelector('.campo8');
var c9 = document.querySelector('.campo9');
var c10 = document.querySelector('.campo10');
var c11 = document.querySelector('.campo11');
var c12 = document.querySelector('.campo12');
var c13 = document.querySelector('.campo13');
var c14 = document.querySelector('.campo14');
// linha 3
var c15 = document.querySelector('.campo15');
var c16 = document.querySelector('.campo16');
var c17 = document.querySelector('.campo17');
var c18 = document.querySelector('.campo18');
var c19 = document.querySelector('.campo19');
var c20 = document.querySelector('.campo20');
var c21 = document.querySelector('.campo21');
// linha 4
var c22 = document.querySelector('.campo22');
var c23 = document.querySelector('.campo23');
var c24 = document.querySelector('.campo24');
var c25 = document.querySelector('.campo25');
var c26 = document.querySelector('.campo26');
var c27 = document.querySelector('.campo27');
var c28 = document.querySelector('.campo28');

// ligação acrodes de tríades

var ac1 = document.querySelector('.acordes1');
var ac2 = document.querySelector('.acordes2');


btncalcular.addEventListener('click', function (e) {
    // selecionar tonalidade
    e.preventDefault();


    var numeroResultante = letraNumero(tonalidade.value);

    if (escala.value === "escalaMaior") {

        // calculando os intervalos da escala 
        var t = numeroResultante;
        var a = segundaMaior(numeroResultante);
        var b = tercaMaior(numeroResultante);
        var c = quartaJusta(numeroResultante);
        var d = quintaJusta(numeroResultante);
        var e2 = sextaMaior(numeroResultante);
        var f = setimaMaior(numeroResultante);

        // traduzindo em letras
        var t3 = numeroLetra(t);
        var a3 = numeroLetra(a);
        var b3 = numeroLetra(b);
        var c3 = numeroLetra(c);
        var d3 = numeroLetra(d);
        var e3 = numeroLetra(e2);
        var f3 = numeroLetra(f);



        c1.value = t3;
        c2.value = a3;
        c31.value = b3;
        c4.value = c3;
        c5.value = d3;
        c6.value = e3;
        c7.value = f3;

        c8.value = b3;
        c9.value = c3;
        c10.value = d3;
        c11.value = e3;
        c12.value = f3;
        c13.value = t3;
        c14.value = a3;

        c15.value = d3;
        c16.value = e3;
        c17.value = f3;
        c18.value = t3;
        c19.value = a3;
        c20.value = b3;
        c21.value = c3;

        c22.value = f3;
        c23.value = t3;
        c24.value = a3;
        c25.value = b3;
        c26.value = c3;
        c27.value = d3;
        c28.value = e3;

    }

    // criando os textos dos acordes 
    // tríades
    // criando os parágrafos:
    var el1 = document.createElement('p');
    var el2 = document.createElement('p');
    var el3 = document.createElement('p');
    var el4 = document.createElement('p');
    var el5 = document.createElement('p');
    var el6 = document.createElement('p');
    var el7 = document.createElement('p');
    // crianto os textos
    var t1 = document.createTextNode("Tônica: " + t3);
    var t2 = document.createTextNode("Supertônica: " + a3 + "m");
    var t3 = document.createTextNode("Média: " + b3 + "m");
    var t4 = document.createTextNode("Subdominante: " + c3)
    var t5 = document.createTextNode("Domiante: " + d3);
    var t6 = document.createTextNode("Relativa: " + e3 + "m");
    var t7 = document.createTextNode("Sensível: " + f3 + "º");
    // adicionando os textos aos elementos

    el1.appendChild(t1);
    el2.appendChild(t2);
    el3.appendChild(t3);
    el4.appendChild(t4);
    el5.appendChild(t5);
    el6.appendChild(t6);
    el7.appendChild(t7);

    // adicionando os elementos a lig

    ac1.appendChild(el1);
    ac1.appendChild(el2);
    ac1.appendChild(el3);
    ac1.appendChild(el4);
    ac1.appendChild(el5);
    ac1.appendChild(el6);
    ac1.appendChild(el7);

    // tétrades

    // criando elementos:

    var el8 = document.createElement('p');
    var el9 = document.createElement('p');
    var el10 = document.createElement('p');
    var el11 = document.createElement('p');
    var el12 = document.createElement('p');
    var el13 = document.createElement('p');
    var el14 = document.createElement('p');

    // criando os textos:

    var t8 = document.createTextNode("Tônica: " + t3 + "7+");
    var t9 = document.createTextNode("Supertônica: " + a3 + "m" + "7");
    var t10 = document.createTextNode("Média: " + b3 + "m" + "7");
    var t11 = document.createTextNode("Subdominante: " + c3 + "7+")
    var t12 = document.createTextNode("Domiante: " + d3 + "7");
    var t13 = document.createTextNode("Relativa: " + e3 + "m" + "7");
    var t14 = document.createTextNode("Sensível: " + f3 + "m7/b5");

    // adicionando texto nos elementos:

    el8.appendChild(t8);
    el9.appendChild(t9);
    el10.appendChild(t10);
    el11.appendChild(t11);
    el12.appendChild(t12);
    el13.appendChild(t13);
    el14.appendChild(t14);

    // adicionando os elementos na ligação:

    ac2.appendChild(el8);
    ac2.appendChild(el9);
    ac2.appendChild(el10);
    ac2.appendChild(el11);
    ac2.appendChild(el12);
    ac2.appendChild(el13);
    ac2.appendChild(el14);




});

// letraNumero - Função destinada a traduzir em numero as notas musicais

function letraNumero(letra) {
    if (letra == "c") {
        return 1;
    }
    if (letra == "c#") {
        return 2;
    }
    if (letra == "d") {
        return 3;
    }
    if (letra == "d#") {
        return 4;
    }
    if (letra == "e") {
        return 5;
    }
    if (letra == "f") {
        return 6;
    }
    if (letra == "f#") {
        return 7;
    }
    if (letra == "g") {
        return 8;
    }
    if (letra == "g#") {
        return 9;
    }
    if (letra == "a") {
        return 10;
    }
    if (letra == "a#") {
        return 11;
    }
    if (letra == "b") {
        return 12;
    }
    if (letra == "db") {
        return 2;
    }
    if (letra == "eb") {
        return 4;
    }
    if (letra == "gb") {
        return 7;
    }
    if (letra == "ab") {
        return 9;
    }
    if (letra == "bb") {
        return 11;
    }

    // letras maiúsculas
    if (letra == "C") {
        return 1;
    }
    if (letra == "C#") {
        return 2;
    }
    if (letra == "D") {
        return 3;
    }
    if (letra == "D#") {
        return 4;
    }
    if (letra == "E") {
        return 5;
    }
    if (letra == "F") {
        return 6;
    }
    if (letra == "F#") {
        return 7;
    }
    if (letra == "G") {
        return 8;
    }
    if (letra == "G#") {
        return 9;
    }
    if (letra == "A") {
        return 10;
    }
    if (letra == "A#") {
        return 11;
    }
    if (letra == "B") {
        return 12;
    }
    if (letra == "Db") {
        return 2;
    }
    if (letra == "Eb") {
        return 4;
    }
    if (letra == "Gb") {
        return 7;
    }
    if (letra == "Ab") {
        return 9;
    }
    if (letra == "Bb") {
        return 11;
    }
}

// funções de intervalos

function segundaMenor(a) {
    var b = a + 1;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function segundaMaior(a) {
    var b = a + 2;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function tercaMenor(a) {
    var b = a + 3;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function tercaMaior(a) {
    var b = a + 4;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function quartaJusta(a) {
    var b = a + 5;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function quintaDiminuta(a) {
    var b = a + 6;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function quintaJusta(a) {
    var b = a + 7;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function sextaMenor(a) {
    var b = a + 8;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function sextaMaior(a) {
    var b = a + 9;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;

}

function setimaMenor(a) {
    var b = a + 10;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

function setimaMaior(a) {
    var b = a + 11;
    if (b > 12) {
        c = b - 12;
    }
    else {
        c = b;
    }
    return c;
}

// função que traduz numero em letras

function numeroLetra(b) {
    if (b == 1) {
        return "C";
    }
    if (b == 2) {
        return "C#";
    }
    if (b == 3) {
        return "D";
    }
    if (b == 4) {
        return "D#";
    }
    if (b == 5) {
        return "E";
    }
    if (b == 6) {
        return "F";
    }
    if (b == 7) {
        return "F#";
    }
    if (b == 8) {
        return "G";
    }
    if (b == 9) {
        return "G#";
    }
    if (b == 10) {
        return "A";
    }
    if (b == 11) {
        return "A#";
    }
    if (b == 12) {
        return "B";
    }
}








