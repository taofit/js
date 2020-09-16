
function add(a, b) {
    if (!b) {
        return (b) => {
            return add(a, b);
        }
    }

    return a + b;
}

const number = [1,3,5,6,7];
const add2 = add(2);
console.log(add2(3));
console.log(number.map(add(2)));
