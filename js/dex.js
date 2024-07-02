window.onload = function() {
      setTimeout(function() {
        document.getElementById('myIframe').classList.add('loaded');
        document.querySelector('.loader-container').style.display = 'none';
      }, 2000); 
    };