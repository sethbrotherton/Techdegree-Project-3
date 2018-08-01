// Selects name input and automatically places cursor in it
const nameInput = $('#name');
nameInput.focus();

// Selects page items and stores them as variables that are of use to add other job input
const jobTitle = $('#title');
const otherOption = $('option[value="other"]');
const basicInfo = document.querySelector('fieldset');
const otherJob = $('#other-title');
// hides the other job description input, unless other is selected in job role dropdown
otherJob.hide();
jobTitle.change(function(){
    if ($(this).val() == 'other') {
      otherJob.show();
    } else {
      otherJob.hide();
    }
});

// variables stored of use for following function
const shirtDesign = $('#design');
const shirtColor = $('#color option');
const cornflowerblue = $('#color [value="cornflowerblue"]');
const darkslategrey = $('#color [value="darkslategrey"]');
const gold = $('#color [value="gold"]');
const tomato = $('#color [value="tomato"]');
const steelblue = $('#color [value="steelblue"]');
const dimgrey = $('#color [value="dimgrey"]');

//  Depending on which shirt design is selected in dropdown, different colors will be available in next option selection
shirtDesign.change(function(){
  if (shirtDesign.val() == 'js puns') {
    shirtColor.hide();
    cornflowerblue.show();
    darkslategrey.show();
    gold.show();
    } else if (shirtDesign.val() == 'heart js') {
      shirtColor.hide();
      tomato.show();
      steelblue.show();
      dimgrey.show();
    }  else {
      shirtColor.show();
    }
  });

// function hideShirtColor() {
//   if ($('#design').val() == 'js puns' || $('#design').val() == 'heart js') {
//     $('#colors-js-puns').css('display', 'block');
//   } else {
//     $('#colors-js-puns').css('display', 'none');
//   }
// }
// hideShirtColor();
// const colorChoices = document.getElementById('colors-js-puns');
// colorChoices.style.display = 'none';
//
// if (colorChoices.selected != false) {
//   colorChoices.style.display = '';
// }

// variables stored of use for follinw function
const activities = $('.activities');
const checkboxes = $('[type="checkbox"]');
const mainConference = $('.activities [name="all"]');
const jsFrameworks = $('.activities [name="js-frameworks"]');
const jsLibraries = $('.activities [name="js-libs"]');
const express = $('.activities [name="express"]');
const node = $('.activities [name="node"]');
const labels = $('.activities label');

// the following function makes the activities section dynamic in various ways
activities.change(function(e) {
  $('.total').remove();
  let total = 0;
  let totalMessage = '';
  // cycles through all checkboxes, tallying the costs of them
  if (checkboxes[0].checked == true) {
    total += 200;
  }
  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      total += 100;
    }
  }
  // cycles through the checkboxes.  If some are checked, others are unavailable
  // and styled to appear as such
  for (let i = 0; i < labels.length; i++) {
    if (checkboxes[1].checked == true) {
      labels[3].style.textDecoration = 'line-through';
    } else {
      labels[3].style.textDecoration = 'none';
    }
    if (checkboxes[3].checked == true) {
      labels[1].style.textDecoration = 'line-through';
    } else {
      labels[1].style.textDecoration = 'none';
    }
    if (checkboxes[2].checked == true) {
      labels[4].style.textDecoration = 'line-through';
    } else {
      labels[4].style.textDecoration = 'none';
    }
    if (checkboxes[4].checked == true) {
      labels[2].style.textDecoration = 'line-through';
    } else {
      labels[2].style.textDecoration = 'none';
    }
  }
  // cycles through the checkboxes and disables the ones that occur at the same time
  for (let i = 0; i < checkboxes.length; i++) {
     if (checkboxes[1].checked == true) {
       express.attr("disabled", true);
     } else {
       express.attr("disabled", false);
     }
     if (checkboxes[3].checked == true) {
       jsFrameworks.attr("disabled", true);
     } else {
       jsFrameworks.attr("disabled", false);
     }
     if (checkboxes[2].checked == true) {
       node.attr("disabled", true);
     } else {
       node.attr("disabled", false);
     }
     if (checkboxes[4].checked == true) {
       jsLibraries.attr("disabled", true);
     } else {
       jsLibraries.attr("disabled", false);
     }
   }
   // Appends the total costs of selected activities to end of the div
  totalMessage += `<span class='total'>Total: $${total}</span>`;
  if (total > 0) {
    activities.append(totalMessage);
  }
});

