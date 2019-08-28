const button = document.querySelectorAll('#click-me');
button.addEventListener('click', event => {
        console.log(event);
        const el = event.target;
        el.parentNode.removeChild(el);
        
});
$(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })