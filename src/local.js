export let checklist = [localStorage.getItem("index1"), localStorage.getItem("index2"), localStorage.getItem("index3")]


window.onload = function () {
	if(localStorage.getItem("index1") === null){
			checklist = [];
	}
	
	const check = checklist.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	});
	if(document.getElementById("local")){
		document.getElementById("local").innerHTML = "<ul>" + check.join('') + "</ul>";
	}
	console.log(checklist)
}


