let mybutton = document.getElementById("scrollToTopBtn");

        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        mybutton.onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    // Menu burger

        const button = document.querySelector('.burger');
        const nav = document.querySelector('.navbar-links');
         
            button.addEventListener('click', () => {
                nav.classList.toggle('active');
            });

            
