(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cro-cb-567-atfRework";
        /* all Pure helper functions */

        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
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

        function insertHtml(selector, content, position) {
            var el = document.querySelector(selector);
            if (!position) {
                position = "afterend";
            }
            if (el && content) {
                el.insertAdjacentHTML(position, content);
            }
        }

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }


        function waitForSwiper(trigger) {
            var interval = setInterval(function () {
                if (typeof window.Swiper != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        function addScript() {
            var scriptOne = document.createElement("script");
            scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.0.4/swiper-bundle.min.js";
            document.querySelector("head").appendChild(scriptOne);

            var swiperCss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.0.4/swiper-bundle.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />';
            document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
        }

        function initializeSwiper(card) {
            new Swiper(".cro-567-productSlider .swiper", {
                loop: true,
                pagination: {
                    el: ".cro-567-swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".cro-567-productSlider-subcat-next",
                    prevEl: ".cro-567-productSlider-subcat-prev",
                },
                slidesPerView: card,
                spaceBetween: 20, // Adjust the spacing between slides
            });
        }

        var croCbSlider = `<div class="cro-567-productSlider"> 
          <div class="cro-567-slider-wrapper">
              <div class="cro-567-productSlider-inner">
                  
                  <div class="cro-567-productSlider-subcat-images">
                      <div class="cro-t-567-left-part-inner-swiper">
                          <div class="swiper">
                            <div class="swiper-wrapper cro-t-567-swiperWrapper">
                              <!-- Swiper slides will be inserted here -->
                            </div>
                            <!-- Pagination -->
                            <div class="swiper-pagination cro-567-swiper-pagination"></div>
                          </div>
                          <div class="swiper-button-prev cro-567-productSlider-subcat-prev cro-567-productSlider-arrowbtn">
                              <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/plp-atf/cro-567_chevron-left.svg" alt="">
                          </div>
                          <div class="swiper-button-next cro-567-productSlider-subcat-next cro-567-productSlider-arrowbtn">
                              <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/plp-atf/cro-567_chevron-right.svg" alt="">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;

        var croShop = `<div class="cro-567-shopBy">
          <div class="cro-567-shopBy-wrapper">
              <div class="cro-567-shopBy-inner">
                  <p><strong data-role="title" role="tab" aria-selected="false" aria-expanded="false" tabindex="0">Shop By</strong></p>
              </div>
          </div>
      </div>`;

        var croCross = `<div class="cro-567-crossModal">
          <div class="cro-567-crossModal-wrapper">
              <div class="cro-567-crossModal-inner">
                  <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/plp-atf/cro-567_chevron-cross.svg" alt="">
              </div>
          </div>
      </div>`;

        var shopSection = `<div class="cro_toolbar cro_toolbar-products">
        <p class="toolbar-amount" id="cro-toolbar-amount">
        </p>
        <div class="toolbar-sorter sorter">
            <div class="cro-567-shopBy">
                <div class="cro-567-shopBy-wrapper">
                    <div class="cro-567-shopBy-inner">
                        <p><strong data-role="title" role="tab" aria-selected="false" aria-expanded="false"
                                tabindex="0">Shop By</strong></p>
                    </div>
                </div>
            </div>

            <label class="sorter-label" for="sorter">Sort By</label>
            <select id="cro-sorter" data-role="sorter" class="sorter-options">
                <option value="name">
                    Product Name </option>
                <option value="price">
                    Price </option>
                <option value="rating_filter" selected="selected">
                    Rating filter </option>
            </select>

            <a title="Set Descending Direction" href="#" class="action sorter-action sort-asc"
                data-role="direction-switcher" data-value="desc" style="display:none;">
                <span>Set Descending Direction</span>
            </a>

            <a title="Set Ascending Direction" href="#" class="action sorter-action sort-desc"
                data-role="direction-switcher" data-value="asc" style="display:none;">
                <span>Set Ascending Direction</span>
            </a>
        </div>

    </div>`;
        function init() {
            addClass("body", variation_name);

            // waitForElement(
            //     ".cro_toolbar",
            //     function () {
            //         if (!document.querySelector(".cro-567-shopBy")) {
            //             insertHtml(".cro_toolbar", croShop, "beforebegin"
            //             );
            //         }
            //     }
            // );
            waitForElement(
                "#layered-filter-block",
                function () {
                    if (!document.querySelector(".cro_toolbar")) {
                        insertHtml('#layered-filter-block', shopSection, "beforebegin");
                    }
                }
            );

            waitForElement("#layered-filter-block", addingValue);
            waitForElement('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) [data-value="desc"]', desc_Order);
            waitForElement('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) [data-value="asc"]', asc_Order);
            waitForElement("#product-list-container > .toolbar.toolbar-products:nth-of-type(1) #sorter", customDropdown);


            // #product-list-container > .toolbar.toolbar-products:nth-of-type(1) [data-value="desc"]
            // #product-list-container > .toolbar.toolbar-products:nth-of-type(1) [data-value="asc"]
            triggerx();
        }

        function desc_Order() {
            document.querySelector('.cro_toolbar.cro_toolbar-products [data-value="desc"]').style.display = 'block';
            document.querySelector('.cro_toolbar.cro_toolbar-products [data-value="asc"]').style.display = 'none';
        }

        function asc_Order() {
            document.querySelector('.cro_toolbar.cro_toolbar-products [data-value="asc"]').style.display = 'block';
            document.querySelector('.cro_toolbar.cro_toolbar-products [data-value="desc"]').style.display = 'none';

        }

        function customDropdown() {
            if (document.querySelector('#cro-sorter')) {
                document.querySelector('#cro-sorter').innerHTML = document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) #sorter').innerHTML;
                document.querySelector('#cro-sorter').value = document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) #sorter').value;
            }
        }

        function addingValue() {
            // Updating Items
            var controlValue = document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) #toolbar-amount');
            var variationVal = document.querySelector('#cro-toolbar-amount')
            if (controlValue && variationVal) {
                document.querySelector('#cro-toolbar-amount').innerHTML = controlValue.innerHTML;
            }

            //DESC
            // #product-list-container > .toolbar.toolbar-products:nth-of-type(1) .action.sort-desc
        }

        function listener() {
            window.addEventListener("locationchange", function () {
                waitForElement('.catalog-category-view', init);
            });
            history.pushState = ((f) =>
                function pushState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("pushstate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.pushState);
            history.replaceState = ((f) =>
                function replaceState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("replacestate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.replaceState);
            window.addEventListener("popstate", function () {
                window.dispatchEvent(new Event("locationchange"));
            });
        }
        function triggerx() {
            var doneTypingInterval = 6000;  //time in ms, 5 seconds for example
            var intervalCallAgain = setInterval(function () {
                waitForElement('.cdz-subcategories .owl-stage .owl-item', getTheHtml);
            }, 700);

            //start the countdown
            var Timer = setTimeout(function () {
                clearInterval(intervalCallAgain);
            }, doneTypingInterval);
        }

        function getTheHtml() {
            waitForElement('.cro_toolbar', function () {
                if (!document.querySelector(".cro-567-productSlider")) {
                    // insertHtml(".cdz-subcategories", croCbSlider, "afterbegin");
                    insertHtml('.cro_toolbar', croCbSlider, "beforebegin")
                }

                var swiperWrapper = document.querySelector(".cro-t-567-swiperWrapper");
                var uniqueClass = 1;
                var cardLength = document.querySelectorAll('.cdz-subcategories .owl-stage .owl-item').length;
                console.log('------', cardLength)

                document.querySelectorAll('.cdz-subcategories .owl-stage .owl-item').forEach(function (e) {
                    var imageLink = e.querySelector('img');
                    var imageText = e.querySelector('.item-title');
                    var linkElement = e.querySelector('a'); // Assuming there's an <a> tag for the href

                    if (imageLink && imageText && linkElement) {
                        var slide = `<div class="swiper-slide">
						<div class="cro-item ${'cro-t-card-' + uniqueClass}">
							<div class="cro-item-top">
								<a class="cro-item-thumbnail" href="${linkElement.href}" style="padding-bottom: 100%;">
									<img class="cro-zoom-eff" src="${imageLink.src}">
								</a>
							</div>
							<a class="cro-item-title" href="${linkElement.href}">${imageText.innerHTML}</a>
						</div>
					</div>`;

                        // console.log(slide);

                        // Check if the element already exists and append the slide as HTML
                        if (!document.querySelector(".cro-t-card-" + uniqueClass)) {
                            swiperWrapper.insertAdjacentHTML("beforeend", slide);
                        }
                    }
                    uniqueClass++;
                });

                if (!window.cro_t_swiper) {
                    if (cardLength < 4) {
                        waitForSwiper(function () {
                            initializeSwiper(1);
                        });
                    } else {
                        waitForSwiper(function () {
                            initializeSwiper(2);
                        });
                    }

                    window.cro_t_swiper = true;
                }

            });




        }

        function croEventHandkler() {
            live(".cro-567-shopBy-inner p", "click", function () {
                var shopClick = document.querySelector("#layered-filter-block .block-title strong");
                var checkActive = document.querySelector("#layered-filter-block.active");
                if (shopClick) {
                    shopClick.click();
                }
            });

            // document.querySelector('#cro-sorter').addEventListener('change', function () {
            //     var selectedValue = this.value;
            //     var controlDropdown = document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) #sorter');

            //     if (controlDropdown) {
            //         controlDropdown.value = selectedValue;
            //         controlDropdown.dispatchEvent(new Event('change', { bubbles: true }));
            //     }
            // });

            live("#cro-sorter", "change", function () {
                var selectedValue = this.value;
                var controlDropdown = document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) #sorter');

                if (controlDropdown) {
                    controlDropdown.value = selectedValue;
                    controlDropdown.dispatchEvent(new Event('change', { bubbles: true }));
                }
            });

            live('.cro_toolbar [data-role="direction-switcher"]', "click", function (e) {
                e.preventDefault();
                var getData = this.getAttribute('data-value')
                if (document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) [data-value="' + getData + '"]')) {
                    document.querySelector('#product-list-container > .toolbar.toolbar-products:nth-of-type(1) [data-value="' + getData + '"]').click();
                }
            });
        }

        if (window.innerWidth < 768) {

            if (!window.cro_t_UC1_mobile) {
                croEventHandkler();
                addScript();
                // listener();
                window.cro_t_UC1_mobile = true;
            }

            console.log('-------Working')
            waitForElement('.catalog-category-view', init);
        }




    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();