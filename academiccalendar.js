// ==========================================
// VTOP NEXTGEN
// Academic Calendar
// ==========================================

// ------------------------------------------
// DOM Elements
// ------------------------------------------

const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");

const eventSearch = document.getElementById("eventSearch");

const eventCount = document.getElementById("eventCount");
const assignmentCount = document.getElementById("assignmentCount");
const examCount = document.getElementById("examCount");
const holidayCount = document.getElementById("holidayCount");

const eventsList = document.getElementById("eventsList");

// ------------------------------------------
// Current Date
// ------------------------------------------

let currentDate = new Date();

let currentMonth = currentDate.getMonth();

let currentYear = currentDate.getFullYear();

// ------------------------------------------
// Events Database
// ------------------------------------------

const events = [

{
date:"2026-07-07",
title:"Cloud Assignment",
type:"assignment"
},

{
date:"2026-07-12",
title:"AI Workshop",
type:"workshop"
},

{
date:"2026-07-17",
title:"Cloud Lab",
type:"lab"
},

{
date:"2026-07-22",
title:"CAT 1 Examination",
type:"exam"
},

{
date:"2026-07-27",
title:"College Holiday",
type:"holiday"
}

];

// ------------------------------------------
// Render Calendar
// ------------------------------------------

function renderCalendar(month,year){

calendarGrid.innerHTML="";

const firstDay=new Date(year,month,1).getDay();

const totalDays=new Date(year,month+1,0).getDate();

monthYear.innerHTML=new Date(year,month).toLocaleString("default",{

month:"long",

year:"numeric"

});

// Empty boxes

for(let i=0;i<firstDay;i++){

calendarGrid.innerHTML+=`

<div class="day empty"></div>

`;

}

// Days

for(let day=1;day<=totalDays;day++){

const fullDate=`${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

const today=

day===currentDate.getDate()

&&

month===currentDate.getMonth()

&&

year===currentDate.getFullYear();

const event=events.find(e=>e.date===fullDate);

calendarGrid.innerHTML+=`

<div class="day ${today?"today":""}">

<div class="day-number">

${day}

</div>

${
event?

`
<div class="event-dot ${event.type}-dot"></div>

<div class="event-label">

${event.title}

</div>
`

:

""

}

</div>

`;

}

}

renderCalendar(currentMonth,currentYear);

// ------------------------------------------
// Navigation
// ------------------------------------------

document.getElementById("prevMonth").onclick=()=>{

currentMonth--;

if(currentMonth<0){

currentMonth=11;

currentYear--;

}

renderCalendar(currentMonth,currentYear);

};

document.getElementById("nextMonth").onclick=()=>{

currentMonth++;

if(currentMonth>11){

currentMonth=0;

currentYear++;

}

renderCalendar(currentMonth,currentYear);

};

// ------------------------------------------
// Upcoming Events
// ------------------------------------------

function renderEvents(data){

eventsList.innerHTML="";

data.forEach(event=>{

eventsList.innerHTML+=`

<div class="event-card">

<div class="event-left">

<h3>

${event.title}

</h3>

<p>

${event.date}

</p>

</div>

<div class="tag ${event.type}">

${event.type.toUpperCase()}

</div>

</div>

`;

});

}

renderEvents(events);

// ------------------------------------------
// Search
// ------------------------------------------

eventSearch.addEventListener("keyup",()=>{

const value=eventSearch.value.toLowerCase();

const filtered=events.filter(event=>

event.title.toLowerCase().includes(value)

||

event.type.toLowerCase().includes(value)

);

renderEvents(filtered);

});

// ------------------------------------------
// Statistics
// ------------------------------------------

eventCount.innerHTML=events.length;

assignmentCount.innerHTML=

events.filter(e=>e.type==="assignment").length;

examCount.innerHTML=

events.filter(e=>e.type==="exam").length;

holidayCount.innerHTML=

events.filter(e=>e.type==="holiday").length;

// ------------------------------------------
// Animated Counters
// ------------------------------------------

function animateCounter(element,target){

let count=0;

const increment=Math.max(1,Math.ceil(target/30));

const timer=setInterval(()=>{

count+=increment;

if(count>=target){

count=target;

clearInterval(timer);

}

element.innerHTML=count;

},20);

}

animateCounter(eventCount,events.length);

animateCounter(
assignmentCount,
events.filter(e=>e.type==="assignment").length
);

animateCounter(
examCount,
events.filter(e=>e.type==="exam").length
);

animateCounter(
holidayCount,
events.filter(e=>e.type==="holiday").length
);

// ------------------------------------------
// Console
// ------------------------------------------

console.log("📅 Academic Calendar Loaded Successfully");