var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputbox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler)

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stockQuantity.value;
    var curr = currentPrice.value;
    calculateProfitAndLoss(ip, qty, curr);


}

function calculateProfitAndLoss(initial, quantity, current){
    if (initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        var message = "Hey the loss is " + loss + " and the percentage is "+ lossPercentage + " %";
        outputbox.innerText = message;

    }else if (current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage =(profit / initial) * 100
        var message ="Hey the profit is " + profit+ " and the percentage is "+ profitPercentage + " %";
        outputbox.innerText = message;

    }else{
        var message ="No pain no gain and no gain no pain";
        outputbox.innerText = message;
    }

}
