$(function() {
    function itemsAutoSizing(blockForItems, itemsClass) {
        this.blockForItems = document.querySelector(blockForItems);
        this.items = this.blockForItems.querySelectorAll(itemsClass);
        this.arrOfHeights = [];
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const allItemsOfThisItem = item.querySelectorAll("*");
            for (let b = 0; b < allItemsOfThisItem.length; b++) {
                const element = allItemsOfThisItem[b];
                if (parseInt(getComputedStyle(element).height) > parseInt(this.arrOfHeights[b]) || this.arrOfHeights[b] == undefined) {
                    this.arrOfHeights[b] = getComputedStyle(element).height;
                }
            }
        }
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const allItemsOfThisItem = item.querySelectorAll("*");
            for (let b = 0; b < allItemsOfThisItem.length; b++) {
                const element = allItemsOfThisItem[b];
                element.style.height = this.arrOfHeights[b];
            }
        }
    }

    function widthCheck() {
        if ( $(window).width() < 1024 ) {
            if ( $(window).width() < 575 ) {
                $('.discounts.accessories .contBlock ul').slick({
                    slidesToShow: 1.5,
                    arrows: false
                });
            }
            $('.discounts.accessories .contBlock ul').slick({
                slidesToShow: 2.5,
                arrows: false
            });
            $(function() {
                itemsAutoSizing(".discounts.accessories .contBlock ul", "li");
            });
        }
    }
    widthCheck();
    $( window ).resize(function() {
        widthCheck();
    });
});