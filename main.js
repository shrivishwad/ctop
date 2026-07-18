// ==========================================
// VTOP NEXTGEN
// main.js
// ==========================================


// ===============================
// LIVE CLOCK
// ===============================

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    const options = {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    clock.innerHTML = now.toLocaleString("en-IN", options);

}

setInterval(updateClock, 1000);

updateClock();



// ===============================
// SATURDAY POPUP
// ===============================

window.onload = () => {

    const popup = document.getElementById("popup");

    const alreadyShown = sessionStorage.getItem("popupShown");

    if (!alreadyShown) {

        setTimeout(() => {

            popup.classList.add("show");

        }, 700);

        sessionStorage.setItem("popupShown", "yes");

    }

};

function closePopup() {

    document.getElementById("popup").classList.remove("show");

}



// ===============================
// ATTENDANCE STATUS
// ===============================

const attendance = 86;

const attendanceText = document.getElementById("attendanceText");

const attendanceButton = document.getElementById("attendanceButton");

attendanceText.innerHTML = attendance + "%";

if (attendance >= 85) {

    attendanceButton.innerHTML = "SAFE";

    attendanceButton.style.background = "#20D58A";

}

else if (attendance >= 75) {

    attendanceButton.innerHTML = "WARNING";

    attendanceButton.style.background = "#FFC857";

}

else {

    attendanceButton.innerHTML = "LOW ATTENDANCE";

    attendanceButton.style.background = "#FF4D5A";

    document.querySelector(".warning-card").style.borderLeft =
        "6px solid #FF4D5A";

}



// ===============================
// LOGOUT
// ===============================

function logout() {

    const choice = confirm("Are you sure you want to logout?");

    if (choice) {

        window.location.href = "login.html";

    }

}



// ===============================
// ANIMATED CARDS
// ===============================

function animateValue(element, start, end, duration, suffix = "") {

    let current = start;

    const increment = (end - start) / (duration / 20);

    const timer = setInterval(() => {

        current += increment;

        if (current >= end) {

            current = end;

            clearInterval(timer);

        }

        element.innerHTML = Math.floor(current) + suffix;

    }, 20);

}

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card h2");

    animateValue(cards[0], 0, 9, 1200, ".12");

    animateValue(cards[1], 0, 86, 1200, "%");

    animateValue(cards[3], 0, 4, 1000);

});



// ===============================
// NOTIFICATION BUTTON
// ===============================

const notify = document.querySelector(".notification");

notify.addEventListener("click", () => {

    alert(
        "Notifications\n\n• CAT-2 starts next week.\n• Fee payment due in 5 days.\n• New proctor message received."
    );

});



// ===============================
// HIGHLIGHT CURRENT CLASS
// ===============================

function highlightLecture() {

    const lectures = document.querySelectorAll(".lecture");

    const hour = new Date().getHours();

    lectures.forEach(l => {

        l.style.borderColor = "#202B43";

        l.style.boxShadow = "none";

    });

    if (hour >= 8 && hour < 10) {

        lectures[0].style.borderColor = "#FF4D5A";

        lectures[0].style.boxShadow =
            "0 0 20px rgba(255,77,90,.35)";

    }

    else if (hour >= 10 && hour < 11) {

        lectures[1].style.borderColor = "#4F8CFF";

        lectures[1].style.boxShadow =
            "0 0 20px rgba(79,140,255,.35)";

    }

    else if (hour >= 11 && hour < 13) {

        lectures[2].style.borderColor = "#20D58A";

        lectures[2].style.boxShadow =
            "0 0 20px rgba(32,213,138,.35)";

    }

    else if (hour >= 14 && hour < 16) {

        lectures[3].style.borderColor = "#FFC857";

        lectures[3].style.boxShadow =
            "0 0 20px rgba(255,200,87,.35)";

    }

}

highlightLecture();



// ===============================
// SEARCH
// ===============================

const search = document.querySelector(".search input");

search.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const lectures = document.querySelectorAll(".lecture");

    lectures.forEach((lecture) => {

        lecture.style.display =
            lecture.innerText.toLowerCase().includes(value)
                ? "flex"
                : "none";

    });

});



// ===============================
// QUICK CARD ANIMATION
// ===============================

const quickCards = document.querySelectorAll(".quick-card");

quickCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



// ===============================
// CARD RIPPLE EFFECT
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;

        const y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(255,77,90,.18),
            #131A2B 45%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#131A2B";

    });

});



// ===============================
// GREETING
// ===============================

const greeting = document.querySelector(".hero h1");

const hour = new Date().getHours();

if (hour < 12) {

    greeting.innerHTML =
        "Good Morning, <span>Shri Vishwa ☀️</span>";

}

else if (hour < 17) {

    greeting.innerHTML =
        "Good Afternoon, <span>Shri Vishwa 🌤️</span>";

}

else {

    greeting.innerHTML =
        "Good Evening, <span>Shri Vishwa 🌙</span>";

}



// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(

`%c
====================================

VTOP NEXTGEN

AI Student Portal

Dashboard Loaded Successfully 🚀

====================================
`,
"color:#FF4D5A;font-size:16px;font-weight:bold;"
);