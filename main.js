 var currentSongNumber = 1;
 var willLoop = 0;
 var willShuffle = 0; // will use this soon



     var songs = [{
        'name': ' Boulevard of Broken Dreams',
        'artist': 'Green Day',
        'album': ' American Idiot',
        'duration': '4:41',
       'fileName': 'song1.mp3',
         'image': 'song1.jpg'
    },
    {
        'name': 'Shape of you',
        'artist': 'Ed Sheeran',
        'album': 'Divide',
        'duration': '3:53',
        'fileName': 'song2.mp3',
         'image': 'song2.jpg'
    },
    {
        'name': 'Warning',
        'artist': 'Green Day',
        'album': 'Warning',
        'duration': '3:42',
        'fileName': 'song3.mp3',
         'image': 'song3.jpg'
    },
    {
        'name': 'Show Me The Meaning Of Being Lonely',
        'artist': 'Backstreet Boys',
        'album': 'Millennium',
        'duration': '3:35',
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


 // ---------------------------------------- music icons --------------------------

$(function(){
 
    $('.mute').click(function(){
        $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off');
    })
})

$(function(){
    $('.shuffle').click(function(){
        $('.shuffle').fadeTo(1,.5);
    })
})



$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});



$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});


function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}





$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName; // Change Soure
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})

//
//$('audio').on('ended',function() {
//    var audio = document.querySelector('audio');
//    if (willShuffle == 1) {
//        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
//        var nextSongObj = songs[nextSongNumber-1];
//        audio.src = nextSongObj.fileName;
//        toggleSong();
//        changeCurrentSongDetails(nextSongObj);
//        currentSongNumber = nextSongNumber;
//    }
//    else if(currentSongNumber < 4) {
//        var nextSongObj = songs[currentSongNumber];
//        audio.src = nextSongObj.fileName;
//        toggleSong();
//        changeCurrentSongDetails(nextSongObj);
//        currentSongNumber = currentSongNumber + 1;
//    }
//    else if(willLoop == 1) {
//        var nextSongObj = songs[0];
//        audio.src = nextSongObj.fileName;
//        toggleSong();
//        changeCurrentSongDetails(nextSongObj);
//        currentSongNumber =  1;
//    }
//    else {
//        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
//        audio.currentTime = 0;
//    }
//})

 // -------------------------------------------------------------------------------
    
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



 // ------------------------------ input name function ----------------------------
   

    $('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();                                  // name stores the value from input 
         var email = $('#email-input').val();  
         var pass = $('#pass-input').val();           
       
    if(name.length > 3 && email.search('test@acadview.com') != -1 && pass.search('JavascriptRocks')!=-1){
      var message = "Welcome, " + name;                               //Displays the message
        
      $('.main .user-name').text(message);
      $('.welcome-screen').addClass('hidden');
      $('.main').removeClass('hidden');
      $(".content h1").text(message);
     }
     else{
         $("#name-input").addClass("error"); 
     }
       
});


 // --------------------------------------------------------------------------------

  
 
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

 
var $audio = $('#myAudio');
$('input').on('change', function(e) {
  var target = e.currentTarget;
  var file = target.files[0];
  var reader = new FileReader();
  
  console.log($audio[0]);
   if (target.files && file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $audio.attr('src', e.target.result);
            $audio.play();
        }
        reader.readAsDataURL(file);
    }
});
 
 
 $(function(){
     var totalSongs = songs.length;
     $('#num-songs').text(totalSongs);
 });

 // --------------------------------------------------------------------------------



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
 
