const url = "https://kea-alt-del.dk/t7/api/categories";
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then(gotData);

// loop through the data
function gotData(data) {
  data.forEach(showCategory);
}

function showCategory(item) {
  console.log(item.category);
  // grab
  const template = document.querySelector("template").content;
  // clone
  const copy = template.cloneNode(true);
  //change
  copy.querySelector(
    "article a"
  ).href = `productlist.html?category=${item.category}`;
  copy.querySelector("article a").textContent = `${item.category}`;
  //grab parent
  const parent = document.querySelector(".categoryList");
  //append
  parent.appendChild(copy);
}
