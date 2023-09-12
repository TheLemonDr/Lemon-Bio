function gone() {
    var bioContainer = document.querySelector('.bio-container');
    var bioContainer2 = document.querySelector('.bio-container2');
  
    bioContainer.style.display = 'none';
    bioContainer2.style.display = 'block';
  }
  
  document.querySelector('.bio-container a').addEventListener('click', gone);
  