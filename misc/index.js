const picture = document.getElementById("picture");
const youtube = document.getElementById("youtube")
const videoButton = document.getElementById("video-button")
const videoHero = document.getElementById("videoHero")
const videoOverlay = document.getElementById("videoOverlay")

 // Function called when YouTube API is loaded
 function onYouTubeIframeAPIReady() {
    // Create YouTube player
    var player = new YT.Player('player', {
      height: '100',
      width: '100',
      videoId: 'eun6P4be_jE', // Replace VIDEO_ID_HERE with the ID of your YouTube video
      events: {
        'onReady': onPlayerReady
      }
    });

    // Function called when player is ready
    function onPlayerReady(event) {
      // Event listener to increase volume when button is clicked
      player.playVideo();
      player.mute();

      videoButton.addEventListener("click", ()=> {
        document.body.style.overflow = 'hidden';
        console.log("clicks")
        videoHero.style.left = "0";
        videoHero.style.width = "100%";
        videoHero.style.height = "100%";
        videoHero.style.top = "0";
        videoHero.style.borderRadius = "0";
        videoHero.style.borderWidth = "4rem"
        videoHero.style.borderStyle = "solid"
        
        videoHero.style.zIndex = "20";
        videoOverlay.style.opacity = "0";
        videoOverlay.style.visibility = "hidden";
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Smooth scrolling effect
          });
    
        player.unMute();
    })

    }
  }

// var iframe = document.createElement('iframe');

// // Set attributes for the iframe
// iframe.width = "560";
// iframe.height = "315";
// iframe.src = "https://www.youtube.com/embed/NWnBxQjssvQ?si=xkIRZlBs8m76gsFH&autoplay=1";
// iframe.title = "YouTube video player";
// iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
// iframe.referrerPolicy = "strict-origin-when-cross-origin";
// iframe.allowFullscreen = true;


// picture.addEventListener("click", ()=> {
//     console.log("click")
//     picture.classList.add('activated');
//     youtube.classList.add('activated');
//     youtube.appendChild(iframe);
// });


const menuButton = document.getElementById("menuButton")

const menuContainer = document.getElementById("menuContainer")

const menuLinks = document.getElementById("menuLinks")

const subMenu = document.getElementById("subMenu") 

const pods = document.getElementById("podsActive")

let menuOpen = false;

menuButton.addEventListener("click", ()=> {
    if (menuOpen === false) {
    menuContainer.classList.add('menu-active'); 
    menuLinks.classList.add('menu-links-active'); 
    subMenu.classList.add("submenu-active")
    menuButton.classList.add("active")
    menuOpen = true;

    } else {
        menuContainer.classList.remove('menu-active');
        menuLinks.classList.remove('menu-links-active'); 
        subMenu.classList.remove("submenu-active")
        menuButton.classList.remove("active")
        menuOpen = false;
    }
    
});


