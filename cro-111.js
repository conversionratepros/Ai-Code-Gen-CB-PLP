/**
 * A/B Test: CRO-111
 *
 * Description: ATF Rework on mobile PDP to improve engagement and ATC rate.
 * Target: Mobile
 */
(function(window, document) {
  'use strict';

  // Configuration
  var TEST_ID = 'cro-111';
  var TEST_CLASS = 'body--' + TEST_ID;

  /**
   * Waits for an element to be available in the DOM.
   * @param {string} selector - The CSS selector of the element.
   * @param {function} callback - The function to execute once the element is found.
   * @param {number} [timeout=5000] - The maximum time to wait in milliseconds.
   */
  function waitForElement(selector, callback, timeout) {
    var startTime = new Date().getTime();
    var interval = setInterval(function() {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        callback();
      } else if (new Date().getTime() - startTime > (timeout || 5000)) {
        clearInterval(interval);
        console.warn('waitForElement: timed out for selector: ' + selector);
      }
    }, 100);
  }

  /**
   * Applies the changes for the test variant.
   */
  function applyChanges() {
    console.log('Running A/B Test: ' + TEST_ID);
    document.body.classList.add(TEST_CLASS);

    // Only run on mobile and PDP
    if (window.innerWidth > 767 || !document.body.classList.contains('catalog-product-view')) {
      return;
    }

    // 1. Search bar implementation
    waitForElement('.header-panel-right .minicart-wrapper', function() {
      var minicartWrapper = document.querySelector('.header-panel-right .minicart-wrapper');
      var headerPanel = document.querySelector('.header.page-header');
      var searchForm = document.querySelector('#mobi_header-search .search-form');

      if (minicartWrapper && headerPanel && searchForm) {
        // Create search icon
        var searchIconWrapper = document.createElement('div');
        searchIconWrapper.className = 'cro-111-search-icon-wrapper';
        searchIconWrapper.innerHTML = `
          <a href="javascript:void(0)" class="search-toggle" data-role="cro-111-search_toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </a>
        `;
        minicartWrapper.parentNode.insertBefore(searchIconWrapper, minicartWrapper);

        // Create search container
        var searchContainer = document.createElement('div');
        searchContainer.className = 'cro-111-search-container';
        
        // Move original search form into our new container
        searchContainer.appendChild(searchForm.cloneNode(true));
        headerPanel.parentNode.insertBefore(searchContainer, headerPanel.nextSibling);

        // Add close button to the new search form
        var newSearchForm = searchContainer.querySelector('.form.minisearch');
        if (newSearchForm) {
            var controlDiv = newSearchForm.querySelector('.control');
            if(controlDiv) {
                var closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.className = 'cro-111-close-search';
                closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                controlDiv.appendChild(closeButton);

                // Event listener for the close button
                closeButton.addEventListener('click', function() {
                    document.body.classList.remove('cro-111-search-active');
                });
            }
        }

        // Event listener for the new search icon
        searchIconWrapper.addEventListener('click', function() {
          document.body.classList.toggle('cro-111-search-active');
        });
      }
    });

    // 2. Move Product Title, Reviews, and SKU
    waitForElement('.product-info-main .page-title-wrapper', function() {
      var productMain = document.querySelector('.product.media');
      var title = document.querySelector('.product-info-main .page-title-wrapper');
      var reviews = document.querySelector('.product-info-main .product-reviews-summary');
      var sku = document.querySelector('.product-info-main .product.attribute.sku');

      if (productMain && title && reviews && sku) {
        var newHeader = document.createElement('div');
        newHeader.className = 'cro-111-product-header';

        newHeader.appendChild(title);
        newHeader.appendChild(reviews);
        newHeader.appendChild(sku);

        productMain.parentNode.insertBefore(newHeader, productMain);
      }
    });

    // 3. Move description below add to cart
    waitForElement('.product.attribute.overview', function() {
        var overview = document.querySelector('.product.attribute.overview');
        var socialLinks = document.querySelector('.product-social-links');
        if (overview && socialLinks) {
            // The CSS order property handles this, but we could move it here if needed
        }
    });

    // 4. Move "Buy now, pay later" section
    waitForElement('#payment-widgets-accordion', function() {
        var paymentWidgets = document.querySelector('#payment-widgets-accordion');
        var productInfoMainInner = document.querySelector('.product-info-main-inner');
        if(paymentWidgets && productInfoMainInner) {
            productInfoMainInner.appendChild(paymentWidgets);
        }
    });
  }

  // --- Test Execution ---
  // This is a simple execution trigger. In a real A/B testing tool,
  // this logic would be handled by the tool's activation settings.
  // We will run the test once the DOM is ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyChanges);
  } else {
    applyChanges();
  }

})(window, document);