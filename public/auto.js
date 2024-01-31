let availableKeywords = [
	'Acute Tropicana',
	'Bianca',
	'Margarita',
	'Gay Russian',
	'Mojito',
	'Bloody Mary',
	'Long Island Ice Tea ',
	'Martini',
	'Wine Punch',
	'Negroni'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function (){
	let result = [];
	let input = inputBox.value;
	if(input.length){
		result = availableKeywords.filter((keyword)=>{
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
	}
	display(result);
	
	if(!result.length){
		resultsBox.innerHTML = '';
		document.getElementById("ingredients").innerHTML = null;
		document.getElementById("pic").src = "";
	}
}

function display(result){
	const content = result.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	})
	resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
	inputBox.value = list.innerHTML;
	resultsBox.innerHTML = '';
}