'use strict'

// var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['politics'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['pets'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['pets'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['pets'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['pets'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['pets'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['pets'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['pets'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['pets'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['pets'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['pets'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['pets'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['pets'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['pets'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['pets'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['pets'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['pets'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['pets'] },
];

var gMeme;

function createMeme() {
    gMeme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size: 40,
                align: '',
                color: '',

            },
            {
                txt: '',
                size: 40,
                align: '',
                color: ''
            }
        ]
    }
    return gMeme;
}
function upDateMemeImg(id) {
 
    gMeme.selectedImgId = id;
    gMeme.selectedLineIdx = id - 1;
    gMeme.lines[0].txt ='';
    gMeme.lines[1].txt ='';
    input.value = '';
    drawImg(gMeme.selectedImgId);
}

function upDateValue(text, lineIdx) {
    gMeme.lines[lineIdx].txt = text;
    input.value = gMeme.lines[lineIdx].txt;
    drawImg(gMeme.selectedImgId);
}

function getImages() {
    return gImgs;
}
function getMeme() {
    return gMeme;
}

function increaseFont(lineIdx) {
    gMeme.lines[lineIdx].size += 5;
    drawImg(gMeme.selectedImgId);
}

function decreaseFont(lineIdx) {
    gMeme.lines[lineIdx].size -= 5;
    drawImg(gMeme.selectedImgId);
}

function linesHeight(line1Height, line2Height) {
    gMeme.lines[0].height = line1Height;
    gMeme.lines[1].height = line2Height;
}

function moveLineUp(lineIdx) {
    gMeme.lines[lineIdx].height -= 5;
    drawImg(gMeme.selectedImgId);
}

function moveLineDown(lineIdx) {
    gMeme.lines[lineIdx].height += 5;
    drawImg(gMeme.selectedImgId);
}

function alignRight(lineIdx){
    gMeme.lines[lineIdx].align = 'right';
    drawImg(gMeme.selectedImgId)
}

function alignCenter(lineIdx){
    gMeme.lines[lineIdx].align = 'center';
    drawImg(gMeme.selectedImgId)
}

function alignLeft(lineIdx){
    gMeme.lines[lineIdx].align = 'left';
    drawImg(gMeme.selectedImgId)
}


