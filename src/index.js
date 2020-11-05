import {compose, pipe} from "lodash/fp";

let input = " TesT";
const trim = data => {
    return data.trim();
};

// const wrap = (type, data) => {
//     return `<${type}>${data}</${type}>`;
// };

const wrap = type => data => {
    return `<${type}>${data}</${type}>`;
};


const toLoCase = (data) => {
    return data.toLowerCase();
};
/*const transform = pipe(trim, toLoCase, wrap("img"));
console.log(transform(input));*/

const transform = pipe(trim, toLoCase, wrap("img"))(input);
console.log(transform);
