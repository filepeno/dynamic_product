const url = "https://kea-alt-del.dk/t7/api/products/2123";
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
// populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".info .item_title").textContent =
    product.productdisplayname;
  document.querySelector(".info .price h3").textContent = product.price;
  product.productdisplayname;
  document.querySelector(".categoryInfo p").textContent = product.category;
  product.productdisplayname;
  document.querySelector(".colorInfo p").textContent = product.basecolour;
  document.querySelector(".descriptionInfo p").textContent =
    product.description;
  document.querySelector(
    "img.imgL"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.imgL").alt = product.productdisplayname;
}
