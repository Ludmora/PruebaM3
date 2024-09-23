       
        
        
       const audio = new Audio();
       audio.src = "assets/img/audi.mp3";

       const imgButton = document.getElementById("playPauseAudio");

       imgButton.addEventListener("click", function() {
           if (audio.paused) {
               audio.play();
               imgButton.src = "assets/img/ocarina.png"; // Cambia la imagen a "Pausar"
               imgButton.alt = "Pausar";
           } else {
               audio.pause();
               imgButton.src = "assets/img/ocarina.png"; // Cambia la imagen a "Reproducir"
               imgButton.alt = "Reproducir";
           }
       });


        document.getElementById('boldText').addEventListener('click', function() {
                this.classList.toggle('negrita'); // Alterna la clase 'inactive'
            });




            function Ocultar() {
                var div = document.getElementsByClassName("body1")
                var style = window.getComputedStyle(div[0])
                var disp = style.getPropertyValue('display');        
                if (disp != "none") {
                    div[0].setAttribute("old_display",disp);
                    disp = "none"
                } else {
                    disp = div[0].getAttribute("old_display");
                }
                div[0].style.display = disp
            }




            const attachButton = document.getElementById('attachButton');
            const attachMenu = document.querySelector('.attach-menu');
    
            // Mostrar u ocultar el menú cuando se presiona el botón de adjuntar
            attachButton.addEventListener('click', function() {
                attachButton.classList.toggle('active');
            });
    
            // Cerrar el menú al hacer clic fuera de él
            window.addEventListener('click', function(event) {
                if (!attachButton.contains(event.target) && !attachMenu.contains(event.target)) {
                    attachButton.classList.remove('active');
                }
            });



            
                toggleBtn = document.getElementById('toggleBtn');
                SideMenu = document.getElementById('SideMenu');

                toggleBtn.addEventListener('click', () => {
                 SideMenu.classList.toggle('active');
                });