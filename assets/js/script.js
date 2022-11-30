// document.getElementById("peter").addEventListener("click", function(){
//     document.getElementById("audio").play();
// });

(function( d ) {
    'use strict';
     var count = 0,
         audio = d.getElementById( 'audios' ).getElementsByTagName( 'audio' );
     d.getElementById( 'peter' ).addEventListener( 'click',
        function() {
            audio[count].play();
            count ++;
            console.log(count);
       if ( count > 9 ) {
            count = 0;
           }          
          }, false );
 }( document ));