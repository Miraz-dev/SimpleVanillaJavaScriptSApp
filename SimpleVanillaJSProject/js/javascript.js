const applyBtn = document.getElementById("apply-btn");
const totalPrice = document.getElementById("total-price");
const discount = document.getElementById("discount");
const totalWithDiscount = document.getElementById("total");
const makePurchaseBtn = document.getElementById("make-purchase");
const tk = document.getElementById("tk");
const removeBtn = document.getElementById("remove");

// item price and name
// const priceOfItem = document.getElementById("priceOfItem");
// const nameOfItem = document.getElementById("name-of-item");

removeBtn.addEventListener("click", function(){
    totalPrice.innerText = "0"
    discount.innerText = "0";
    totalWithDiscount.innerText = "0";

    const cartItem = document.getElementById("list-of-cart-item");
    while (cartItem.firstChild) {
        cartItem.removeChild(cartItem.lastChild);
    }
    window.location.reload();
})


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function cardHandler(card){
    // const child = card.childNodes[3].childNodes;
    const childPrice = card.childNodes[3].childNodes[5].childNodes[0].innerText;
    const childName = card.childNodes[3].childNodes[3].innerText;

    card.addEventListener("click", function(){
        // console.log(childName);
        // console.log(childPrice);

        /**
         * When user click on card, their name will
         * be added on @cart
         */
        const cartItem = document.getElementById("list-of-cart-item");
        const count = cartItem.childElementCount;

        // Creating a P and setting its value(name)
        const p = document.createElement("p");
        // p.innerText = childName;
        p.innerHTML = `${count + 1}. ${childName}`;

        cartItem.appendChild(p);

        /**
         * When user clicks on a card their @price
         *  will be added on @cart
         */
        const priceFloat = parseFloat(childPrice);
        const totalPriceFloat = parseFloat(totalPrice.innerText);
        const sum = priceFloat + totalPriceFloat;
        totalPrice.innerText = sum.toFixed(2);
        setInnerText("total", sum.toFixed(2));

        if(sum > 0){
            makePurchaseBtn.removeAttribute("disabled");
        }else{
            makePurchaseBtn.setAttribute("disabled", true)
        }

        if(sum >= 200){
            applyBtn.removeAttribute("disabled");
            applyBtn.addEventListener("click", function(){
                const couponCode = document.getElementById("coupon-code").value;
                if(couponCode === "SELL200"){
                    const discountedAmount = sum * 0.2;
                    const grandTotal = sum - discountedAmount;
                    setInnerText("discount", discountedAmount.toFixed(2));
                    setInnerText("total", grandTotal.toFixed(2));
                    document.getElementById("coupon-code").value = "";
                    
                }else{
                    alert("Invalid coupon, try again");
                    document.getElementById("coupon-code").value = "";
                }
            })
        }else{
            applyBtn.setAttribute("disabled", "true");
        }


    })
}

// card
const singleCard1 = document.getElementById("each-card1");
cardHandler(singleCard1);
const singleCard2 = document.getElementById("each-card2");
cardHandler(singleCard2);
const singleCard3 = document.getElementById("each-card3");
cardHandler(singleCard3);
const singleCard4 = document.getElementById("each-card4");
cardHandler(singleCard4);
const singleCard5 = document.getElementById("each-card5");
cardHandler(singleCard5);
const singleCard6 = document.getElementById("each-card6");
cardHandler(singleCard6);
const singleCard7 = document.getElementById("each-card7");
cardHandler(singleCard7);
const singleCard8 = document.getElementById("each-card8");
cardHandler(singleCard8);
const singleCard9 = document.getElementById("each-card9");
cardHandler(singleCard9);



// removeBtn.addEventListener("click", function(){
//     totalPrice.innerText = "0"
//     discount.innerText = "0";
//     totalWithDiscount.innerText = "0";

//     const cartItem = document.getElementById("list-of-cart-item");
//     while (cartItem.firstChild) {
//         cartItem.removeChild(cartItem.lastChild);
//     }
// })

// if(parseFloat(totalPrice.innerText) > 200){
//     applyBtn.removeAttribute("disabled");
// }else{
//     applyBtn.setAttribute("disabled", "true");
// }

// if(parseFloat(totalPrice.innerText) > 0){
//     makePurchaseBtn.removeAttribute("disabled");
// }else{
//     makePurchaseBtn.setAttribute("disabled", true)
// }

// if(Number(totalPrice) > 0 || Number(discount) > 0 || Number(totalWithDiscount) > 0){
//     tk.setAttribute
// }

// document.getElementById("apply-btn").addEventListener("click", function(){
//     console.log("Clicked");
// })