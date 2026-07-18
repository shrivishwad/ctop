// ======================================
// VTOP NEXTGEN
// attendance.js
// ======================================

// -------------------------
// Attendance Data
// -------------------------

const subjects = [

{
name:"Data Structures",
attendance:92,
attended:46,
total:50
},

{
name:"Database Systems",
attendance:84,
attended:42,
total:50
},

{
name:"Operating Systems",
attendance:76,
attended:38,
total:50
},

{
name:"Computer Networks",
attendance:69,
attended:34,
total:49
},

{
name:"Artificial Intelligence",
attendance:95,
attended:57,
total:60
},

{
name:"Cloud Computing",
attendance:81,
attended:41,
total:51
}

];

// -------------------------
// DOM
// -------------------------

const grid = document.getElementById("subjectGrid");

const search = document.getElementById("searchSubject");

const circle = document.querySelector(".progress-circle");

const overallText = document.getElementById("overallAttendance");


// -------------------------
// Render Cards
// -------------------------

function renderSubjects(list){

grid.innerHTML="";

list.forEach(subject=>{

let status="good";

if(subject.attendance<75){

status="danger";

}
else if(subject.attendance<85){

status="warning";

}

grid.innerHTML+=`

<div class="subject-card">

<div class="subject-top">

<div class="subject-name">

${subject.name}

</div>

<div class="subject-percent">

${subject.attendance}%

</div>

</div>

<div class="progress">

<span style="width:${subject.attendance}%"></span>

</div>

<div class="subject-info">

<span>

Present

<strong>${subject.attended}</strong>

</span>

<span>

Total

<strong>${subject.total}</strong>

</span>

</div>

<div class="subject-footer">

<span class="status ${status}">

${status.toUpperCase()}

</span>

<button class="subject-btn">

<i class="fa-solid fa-arrow-right"></i>

</button>

</div>

</div>

`;

});

}

renderSubjects(subjects);

// -------------------------
// Search
// -------------------------

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=subjects.filter(subject=>

subject.name.toLowerCase().includes(value)

);

renderSubjects(filtered);

});

// -------------------------
// Animate Numbers
// -------------------------

function animateNumber(id,end){

const element=document.getElementById(id);

let start=0;

const timer=setInterval(()=>{

start+=Math.ceil(end/50);

if(start>=end){

start=end;

clearInterval(timer);

}

element.innerText=start;

},20);

}

animateNumber("totalClasses",520);

animateNumber("attendedClasses",426);

animateNumber("missedClasses",94);

// -------------------------
// Overall Attendance
// -------------------------

const overall=82;

overallText.innerText=overall+"%";

circle.style.background=

`conic-gradient(

#20D58A ${overall}%,

#283243 ${overall}% 100%

)`;

// -------------------------
// Attendance Calculator
// -------------------------

document
.getElementById("calculate")
.addEventListener("click",()=>{

const current=

parseFloat(
document.getElementById("current").value
);

const target=

parseFloat(
document.getElementById("target").value
);

const result=

document.getElementById("result");

if(isNaN(current)||isNaN(target)){

result.innerHTML=

"Please enter valid values.";

return;

}

if(target<=current){

result.innerHTML=

"You already have this attendance 🎉";

return;

}

const needed=

Math.ceil(

(target-current)*2

);

result.innerHTML=

`Attend approximately <b>${needed}</b> more classes to reach <b>${target}%</b>.`;

});

// -------------------------
// Card Hover
// -------------------------

document.addEventListener("mouseover",(e)=>{

const card=e.target.closest(".subject-card");

if(card){

card.style.transform="translateY(-8px)";

}

});

document.addEventListener("mouseout",(e)=>{

const card=e.target.closest(".subject-card");

if(card){

card.style.transform="translateY(0px)";

}

});

// -------------------------
// Welcome
// -------------------------

console.log("Attendance Dashboard Loaded Successfully 🚀");