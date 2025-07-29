let colori = [10, 10, 10, 10, 10, 10];


function inputColore(pul, colore) {
    colori[pul - 1] = colore;
    let conta = 0;

    let id = "id" + pul;

    switch (colore) {
        case 0:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:black"><p style="color:black">' + pul + '</p></div>';
            break;
        case 1:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(86, 60, 0);"><p style="color:black">' + pul + '</p></div>';
            break;
        case 2:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(255,0,0);"><p style="color:black";>' + pul + '</p></div>';
            break;
        case 3:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(255, 106, 0);"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 4:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(255, 242, 0);"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 5:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(44, 212, 2);"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 6:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(0,0,255)"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 7:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(157, 0, 171);"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 8:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(117, 117, 117);"><p style="color:black">' + pul + '</p></div>';
            break;
        case 9:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:white"><p style="color:black">' + pul + '</p></div>';
            break;
        case 10:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(245, 200, 146)"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 11:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(194, 194, 194)"><p style="color:black;">' + pul + '</p></div>';
            break;
        case 12:
            document.getElementById(id).innerHTML = '<div class="box" style="background-color:rgb(219, 186, 0);"><p style="color:black;">' + pul + '</p></div>';
            break;


    }

    for (i = 0; i < 6; i++) {
        if (colori[i] !== 10) {
            conta++;
        }
    }
    //console.log(conta);

    if (conta >= 3) {
        const coloriTot = [];
        let x = 0;
        for (i = 0; i < conta; i++) {
            if (colori[x] == 10) {
                i--;
            }
            else {
                coloriTot[i] = colori[x];
            }
            x++;


        }
        //window.alert(coloriTot.length);
        conta = 0;
        calcolaResistenza(coloriTot);
    }
    else {
        conta = 0;
        document.getElementById("ris1").innerHTML = '<p id="ris1">resistenzza da sinistra a destra : ---- Ohm<br>errore da sinistra a destra : ---- Ohm</p>';

        document.getElementById("ris2").innerHTML = '<p id="ris2">resistenzza da destra a sinistra : ---- Ohm<br>errore da destra a sinistra : ---- Ohm</p>';
    }


    //serve una switch case per cambiare colore graficamente al resistore  
}

function calcolaResistenza(col = []) {
    let resistenza;
    let errore;
    let resistenzaInv;
    let erroreInv;

    let lunghezza = col.length;

    switch (lunghezza) {
        case 3:
            resistenza = (col[0] * 10 + col[1]) * (10 ** col[2]);
            resistenzaInv = (col[2] * 10 + col[1]) * (10 ** col[0]);
            break;
        case 4:
            resistenza = (col[0] * 10 + col[1]) * (10 ** col[2]);
            resistenzaInv = (col[3] * 10 + col[2]) * (10 ** col[1]);
            break;
        case 5:
            resistenza = (col[0] * 100 + col[1] * 10 + col[2]) * (10 ** col[3]);
            resistenzaInv = (col[4] * 100 + col[3] * 10 + col[2]) * (10 ** col[1]);
            break;
        case 6:
            resistenza = (col[0] * 100 + col[1] * 10 + col[2]) * (10 ** col[3]);
            resistenzaInv = (col[4] * 100 + col[3] * 10 + col[2]) * (10 ** col[1]);
            break;
    }

    //console.log(resistenza);
    if (lunghezza == 3) {
        document.getElementById("ris1").innerHTML = '<p id="ris1">resistenzza da sinistra a destra : ' + resistenza + ' Ohm<br>errore da sinistra a destra : ---- %</p>'
        document.getElementById("ris2").innerHTML = '<p id="ris2">resistenzza da destra a sinistra : ' + resistenzaInv + ' Ohm <br>errore da destra a sinistra : ---- %</p>';
    }
    else {
        switch (col[lunghezza - 1]) {
            case 1:
                errore = 1.0;
                break;
            case 2:
                errore = 2.0;
                break;
            case 5:
                errore = 0.5;
                break;
            case 6:
                errore = 0.25;
                break;
            case 7:
                errore = 0.1;
                break;
            case 8:
                errore = 0.05;
                break;
            case 11:
                errore = 10.0;
                break;
            case 12:
                errore = 5.0;
                break;

            default:
                errore = 0.0;
                break;
        }

        switch (col[0]) {
            case 1:
                erroreInv = 1.0;
                break;
            case 2:
                erroreInv = 2.0;
                break;
            case 5:
                erroreInv = 0.5;
                break;
            case 6:
                erroreInv = 0.25;
                break;
            case 7:
                erroreInv = 0.1;
                break;
            case 8:
                erroreInv = 0.05;
                break;
            case 11:
                erroreInv = 10.0;
                break;
            case 12:
                erroreInv = 5.0;
                break;

            default:
                erroreInv = 0;
                break;
        }

        if (errore == 0.0) {
            document.getElementById("ris1").innerHTML = '<p id="ris1">resistenzza da sinistra a destra : ' + resistenza + ' Ohm<br>errore da sinistra a destra : ---- %<br><strong style="color:chartreuse">probabile che la misura corretta sia quella sottostante</strong></p>'
        }
        else {
            document.getElementById("ris1").innerHTML = '<p id="ris1">resistenzza da sinistra a destra : ' + resistenza + ' Ohm<br>errore da sinistra a destra : ±' + errore + ' %</p>'
        }

        if (erroreInv == 0.0) {
            document.getElementById("ris2").innerHTML = '<p id="ris2">resistenzza da destra a sinistra : ' + resistenzaInv + ' Ohm <br>errore da destra a sinistra : ---- %<br><strong style="color:chartreuse">probabile che la misura corretta sia quella soprastane</strong></p>';
        }
        else {
            document.getElementById("ris2").innerHTML = '<p id="ris2">resistenzza da destra a sinistra : ' + resistenzaInv + ' Ohm <br>errore da destra a sinistra : ±' + erroreInv + ' %</p>';
        }
    }



}

//console.log(nome);