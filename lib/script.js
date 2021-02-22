let one = document.querySelectorAll("h1");
let two = document.querySelectorAll("h2");
let aside = document.getElementById('table-of-contents')
console.log(one);
console.log(two);
console.log(aside);

for (let i = 0; i < one.length; i ++) {
  console.log(one[i].innerHTML);
  let listItem = document.createElement("li")
  listItem.innerHTML = one[i].innerHTML
  aside.appendChild(listItem)
}

for (let i = 0; i < two.length; i ++) {
  console.log(two[i].innerHTML);
  let listItem = document.createElement("li")
  listItem.innerHTML = two[i].innerHTML
  aside.appendChild(listItem)
}