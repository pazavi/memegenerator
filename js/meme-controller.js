'use strict'
const input = document.querySelector('input');
var gLineIdx = 0;

var gCanvas;
var gCtx;



function onInit() {
    console.log('Page is ready');
    setCanvas();
    input.addEventListener('input', setValue);
    renderGallery();
    createMeme();
    setLinesHeight();
    galleryDisplay()

}



function renderGallery() {
    let images = getImages();
    let strHtmls = images.map(image => {
        return `<div class="gallery-item"><img src="${image.url}" id="${image.id}" onclick="onImageSelect(this.id)"></img></div>`

    });
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')

}

function setCanvas() {
    gCanvas = document.getElementById('my-canvas');
    gCanvas.width = window.innerWidth / 2;
    gCanvas.height = window.innerHeight / 2;
    gCtx = gCanvas.getContext('2d');
}

function setValue(e) {
    let text = e.target.value;
    upDateValue(text, gLineIdx);
}

function onSwitchLine() {
    // console.log('switch');
    (gLineIdx === 0) ? gLineIdx = 1 : gLineIdx = 0;
    setLineBgc();
    let currMeme = getMeme();
    upDateValue(currMeme.lines[gLineIdx].txt, gLineIdx);
}

function setLineBgc() {
    (gLineIdx === 0) ? input.style.backgroundColor = '#ffe6c0' : input.style.backgroundColor =  '#FFFFFF';
}


function drawImg(id) {
    let currMeme = getMeme();
    let img = new Image();
    img.src = `imgs/${id}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

        drawText(currMeme.lines[0].txt,
            gCanvas.width / 2,
            currMeme.lines[0].height,
            currMeme.lines[0].size,
            currMeme.lines[0].font,
            currMeme.lines[0].align,
            currMeme.lines[0].color,
            currMeme.lines[0].stroke
        );


        drawText(currMeme.lines[1].txt,
            gCanvas.width / 2,
            currMeme.lines[1].height,
            currMeme.lines[1].size,
            currMeme.lines[1].font,
            currMeme.lines[1].align,
            currMeme.lines[1].color,
            currMeme.lines[1].stroke

        );
    }

}



function drawText(text, x, y, fontsize, fontface, direction, fontColor, strokeColor) {
    // let currMeme = getMeme();
    gCtx.save();
    gCtx.lineWidth = '0.8'
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = fontColor
    gCtx.font = fontsize + 'px ' + fontface;
    gCtx.textAlign = direction;
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gCtx.restore();
}


function onImageSelect(id) {
    upDateMemeImg(id)
    controlDisplay()
}

function onIncreaseFont() {
    increaseFont(gLineIdx);
}

function onDecreaseFont() {
    decreaseFont(gLineIdx)
}

function setLinesHeight() {
    let line1Height = gCanvas.height / 6;
    let line2Height = gCanvas.height / 1.16;
    linesHeight(line1Height, line2Height);
}

function onMoveLineUp() {
    moveLineUp(gLineIdx);
}
function onMoveLineDown() {
    moveLineDown(gLineIdx);
}
function onAlignRight() {
    alignRight(gLineIdx);
}

function onAlignCenter() {
    alignCenter(gLineIdx);
}

function onAlignLeft() {
    alignLeft(gLineIdx);
}

function galleryDisplay() {
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.gallery-container').style.display = 'flex';
}

function controlDisplay() {
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.gallery-container').style.display = 'none';
}

function onSetFontColor() {
    let fontColor = document.querySelector('.font-color').value;
    setFontColor(fontColor, gLineIdx);
}

function onSetStrokeColor() {
    let strokeColor = document.querySelector('.stroke-color').value;
    setStrokeColor(strokeColor, gLineIdx);
}

function onSetFontFamily() {
    let fontFamily = document.querySelector('.font-family').value;
    // console.log('fontFamily', fontFamily)
    setFontFamily(fontFamily, gLineIdx);
}

function downloadMeme(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}

// function onAddLine(){
//     onAddLine();
// }
