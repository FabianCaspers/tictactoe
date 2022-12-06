let fields = [];

let currentShape = 'cross';

// Zeigt Cross an, Wenn currentShape == Cross dann wird es zu circle, ansonsten wieder cross
function fillShape(id) {
    if (currentShape == 'cross'){
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }

    fields[id] = currentShape;
}