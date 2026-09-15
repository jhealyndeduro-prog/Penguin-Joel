/* =========================================
   PENGUIN-JOEL
   Birthday Website
   From Baby ❤️
========================================= */


/* =========================================
   OPENING SURPRISE
========================================= */

const openButton = document.getElementById("openButton");

openButton.addEventListener("click", function () {

    // Change button text
    openButton.innerHTML = "Welcome, birthday boy ❤️";

    // Little celebration
    createHearts();

    // Smoothly move to the birthday section
    setTimeout(function () {
        document.querySelector(".birthday").scrollIntoView({
            behavior: "smooth"
        });
    }, 500);

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    const hearts = ["♥", "♡", "❤️", "🐧"];

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "1000";
        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 3s ease-out, opacity 3s ease-out";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(function () {
            heart.remove();
        }, 3200);
    }
}


/* =========================================
   MUSIC PLAYER
========================================= */

// We will connect your actual song later.

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", function () {

    if (!musicPlaying) {

        musicButton.innerHTML = "♫ Our song is playing... ❤️";

        musicPlaying = true;

    } else {

        musicButton.innerHTML = "♫ Play Our Song";

        musicPlaying = false;

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});


/* =========================================
   FINAL BIRTHDAY SURPRISE
========================================= */

const finalSection = document.querySelector(".final");

let finalCelebrationDone = false;

const finalObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (
                entry.isIntersecting &&
                !finalCelebrationDone
            ) {

                finalCelebrationDone = true;

                setTimeout(function () {
                    createHearts();
                }, 500);

                setTimeout(function () {
                    createHearts();
                }, 1500);

            }

        });

    },

    {
        threshold: 0.4
    }

);

finalObserver.observe(finalSection);
