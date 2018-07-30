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
