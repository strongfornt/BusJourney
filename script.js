const seats = document.querySelectorAll('.seat');
const seatCount = document.getElementById('total-seat');
//seat left start==========================================
const seatsLeft = document.getElementById('seats-left');
const seatLeftText = seatsLeft.innerText;
const seatLeft = parseInt(seatLeftText);
//seat left end===========================================

//const total price========================================
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('Grand-total');
let priceTotal = 0;
const ticketPrice = 550;
//coupon apply button===========================
const apply = document.getElementById('apply-btn');

let count = 0;
for(let i = 0; i<seats.length ; i++){
    const seat = seats[i];
    seat.addEventListener('click',function(){
       
       seat.setAttribute("disabled","")
       if(seat.hasAttribute("disabled")){
         count++;
          //highest four ticket select validation
         if(count > 4){
            alert("You cannot purchase more than 4 tickets.");
            seat.removeAttribute("disabled","");
        
            return;
        }
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = '#FFFFFF';
        seatCount.innerText = count;
        document.getElementById('seats-left').innerText = seatLeft - count;

        //set ticket name  class and price
        const ticketCategory = document.getElementById("seat-category")
        const ticketName = seat.querySelector("h1");
        const ticketNameText = ticketName.innerText;
        console.log(ticketNameText);
        const p = document.createElement("p");
        p.innerText=ticketNameText;
        const p2 = document.createElement("p");
        p2.innerText="Economoy";
        const p3 = document.createElement("p");
        p3.innerText=ticketPrice ;
        // console.log(typeof p3);
        const li = document.createElement("li")
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        ticketCategory.appendChild(li);

        //total price  update section
        const sumOfPrice = priceTotal +=ticketPrice;
         totalPrice.innerText = sumOfPrice;
         grandTotal.innerText = sumOfPrice;

         //applying coupon================
         if(count === 4 ){
            apply.removeAttribute("disabled","");
            apply.style.backgroundColor = '#1DD100';
            apply.style.color = '#FFFFFF';

    }

       
       
       }
    })
  
}


//coupon applying 

apply.addEventListener('click',function(){
    console.log("hi");
    const inputField = document.getElementById('apply-field');
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    console.log(inputFieldValue);
    console.log(inputFieldValue);
})