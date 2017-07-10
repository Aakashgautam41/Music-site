 //------------------------------- Functions --------------------------------------
   
    function toggleSong() {                                       // Here a func. is created called togglesong
        var song = document.querySelector('audio');
        if(song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        }
        else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
    }
    
    // ------------------------- fancy time format finc.----------------------------
    
    function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
 
    
 // -------------------------------------------------------------------------------  
    
    function updateCurrentTime(){
        var song = document.querySelector("audio");
      //  console.log(song.currentTime);
      //  console.log(song.duration);
        var currentTime = Math.floor(song.currentTime);
        currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
        duration = fancyTimeFormat(duration);
        $(".time-elapsed").text(currentTime);
        $(".song-duration").text(duration);
    }
    
 // -------------------------- addSongNameClickEvent func. -------------------------  
    
    function addSongNameClickEvent(songName, position){
        var id = '#song'+ position;
        $(id).click(function() {
        var audio = document.querySelector('audio');
        var currentSong = audio.src;
        if(currentSong.search(songName) != -1)              // it is searching song name in audio src
        {
        toggleSong();
        }
        else {
        audio.src = songName ;
        toggleSong();
        }
        });
      }
    
    
    
    
 //--------------------------------------------------------------------------------
   
    $('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();           // name stores the value from input
    if(name.length > 3){
      var message = "Welcome, " + name;            //Displays the message
      $('.main .user-name').text(message);
      $('.welcome-screen').addClass('hidden');
      $('.main').removeClass('hidden');
      $(".content h1").text(message);
     }
     else{
         $("input").addClass("error"); 
     }
});

 //--------------------------- play icon working (on click) ------------------------
 
   $(".play-icon").click(function(){
       toggleSong();                             // Here togglesong func. is called
    
    });  

 // --------------------------------------------------------------------------------
    
 // --------------------------- Spacebar event -------------------------------------
     $("body").keypress(function(event){
        if( event.keyCode == 32)
            {
                toggleSong();                   // Here togglesong func. is called
      }
    });
    
    
// ----------------------------------------------------------------------------------

// ------------------------------------- Current time & duration of song ------------
 
   var songList = ['Tamma song','humma song','Nashe si chad gayi','The breakup song'];  // songlist using array
   var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];                   // song files using array



 
   window.onload = function()
   {  
      $('#song1 .song-name').text(songList[0]);                            
      $('#song2 .song-name').text(songList[1]);
      $('#song3 .song-name').text(songList[2]);
      $('#song4 .song-name').text(songList[3]);
      updateCurrentTime();
      setInterval(function(){
           updateCurrentTime();
      },1000);
   }
    
// -----------------------------------------------------------------------------------

// --------------------------------------- playlist songs ----------------------------
 
  
//    addSongNameClickEvent(fileNames[0],1);                     // calling of addSongNameClickEvent() function
//    addSongNameClickEvent(fileNames[1],2);
//    addSongNameClickEvent(fileNames[2],3);
//    addSongNameClickEvent(fileNames[3],4); 
    
      
      for (var i = 0; i < fileNames.length ; i++) {
           addSongNameClickEvent(fileNames[i],i+1)
          } 

 
   
   
// -----------------------------------------------------------------------------------
