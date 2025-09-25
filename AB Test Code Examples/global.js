(function () {
    try {
        // LIBRARY FUNCTIONS
        var lib = {
            live(selector, event, callback, context) {
                // helper for enabling IE 8 event bindings
                function addEvent(el, type, handler) {
                    if (el.attachEvent) el.attachEvent("on" + type, handler);
                    else el.addEventListener(type, handler);
                }
                // matches polyfill
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
                // live binding helper using matchesSelector
                function live(selector, event, callback, context) {
                    addEvent(context || document, event, function (e) {
                        var found,
                            el = e.target || e.srcElement;
                        while (el && el.matches && el !== context && !(found = el.matches(selector)))
                            el = el.parentElement;
                        if (found) callback.call(el, e);
                    });
                }
                live(selector, event, callback, context);
            },
            getCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
            waitForElement(selector, trigger, delayInterval, delayTimeout) {
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
            },
            listener(trigger) {
                window.addEventListener("locationchange", function () {
                    trigger();
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
                window.addEventListener("popstate", () => {
                    window.dispatchEvent(new Event("locationchange"));
                });
            }, waitForDataLayer(eventName, trigger) {
                var interval = setInterval(function () {
                    if (
                        window.dataLayer &&
                        window.dataLayer.some(function (obj) {
                            return obj.event === eventName;
                        })
                    ) {
                        clearInterval(interval);
                        trigger();
                    }
                }, 50);

                setTimeout(function () {
                    clearInterval(interval);
                }, 15000);
            }
        };


        function waitForDataLayerEvent(conditionFn, trigger) {
            var interval = setInterval(function () {
                if (window.dataLayer && window.dataLayer.some(conditionFn)) {
                    clearInterval(interval);
                    trigger();
                }
            }, 100);

            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        /**
         * Trigger converion goal
         */

        /**
         * Manual activation
         */

        var experiments = {
            test_AddingDataPath() {
                var pathName = window.location.pathname;
                var currentURL = window.location.href;

                lib.waitForElement('html', function () {
                    var htmlTag = document.querySelector('html')
                    htmlTag.setAttribute('cro-datapath', pathName);

                    if (currentURL.includes("#checkoutShippingCart")) {
                        htmlTag.setAttribute("data-cro-step", "cro_my_cart");
                    }

                    if (currentURL.includes("#shipping")) {
                        htmlTag.setAttribute("data-cro-step", "cro_delivery");
                    }

                    if (currentURL.includes("#payment")) {
                        htmlTag.setAttribute("data-cro-step", "cro_payment");
                    }
                }, 25, 15000)
            },
            test44() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/za/checkout")) {
                    window.crotest_44 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100497907"]);
                    // console.log("Experiment 144 Activated");
                }
            },
            test72() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/#checkoutShippingCart")) {
                    window.crotest_72 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100486419"]);
                    console.log("Experiment 72 Activated");
                }
            }, test104() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("#shipping")) {
                    window.crotest_104 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100467255"]);
                    console.log("Experiment 104 Activated");
                }
            }
            , test78() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/#checkoutShippingCart")) {
                    window.crotest_78 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100459239"]);
                    console.log("Experiment 78 Activated");
                }
            }, test86() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/checkout")) {
                    window.crotest_86 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100444855"]);
                    console.log("Experiment 86 Activated");
                }
            },
            test88() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/checkout")) {
                    window.crotest_88 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100493757"]);
                    console.log("Experiment 88 Activated");
                }
            },
            test_25_62_130_131_132_133_134_Cart_drawer() {
                lib.waitForElement('a.view-za', function () {
                    window.crotest_Cart_Drawer_25_62 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004163089"]);
                    console.log("Experiment Cart Drawer Activated");
                }, 50, 15000)

            },
            test_124_FilterRestyle() {
                // .catalog-category-view
                var pageUrl = window.location.href;
                if (pageUrl.includes(".html") && !pageUrl.includes("/checkout")) {
                    lib.waitForElement('.catalog-category-view', function () {
                        window.crotest_124_FilterRestyle = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "1004109298"]);
                        console.log("Experiment 124 Filter Restyle Activated");
                    }, 50, 15000)
                }
            },
            test_120_Replace_PDP_value_dropdowns() {
                // .catalog-category-view
                var pageUrl = window.location.href;
                if (pageUrl.includes(".html") && !pageUrl.includes("gift-voucher-1.html")) {
                    lib.waitForElement('body.catalog-product-view', function () {
                        window.crotest_120_dropdown = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "1004102850"]);
                        console.log("Experiment 120 | Replace PDP value drop downs with statements Activated");
                    }, 50, 15000)
                }
            }, test_145_Gift_voucher_cart_updates_All() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/za/checkout/")) {
                    window.crotest_145_Gift_voucher = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004112087"]);
                    console.log("Experiment 145 | Gift/voucher cart updates | All | CB-472 Activated");
                }
            }, test_Recipe_Cart_continue_sidebar() {
                var pageUrl = window.location.href;

                if (pageUrl.includes("/za/checkout")) {
                    window.crotest_cartSidebar = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100421982"]);
                    // console.log("Experiment Recipe | Cart continue sidebar Activated");
                }
            },
            test_Recipe_ATF_Rework_Mobile() {
                // .catalog-category-view
                var pageUrl = window.location.href;
                if (pageUrl.includes(".html") && !pageUrl.includes("gift-voucher-1.html")) {
                    lib.waitForElement('body.catalog-product-view', function () {
                        window.crotest_ATF_Rework = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "1004124884"]);
                        console.log("Experiment Recipe | ATF Rework | Mobile Activated");
                    }, 50, 15000)
                }
            },
            test_Recipe_UC1_Users_arent_aware_of_the_quality_of_the_products_All_CB_546() {
                var pageUrl = window.location.href;
                if (pageUrl.includes(".html") && !pageUrl.includes("gift-voucher-1.html")) {
                    lib.waitForElement('body.catalog-product-view', function () {
                        window.crotest_uc1_cb_546 = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "1004125222"]);
                        console.log("Experiment UC1 | Users aren't aware of the quality of the products | All | CB-546 Activated");
                    }, 50, 15000)
                }
            }, test_149_Display_credit_payment_methods_on_cart() {
                var pageUrl = window.location.href;

                if (pageUrl.includes("/za/checkout")) {
                    window.crotest_149_credit_payment_methods = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004125372"]);
                    console.log("Experiment Recipe 149 | Display credit payment methods on cart | All | CB-550 Activated");
                }
            },
            test_Recipe_120_v2_Replace_PDP_value_drop_downs_with_statements_CRO682() {
                var pageUrl = window.location.href;
                if (pageUrl.includes(".html") && !pageUrl.includes("gift-voucher-1.html") && pageUrl.includes("/za")) {
                    lib.waitForElement('body.catalog-product-view', function () {
                        window.crotest_120_dropdown_CRO682 = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "1004155617"]);
                        console.log("Experiment Recipe 120 | v2 Replace PDP value drop downs with statements | CRO-682 Activated");
                    }, 50, 15000)
                }
            },
            test_Recipe_54_57_58_59_Product_collection_page_attention_correction_All() {
                var pageUrl = window.location.href;
                if (pageUrl.includes(".html") && !pageUrl.includes("gift-voucher-1.html") && !pageUrl.includes("/za/fashion.html") && !pageUrl.includes("/za/deals.html")) {
                    lib.waitForElement('body.page-with-filter', function () {
                        window.crotest_54_57_58_59_Product_collection_page = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "100421991"]);
                        console.log("Experiment Deploy | Recipe 54.57.58.59 | Product collection page attention correction | All Activated");
                    }, 50, 15000)
                }
            },
            test_UC1_PLP_ATF_Rework_Mobile() {
                var pageUrl = window.location.href;
                // setTimeout(function () {
                // .switcher.language.switcher-language:not(#switcher-language-nav) a.view-za
                if (pageUrl.includes(".html")) {
                    lib.waitForElement('.switcher.language.switcher-language:not(#switcher-language-nav) a.view-za', function () {
                        lib.waitForElement('.catalog-category-view', function () {
                            window.crotest_UC1_PLP_ATF_Rework_Mobile = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(["executeExperiment", "1004156357"]);
                            console.log("Experiment UC1 | PLP ATF Rework | Mobile Activated");
                        }, 50, 15000)

                        if (!document.querySelector('.catalog-category-view') && document.querySelector('.cro-cb-567-atfRework')) {
                            document.querySelector('body').classList.remove('cro-cb-567-atfRework')
                            console.log('Removed- ATF Rework')
                        }
                    }, 50, 15000)

                } else {
                    if (!document.querySelector('.catalog-category-view') && document.querySelector('.cro-cb-567-atfRework')) {
                        document.querySelector('body').classList.remove('cro-cb-567-atfRework')
                        console.log('Removed- ATF Rework')

                    }
                }
                // }, 600)
            },
            test_Recipe_142_Sitewide_colour_invert_All() {
                // .catalog-category-view
                var pageUrl = window.location.href;
                if (pageUrl.includes("/") && !pageUrl.includes("/checkout")) {
                    window.crotest_142_Sitewide_colour_invert_All = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004124226"]);
                    console.log("Experiment Deploy | Recipe 142 | Sitewide colour invert | All Activated");
                }
            },
            test_Recipe_Fable_USP_Section_All_CRO412() {

                if (!window.location.href.includes('gift-voucher-1.html') && window.location.href.includes('/za') && (window.location.href.includes('mug') || window.location.href.includes('cup'))) {
                    window.crotest_Fable_USP_Section_All_CRO412 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004158826"]);
                    console.log("Experiment Recipe | Fable USP Section | All | CRO-412 Activated");
                } else {
                    waitForDataLayerEvent(function (obj) {
                        return (
                            obj.event === 'productDetail' &&
                            obj.ecommerce &&
                            obj.ecommerce.detail &&
                            obj.ecommerce.detail.actionField &&
                            obj.ecommerce.detail.actionField.list === "Mugs"
                        );
                    }, function () {
                        if (window.location.href.includes('/za')) {
                            window.crotest_Fable_USP_Section_All_CRO412 = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(["executeExperiment", "1004158826"]);
                            console.log("Experiment Recipe | Fable USP Section | All | CRO-412 Activated");
                        }
                    });
                }

            }, test_KI153_Order_Summary_update_Mobile() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/za/checkout")) {
                    window.crotest_KI153_Order_Summary_update = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004162984"]);
                    console.log("Experiment Recipe KI153 | Order Summary update | Mobile Activated");
                }
            }, test_70_71_CI_Aligned_In_stock_punt_All_CRO4566() {
                lib.waitForDataLayer('productDetail', function () {
                    window.cro_70_71_CI_Aligned_In_stock_punt_All_CRO4566 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004163747"]);
                    console.log("Experiment Recipe 70.71 | CI-Aligned In stock punt | All | CRO-4566 Activated");
                });
            }, test_KI151_KI152_Checkout_reduce_distraction_CTA_standardising_ALL() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("/za") && pageUrl.includes("#checkoutShippingCart")) {
                    window.crotest_KI151_KI152_Checkout_reduce_distraction = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "1004167209"]);
                    console.log("Experiment Recipe KI151.KI152 | Checkout reduce distraction & CTA standardising | ALL Activated");
                } else {
                    setTimeout(function () {
                        if (document.querySelector('.RecipeCartContinue')) {
                            document.querySelector('body').classList.remove('RecipeCartContinue')
                        }

                        if (document.querySelector('.cro-t-ki151_ki152')) {
                            document.querySelector('body').classList.remove('cro-t-ki151_ki152')
                        }
                    }, 400)
                }
            }, test_Recipe_50_51_53_Deals_page_updates() {
                var pageUrl = window.location.href;
                if (pageUrl.includes("za/deals.html")) {
                    window.crotest_Recipe_50_51_53_Deals_page_updates = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100498753"]);
                    console.log("Experiment Recipe 50.51.53 | Deals page updates Activated");
                } else {
                    setTimeout(function () {
                        if (document.querySelector('.test-50_51_53')) {
                            document.querySelector('body').classList.remove('test-50_51_53')
                        }

                        if (document.querySelector('.cro-test-50_51_53_larryDesign')) {
                            document.querySelector('body').classList.remove('cro-test-50_51_53_larryDesign')
                        }

                        if(window.sessionStorage.getItem('croIndex')){
                           window.sessionStorage.removeItem('croIndex') 
                        }
                    }, 400)
                }
            }
        };


        // experiments.test104();
        experiments.test_25_62_130_131_132_133_134_Cart_drawer();
        // experiments.test86();
        // experiments.test72();
        // experiments.test78();
        // experiments.test88();
        // experiments.test_120_Replace_PDP_value_dropdowns();
        // experiments.test_145_Gift_voucher_cart_updates_All();
        experiments.test_Recipe_ATF_Rework_Mobile();
        experiments.test_Recipe_UC1_Users_arent_aware_of_the_quality_of_the_products_All_CB_546();
        experiments.test_149_Display_credit_payment_methods_on_cart();
        console.log("Global JavaScript Activate");
        experiments.test_124_FilterRestyle();
        experiments.test_Recipe_Cart_continue_sidebar();
        experiments.test44();
        experiments.test_Recipe_120_v2_Replace_PDP_value_drop_downs_with_statements_CRO682();
        experiments.test_Recipe_54_57_58_59_Product_collection_page_attention_correction_All();
        experiments.test_UC1_PLP_ATF_Rework_Mobile();
        experiments.test_Recipe_142_Sitewide_colour_invert_All();
        experiments.test_AddingDataPath();
        experiments.test_Recipe_Fable_USP_Section_All_CRO412();
        experiments.test_KI153_Order_Summary_update_Mobile();
        experiments.test_70_71_CI_Aligned_In_stock_punt_All_CRO4566();
        experiments.test_KI151_KI152_Checkout_reduce_distraction_CTA_standardising_ALL();
        experiments.test_Recipe_50_51_53_Deals_page_updates();
        /**
         * Activate all experiments on location change
         */
        function activateExpOnPageChange() {
            // experiments.test104();
            // experiments.test86();
            // experiments.test72();
            // experiments.test78();
            // experiments.test88();
            // experiments.test44();
            experiments.test_AddingDataPath();
            experiments.test_25_62_130_131_132_133_134_Cart_drawer();
            // experiments.test_124_FilterRestyle();
            // experiments.test_120_Replace_PDP_value_dropdowns();
            // experiments.test_145_Gift_voucher_cart_updates_All();
            experiments.test_Recipe_Cart_continue_sidebar();
            experiments.test_124_FilterRestyle();
            experiments.test44();
            experiments.test_Recipe_120_v2_Replace_PDP_value_drop_downs_with_statements_CRO682();
            experiments.test_Recipe_54_57_58_59_Product_collection_page_attention_correction_All();
            experiments.test_UC1_PLP_ATF_Rework_Mobile();
            experiments.test_Recipe_142_Sitewide_colour_invert_All();
            experiments.test_Recipe_Fable_USP_Section_All_CRO412();
            experiments.test_KI153_Order_Summary_update_Mobile();

            experiments.test_Recipe_ATF_Rework_Mobile();
            experiments.test_Recipe_UC1_Users_arent_aware_of_the_quality_of_the_products_All_CB_546();
            experiments.test_149_Display_credit_payment_methods_on_cart();
            experiments.test_KI151_KI152_Checkout_reduce_distraction_CTA_standardising_ALL();
            experiments.test_Recipe_50_51_53_Deals_page_updates();

        }
        lib.listener(activateExpOnPageChange);
    } catch (e) {
        console.log("Error in Global JavaScript");
    }
})();