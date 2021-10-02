canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_width= 100;
rover_height= 90;

background_image="mars.jpg";
rover_image="rover.png";
rover_x=10
rover_y=10


             
             window.addEventListener("keydown",my_keydown);
            function my_keydown(e){
                keyPressed=e.keyCode;
                if(keyPressed=="38"){
                    document.getElementById("d1").innerHTML="up"}}
                    
            
