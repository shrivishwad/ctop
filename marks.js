// ======================================
// VTOP NEXTGEN
// marks.js
// ======================================

// --------------------------------------
// Subject Data
// --------------------------------------

const subjects = [

{
subject:"Artificial Intelligence",
code:"CSE3001",
marks:95,
grade:"O",
credits:4,
faculty:"Dr. Priya"
},

{
subject:"Operating Systems",
code:"CSE3002",
marks:89,
grade:"A+",
credits:4,
faculty:"Dr. Ramesh"
},

{
subject:"Database Systems",
code:"CSE3003",
marks:91,
grade:"O",
credits:4,
faculty:"Dr. Mehta"
},

{
subject:"Computer Networks",
code:"CSE3004",
marks:82,
grade:"A",
credits:3,
faculty:"Dr. Rahul"
},

{
subject:"Cloud Computing",
code:"CSE3005",
marks:87,
grade:"A+",
credits:3,
faculty:"Dr. Vivek"
},

{
subject:"Data Structures",
code:"CSE3006",
marks:78,
grade:"B",
credits:4,
faculty:"Dr. Sharma"
}

];

// --------------------------------------
// DOM
// --------------------------------------

const grid=document.getElementById("marksGrid");
const search=document.getElementById("searchSubject");

// --------------------------------------
// Grade Class
// --------------------------------------

function gradeClass(grade){

switch(grade){

case "O":
return "o";

case "A+":
return "ap";

case "A":
return "a";

default:
return "b";

}

}

// --------------------------------------
// Render Cards
// --------------------------------------

function renderCards(data){

grid.innerHTML="";

data.forEach(subject=>{

grid.innerHTML+=`

<div class="mark-card">

<div class="mark-top">

<div>

<div class="subject-name">

${subject.subject}

</div>

<div class="subject-code">

${subject.code}

</div>

</div>

<div class="score">

${subject.marks}

</div>

</div>

<div class="grade ${gradeClass(subject.grade)}">

${subject.grade}

</div>

<div class="progress">

<span style="width:${subject.marks}%"></span>

</div>

<div class="details">

<div class="detail">

<label>Faculty</label>

<strong>${subject.faculty}</strong>

</div>

<div class="detail">

<label>Credits</label>

<strong>${subject.credits}</strong>

</div>

</div>

<div class="mark-footer">

<div class="credit">

Marks <strong>${subject.marks}/100</strong>

</div>

<button class="view-btn">

<i class="fa-solid fa-arrow-right"></i>

</button>

</div>

</div>

`;

});

}

renderCards(subjects);

// --------------------------------------
// Search
// --------------------------------------

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=subjects.filter(item=>

item.subject.toLowerCase().includes(value)

);

renderCards(filtered);

});

// --------------------------------------
// Statistics
// --------------------------------------

const highest=Math.max(...subjects.map(s=>s.marks));

const lowest=Math.min(...subjects.map(s=>s.marks));

const average=Math.round(

subjects.reduce((sum,s)=>sum+s.marks,0)

/

subjects.length

);

document.getElementById("highest").innerText=highest;

document.getElementById("lowest").innerText=lowest;

document.getElementById("average").innerText=average;

// --------------------------------------
// Animated Numbers
// --------------------------------------

function animate(id,end,suffix=""){

let start=0;

const element=document.getElementById(id);

const timer=setInterval(()=>{

start+=Math.ceil(end/40);

if(start>=end){

start=end;

clearInterval(timer);

}

element.innerHTML=start+suffix;

},20);

}

animate("overallPercent",87,"%");

animate("credits",96);

document.getElementById("sgpa").innerHTML="8.91";
document.getElementById("cgpa").innerHTML="8.76";

// --------------------------------------
// GPA Predictor
// --------------------------------------

document

.getElementById("predict")

.addEventListener("click",()=>{

const value=parseFloat(

document.getElementById("expectedMarks").value

);

const result=document.getElementById("predictionResult");

if(isNaN(value)){

result.innerHTML="Enter expected marks.";

return;

}

let gpa=(value/10).toFixed(2);

if(gpa>10){

gpa=10;

}

result.innerHTML=

`Expected GPA : <strong>${gpa}</strong>`;

});

// --------------------------------------
// AI Insight
// --------------------------------------

const weakest=

subjects.reduce((a,b)=>

a.marks<b.marks?a:b

);

console.log(

`AI Suggestion:
Focus more on ${weakest.subject}.
Current Score : ${weakest.marks}/100`

);

// --------------------------------------
// Hover Effect
// --------------------------------------

document.addEventListener("mouseover",(e)=>{

const card=e.target.closest(".mark-card");

if(card){

card.style.transform="translateY(-8px)";

}

});

document.addEventListener("mouseout",(e)=>{

const card=e.target.closest(".mark-card");

if(card){

card.style.transform="translateY(0px)";

}

});

// --------------------------------------
// Welcome
// --------------------------------------

console.log("📊 Marks Analytics Loaded Successfully");