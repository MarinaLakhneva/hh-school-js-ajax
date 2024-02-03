export function RequestStorage(count, n){
	if ('index'+count === 'index'+n){
		count = 1;
	} else{
		count++;
	}
	localStorage.setItem('index'+count, document.getElementById('input-box').value);
	return count;
}