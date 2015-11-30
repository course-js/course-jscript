onload = function(){
	btn1.onclick = runTask1;
	btn2.onclick = runTask2;
	btn3.onclick = runTask3;
	btn4.onclick = runTask4;
	btn5.onclick = runTask5;
	btn6.onclick = runTask6;

	btn12.onclick = runTask12;

	btn22.onclick = runTask22;

	btn24.onclick = runTask24;
};

function runTask1() {
	var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var len = array.length;
	var temp;

	for(var i = 0; i < len/2; i++) {
		temp = array[i];
		array[i] = array[len - 1 - i];
		array[len - 1 - i] = temp;
	}

	console.log(array);
	document.getElementById("answer1").innerHTML = "Result: " + array;
};

function runTask2() {
	var array = [1, 2, 2, 4, 5, 5, 5, 8, 9, 10, 10, 12];
	var arrayNew = [];
	var len = array.length;

	for(var i = 0; i < len; i++) {
		if ((array.indexOf(array[i], i + 1)) != -1) {
			if (arrayNew.indexOf(array[i]) == -1) {
				arrayNew.push(array[i]);
			}
		}
	}

	console.log(arrayNew);
	document.getElementById("answer2").innerHTML = "Result: " + arrayNew;
};

function runTask3() {
	var array = [102, 2, 2, 4, 55, 35, 65, 78, 9, 11, 10, 12];
	var len = array.length;
	var min;
	var result; 

	for(var i = 0; i < len; i++) {
		if (array[i]%2 == 1) {
			if ((min == undefined) || (array[i] < min)) {
				min = array[i];
			}
		}
	}

	if (min == undefined) {
		result = "Result: В массиве нет нечетных чисел!";
	} else {
		result = "Result: " + min;
	}

	console.log(min);
	document.getElementById("answer3").innerHTML = result;
};

function runTask4() {
	var array = [102, 2, 2, 4, 55, 35, 65, 78, 9, 11, 10, 12];
	var len = array.length;
	var sum = 0;
	var avg;

	for(var i = 0; i < len; i++) {
		sum += array[i]; 
	}

	avg = (sum/len).toFixed(2);

	console.log(avg);
	document.getElementById("answer4").innerHTML = "Result: " + avg;
};

function runTask5() {
	var array = [-102, 2, -2, -4, 4, 55, 35, -65, 78, -9, -11, -10, 12];
	var len = array.length;
	var negCount = 0;

	for(var i = 0; i < len; i++) {
		if (array[i] > 0) {
			negCount++;
		}
	}

	console.log(negCount);
	document.getElementById("answer5").innerHTML = "Result: " + negCount;
};

function runTask6() {
	var array = [-102, 2, -2, -4, 4, 55, 35, -65, 78, -9, -11, -10, 12];
	var len = array.length;
	var negCount = 0;

	for(var i = 0; i < len; i++) {
		if (array[i] < 0) {
			negCount++;
		}
	}

	console.log(negCount);
	document.getElementById("answer6").innerHTML = "Result: " + negCount;
};

function runTask12() {
	var array = [-102, 2, -2, -4, 4, 55, 35, -65, 78, -9, 2, -12, -10, 12];
	var flagSame = false;
	var len = array.length;

	for(var i = 0; i < len; i++) {
		if ((array.indexOf(array[i], i + 1)) != -1) {
			flagSame = true;
			break;
		}
	}

	console.log(flagSame);
	document.getElementById("answer12").innerHTML = "Result: " + flagSame;
};

function runTask22() {
	var array = [-102, 2, -2, -4, 4, 55, 35, -65, 78, -9, 2, -12, -10, 12];
	var len = array.length;
	var temp;
	var typeSort = document.getElementById("input22").value;
	console.log(typeSort);

	if (((typeSort == 0) || (typeSort == 1)) && (typeSort != "")) {
		if (typeSort == 0) {
			array.sort(function(a, b) {
							return a - b;
						});
		} else {
			array.sort(function(a, b) {
							return b - a;
						});
		}
		result = array;
	} else {
		result = "Ошибка: Введите направление сортировки (0 или 1)!"; 
	}

	console.log(result);
	document.getElementById("answer22").innerHTML = "Result: " + result;
};

function runTask24() {
	var array = [[1, 2, 3, 4, 4],
				 [9, 2, 3, 4, 2],
				 [7, 2, 6, 4, 1],
				 [1, 6, 3, 2, 3],
				 [1, 2, 7, 4, 1]];
	var len = array.length;

	var max01, max02, max03, max04, max05;
	var i, j;

	// а)
	for(i = 0; i < len; i++) {
		for(j = i; j < len; j++) {
			if ((max01 == undefined) || (array[i][j] > max01)) {
				max01 = array[i][j];
			}
		}
	}

	// б)
	for(i = 0; i < len; i++) {
		for(j = 0; j < i + 1; j++) {
			if ((max02 == undefined) || (array[i][j] > max02)) {
				max02 = array[i][j];
			}
		}
	}

	// в)
	for(i = 0; i < len/2; i++) {
		for(j = i; j < len - i; j++) {
			if ((max03 == undefined) || (array[i][j] > max03)) {
				max03 = array[i][j];
			}
		}
	}

	// г)
	for(i = len - 1; i > len/2 - 1; i--) {
		for(j = len - i - 1; j < i + 1; j++) {
			if ((max04 == undefined) || (array[i][j] > max04)) {
				max04 = array[i][j];
			}
		}
	}

	// д)
	var start;
	for(i = 0; i < len; i++) {
		if (i < 3) {
			start = i;
		} else {
			start = len - i - 1;
		}
		for(j = start; j < len - start; j++) {
			if ((max05 == undefined) || (array[i][j] > max05)) {
				max05 = array[i][j];
			}
		}
	}

//	console.log("i: " + i + ", j: " + j + " (val: " + array[i][j] + ")");
	document.getElementById("answer24").innerHTML = "Result:   a) " + max01
						 								  + ", б) " + max02
						 								  + ", в) " + max03
						 								  + ", г) " + max04
						 								  + ", д) " + max05;
};
