/////////////////////////////////279////////////////////////////////////////////////
//////1//////
let arr0 = [1, 2, 3, 4, 5];

let res00 = arr0.map(function(elem0) {
	return Math.sqrt(elem0, 2);
});
console.log(res00);

/////2////// /*где недочет? */

let arr5 = [1, 2, 3, 4, 5];

let res5 = arr5.map(function(elem5) {
    let r5 = arr5[elem5]+"!";
	return r5;
});

console.log(res5);

////3////
let arr4 = ["koooo", "okpoooo", "oooob"];

let res4 = arr4.map(function(elem4) {
	return elem4.split("").reverse().join("")
});

console.log(res4);



let arr66 = [1, 4, 8, 5, 4];

let result = arr66.map(function(elem, index) {
	return elem * index;
});

console.log(result);

///////////////////280///////////////////////////////////////////////////////
let arr6 = [1, 2, 3, 4, 5];
let y=0;
let ru=0;
arr6.forEach(function(elem) {
     ru=(elem*elem);
     y=y+ru;}
	);
  console.log(y);

///////////////////281///////////////////////////////////////////////////////
let arr = [-886, 5, 909, -5, 87, 4, -78];

let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(res);



let arr87 = [-886, 5, 909, -5, 87, 4, -78];
let res87 = arr87.filter(function(elem87) {
	if (elem87 <= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res87);


let arr90 = [-886, 5, 909, -5, 87, 4, -78];
let res90 = arr90.filter(function(elem90) {
	if ((elem90>0) && (elem90<10)) {
		return true;
	} else {
		return false;
	}
});
console.log(res90);


let arr55 = ["jkljjjjj", "gg", "daaaad"];
let res55 = arr55.filter(function(elem55) {
	if (elem55.length>= 5) {
		return true;
	} else {
		return false;
	}
});
console.log(res55);


let arr45 = [-886, 5, 909, -5, 87, 4, 78];
let res45 = arr45.filter(function(elem45, index) {
	if (elem45*index >= 30) {
		return true;
	} else {
		return false;
	}
});

console.log(res45);

/////////////////////////////////282////////////////////////////////////////////////////
let arr44 = [1, 2, 3, 4, 5];
let check44 = arr44.every(function(elem44, index) {
	if (elem44*index >= 30) {
		return true;
	} else {
		return false;
	}
});
console.log(check44);

/////////////////////////////////282////////////////////////////////////////////////////
let arro = [2, 4, 6, 8];
let resulto = arro.some(function(elemo) {
	return elemo > 0;
});

console.log(resulto);


let arrop = [2, 4, 6, 8];
let resultop = arrop.some(function(elemop, index) {
	return elemop*index > 30;
});

console.log(resultop);


/////////////////////////////////286////////////////////////////////////////////////////
let arr8 = [1, 2, 3, 4, 5];
function func7(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func7(...[1, 2, 3, 4, 5]));

/////////////////////////////////287////////////////////////////////////////////////////

function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

/////////////////////////////////288////////////////////////////////////////////////////
let you=[5, 87, 546, 456, 75];
console.log(Math.min(...you))

/////////////////////////////////293////////////////////////////////////////////////////
function func(...nums) {
	let sum = 0;
	let y=0;
	for (let num of nums) {
		sum += num;
    y++;
	}
	return sum/y;
}
let result45 = func(1, 2, 3, 78, 5);
console.log(result45); 















