
export function RequestStorage(count){
	if ('index'+count === 'index3'){
		count = 1;
	} else{
		count++;
	}
	localStorage.setItem('index'+count, document.getElementById('input-box').value);
	return count;
}