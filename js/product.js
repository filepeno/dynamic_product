const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
// populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".breadcrumb .item_title").textContent =
    product.productdisplayname;
  document.querySelector(".info .item_title").textContent =
    product.productdisplayname;
  document.querySelector(".info .price h3").textContent = product.price;
  document.querySelector(".breadcrumb .category").textContent =
    product.category;
  document.querySelector(".extra_info .category").textContent =
    product.category;
  document.querySelector(".colorInfo p").textContent = product.basecolour;
  document.querySelector(".descriptionInfo p").innerHTML = product.description;
  document.querySelector(
    "img.imgL"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.imgL").alt = product.productdisplayname;
}
