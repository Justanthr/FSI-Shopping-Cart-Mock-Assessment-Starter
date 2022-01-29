let body = document.querySelector('body')
let totalQuantity = 1
let totalCost = 15.00

//Adding cost total to HTML
let cost = document.createElement('div')
cost.setAttribute('id', 'cost')
cost.setAttribute('style', 'display: none')
body.append(cost)

let costTotal = document.createElement('span')
costTotal.setAttribute('id', 'total-cost')
costTotal.textContent = `Total: ${totalCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
cost.append(costTotal)

// let payBtn = createElement('button')
// payBtn.setAttribute('class', 'pay-button')
// payBtn.textContent = 'Pay Now'
// cost.append(payBtn)

// Pay button response
// payBtn.addEventListener('click', function() {
//     window.prompt('Sorry, we are unable to process your payment at this')
// })

//Change quantity dispayed
function changeQuantity(displayQuantity) {
    let totalQuantity = document.querySelector('.total-quantity')
    totalQuantity.textContent = displayQuantity  
}

//Quantity up
addQuantity = document.getElementById('quantity-up')
addQuantity.addEventListener('click', function(){
    totalQuantity = totalQuantity + 1
    changeQuantity(`Quantity: ${totalQuantity}`)
    totalCost += 15.00 //Changing total displayed
    costTotal.textContent = `Total: ${totalCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
    
})

//Quantity down
quantityDown = document.getElementById('quantity-down')
quantityDown.addEventListener('click', function(){
    if(totalQuantity > 1){
        totalQuantity = totalQuantity - 1
        totalCost -= 15.00 //Changing total displayed
    costTotal.textContent = `Total: ${totalCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
    }
    changeQuantity(`Quantity: ${totalQuantity}`)
})

//Remove button
let removeBtn = document.querySelector('.remove')
removeBtn.addEventListener('click', function(){
    totalQuantity = 1
    changeQuantity(`Quantity: ${totalQuantity}`)
})

//Checkout hide button
checkOut = document.querySelector('.btn-checkout')
checkOut.addEventListener('click', function(){
    total = document.querySelector('#cost');
    let btnText = checkOut.textContent
    if(btnText === 'Checkout'){
        total.style.display = 'block';
        checkOut.innerHTML = 'Back'
    }
    else{
        total.style.display = 'none'
        checkOut.innerHTML = 'Checkout'
    }
})

//Adding quantity total