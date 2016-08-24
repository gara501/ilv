var site = (function () {
	var bailey = {};

	bailey.fillModal = function () {
    $('#modalGallery').on('show.bs.modal', function (event) {
      var linkTrigger = $(event.relatedTarget); // Button that triggered the modal
      var title = linkTrigger.data('title');
      var description = linkTrigger.data('desc');
      var imageUrl = linkTrigger.data('image');
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-body h3').text('').text(title);
      modal.find('.modal-body p').text('').text(description);
      modal.find('.modal-body img').attr('src', imageUrl);
    });
	};

  bailey.scrollAnimated = function() {
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  };

	return bailey;
}());

site.fillModal();
site.scrollAnimated();
