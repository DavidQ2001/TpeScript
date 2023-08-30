interface AudioPlayer{
    auidioVolume : number;
    soungDuraiton: number;
    song : string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer={
    auidioVolume: 90,
    soungDuraiton: 50,
    song: "Esclava",
    details: {
        author: "Bryant Mayers",
        year: 2015
    }
}

//const song = "New Song"

//const {song:anotherSong,soungDuraiton:duration,details} = audioPlayer
//const{author}=details

//console.log('Song: ' ,anotherSong)
//console.log('Duration: ' ,duration)
//console.log('Author: ' ,author)

const [ ,Vegueta  ]: string[] = ['Goku','Vegueta','Trunks']

console.log('perosonaje 1: ' , Vegueta)
