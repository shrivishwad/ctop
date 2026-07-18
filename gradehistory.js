// ==========================================
// VTOP NEXTGEN
// GRADE HISTORY
// ==========================================

// ------------------------------------------
// Semester Data
// ------------------------------------------

const semesters = [

{
    semester:1,
    sgpa:8.21,
    cgpa:8.21,
    credits:24,
    subjects:6
},

{
    semester:2,
    sgpa:8.58,
    cgpa:8.40,
    credits:24,
    subjects:6
},

{
    semester:3,
    sgpa:8.84,
    cgpa:8.55,
    credits:24,
    subjects:6
},

{
    semester:4,
    sgpa:9.02,
    cgpa:8.76,
    credits:24,
    subjects:6
}

];

// ------------------------------------------
// DOM
// ------------------------------------------

const semesterGrid = document.getElementById("semesterGrid");
const search = document.getElementById("semesterSearch");

// ------------------------------------------
// Render Semester Cards
// ------------------------------------------

function renderSemesters(data){

    semesterGrid.innerHTML="";

    data.forEach(item=>{

        semesterGrid.innerHTML+=`

<div class="semester-card">

<h3>Semester ${item.semester}</h3>

<p>Academic Performance</p>

<div class="sgpa">

<span>SGPA</span>

<h1>${item.sgpa}</h1>

</div>

<div class="progress">

<span style="width:${item.sgpa*10}%"></span>

</div>

<div class="sem-footer">

<span>Credits</span>

<strong>${item.credits}</strong>

</div>

</div>

`;

    });

}

renderSemesters(semesters);

// ------------------------------------------
// Search
// ------------------------------------------

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=semesters.filter(item=>

item.semester.toString().includes(value)

);

renderSemesters(filtered);

});

// ------------------------------------------
// Statistics
// ------------------------------------------

const highestSGPA=Math.max(...semesters.map(s=>s.sgpa));

const totalCredits=semesters.reduce((sum,s)=>sum+s.credits,0);

const latestCGPA=semesters[semesters.length-1].cgpa;

document.getElementById("highestSgpa").innerHTML=highestSGPA;

document.getElementById("credits").innerHTML=totalCredits;

document.getElementById("cgpa").innerHTML=latestCGPA;

document.getElementById("semesterCount").innerHTML=semesters.length;

// ------------------------------------------
// Counter Animation
// ------------------------------------------

function animateCounter(id,end,decimal=false){

let start=0;

const element=document.getElementById(id);

const increment=end/40;

const timer=setInterval(()=>{

start+=increment;

if(start>=end){

start=end;

clearInterval(timer);

}

element.innerHTML=decimal?

start.toFixed(2):

Math.floor(start);

},20);

}

animateCounter("cgpa",latestCGPA,true);

animateCounter("highestSgpa",highestSGPA,true);

animateCounter("credits",totalCredits,false);

animateCounter("semesterCount",semesters.length,false);

// ------------------------------------------
// SVG CGPA Graph
// ------------------------------------------

const graph=document.getElementById("graphLine");

function drawGraph(){

let points="";

const width=620;

const height=180;

const gap=width/(semesters.length-1);

semesters.forEach((item,index)=>{

const x=index*gap+40;

const y=height-((item.cgpa-7)*70);

points+=`${x},${y} `;

});

graph.setAttribute("points",points);

}

drawGraph();

// ------------------------------------------
// Grade Distribution Animation
// ------------------------------------------

document.querySelectorAll(".grade-box h1").forEach(card=>{

const target=parseInt(card.innerText);

let count=0;

const timer=setInterval(()=>{

count++;

card.innerText=count;

if(count>=target){

clearInterval(timer);

}

},80);

});

// ------------------------------------------
// Hover Glow
// ------------------------------------------

document.addEventListener("mouseover",(e)=>{

const card=e.target.closest(".semester-card");

if(card){

card.style.transform="translateY(-8px)";

}

});

document.addEventListener("mouseout",(e)=>{

const card=e.target.closest(".semester-card");

if(card){

card.style.transform="translateY(0px)";

}

});

// ------------------------------------------
// Console
// ------------------------------------------

console.log("📈 Grade History Loaded Successfully");