import {RequestStorage} from './storage';
import problem from './404.png';

const URL_ = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
let request = 0;
let checklist = [];

export function requests(n){
	if(checklist[n-1] !== null){
		checklist[n-1] = localStorage.getItem("index"+n);
	}
	else {
		checklist.push(localStorage.getItem("index"+n));
	}
	const check = checklist.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	});
	document.getElementById("local").innerHTML = "<ul>" + check.join('') + "</ul>";
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
						request = RequestStorage(request);
						while(eval('data.drinks[i].strIngredient'+count) !== null){
							ingredients[count-1] = eval('data.drinks[i].strIngredient'+count);
							count++;
						}
						let html = document.getElementById("ingredients").value = ingredients;
						const content = html.map((list)=>{
							return "<li onclick='selectInput(this)'>" + list + "</li>";
						});
						document.getElementById("ingredients").innerHTML = "<ul>" + content.join('') + "</ul>";
						document.getElementById("pic").src = data.drinks[i].strDrinkThumb;
						requests(request);
						return;
					}
					else if(i === size-1){
						request = RequestStorage(request);
						document.getElementById("pic").src = problem;
						requests(request);
						return;
					}
				}
			})
		})
		.catch((err) => {
			console.log(err)
		})
}
