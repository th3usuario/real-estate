const agents=[
       {
       	image:'image/robot-1.jpg',
       	name:'stewie griffin',
       	jobTitle:'sales manager',
       },
        {
       	image:'image/robot-3.jpg',
       	name:'Peter Griffin',
       	jobTitle:'sales Assistant',
       },
        {
       	image:'image/robot-2.jpg',
       	name:'lisa simson',
       	jobTitle:'sales manager',
       },
       {
       	image:'image/robot-3.jpg',
       	name:'maggie simson',
       	jobTitle:' regional sales manager',
       },
       {
       	image:'image/robot-2.jpg',
       	name:'Seymour Skinner',
       	jobTitle:'sales agent',
       },
       {
       	image:'image/robot-1.jpg',
       	name:'Dolph Starbeam',
       	jobTitle:'assistant regional manager',
       }

];

const ourAgents=document.querySelector('.our-agents');

const callAgent=document.querySelector('.agent-call');

const agentCard=document.querySelector('.agent-card');
const agentNumber=document.querySelector('.agent-contact-details');

const houseImages=document.querySelectorAll('.house-image');





// CREATE HOUSE STATUS

const propertyCard=document.querySelectorAll('.property-card');

const sales=['SOLD OUT','AVAILABLE'];



let status=document.createElement('h1');
status.classList.add('house-status');


propertyCard.forEach(function(card){
	card.addEventListener('mouseover',function(){
		number=Math.floor((Math.random()*2));
		status.textContent=sales[number];

        card.appendChild(status);

    }); 


	
	
});



houseImages.forEach(function(image){
	
    image.addEventListener('mouseover',function(){
        image.classList.toggle('house-image-status');
      

    }); 

}); 

let showAgents=agents.map(function(item){
      return `<div class="agent-card">
            <img src=${item.image} class="agent-img img-fluid" alt="...">
            <div class="agent-card-body">
            <h2 class="agent-name text-capitalize">${item.name}</h2>          
            <div class="agent-job-title text-capitalize">${item.jobTitle}
             <a class="agent-call"><i class="fa-solid fa-headphones"></i></a>
            </div>
             </div>
            </div>`;

});

showAgents=showAgents.join('');
ourAgents.innerHTML=showAgents;


// AGENTS CAROUSEL

const agentCarousel=document.querySelector('.medium-agent');
const nextAgent=document.querySelector('.agent-next');
const prevAgent=document.querySelector('.agent-previous');

let COUNT=0;
function showAgent(count){
      return `<div class="agent-card">
            <img src=${agents[count].image} class="agent-img img-fluid" alt="...">
            <div class="agent-card-body">
            <h2 class="agent-name text-capitalize">${agents[count].name}</h2>          
            <div class="agent-job-title text-capitalize">${agents[count].jobTitle}
             <a class="agent-call"><i class="fa-solid fa-headphones"></i></a>
            </div>
             </div>
            </div>`;
}

console.log(agents.length);
    value=showAgent(COUNT);
    agentCarousel.innerHTML=value;

nextAgent.addEventListener('click',function(){
	
    if(COUNT<agents.length-1){
        COUNT+=1;
    }else if(COUNT==agents.length-1){
    	COUNT=0;
    }
    
	value=showAgent(COUNT);
    agentCarousel.innerHTML=value;

});

prevAgent.addEventListener('click',function(){
	
    if(COUNT==0){
        COUNT==agents.length-1;

    }else{
    	COUNT-=1;
    }
   
	value=showAgent(COUNT);
    agentCarousel.innerHTML=value;

});


