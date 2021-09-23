
$(function() {
// Constants and Variables to reference Data
const BASE_URL = 'https://api.coinbase.com/v2/prices/';
let cryptoData;

// Cached Element References
const $crypto = $('#crypto');
const $current = $('#current');
const $fiat = $('#fiat');
const $form = $('form');
const $cryinput = $('#csymb[type="text"]');
const $fiatinput = $('#fsymb[type="text"]');

// Event Listener
$form.on('submit', handleGetData)

// function to get Data using Javascript
function handleGetData(event) {

  event.preventDefault();
  // setting up input variable
  const $cryptoName = $cryinput.val();
  const $fiatName = $fiatinput.val();
  // this method is used to keep the input blank after input entered
  $cryinput.val("");
  $fiatinput.val("");
  // ajax call request
  $.ajax(`${BASE_URL}${$cryptoName}-${$fiatName}/spot?`).then(function (data) {
    // referencing data in parameter of function line 28
    cryptoData = data;

    // if successful then render function is called
    render ();
    // if an error than will console.log error
  }, function (error) {
    alert("Error please enter a valid currency");
  });

  }

  // function that will display the data requested in text
  function render() {
    $crypto.text(cryptoData.data.base); // cryptocurrency
    $current.text(cryptoData.data.amount); // current price
    $fiat.text(cryptoData.data.currency); // fiat currency
  }

  });
