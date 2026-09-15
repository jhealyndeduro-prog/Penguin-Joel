// =========================================
// BIRTHDAY WEBSITE
// FOR JOEL 🐧❤️
// =========================================


// =========================================
// ELEMENTS
// =========================================

const openButton = document.getElementById("openButton");
const backgroundMusic = document.getElementById("backgroundMusic");


// =========================================
// OPEN SURPRISE
// =========================================

openButton.addEventListener("click", function () {

    // Change button text
    openButton.innerHTML = "Welcome, birthday boy ❤️";


    // Start the song
    if (backgroundMusic) {

        backgroundMusic.volume = 0.45;

        backgroundMusic.play().catch(function (error) {

            console.log(
                "Music could not autoplay:",
                error
            );

        });

    }


    // Create floating hearts and penguins
    createHearts();


    // Scroll to birthday section
    setTimeout(function () {

        const birthdaySection =
            document.querySelector(".birthday");

        if (birthdaySection) {

            birthdaySection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 500);

});


// =========================================
// FLOATING HEARTS + PENGUINS
// =========================================

function createHearts() {

    const symbols = [
        "❤️",
        "♡",
        "🐧",
        "❤️",
        "♡"
    ];


    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add(
            "floating-heart"
        );


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.remove();

        }, 9000);

    }

}


// =========================================
// SCROLL REVEAL
// =========================================

const sections =
    document.querySelectorAll("section");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    revealObserver.observe(section);

});


// =========================================
// FINAL CELEBRATION
// =========================================

const finalSection =
    document.querySelector(".final");


if (finalSection) {

    const finalObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        createHearts();

                    }

                });

            },

            {
                threshold: 0.4
            }

        );


    finalObserver.observe(
        finalSection
    );

}
