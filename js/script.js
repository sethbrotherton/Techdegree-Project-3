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

  if (name.val() == '') {
    e.preventDefault();
    console.log(`where's your name?`);
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val() ) == false) {
    e.preventDefault();
    console.log(`thass not a valid email`);
  }
  let checkedCheckboxes = 0;
  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checkedCheckboxes += 1;
    }
  }
  if (checkedCheckboxes < 1) {
    e.preventDefault();
    console.log('you gotta pick a workshop, bro!');
  }
  if (paymentMethod.val() == 'select_method') {
    e.preventDefault();
    console.log(`you didn't select a payment method`);
  }
  if (paymentMethod.val() == 'credit card' && ((ccNum.val().length < 13 || ccNum.val().length > 16) || zip.val().length != 5 || cvv.val().length != 3)) {
    e.preventDefault();
    console.log('bad credit info');
  } else {
    console.log("good credit info");
  }
});
