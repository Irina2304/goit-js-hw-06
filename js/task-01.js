const list = document.querySelector('#categories');
const items = [...list.children]

console.log(`Number of categories: ${[...list.children].length}`);

items.forEach(item => {
    console.dir(`Category: ${item.firstElementChild.innerHTML}`)
    console.dir(`Elements: ${item.lastElementChild.children.length}`)
});