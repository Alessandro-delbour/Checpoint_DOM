

let sum = document.querySelector('.sum')
let price = document.querySelectorAll('.price')
let Quan=document.querySelectorAll('.quant')
let AddButton=document.querySelectorAll('.plus')
for (let i=0;i<AddButton.length;i++){
	AddButton[i].addEventListener("click",function(){
		Quan[i].innerHTML++
		console.log()
		sum.textContent=Number(price[i].innerHTML)+Number(sum.textContent)
	}
	)
}


AddButton=document.querySelectorAll('.moin')


// Minus
for (let i=0;i<AddButton.length;i++){
	AddButton[i].addEventListener("click",function(){
		if (Quan[i].innerHTML>0){
			Quan[i].innerHTML--
			sum.textContent=Number(sum.textContent)-Number(price[i].innerHTML)
		}

	}
	)
}

function delete1(e){
	e.preventDefault()
	let Quan=document.querySelectorAll('.quant')
	let sum = document.querySelector('.sum')
	let price = document.querySelectorAll('.price')
	let all = document.getElementById('all');
	let delete2 = document.getElementById('delete');
	let quantiter1 = document.getElementById('quantiter');

	all.removeChild(delete2);
	all.removeChild(quantiter1);
	for (let i=0;i<delete1.length;i++){
			sum.textContent=Number(sum.textContent)-Number(price[i].innerHTML)*Number(Quan[i].innerHTML)

	}
}

function like(e){
	e.preventDefault()

	let like = document.getElementById('like');

	like.style.background = '#fa0000';
}

function dislike(e){
	e.preventDefault()

	let like = document.getElementById('like');

	like.style.background = '#edf2f2';
}



// shoes
function delete2(e){
	e.preventDefault()

	let Quan=document.querySelectorAll('.quant')
	let sum = document.querySelector('.sum')
	let price = document.querySelectorAll('.price')
	let all2 = document.getElementById('all2');
	let delete3 = document.getElementById('delete2');
	let quantiter3 = document.getElementById('quantiter2');

	all2.removeChild(delete3);
	all2.removeChild(quantiter3);

	for (let i=0;i<delete2.length;i++){
			sum.textContent=Number(sum.textContent)-Number(price[i].innerHTML)*Number(Quan[i].innerHTML)

	}
}

function like2(e){
	e.preventDefault()

	let like2 = document.getElementById('like2');

	like2.style.background = '#fa0000';
}

function dislike2(e){
	e.preventDefault()

	let like2 = document.getElementById('like2');

	like2.style.background = '#edf2f2';
}