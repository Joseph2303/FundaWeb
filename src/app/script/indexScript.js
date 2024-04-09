document.addEventListener('DOMContentLoaded', function() {
    var serviciosDropdown = document.getElementById('serviciosDropdown');
    var serviciosLink = document.getElementById('navbarDropdown');
    
    serviciosLink.addEventListener('click', function() {
      serviciosDropdown.classList.toggle('show');
    });
    
    window.addEventListener('click', function(event) {
      if (!serviciosDropdown.contains(event.target) && !serviciosLink.contains(event.target)) {
        serviciosDropdown.classList.remove('show');
      }
    });
  });