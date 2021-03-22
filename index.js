const cardImage = document.querySelector(".card-image");
const cardTile = document.querySelector(".card-title");
const cardDescription = document.querySelector(".card-description");

const renderCard = () => {
  cardTile.textContent = "Card title Yo!";
  cardDescription.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quaerat assumenda dolorem ullam porro . Sapiente corporis explicabo vitae totam culpa illo. Ex, nostrum?";

  cardTile.classList.remove("loading");
  cardDescription.classList.remove("loading");
  cardImage.classList.remove("loading");
};

const createImg = () => {
  const img = new Image();
  img.setAttribute(
    "src",
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR657w2_EWS447D78u537ojn5ABMQCJJ348YCVlI1Csu4SJByldjCiKnSauVwyKIfjQc_sPmq7k2hbNwthmJBk"
  );
  cardImage.appendChild(img);
};

window.addEventListener("load", () => {
  setTimeout(() => {
    renderCard();
    createImg();
  }, 1500);
});
