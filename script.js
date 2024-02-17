let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  card.addEventListener("click", function () {
    // console.log("Mamma click korce");
    const title = card.querySelector("h2").innerText;
    // console.log(title);
    const price = parseFloat(card.querySelector("button").innerText);
    // console.log(price);
    const titleContainer = document.getElementById("title-container");
    // console.log(titleContainer);
    const p = document.createElement("p");
    p.innerText = titleCount + "." + title;
    titleContainer.appendChild(p);
    titleCount++;
    // price calculation

    totalPrice += price;
    // console.log(totalPrice);
    document.getElementById("total-price").innerText = totalPrice;
  });
}
