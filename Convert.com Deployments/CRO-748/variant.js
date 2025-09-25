(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "CRO-748-ATF-Rework";

        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }

        function live(selector, event, callback, context) {
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            this &&
                this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        function handleSearch() {
            const searchIconHTML = `<div class="cro-748-search-toggle"></div>`;
            // On mobile, the cart is #mobi_cart-wrapper which is inside .header-panel-center
            waitForElement('#mobi_cart-wrapper', function() {
                if (!document.querySelector('.cro-748-search-toggle')) {
                    document.querySelector('#mobi_cart-wrapper').insertAdjacentHTML('beforebegin', searchIconHTML);
                }
            }, 50, 5000);

            live('.cro-748-search-toggle', 'click', function() {
                document.body.classList.toggle('cro-748-search-active');
            });

            // Add close icon to the search input area
            const closeIconHTML = `<button class="cro-748-close-search" title="Close Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>`;

            waitForElement('#mobi_header-search .control', function() {
                if (!document.querySelector('.cro-748-close-search')) {
                    document.querySelector('#mobi_header-search .control').insertAdjacentHTML('beforeend', closeIconHTML);
                }
            }, 50, 5000);

            live('.cro-748-close-search', 'click', function() {
                document.body.classList.remove('cro-748-search-active');
            });
        }
        function reorderPdpElements() {
            // Move title/reviews/sku above image gallery
            waitForElement('body.catalog-product-view .product-left', function() {
                const productLeft = document.querySelector('.product-left');
                const productTitleWrapper = document.querySelector('.page-title-wrapper.product');
                const reviewsSummary = document.querySelector('.product-reviews-summary');
        
                if (productLeft && (productTitleWrapper || reviewsSummary)) {
                    const newHeaderContainer = document.createElement('div');
                    newHeaderContainer.classList.add('cro-748-product-header');
                    
                    // Move the entire title wrapper (which includes the SKU)
                    if (productTitleWrapper) {
                        newHeaderContainer.appendChild(productTitleWrapper);
                    }
                    // Move the reviews summary
                    if (reviewsSummary) {
                        newHeaderContainer.appendChild(reviewsSummary);
                    }
        
                    // Insert the new container before the .product-left div, which contains the image gallery.
                    productLeft.insertAdjacentElement('beforebegin', newHeaderContainer);
                }
            }, 50, 5000);
        
            // Move description to be a direct child of the right column's inner container, so it can be ordered with flexbox
            waitForElement('.product-info-main-inner .product.attribute.overview', function() {
                const productInfoInner = document.querySelector('.product-info-main-inner');
                const productDesc = document.querySelector('.product.attribute.overview');
                if (productInfoInner && productDesc) {
                    productInfoInner.appendChild(productDesc);
                }
            }, 50, 5000);

            // Ensure quantity selector and add to cart button are properly aligned
            waitForElement('.product-info-main .box-tocart', function() {
                const boxTocart = document.querySelector('.product-info-main .box-tocart');
                if (boxTocart) {
                    boxTocart.classList.add('cro-748-box-tocart');
                }
            }, 50, 5000);
        }

        function init() {
            // Run on PDP and PLP
            if (window.innerWidth < 768 && (document.body.classList.contains('catalog-product-view') || document.body.classList.contains('catalog-category-view'))) {
                document.body.classList.add(variation_name);
                handleSearch();
                if (document.body.classList.contains('catalog-product-view')) {
                    reorderPdpElements();
                }
            }
        }

        waitForElement('body', init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();