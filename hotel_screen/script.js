function animateButton(element) {
    element.classList.add('clicked');
    setTimeout(function() {
      element.classList.remove('clicked');
    }, 200);
  }
  
  function bookHotel(hotelName) {
    alert("You have selected " + hotelName + ".");
  }
  
  var bookButtons = document.querySelectorAll('.book-button');
  bookButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      animateButton(button);
    });
  });
  
  document.getElementById('proceed-payment').addEventListener('click', function() {
    animateButton(this);
    alert('Proceeding to payment');
  });
  
  var dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(function(input) {
    input.addEventListener('click', function() {
      animateButton(input);
    });
  });
  