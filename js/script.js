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
 //let total = 0;
  totalMessage += `<span class='total'>Total: $${total}</span>`;
  if (total > 0) {
    activities.append(totalMessage);
  }
});
const paymentMethod = $('#payment');
const paypalMethod = $('#payment [value="paypal"]');
//const paymentMethod = document.getElementById('payment');
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
