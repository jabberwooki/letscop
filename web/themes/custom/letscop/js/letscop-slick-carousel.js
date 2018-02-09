/**
 * Created by ubuntu on 09/02/18.
 */

(function ($) {
  Drupal.behaviors.initLetscopCarousel = {
    attach: function (context, settings) {
      $(document).ready(function(){
        console.log('page accueil');
        $('.view-display-id-frontpage .view-content').slick();
        // $('.view-display-id-frontpage .view-content').slick({
        //   // dots: true,
        //   // speed: 800,
        //   // autoplay: true,
        // });
      });
    }
  };
})(jQuery);
