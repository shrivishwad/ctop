// ==========================================
// VTOP NEXTGEN
// timetable.js
// ==========================================

// ----------------------------
// Timetable Data
// ----------------------------

const timetable = {

Monday: [

{
time:"08:00 - 08:50",
subject:"Data Structures",
faculty:"Dr. Sharma",
room:"AB2-201",
type:"dbms"
},

{
time:"09:00 - 09:50",
subject:"Database Systems",
faculty:"Dr. Mehta",
room:"AB2-302",
type:"dbms"
},

{
time:"10:00 - 10:50",
subject:"Operating Systems",
faculty:"Dr. Ramesh",
room:"AB2-405",
type:"os"
},

{
time:"11:00 - 11:20",
subject:"Break",
faculty:"",
room:"",
type:"break"
},

{
time:"11:20 - 12:10",
subject:"Artificial Intelligence",
faculty:"Dr. Priya",
room:"AB3-102",
type:"ai"
},

{
time:"02:00 - 02:50",
subject:"Cloud Computing",
faculty:"Dr. Vivek",
room:"AB1-308",
type:"cloud"
}

],

Tuesday: [

{
time:"08:00 - 08:50",
subject:"Computer Networks",
faculty:"Dr. Rahul",
room:"AB2-207",
type:"cn"
},

{
time:"09:00 - 09:50",
subject:"Operating Systems",
faculty:"Dr. Ramesh",
room:"AB2-405",
type:"os"
},

{
time:"10:00 - 10:50",
subject:"Artificial Intelligence",
faculty:"Dr. Priya",
room:"AB3-102",
type:"ai"
},

{
time:"11:00 - 11:20",
subject:"Break",
faculty:"",
room:"",
type:"break"
},

{
time:"11:20 - 12:10",
subject:"Cloud Computing",
faculty:"Dr. Vivek",
room:"AB1-308",
type:"cloud"
}

],

Wednesday: [

{
time:"08:00 - 08:50",
subject:"Database Systems",
faculty:"Dr. Mehta",
room:"AB2-302",
type:"dbms"
},

{
time:"09:00 - 09:50",
subject:"Computer Networks",
faculty:"Dr. Rahul",
room:"AB2-207",
type:"cn"
},

{
time:"10:00 - 10:50",
subject:"Operating Systems",
faculty:"Dr. Ramesh",
room:"AB2-405",
type:"os"
},

{
time:"11:20 - 12:10",
subject:"Artificial Intelligence",
faculty:"Dr. Priya",
room:"AB3-102",
type:"ai"
}

],

Thursday: [

{
time:"08:00 - 08:50",
subject:"Cloud Computing",
faculty:"Dr. Vivek",
room:"AB1-308",
type:"cloud"
},

{
time:"09:00 - 09:50",
subject:"Operating Systems",
faculty:"Dr. Ramesh",
room:"AB2-405",
type:"os"
},

{
time:"10:00 - 10:50",
subject:"Computer Networks",
faculty:"Dr. Rahul",
room:"AB2-207",
type:"cn"
}

],

Friday: [

{
time:"08:00 - 08:50",
subject:"Artificial Intelligence",
faculty:"Dr. Priya",
room:"AB3-102",
type:"ai"
},

{
time:"09:00 - 09:50",
subject:"Cloud Computing",
faculty:"Dr. Vivek",
room:"AB1-308",
type:"cloud"
},

{
time:"10:00 - 10:50",
subject:"Database Systems",
faculty:"Dr. Mehta",
room:"AB2-302",
type:"dbms"
}

],

Saturday: [

{
time:"09:00 - 09:50",
subject:"Mentor Meeting",
faculty:"Proctor",
room:"Online",
type:"math"
}

]

};

// ----------------------------
// DOM Elements
// ----------------------------

const grid = document.getElementById("timetableGrid");
const buttons = document.querySelectorAll(".day");
const searchInput = document.getElementById("searchSubject");

// ----------------------------
// Render Timetable
// ----------------------------

function renderDay(day){

grid.innerHTML="";

timetable[day].forEach(item=>{

grid.innerHTML += `

<div class="timetable-card">

<div class="subject-bar ${item.type}"></div>

<div class="time">

<i class="fa-regular fa-clock"></i>

${item.time}

</div>

<div class="subject">

${item.subject}

</div>

<div class="faculty">

<i class="fa-solid fa-user"></i>

${item.faculty || "—"}

</div>

<div class="room">

<i class="fa-solid fa-location-dot"></i>

${item.room || "—"}

</div>

<div class="card-footer">

<span class="badge ${item.type==="break" ? "break-badge" : ""}">

${item.subject==="Break" ? "Break" : "Lecture"}

</span>

<button class="subject-btn">

<i class="fa-solid fa-arrow-right"></i>

</button>

</div>

</div>

`;

});

}

// ----------------------------
// Default Day
// ----------------------------

let currentDay="Monday";

renderDay(currentDay);

// ----------------------------
// Day Buttons
// ----------------------------

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentDay=button.innerText;

renderDay(currentDay);

});

});

// ----------------------------
// Search
// ----------------------------

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const filtered=timetable[currentDay].filter(item=>

item.subject.toLowerCase().includes(value)

);

grid.innerHTML="";

filtered.forEach(item=>{

grid.innerHTML+=`

<div class="timetable-card">

<div class="subject-bar ${item.type}"></div>

<div class="time">${item.time}</div>

<div class="subject">${item.subject}</div>

<div class="faculty">${item.faculty || ""}</div>

<div class="room">${item.room || ""}</div>

<div class="card-footer">

<span class="badge">

${item.subject==="Break"?"Break":"Lecture"}

</span>

</div>

</div>

`;

});

});

// ----------------------------
// Live Clock
// ----------------------------

function updateClock(){

const now=new Date();

document.getElementById("clock").innerText=

now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);

// ----------------------------
// Countdown Demo
// ----------------------------

let seconds=1800;

function updateCountdown(){

const hrs=Math.floor(seconds/3600);

const mins=Math.floor((seconds%3600)/60);

const secs=seconds%60;

document.getElementById("countdown").innerText=

`${String(hrs).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

if(seconds>0){

seconds--;

}

}

updateCountdown();

setInterval(updateCountdown,1000);

// ----------------------------
// Auto Select Today
// ----------------------------

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today=days[new Date().getDay()];

buttons.forEach(button=>{

if(button.innerText===today){

button.click();

}

});

// ----------------------------
// Console Message
// ----------------------------

console.log("✅ Timetable Loaded Successfully");