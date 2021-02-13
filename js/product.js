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
  document.querySelector(".category").href =
    "productlist.html?category=" + product.category;
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".breadcrumb .item_title").textContent =
    product.productdisplayname;
  document.querySelector(".info .item_title").textContent =
    product.productdisplayname;
  document.querySelector(".info .price").textContent = product.price;
  document.querySelector(".breadcrumb .category").textContent =
    product.category;
  document.querySelector(".extra_info .category").textContent =
    product.category;
  document.querySelector(".colorInfo p").textContent = product.basecolour;
  document.querySelector(".descriptionInfo .descriptionText").innerHTML =
    product.description;
  document.querySelector(
    "img.imgL"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.imgL").alt = product.productdisplayname;

  if (product.soldout) {
    document.querySelector("article.productWrapper").classList.add("soldOut");
  }

  if (product.discount) {
    document.querySelector("article.productWrapper").classList.add("onSale");
    document.querySelector(".discount").textContent = `-${product.discount}%`;
    document.querySelector(".discounted span").textContent = Math.round(
      product.price * (1 - product.discount / 100)
    );
  }
}
