function add(a) {
    return function (b) {
        return a + b;
    };
}

console.log(add(1)(5)); //add(1,5)

const addResultFn = add2 = (a) => {
    return (b) => {
        return a + b;
    }
};

console.log(addResultFn(1)(2));

const addCount = a => b => {
    return a + b;
};
console.log(addCount(2)(5));

const addCount2 = a => b => a + b;

console.log(addCount2(8)(9));
