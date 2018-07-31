const nameInput = $('#name');
nameInput.focus();
const jobTitle = $('#title');
const otherOption = $('option[value="other"]');
const basicInfo = document.querySelector('fieldset');
const otherJob = $('#other-title');
otherJob.hide();
jobTitle.change(function(){
    if ($(this).val() == 'other') {
      otherJob.show();
    } else {
      otherJob.hide();
    }
});


const shirtDesign = $('#design');
const shirtColor = $('#color option');
const cornflowerblue = $('#color [value="cornflowerblue"]');
const darkslategrey = $('#color [value="darkslategrey"]');
const gold = $('#color [value="gold"]');
const tomato = $('#color [value="tomato"]');
const steelblue = $('#color [value="steelblue"]');
const dimgrey = $('#color [value="dimgrey"]');


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

const activities = $('.activities');
const checkboxes = $('[type="checkbox"]');
const mainConference = $('.activities [name="all"]');
const jsFrameworks = $('.activities [name="js-frameworks"]');
const jsLibraries = $('.activities [name="js-libs"]');
const express = $('.activities [name="express"]');
const node = $('.activities [name="node"]');


const labels = $('.activities label');


activities.change(function(e) {
  $('.total').remove();
  let total = 0;
  let totalMessage = '';
  if (checkboxes[0].checked == true) {
    total += 200;
  }
  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      total += 100;
    }
  }
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
  totalMessage += `<span class='total'>Total: $${total}</span>`;
  if (total > 0) {
    activities.append(totalMessage);
  }
});

const paymentMethod = $('#payment');
const paypalMethod = $('#payment [value="paypal"]');
const creditDiv = document.getElementById('credit-card');
const paypalDiv = creditDiv.nextElementSibling;
const bitcoinDiv = creditDiv.nextElementSibling.nextElementSibling;
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

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

const button = $('button');
const name = $('#name');
const ccNum = $('#cc-num');
const zip = $('#zip');
const cvv = $('#cvv');
const email = $('#mail');

button.click(function(e) {
  let total = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      total += 100;
    }
  }
  if (total == 0) {
    e.preventDefault();
    $('.workshop-required').remove();
    checkboxes.css('border', '2px solid red');
    $('<p class="workshop-required">You must select at least one workshop</p>').css('color', 'red').insertAfter(activities);
  } else {
    checkboxes.css('border', '');
    $('.workshop-required').remove();
  }

  if (name.val() == '') {
    e.preventDefault();
    $('.name-required').remove();
    name.css('border', '2px solid red');
    $('<p class="name-required">Name is required</p>').css('color', 'red').insertAfter(name);
  } else {
    name.css('border', '');
    $('.name-required').remove();
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val() ) == false) {
    e.preventDefault();
    $('.email-required').remove();
    email.css('border', '2px solid red');
    $('<p class="email-required">Please enter a valid email</p>').css('color', 'red').insertAfter(email);
  } else {
    email.css('border', '');
    $('.email-required').remove();
  }
  // let checkedCheckboxes = 0;
  // for (let i = 1; i < checkboxes.length; i++) {
  //   if (checkboxes[i].checked == true) {
  //     checkedCheckboxes += 1;
  //   }
  //   if (checkedCheckboxes < 1) {
  //     e.preventDefault();
  //     $('.workshop-required').remove();
  //     checkboxes.css('border', '2px solid red');
  //     $('<p class="workshop-required">You must select at least one workshop</p>').css('color', 'red').insertAfter(activities);
  //   } else {
  //     checkboxes.css('border', '');
  //     $('.workshop-required').remove();
  //   }
  //}

  if (paymentMethod.val() == 'select_method') {
    e.preventDefault();
    $('.method-required').remove();
    paymentMethod.css('border', '2px solid red');
    $('<p class="method-required">You must select a payment method</p>').css('color', 'red').insertAfter(paymentMethod);
  } else {
    paymentMethod.css('border', '');
    $('.method-required').remove();
  }
  // if (paymentMethod.val() == 'credit card' && ((ccNum.val().length < 13 || ccNum.val().length > 16) || zip.val().length != 5 || cvv.val().length != 3)) {
  //   e.preventDefault();
  //   $('.invalid-credit').remove();
  //   $('#credit-card').css('border', '2px solid red');
  //   $('<p class="invalid-credit">Invalid credit card information</p>').css('color', 'red').insertAfter($('#credit-card'));
  // } else {
  //   $('#credit-card input').css('border', '');
  //   $('.invalid-credit').remove();
  // }
  if (paymentMethod.val() == 'credit card' && (ccNum.val().length < 13 || ccNum.val().length > 16)) {
    e.preventDefault();
    $('.invalid-ccNum').remove();
    ccNum.css('border', '2px solid red');
    $('<p class="invalid-ccNum">Please enter a valid credit card number</p>').css('color', 'red').insertAfter(ccNum);
  } else {
    ccNum.css('border', '');
    $('.invalid-ccNum').remove();
  }
  if (paymentMethod.val() == 'credit card' && (zip.val().length != 5)) {
    e.preventDefault();
    $('.invalid-zip').remove();
    zip.css('border', '2px solid red');
    $('<p class="invalid-zip">Please enter a valid zipcode</p>').css('color', 'red').insertAfter(zip);
  } else {
    zip.css('border', '');
    $('invalid-zip').remove();
  }
  if (paymentMethod.val() == 'credit card' && (cvv.val().length != 3)) {
    e.preventDefault();
    $('.invalid-cvv').remove();
    cvv.css('border', '2px solid red');
    $('<p class="invalid-cvv">Please enter a valid cvv number</p>').css('color', 'red').insertAfter(cvv);
  } else {
    cvv.css('border', '');
    $('invalid-cvv').remove();
  }
});
