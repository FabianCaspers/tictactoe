let fields = [];

let currentShape = 'cross';

// Zeigt Cross an, Wenn currentShape == Cross dann wird es zu circle, ansonsten wieder cross
function fillShape(id) {
    if (!fields[id]) {  /* !fields[id] sorgt dafür das NICHT beide img angezeigt werden */
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactiv'); /* Graut den jeweiligen Spieler aus, um zu sehen wer dran ist */
            document.getElementById('player-2').classList.add('player-inactiv');
        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.remove('player-inactiv');
            document.getElementById('player-1').classList.add('player-inactiv');
        }

        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

// Funktion zum überprüfen ob 3 gleiche sind
function checkForWin() {
    let winner;

    // Horizontal gewonnen

    // First row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    // Second Row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    // Third Row
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }


    // Vertikal gewonnen

    // First Column
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Second Column
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Third Columns
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }


    // Diagonal gewonnen
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.2)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }

    if (winner) {
        console.log('GEWONNEN', winner);
    }
}