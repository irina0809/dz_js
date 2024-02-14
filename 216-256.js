////////////////223////////////////////////////////////////////////////////////////
function func() {
	return '!';
}

console.log(func);

/////////////224////////////////////////////////////////////////////////////////////
function func1() {
	console.log('dfghjkl');
    return "t8i8";
}
func1();
console.log(func1);
func1=123;
console.log(func1);

///////////////////////225///////////////////////////////////////////////////////////
function func11() {
    return 3;
}
let func2=func11;
console.log(func11()+func2());

///////////////////////226///////////////////////////////////////////////////////////
let func111 = function() {
	return 1;
};
let func22 = function() {
	return 2;
};
console.log(func22()+func111());

///////////////////////229///////////////////////////////////////////////////////////
/*func(); 
function func() {
	console.log('!');
}


func666(); 
*/
let func666 = function() {
	console.log('!');
};

///////////////////////230///////////////////////////////////////////////////////////
let func1111 = function() {console.log('!')};
let func222 = function() {
	console.log('!')
};
function func3() {
	console.log('!')
}

///////////////////////237///////////////////////////////////////////////////////////
let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];
console.log(arr[2]());
console.log(arr[0]()+arr[1]()+arr[2]());
for (let func of arr) {
	console.log(func());
}
///////////////////////238///////////////////////////////////////////////////////////
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
console.log(obj.func1()+obj.func2()+obj.func3());
for (let key in obj) {
        console.log(obj[key]());
    }


// //////////////////240/////////////////////////////////////////////////////////////
test40(
    function () {return 1;},
    function () {return 2;},
    function () {return 3;}
)
function test40(f1, f2, f3){
    console.log(f1() + f2() + f3());
}

/////////////////////////241/////////////////////////////////////////////////////////////

function test41(f41, f412, f413) {
    alert(f41() + f412() + f413());
}
function func41() {
    return 1;
}
function func412() {
    return 2;
}
function func413() {
    return 3;
}
test41(func41, func412, func413);

//////////////////////242//////////////////////////////////////////////////////////////
test42(function(num42) {
	return num42 * num42 * num42;
});
function test42(func42) {
	console.log(func42(3));
}


let func42_2 = function(a42, b42){
    return a42 + b42;
}
test42_2(func42_2);
function test42_2(func42_2){
    console.log(func42_2(2, 3));
}

/////////////////////// 243////////////////////////////////////////////////////////
test43(3,
    function(num43){return num43 * num43;},
    function (num43){return num43 * num43 * num43;});
function test43(num43, func431, func432) {
    console.log(func431(num43) + func432(num43));
}

// /////////////////////////244//////////////////////////////////////////
function test44(arr44, func44) {
    for (let i44 = 0; i44 < arr44.length; i44++){
        arr44[i44] = func44(arr44[i44]);
    }
    return arr44;
}
let result44 = test44([1, 2, 3], function (num44) {
    return num44 * num44 * num44;
});
console.log(result44);

//////////////////////245/////////////////////////////////////////////////////////////////
function func45(num451, num452) {
    function square45(num451) {
        return num451 * num451;
    }
    function cube45(num452){
        return num452 * num452 * num452;
    }
    return square45(num451) + cube45(num452);
}
console.log(func45(2, 3));

//////////////////////250//////////////////////////////////////////////////////////////////////
function func1() {
    return function () {
        return 1;
    }
}
function func2() {
    return function () {
        return 2;
    }
}
console.log(func1()() + func2()());

///////////////////////251//////////////////////////////////////////////////////
function func51() {
    return function () {
        return function () {
            return function () {
                return function () {
                    return '!';
                }
            }
        }
    }
}
console.log(func51()()()()());

///////////////////252//////////////////////////////////////////////////////////
function func52(num521) {
    return function (num522) {
        return function (num523) {
            return num521 + num522 + num523;
        }
    }
}
console.log(func52(2)(3)(4));