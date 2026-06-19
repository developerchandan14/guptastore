jQuery(document).ready(function($){

    $(document).on('click', '#food-grocery-store-welcome-notice .notice-dismiss', function(){

        $.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {
                action: 'food_grocery_store_dismiss_notice'
            }
        });

    });

});