$(document).ready(function(){

function money_round(num) {
    return Math.ceil(num * 100) / 100;
}

  $.ajax({
      url: "https://api.cryptonator.com/api/ticker/btc-usd",
      method: 'get',
      success: (response) => {
        var h3 = $("#btc-feed").children().first()
        $(h3).text("$" + money_round(response.ticker.price))
      }
    });

  $.ajax({
      url: "https://api.cryptonator.com/api/ticker/dash-usd",
      method: 'get',
      success: (response) => {
        var h3 = $("#dash-feed").children().first()
        $(h3).text("$" + money_round(response.ticker.price))
      }
    });

  $.ajax({
      url: "https://api.cryptonator.com/api/ticker/zec-usd",
      method: 'get',
      success: (response) => {
        var h3 = $("#zec-feed").children().first()
        $(h3).text("$" + money_round(response.ticker.price))
      }
    });

  $.ajax({
      url: "https://api.cryptonator.com/api/ticker/eth-usd",
      method: 'get',
      success: (response) => {
        var h3 = $("#eth-feed").children().first()
        $(h3).text("$" + money_round(response.ticker.price))
      }
    });

  $.ajax({
      url: "https://api.cryptonator.com/api/ticker/xmr-usd",
      method: 'get',
      success: (response) => {
        var h3 = $("#xmr-feed").children().first()
        $(h3).text("$" + money_round(response.ticker.price))
      }
    });

  $.ajax({
      url: "https://api.cryptonator.com/api/ticker/maid-usd",
      method: 'get',
      success: (response) => {
        var h3 = $("#maid-feed").children().first()
        $(h3).html("$" + money_round(response.ticker.price))
      }
    });

  //broken loop
  // var cryptoList = ["btc", "dash", "eth", "xmr", "zec", "maid"]

  // for (var i = 0; i < cryptoList.length - 1; i++) {
  //   console.log(cryptoList[i])
  //   $.ajax({
  //     url: "https://api.cryptonator.com/api/ticker/" + cryptoList[i] + "-usd",
  //     method: 'get',
  //     success: (response) => {
  //       console.log(cryptoList[i])
  //       console.log("#" + cryptoList[i] + "-feed " + response.ticker.price)

  //       var h3 = $("#" + cryptoList[i] + "-feed").children().first()
  //       $(h3).text(response.ticker.price)
  //     }
  //   });
  // }


});
