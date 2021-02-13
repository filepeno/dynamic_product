const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);
document.querySelector(".heading").textContent = category;

const url =
  "https://kea-alt-del.dk/t7/api/products?category=" + category + "&limit=20";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showItem);
}

function showItem(item) {
  console.log(item);
  document.querySelector(".breadcrumb > :last-of-type").textContent =
    item.category;
  //grab template
  const template = document.querySelector("#templateProduct").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${item.id}.webp`;
  copy.querySelector(".brand").textContent = `${item.brandname}`;
  copy.querySelector(".item_title").textContent = `${item.productdisplayname}`;
  copy.querySelector(".price").textContent = `${item.price}`;
  copy.querySelector(".smallProduct > a").href = `product.html?id=${item.id}`;

  if (item.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (item.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discount").textContent = `-${item.discount}%`;
    copy.querySelector(".discounted span").textContent = Math.round(
      item.price * (1 - item.discount / 100)
    );
  }
  //grab parent
  const parent = document.querySelector(".productList");
  //append
  parent.appendChild(copy);
}
