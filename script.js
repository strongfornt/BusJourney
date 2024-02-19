const seats = document.querySelectorAll(".seat");
const seatCount = document.getElementById("total-seat");
//seat left start==========================================
const seatsLeft = document.getElementById("seats-left");
const seatLeftText = seatsLeft.innerText;
const seatLeft = parseInt(seatLeftText);
//seat left end===========================================

//const total price========================================
const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("Grand-total");
let priceTotal = 0;
const ticketPrice = 550;
//coupon apply button===========================
const apply = document.getElementById("apply-btn");
//next button ======================================
const nextBtn = document.getElementById("Next-button");
const inputValue = document.getElementById("number");
// inputValue.addEventListener('keyup',function(){
//     console.log(inputValue.value.length);
// })

let count = 0;
let numCount = 0;
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  seat.addEventListener("click", function () {
    seat.setAttribute("disabled", "");
    if (seat.hasAttribute("disabled")) {
      count++;
      //highest four ticket select validation
      if (count > 4) {
        alert("You cannot purchase more than 4 tickets.");
        seat.removeAttribute("disabled", "");

        return;
      }
      seat.style.backgroundColor = "#1DD100";
      seat.style.color = "#FFFFFF";
      seatCount.innerText = count;
      document.getElementById("seats-left").innerText = seatLeft - count;

      //set ticket name  class and price
      const ticketCategory = document.getElementById("seat-category");
      const ticketName = seat.querySelector("h1");
      const ticketNameText = ticketName.innerText;

      const p = document.createElement("p");
      p.innerText = ticketNameText;
      const p2 = document.createElement("p");
      p2.innerText = "Economoy";
      const p3 = document.createElement("p");
      p3.innerText = ticketPrice;

      const li = document.createElement("li");
      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      ticketCategory.appendChild(li);

      //total price  update section
      const sumOfPrice = (priceTotal += ticketPrice);
      totalPrice.innerText = sumOfPrice;
      grandTotal.innerText = sumOfPrice;

      //applying coupon================
      if (count === 4) {
        apply.removeAttribute("disabled", "");
        apply.style.backgroundColor = "#1DD100";
        apply.style.color = "#FFFFFF";
      }

      //check if count greater than 0 and input greater then 0==========
      inputValue.addEventListener("input", function () {
        if (count > 0 && inputValue.value.length > 0) {
          nextBtn.removeAttribute("disabled", "");
          nextBtn.addEventListener("click", function () {
            document.getElementById("number").value = "";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
          });
        }
      });
    }
  });
}

//coupon applying
//coupon field
const applyCouponInput = document.getElementById("apply-couponInput");
const discount = document.getElementById("discount");
const discountPrice = document.getElementById("discount-price");

apply.addEventListener("click", function () {
  const totalPRICE = totalPrice.innerText;
  const totalAmount = parseInt(totalPRICE);
  const inputField = document.getElementById("apply-field");
  const inputFieldValue = inputField.value;
  const couponCode = inputFieldValue;
//   .split(" ").join("").toUpperCase()

  if (couponCode === "NEW15" || couponCode === "Couple 20") {
    if (couponCode === "NEW15") {
      discountPrice.innerText = totalAmount * (15 / 100);
      grandTotal.innerText = totalAmount - totalAmount * (15 / 100);
      discount.classList.remove("hidden");
    } else if (couponCode === "Couple 20") {
      discountPrice.innerText = totalAmount * (20 / 100);
      grandTotal.innerText = totalAmount - totalAmount * (20 / 100);
      discount.classList.remove("hidden");
    }
    applyCouponInput.classList.add("hidden");
  } else {
    document.getElementById("apply-field").value = "";
    alert("Please Enter a valid coupon");
  }
});

//reload my page using continue button===
const continueButton = document.getElementById('continue-button');
continueButton.addEventListener('click',function(){
    location.reload();
})
