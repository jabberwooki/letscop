/**
 * Created by ubuntu on 19/02/18.
 */

(function ($) {
  Drupal.behaviors.letscopAgence = {
    attach: function (context, settings) {
      $(document).ready(function(){
        $('body').addClass('path-agence');
        // $('.region-content').addClass('col-sm-6 col-sm-offset-3');
      });
    }
  };
})(jQuery);