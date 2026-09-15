/* =========================================
   PENGUIN-JOEL
   Birthday Website
   From Baby ❤️
========================================= */


/* =========================================
   OPENING SURPRISE
========================================= */

const openButton =
    document.getElementById("openButton");


openButton.addEventListener(
    "click",
    function () {

        openButton.innerHTML =
            "Welcome, birthday boy ❤️";

        createHearts();

        setTimeout(function () {

            document
                .querySelector(".birthday")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 500);

    }
);


/* =========================================
   FLOATING HEARTS + PENGUINS
========================================= */

function createHearts() {

    const symbols = [
        "♥",
        "♡",
        "❤️",
        "🐧"
    ];


    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";


        heart.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.remove();

        }, 4000);

    }

}


/* =========================================
   MUSIC BUTTON
========================================= */

const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function () {

        if (!musicPlaying) {

            musicButton.innerHTML =
                "♫ Our song is playing... ❤️";

            musicPlaying = true;

        } else {

            musicButton.innerHTML =
                "♫ Play Our Song";

            musicPlaying = false;

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.08
        }

    );


sections.forEach(
    function (section) {

        section.style.opacity =
            "0";

        section.style.transform =
            "translateY(30px)";

        section.style.transition =
            "opacity 1s ease, transform 1s ease";

        observer.observe(section);

    }
);


/* =========================================
   FINAL BIRTHDAY SURPRISE
========================================= */

const finalSection =
    document.querySelector(".final");


let finalCelebrationDone =
    false;


const finalObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting &&
                        !finalCelebrationDone
                    ) {

                        finalCelebrationDone =
                            true;


                        setTimeout(
                            function () {

                                createHearts();

                            },
                            500
                        );


                        setTimeout(
                            function () {

                                createHearts();

                            },
                            1500
                        );

                    }

                }
            );

        },

        {
            threshold: 0.3
        }

    );


finalObserver.observe(
    finalSection
);
