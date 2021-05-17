let treeHeight = +prompt('please enter the height of your tree');
let str = '';

for (let i = 0; i < treeHeight; i++) {
    for (let space = 0; space <= treeHeight - i; space++) {
        str += ' ';
    }
    for (let star = 0; star <= i * 2; star++) {
        str += '*';
    }
    str += '\n';
}
console.log(str);