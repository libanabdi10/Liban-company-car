// HEL ELEMENTS
const carSelect = document.getElementById("carSelect");
const carInfo = document.getElementById("carInfo");
const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

// CAR DATA
const cars = {
  lamborghini: { price: "$900,000", image: "lamborghini aventador.jpg" },
  dodge: { price: "$100,000", image: "Dodge Challenger SRT Super Stock.jpg" },
  ferrari: { price: "$200,000", image: "Ferrari F40.jpg" },
  rolls: { price: "$350,000", image: "Rolls-Royce.jpg" },
  mclaren: { price: "$200,000", image: "mcLaren.jpg" },
  landcruiser: { price: "$57,200", image: "land-cruiser.jpg" }
};

// SHOW CAR INFO
carSelect.addEventListener("change", function () {
  const selectedCar = carSelect.value;

  if (selectedCar === "") {
    carInfo.innerHTML = "";
    return;
  }

  carInfo.innerHTML = `
    <img src="${cars[selectedCar].image}">
    <div class="price">Qiimaha: ${cars[selectedCar].price}</div>
  `;
});

// NAME → letters only
nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

// PHONE → numbers only
phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// SUBMIT FORM
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const selectedCar = carSelect.value;

  if (!name || !email || !phone || !selectedCar) {
    alert("Fadlan buuxi dhammaan fields-ka oo dooro baabuur 🚗");
    return;
  }

  alert(
    `Waad ku mahadsan tahay ${name}!\nWaxaad dooratay ${
      carSelect.options[carSelect.selectedIndex].text
    }`
  );
});