// vara of use to the following event handler function
const paymentMethod = $('#payment');
const paypalMethod = $('#payment [value="paypal"]');
const creditDiv = document.getElementById('credit-card');
const paypalDiv = creditDiv.nextElementSibling;
const bitcoinDiv = creditDiv.nextElementSibling.nextElementSibling;
// Hides the paypay and bitcoin information automatically
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

// Depending on which payment option is chosen, information/inputs appear/disappear
paymentMethod.change(function() {
  if (paymentMethod.val() == 'paypal') {
    creditDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
    paypalDiv.style.display = '';
  } else if (paymentMethod.val() == 'bitcoin') {
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = '';
    creditDiv.style.display = 'none';
  } else {
    creditDiv.style.display = '';
    bitcoinDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
  }
});

// Variables of use for the following event listener function
const button = $('button');
const name = $('#name');
const ccNum = $('#cc-num');
const zip = $('#zip');
const cvv = $('#cvv');
const email = $('#mail');

// Selects .container div(the main div) and adds event handler for submitting and keyup
$('.container').on('submit keyup', function(e) {
  let total = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      total += 100;
    }
  }
  // If no activities are selected, the form cannot submit, and a message appears saying why
  if (total == 0) {
    e.preventDefault();
    $('.workshop-required').remove();
    $('<p class="workshop-required">You must select at least one workshop</p>').css('color', 'red').insertAfter(activities);
  } else {
    $('.workshop-required').remove();
  }
  // If there is no name, no submit; message appears and red border around input
  if (name.val() == '') {
    e.preventDefault();
    $('.name-required').remove();
    name.css('border', '2px solid red');
    $('<p class="name-required">Name is required</p>').css('color', 'red').insertAfter(name);
  } else {
    name.css('border', '');
    $('.name-required').remove();
  }
  // If an invalid email, no submit, message appears, input border turns red
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val() ) == false) {
    e.preventDefault();
    $('.email-required').remove();
    email.css('border', '2px solid red');
    $('<p class="email-required">Please enter a valid email</p>').css('color', 'red').insertAfter(email);
  } else {
    email.css('border', '');
    $('.email-required').remove();
  }
  // If a payment method is not selected, no submit, error message appears, select menu border turns red
  if (paymentMethod.val() == 'select_method') {
    e.preventDefault();
    $('.method-required').remove();
    paymentMethod.css('border', '2px solid red');
    $('<p class="method-required">You must select a payment method</p>').css('color', 'red').insertAfter(paymentMethod);
  } else {
    paymentMethod.css('border', '');
    $('.method-required').remove();
  }
  // If incorrect amounnt of digits in ccnum, no submit, error message, border turns red
  if (paymentMethod.val() == 'credit card' && (/^\d{13,16}$/.test(ccNum.val() ) == false)) {
    e.preventDefault();
    $('.invalid-ccNum').remove();
    ccNum.css('border', '2px solid red');
    $('<p class="invalid-ccNum">Please enter a valid credit card number</p>').css('color', 'red').insertAfter(ccNum);
  } else {
    ccNum.css('border', '');
    $('.invalid-ccNum').remove();
  }
  // If bad zipcode, error, no submit, red border
  if (paymentMethod.val() == 'credit card' && (/^\d{5}([\-]?\d{4})?$/.test(zip.val() ) == false)) {
    e.preventDefault();
    $('.invalid-zip').remove();
    zip.css('border', '2px solid red');
    $('<p class="invalid-zip">Please enter a valid zipcode</p>').css('color', 'red').insertAfter(zip);
  } else {
    zip.css('border', '');
    $('.invalid-zip').remove();
  }
  // If ccv number not three digits, error message, no submit, red border
  if (paymentMethod.val() == 'credit card' && (/^\d{3}$/.test(cvv.val() ) == false)) {
    $('.invalid-cvv').remove();
    e.preventDefault();
    cvv.css('border', '2px solid red');
    $('<p class="invalid-cvv">Please enter a valid cvv number</p>').css('color', 'red').insertAfter(cvv);
  } else {
    cvv.css('border', '');
    $('.invalid-cvv').remove();
  }
});
