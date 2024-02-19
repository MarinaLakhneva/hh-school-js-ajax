import {RequestStorage} from './storage';
import problem from './404.png';
import {checklist} from './App'

let localStore = [];

window.addEventListener('storage', e=>{
	console.log('e', e);
	
	let str = e.key;
	let lastChar = str.substr(str.length - 1);
	localStore[lastChar] = localStorage.getItem(e.key);
	const check = localStore.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	});
	document.getElementById('local').innerHTML = "<ul>" + check.join('') + "</ul>";
	
})

const URL_ = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
let n_request = 0;

function requests(n, id, array){
	if(array[n-1] !== null){
		array[n-1] = localStorage.getItem("index"+n);
	}
	else {
		array.push(localStorage.getItem("index"+n));
	}
	const check = array.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	});
	document.getElementById(id).innerHTML = "<ul>" + check.join('') + "</ul>";
}
function work_area(image){
	document.getElementById("pic").src = image;
	n_request = RequestStorage(n_request, 3);
	requests(n_request, "local", checklist);
}
export function GetData(){
	let letter = document.getElementById('input-box').value[0];
	let URL = URL_+letter.toLowerCase();

	
	fetch(URL)
		.then(
			(response) => {
			if ( response.status !== 200 ) {
				console.log( 'Looks like there was a problem. Status Code: ' +
					response.status );
				return;
			}
			response.json().then((data) =>{
				let size = data.drinks.length;
				for (let i = 0; i < size; i++){
					let count = 1;
					let ingredients = [];
					if(document.getElementById('input-box').value === data.drinks[i].strDrink){
						while(eval('data.drinks[i].strIngredient'+count) !== null){
							ingredients[count-1] = eval('data.drinks[i].strIngredient'+count);
							count++;
						}
						let html = document.getElementById("ingredients").value = ingredients;
						const content = html.map((list)=>{
							return "<li onclick='selectInput(this)'>" + list + "</li>";
						});
						document.getElementById("ingredients").innerHTML = "<ul>" + content.join('') + "</ul>";
						work_area(data.drinks[i].strDrinkThumb);

						return;
					}
					else if(i === size-1){
						work_area(problem);
						return;
					}
				}
			})
		})
		.catch((err) => {
			console.log(err)
		})
}
