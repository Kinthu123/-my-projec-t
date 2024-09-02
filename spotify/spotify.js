const album=document.getElementById('Album');
const Run_song=document.getElementById('song');

let songs_index = 0;
let isPlaying = false;
let updateTimer;  


let pauseB= document.querySelector("playpause-track");

const songs=[
    {
    id: 0,
    title: "If We Being Real",
    artist: "Yeat",
    photo:"1.jpg",
    src: "1.mp3",
    },

    {
        id: 1,
        title: "Stronger",
        artist: "Kanye West",
        photo:"2.jpg",
        src: "2.mp3",
    },

    {
        id: 2,
        title: "SICKO MODE",
        artist: "Travis Scott ft. Drake",
        photo:"3.jpg",
        src: "3.mp3",
    },

];

loadTrack(songs_index);

function loadTrack(songs_index){
    setInterval(updateTimer);
    Run_song.src = songs[songs_index].src;

    const ArtistName = document.querySelector('#Artist');
    ArtistName.innerHTML = songs[songs_index].artist; 

    const SongName = document.querySelector('#title');
    SongName.innerHTML = songs[songs_index].title; 

    const albumCover = document.querySelector('#Album img');
    albumCover.src = songs[songs_index].photo; 

    Run_song.load();
}


function play(){
        Run_song.play();
        isPlaying = true;
};

function stop(){ 
        Run_song.pause();
        isPlaying = false;

};

function PlaySong(){
    isPlaying ? stop() : play();
};


function NextSong(){
 
        if (songs_index < songs.length-1){
            songs_index =(songs_index+1);
        }
        else{
            songs_index = 0;
        }
        loadTrack(songs_index)

        if (isPlaying) play(); 

  
};

function BackSong(){  
        songs_index =(songs_index-1);
        loadTrack(songs_index)
        if (isPlaying) play();
   
};





