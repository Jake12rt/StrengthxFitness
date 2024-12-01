
// Close the modal when the user clicks outside of it
window.onclick = function(event) {
   const modals = document.getElementsByClassName('modal');
   Array.from(modals).forEach(function(modal) {
       if (event.target == modal) {
           modal.style.display = 'none';
       }
   });
}


function toggleMobileMenu() {
   const navLinksContainer = document.querySelector('.nav-links-container');
   const menubar = document.querySelector('.menubar');

   navLinksContainer.classList.toggle('active');
   menubar.classList.toggle('active');
}

