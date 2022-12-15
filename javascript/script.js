var varguIImazheve = [
    'images/1875747.webp', //0
    'images/1fe2b4d6e110511ab89585299367d083.jpg', //1
    'images/10941891.jpg' //2
];

var index = 0;
const koha = 1500;

function krijoSlider(){
    document.getElementById('imazhi').src = varguIImazheve[index];
    index++;

    if(index == varguIImazheve.length){
        index = 0;
    }
    setTimeout("krijoSlider()", koha);
}
krijoSlider();