//creando el arreglo
var listaCanciones = [
    {
        id:"1", 
        nombreCancion: 'Teen Idle',
        nombreArtista: "Marina and The Diamonds",
        nombreAlbum: "Electra Harts",
        sImg: 'track-art/teen-idle.jpg',
        songTime: 4.14},
    {id: "2", nombreCancion: "A Million Pieces", nombreAlbum: "Fall, Once Again", nombreArtista: "KYUHYUN", songTime: 5.12},
    {id: "3", nombreCancion: "Child", nombreAlbum: "Child-SM STATION: NCT LAB - Single", nombreArtista: "MARK", songTime: 3.31},
    {id: "4", nombreCancion: "Cradles", nombreAlbum: "Cradles - Single", nombreArtista: "Sub Urban", songTime: 3.30},
    {id: "5", nombreCancion: "Dinero", nombreAlbum: "Dinero - Single", nombreArtista: "Trinidad Cardona", songTime: 2.41},
    {id: "6", nombreCancion: "Fire Truck", nombreAlbum: "Awaken", nombreArtista: "NCT 127", songTime: 2.58},
    {id: "7", nombreCancion: "SHIVER", nombreAlbum: "TOXIC", nombreArtista: "the GazettE", songTime: 4.11},
    {id: "8", nombreCancion: "Singularity", nombreAlbum: "Love Yourself: Answer", nombreArtista: "BTS", songTime: 3.17},
    {id: "9", nombreCancion: "Sweet Dream", nombreAlbum: "Universe - The 3rd album", nombreArtista: "NCT U", songTime: 3.32},
    {id: "10", nombreCancion: "THANXX", nombreAlbum: "ZERO:FEVER Pt.1", nombreArtista: "ATEEZ", songTime: 3.01},
    {id: "11", nombreCancion: "TOUCH", nombreAlbum: "NCT 2018 EMPATHY", nombreArtista: "NCT 127", songTime: 3.09},
    {id: "12", nombreCancion: "Unsteady", nombreAlbum: "VHS", nombreArtista: "X Ambassadors", songTime: 3.14},
    {id: "13", nombreCancion: "Villain", nombreAlbum: "Stella I", nombreArtista: "Stella Jang", songTime: 3.11},
    {id: "14", nombreCancion: "Walk You Home", nombreAlbum: "We Young - The 1st Mini Album", nombreArtista: "NCT DREAM", songTime: 2.55},
    {id: "15", nombreCancion: "White Night", nombreAlbum: "Continuous - EP", nombreArtista: "VICTON", songTime: 4.22},
]

songList.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src=listaCanciones[i].sImg;
    Element.getElementsByClassName("itemSongName")[0].innerText = listaCanciones[i].nombreCancion;
})

let enReproduccion = false;
let x = 0;
let i = 0;
let nowRandom = false;
let songIndex = 0;
let nowTime = 0;
let totTime = 0;
let for_slider = document.querySelector('.for_slider');



function reproduciendoCancion (songIndex) {
    
}

function Botomes () {
    let estPlay = function btPlay (enReproduccion){
        if (enReproduccion == true) {
            enReproduccion = false;
        }
        else {
            enReproduccion = true;
        }
    }
    if (estPLay == true) {
        console.log ("Cansión en Reproducción");
    }
    //funciones de los botones
    function btRandom() {
        nowRandom = true;
    }
    
    function pausePlay() {
        if (enReproduccion = false) {
            enReproduccion = true;
        } else {
            enReproduccion = false;
        }
        
    }
    
    function previo() {
        if (songIndex > 0) {
            songIndex = songIndex-1;
        }
    }
    
    function next () {
        if (songIndex < 15) {
            songIndex = songIndex+1;
        }
    }

    function rePlay (i) {
        let songIndex = songIndex;
        nowTime = 0;
        totTime = 0;
        for_slider.ariaValueNow = 0;
    }
}

reproduciendoCancion (songIndex);
Botomes();