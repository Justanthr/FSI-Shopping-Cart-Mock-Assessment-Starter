let totalQuantity = 1

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
    console.log(totalQuantity)
})

//Quantity down
quantityDown = document.getElementById('quantity-down')
quantityDown.addEventListener('click', function(){
    if(totalQuantity > 1){
        totalQuantity = totalQuantity - 1
    }
    changeQuantity(`Quantity: ${totalQuantity}`)
    console.log(totalQuantity)
})