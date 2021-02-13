const url = "https://kea-alt-del.dk/t7/api/categories";
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then(gotData);

// loop through the data
function gotData(data) {
  data.forEach(showCategory);
}

function showCategory(category) {
  console.log(category.category);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
}

// grab clone change grab append
