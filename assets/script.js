let totalQuantity = 1


//Quantity up
quantityUp = document.getElementById('quantity-up')
quantityUp.addEventListener('click', function(){
    totalQuantity = totalQuantity + 1
    console.log(totalQuantity)
})

//Quantity down
quantityDown = document.getElementById('quantity-down')
quantityDown.addEventListener('click', function(){
    totalQuantity = totalQuantity - 1
    if(totalQuantity > 0)
    console.log(totalQuantity)
})