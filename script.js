const range = document.querySelector('input[type="range"]');
const modules = document.querySelectorAll('.radio-inputs .radio input[type="radio"]');

range.addEventListener('input', () => {
  const value = range.value;
  let selectedModule = null;

  if (value < 25) {
    selectedModule = modules[0];
  } else if (value < 50) {
    selectedModule = modules[1];
  } else if (value < 75) {
    selectedModule = modules[2];
  } else {
    selectedModule = modules[3];
  }
  
  selectedModule.checked = true;
});