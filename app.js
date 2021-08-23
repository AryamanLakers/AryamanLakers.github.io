//my color array
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
//first when client clicks on the add button
let addnote=document.getElementsByClassName("addnote")[0];
let container3=document.getElementsByClassName("container3")[0];
let container2=document.getElementsByClassName("container2")[0];
let cross=document.getElementsByClassName("hide")[0];
let tick=document.getElementsByClassName("tick")[0];
let user_input1=document.getElementById("user_input");
let trashcan=document.getElementById("trash1");
addnote.addEventListener("click",function(){
	if(getComputedStyle(container3).display=="none"){
		container3.style.display="block";
	}
});

//now for cross icon, if we press, container3 again goes to hide
cross.addEventListener("click",()=>{
	if(getComputedStyle(container3).display=="block"){
		container3.style.display="none";
	}
}); 

//now for tick icon we want:
// 1. to copy the text written to another textarea
// 2. create a new div class which has a child called textarea
tick.addEventListener("click",()=>{
	let inputText=user_input1.value;
	let new_div=document.createElement('div');
	let new_text=document.createElement('textarea');
	new_div.setAttribute("draggable","true");
	
	//new textarea configurations
	const calculation=Math.floor(Math.random()*colorArray.length);
	new_text.style.backgroundColor=colorArray[calculation];
	new_text.classList.add("adjustment");
	new_text.innerText=inputText;
    new_div.append(new_text);
	container2.append(new_div);
	new_div.classList.add("boxer");
	
	//we make a goto function which will uniquely identify the
	//dragging container
	const new_container=document.querySelectorAll('.boxer');
	gotofunc(new_container);
	
	//so now when i click tick then i want my container 3 to disappear
	container3.style.display="none";
});

//now if we want our elements to be draggable
//1. I have to select all the containers
//2.now for each element i will add a class that will uniquely identify a container
//when the container is being dragged
function gotofunc(new_container){
	new_container.forEach((draggable)=>{
	draggable.addEventListener("dragstart",()=>{
		draggable.classList.add("dragging");
		trashcan.addEventListener("dragover",(e)=>{
			e.preventDefault();
			
		});
		trashcan.addEventListener("dragenter",(e)=>{
			e.preventDefault();
			trashcan.classList.add("fa-5x");
		});
		trashcan.addEventListener("dragleave",(e)=>{
			trashcan.classList.remove("fa-5x");
		});
		trashcan.addEventListener("drop",(e)=>{
			const current_box=document.getElementsByClassName("dragging")[0];
			current_box.remove();
			trashcan.classList.remove("fa-5x");
		});

	});
	draggable.addEventListener("dragend",()=>{
		draggable.classList.remove("dragging");
	});
});
}

//now during draggin what we want  