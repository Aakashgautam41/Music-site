
     var songs = [{
        'name': 'Tamma tamma song',
        'artist': 'Neha Kakkar, Monali Thakur',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
         'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
         'image': 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
         'image': 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
         'image': 'song4.jpg'
    }]
 













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

  // ------------------------------ change current song details func. --------------

   function changeCurrentSongDetails(songs) {
    $('.current-song-image').attr('src','img/' + songs.image);
    $('.current-song-name').text(songs.name);
    $('.current-song-album').text(songs.album);
   }

       
 // --------------------------------------------------------------------------------

    
 // -------------------------- addSongNameClickEvent func. -------------------------  
    
//    function addSongNameClickEvent(songName, position){
//        var id = '#song'+ position;
//        $(id).click(function() {
//        var audio = document.querySelector('audio');
//        var currentSong = audio.src;
//        if(currentSong.search(songName) != -1)              // it is searching song name in audio src
//        {
//        toggleSong();
//        }
//        else {
//        audio.src = songName ;
//        toggleSong();
//        }
//        });
//      }}
    


    function addSongNameClickEvent(songObj,position) {
   // var songName = songs.fileName; // New Variable
         var songName = songObj.fileName; // New Variable 
        var id = '#song'+ position;
      $(id).click(function() {
         var audio = document.querySelector('audio');
        var currentSong = audio.src;
          if(currentSong.search(songName) != -1)              // it is searching song name in audio src
        {
        toggleSong();
        
        }
        else {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); // Function Call
        
       }
      });
    };

    
    
    
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
         var target = event.target;
        if( event.keyCode == 32 && target.tagName !='INPUT')
            {
                toggleSong();                   // Here togglesong func. is called
      }
    });
    
 // --------------------------------- progress bar finc.----------------------------

 



 // --------------------------------------------------------------------------------



    
// ----------------------------------------------------------------------------------

// ------------------------------------- Current time & duration of song ------------
 
//   var songList = ['Tamma song','humma song','Nashe si chad gayi','The breakup song'];  // songlist using array

//   var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];                   // song files using array

//   var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal,'Arijit Singh'];

//   var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];

//   var durationList = ['2:56','3:15','2:34','2:29'];



   window.onload = function()
   {  
         changeCurrentSongDetails(songs[0]);
        
//       for(var i =0; i < songList.length;i++) {
//        var name = '#song' + (i+1);
//        var song = $(name);x
//        song.find('.song-name').text(songList[i]);
//        song.find('.song-artist').text(artistList[i]);
//        song.find('.song-album').text(albumList[i]); // Added
//        song.find('.song-length').text(durationList[i]); // Added
//    }
       
       for(var i =0; i < songs.length;i++) {                     // array of objects is being used
        var obj = songs[i];                                      // var obj will store song[0]  and so on 
        var name = '#song' + (i+1);
        var song = $(name);                                      // song = id of song ( e.g # song1)
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);               
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }
       
      updateCurrentTime();
      setInterval(function(){
           updateCurrentTime();
      },1000);
       $('#songs').DataTable({
        paging: false
        });
   }
   
   
       
   
   




// -----------------------------------------------------------------------------------

// --------------------------------------- playlist songs ----------------------------
      
       
  
//    addSongNameClickEvent(fileNames[0],1);                     // calling of addSongNameClickEvent() function
//    addSongNameClickEvent(fileNames[1],2);
//    addSongNameClickEvent(fileNames[2],3);
//    addSongNameClickEvent(fileNames[3],4); 
    
      
//      for (var i = 0; i < fileNames.length ; i++) {
//           addSongNameClickEvent(fileNames[i],i+1)
//          } 

 
   
   
// -----------------------------------------------------------------------------------
