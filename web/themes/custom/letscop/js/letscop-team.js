/**
 * Created by ubuntu on 12/02/18.
 */

(function ($) {
  Drupal.behaviors.letscopTeam = {
    attach: function (context, settings) {
      $(document).ready(function(){
        // $('.field--name-body').hide();

        console.log('dans equipe');
        cellWidth = $('.views-col').width() + 'px';
        $('.views-col').height(cellWidth);

        textHeight = $('.bs-region--main').height() + 'px';
        $('.firstname-bio-wrapper').height(textHeight);

        $('.bs-region--main').mouseenter(function() {
          $('.firstname-bio-wrapper', this).show();
        });

        $('.bs-region--main').mouseleave(function() {
          $('.firstname-bio-wrapper', this).hide();
        });
      });


    }
  };
})(jQuery);