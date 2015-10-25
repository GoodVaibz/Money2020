// var user_id = $('#userID').text();
// var amount = parseInt($('#amount'));
// var password = $('#password').text();
// var email_address = $('#email').text();
var Parse = require('parse/node').Parse;

Parse.initialize("tnk4jkth3sEuTCmMvHLsGHIXpi7AxvnUxEVXZJDz", "7LrHFHHmn7aucPyzMHOVVBW2udLmfkMatoVkIdlr");



var Confirmation = Parse.Object.extend("Confirmation");


var BlockchainWallet = require('blockchain-wallet'),
    // Certain API methods require a second password if the wallet is second password protected, while others don't at all. 
    transactionBlockchainWallet = new BlockchainWallet("1844a07a-1c56-46fb-b3a1-052465fcb1fd", "AD*0827#bc");
 
var to_addr = "1NB1euP1WVZfdCgs5LorFxY18XWWb91vgj"

from_addr = get_addr(transactionBlockchainWallet);
make_payment(wallet, amt, from_addr);
 
// Send a donation to blockchain.info. 

function get_addr(wallet) {
    wallet.list(function(err, data) {
  if(err) {
    throw err;
  }
 
  return data["addresses"][0]["address"];
});
}

function make_payment(wallet, amt, from_addr) {
    wallet.payment(to_addr, amt, function(err, data) {
  if(err) {
    throw err;
  }
 var confirmation = new Confirmation();
 
 confirmation.set("Address", from_addr);
 confirmation.set("destinationEmail", email_address);
 confirmation.set("BTCAmount", amt);

 confirmation.save({"field": "value"}, {
    success : function(obj) {
        console.log("it works");
    },
    error : function(obj,error) {
        console.log("didn't work");
    }

})
  
});
}

