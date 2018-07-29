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
const colorValue = $('#color option [value="dimgrey"]');
shirtDesign.change(function(){
  if ($(this).val() == 'js puns') {
    colorValue.style.display = 'none';
    }
  }
});
