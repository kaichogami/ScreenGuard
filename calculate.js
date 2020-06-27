"use strict";

function Calculate() {
    var totalBuyingQuantity = parseFloat(document.getElementById("tbq").value);
    var pricePerPiece = parseFloat(document.getElementById("ppp").value);
    var addtionalCost = parseFloat(document.getElementById("ac").value);
    var expectedSellPercentage = parseFloat(document.getElementById("esl").value);

    var totalBuyingCost = (totalBuyingQuantity * pricePerPiece) + addtionalCost
    var totalSoldItems = (expectedSellPercentage / 100) * totalBuyingQuantity
    var perPieceBuyingCost = (totalBuyingCost / totalBuyingQuantity)

    var totalPriceNeeded = totalBuyingCost - (totalSoldItems * perPieceBuyingCost)
    var zeroSumCostPerPiece = (perPieceBuyingCost) + (totalPriceNeeded / totalSoldItems)
    document.getElementById("result").innerHTML = zeroSumCostPerPiece;
}