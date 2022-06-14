function insert(num){
	document.kotak.textView.value = document.kotak.textView.value + num;
}

function clear(){
	document.kotak.textView.value = "";
}

function hasil(){
	var jumlah = document.kotak.textView.value;
	document.kotak.textView.value = eval(jumlah);
}

function hapus(){
	var teksKalkulator = document.kotak.textView.value;
	document.kotak.textView.value = teksKalkulator.substring(0,hasil.length-1);
}