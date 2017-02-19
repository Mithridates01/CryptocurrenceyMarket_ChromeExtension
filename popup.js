$(document).ready(function(){

  function money_round(num) {
      return Math.ceil(num * 100) / 100;
  }

  // broken loop because of async
  var cryptoList = ["btc", "dash", "eth", "xmr", "zec", "maid"]

  for (var i = 0; i < cryptoList.length ; i++) {
    $.ajax({
      url: "https://api.cryptonator.com/api/ticker/" + cryptoList[i] + "-usd",
      method: 'get',
      success: (response) => {

        var index = cryptoList.indexOf(response.ticker.base.toLowerCase())

        var h3 = $("#" + cryptoList[index] + "-feed").children().first()
        $(h3).text("$" + money_round(response.ticker.price))

      }
    });
  }


});
