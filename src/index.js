let input = "  Test  ";

const trim = str => {
    return str.trim()
};

const wrap = (type, str) => {
    return `<${type}>${str}</>`;
};

const wrapInDiv = str => {
    return `<div>${str}</div>`;
};

const toLowercase = str => {
    return str.toLowerCase();
};

const result = wrapInDiv(toLowercase(trim(input)));

console.log(result);


