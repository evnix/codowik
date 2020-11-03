jQuery(function ()
{
    jQuery('#container').layout({
        maskContents: true,
        center: {
            applyDefaultStyles: true
        },
        west: {
            applyDefaultStyles: true,
            minSize: 300
        }
    });

    jQuery('.ui-layout-pane').each(function () {
        var el = jQuery(this);
    });

    jQuery(".codo_side_content [href]").each(function () {
        if (this.href == window.location.href) {
            jQuery(this).addClass("codo_active");
        }
    });

    function apply_space(elem, times) {

        jQuery(elem).find(">li>div>a").each(function()
        {
            jQuery(this).html(times + jQuery(this).html())

        });

        //2017/09/20 Dirk Schnitzler: Apply spaces to the currently active page, too
        jQuery(elem).find(">li>div>span>a").each(function()
        {
            jQuery(this).html(times + jQuery(this).html())
        });

        jQuery(elem).find(">li>ul").each(function()
        {
            apply_space(jQuery(this), times + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        });

    }

    apply_space(jQuery('.codo_side_content >ul'), '&nbsp;');

});

