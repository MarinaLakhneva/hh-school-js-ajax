let requests_user = [];
let i = 0;
let call = false;
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
const suggestBox = document.querySelector(".suggest-box")
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function (){
	let result = [];
	let input = inputBox.value;
	if(input.length){
		result = availableKeywords.filter((keyword)=>{
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
	}
	
	display(result, resultsBox);
	if (call === true){
		display(requests_user, suggestBox);
	}
	else {
		call = true;
		document.getElementById("pic").src = "";
	}
	if(!result.length){
		resultsBox.innerHTML = "";
		suggestBox.innerHTML = "";
		document.getElementById("ingredients").innerHTML = null;
		document.getElementById("pic").src = "";
	}
}

let count_q = 0;
let count_s = 0;

function display(result, type){
	if(type === resultsBox){
		count_q = result.length;
	}
	else if(type === suggestBox){
		count_s = result.length;
	}
	if(count_q + count_s > 10){
		if(type === resultsBox) {
			result.length = 10 - count_s;
		}
	}
	const content = result.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	})
	type.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
	inputBox.value = list.innerHTML;
	if(requests_user.length === 5){
		if(i === 4){
			i = 0;
		}
		else {
			requests_user[i] = inputBox.value;
			i++;
		}
	}
	else {
		requests_user.push(inputBox.value);
	}
	resultsBox.innerHTML = '';
	suggestBox.innerHTML = '';
}
