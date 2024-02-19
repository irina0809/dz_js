///////////////////////////261//////////////////////////////////////////////////
//////////1///////
function ad() {
    let rd=1;
    return function(){
        console.log(rd);
        rd++;
    }
}
let r = ad();
r();
r();
r();
r();
/////////2////////
function ad1() {
    let rd1=10;
    return function(){
        console.log(rd1);
        rd1--;
    }
}
let r1 = ad1();
r1();
r1();
r1();
r1();
r1();
r1();
r1();
r1();
r1();
r1();
/////////3////////
function ad2() {
    let rd2=10;
    return function(){
        if (rd2>0){
        console.log(rd2);
        rd2--;}
        else {
            console.log("отсчет окончен")
        }
    }
}
let r2 = ad2();
r2();
r2();
r2();
r2();
r2();
r2();
r2();
r2();
r2();
r2();
r2();
r2();

//////////////////////269//////////////////////////////////////////////////////
///////1////////
(function() {
    return function(){
        return function(){
            console.log('!');
        };
    };
	
})()()();

///////2////////
(function(a) {
    return function(h){
        console.log(a+h);
    };
})(1)(2);

/////3///////
(function(a1) {
    return function(h1){
        return function(b1){
        console.log(a1+h1+b1);
        };
    };
})(1)(2)(3);

/////////////////////////272//////////////////////////////////////////////
////1/////
let func = (function() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	}
})();

func(); 
func(); 
func(); 
func();
func(); 
/////2////
let func1 = (function() {
	let num1 = 1;
	
	return function() {
        if(num1!=6){
		console.log(num1);
		num1++;
	}
    else{
		num1=1;
    }
}
})();
func1();
func1();
func1(); 
func1();
func1(); 
func1();
func1();
func1();
func1();

///////////////////275//////////////////////////////////////////
function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}

console.log(getSum([1, 2, 3, 4, 5]));

//////////////////276//////////////////////////////////////////
////////1///////
function func33(arr33) {
	for (let elem33 in arr33) {
		if (typeof arr33[elem33] == 'object') {
			func33(arr33[elem33]);
		} else {
			console.log(arr33[elem33]);
		}
	}
}
func33({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

/////////////////////277//////////////////////////////////////////////////////////////
function func5(arr5) {
	let str="";
	for (let elem5 of arr5) {
		if (typeof elem5 == 'object') {
          str = arr5.join('');
		} else {
            console.log(str);
			 
		}
	}
	return str;
}
console.log(func5(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));

//////////////////////278///////////////////////////////////////////////////////////
function func8(arr8) {
	for (let i = 0; i < arr8.length; i++) {
		if (typeof arr8[i] == 'object') {
			arr8[i] = func8(arr8[i]);
		} else {
			arr8[i] = arr8[i]*arr8[i];
		}
	}
	
	return arr8;
}

console.log(func8([1, [2, 7, 8], [3, 4, [5, 6]]]));









