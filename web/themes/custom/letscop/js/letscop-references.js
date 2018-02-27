/**
 * Created by ubuntu on 20/02/18.
 */
(function ($) {
  Drupal.behaviors.letscopAgence = {
    attach: function (context, settings) {
      $(document).ready(function(){
        //console.log("Dans les références");
        var height = $('.ref-before-text:first').height();
        $("#block-textedelapagereferences").height(height);
      });
    }
  };
})(jQuery);
