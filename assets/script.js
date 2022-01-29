body = document.querySelector('body')
 let totalQuantity = 1
let totalCost = 15.55

console.log(totalCost)

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
})

//Quantity down
quantityDown = document.getElementById('quantity-down')
quantityDown.addEventListener('click', function(){
    if(totalQuantity > 1){
        totalQuantity = totalQuantity - 1
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

//Adding cost total 
let cost = document.createElement('div')
cost.setAttribute('id', 'cost')
cost.setAttribute('style', 'display: none')

let costTotal = document.createElement('span')
costTotal.setAttribute('id', 'total-cost')
costTotal.textContent = 'Total: 15.55'

body.append(cost)
cost.append(costTotal)

//Change price displayed
// function changeTotal(displayTotal) {
//     let totalCost = document.querySelector('#total-cost')
//     totalCost.textContent = displayTotal
// }

// hangeTotal(`Total: ${totalCost}`)

//Adding quantity total