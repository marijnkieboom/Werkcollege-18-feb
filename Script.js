const speed = 10;

var lopendeBandWidth = 0;

window.addEventListener('load', function () {
    lopendeBandWidth = this.document.querySelector('.lopende-band').offsetWidth;

    initDoos('Bananen');

    setTimeout(() => {
        initDoos('Coca cola');
    }, 5000);
});

function initDoos(type) {
    createDoosEl(type);
    const doos = createDoosObj();
    moveDoos(doos);
}

function moveDoos(doos) {
    if (canMove(doos)) {
        doos.offset += 1
        doos.el.style.marginLeft = doos.offset + "px";
        this.setTimeout(() => {
            moveDoos(doos)
        }, speed);
    } else {
        addDoosToOphaalbak(doos.el.innerHTML);
        doos.el.remove();
    };
};

function canMove(doos) {
    if (doos.offset + doos.width < lopendeBandWidth) {
        return true;
    }
    return false;
};

function addDoosToOphaalbak(doosNaam) {
    var doosListItem = document.createElement('li');
    doosListItem.innerHTML = doosNaam;
    this.document.querySelector('.ophaalbak-dozen').append(doosListItem);
}

function createDoosEl(type) {
    var doosEl = document.createElement('div');
    doosEl.innerHTML = type;
    doosEl.classList.add('doos');
    document.querySelector('.doos-area').appendChild(doosEl);
}

function createDoosObj() {
    const doos = {};
    doos.el = this.document.querySelector('.doos');
    doos.offset = 0;
    doos.width = doos.el.offsetWidth;

    return doos;
}