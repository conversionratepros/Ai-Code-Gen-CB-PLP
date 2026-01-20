(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cro86";
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
        

        var quoteSection  = `<div class="cro-t-86-Online-Quote-container" id="cro-t-86-free-online-quote">
        <div class="cro-t-86-Online-Quote-wrapper cro-container">
            <div class="cro-t-86-Online-Quote-secton-card-top-text">
                READY TO START YOUR FREE ONLINE QUOTE NOW?
            </div>
            <div class="cro-t-86-Online-Quote-card-container">
                <div class="cro-t-86-Online-Quote-card Online-Quote-1">
                    <div class="cro-t-86-Online-Quote-card-top-part">
                        <div class="cro-t-86-Online-Quote-card-icon">
                            <a href="https://health.oneplan.co.za/?referrer=getquoteHomePageicon" target="_blank"><img src="/assets/homepage/img/home-health-insurance.png" class="cro-usp-icon" alt="Health Signup"></a>
                        </div>
                        <h3 class="cro-t-86-Online-Quote-card-header">Health Insurance</h3>
                        <div class="cro-t-86-Quote-card-price-part">
                            <div class="cro-t-86-Quote-card-price-from-text">
                                From
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-text">
                                From <span>R500</span>
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-textBottom">
                                <span>PER MONTH</span>
                            </div>
                        </div>
                        <div class="cro-t-86-Online-Quote-card-subheader">
                            <p class="cro-t-86-Online-Quote-card-subheader-text">Access to a wide range of benefits and
                                Private Hospitals like Netcare, Life, Mediclinic, and more + Day-to-Day claims paid
                                upfront.
                            </p>
                        </div>

                    </div>
                    <div class="cro-t-86-Online-Quote-card-download-icon">
                        <a href="https://health.oneplan.co.za/?referrer=getquoteHomePage" target="_blank">
                            <img src="/assets/homepage/img/btn-get-online-quote-green.png" class="cro-img-get-online-quote-green">
                        </a>
                    </div>
                </div>
                <div class="cro-t-86-Online-Quote-card Online-Quote-2">
                    <div class="cro-t-86-Online-Quote-card-top-part">
                        <div class="cro-t-86-Online-Quote-card-icon">
                            <a href="https://www.onepet.co.za/?referrer=getquoteHomePageicon"><img src="/assets/homepage/img/home-pet-insurance.png" class="cro-usp-icon" alt="Oneplan Pet"></a>
                        </div>
                        <h3 class="cro-t-86-Online-Quote-card-header">PET INSURANCE</h3>
                        <div class="cro-t-86-Quote-card-price-part">
                            <div class="cro-t-86-Quote-card-price-from-text">
                                From
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-text">
                                From <span>R80</span>
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-textBottom">
                                <span>PER MONTH</span>
                            </div>
                        </div>
                        <div class="cro-t-86-Online-Quote-card-subheader">
                            <p class="cro-t-86-Online-Quote-card-subheader-text">We love pets as much as you do. That’s
                                why
                                we cover even the furry, four-legged family members for Accidents, Illnesses, and quick
                                trips to the vet.</p>
                        </div>

                    </div>
                    <div class="cro-t-86-Online-Quote-card-download-icon">
                        <a href="https://www.onepet.co.za/?referrer=getquoteHomePage" target="_blank">
                            <img src="/assets/homepage/img/btn-get-online-quote-green.png" class="cro-img-get-online-quote-green" style="
    /* width: 100%; */
">
                        </a>
                    </div>
                </div>
                <div class="cro-t-86-Online-Quote-card Online-Quote-3">
                    <div class="cro-t-86-Online-Quote-card-top-part">
                        <div class="cro-t-86-Online-Quote-card-icon">
                            <a href="https://gap.oneplan.co.za/?Referrer=getquoteHomePageicon" target="_blank"><img src="/assets/homepage/img/home-gap-cover.png" class="cro-usp-icon" alt="Gap Cover"></a>
                        </div>
                        <h3 class="cro-t-86-Online-Quote-card-header">Gap Insurance</h3>
                        <div class="cro-t-86-Quote-card-price-part">
                            <div class="cro-t-86-Quote-card-price-from-text">
                                From
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-text">
                                From <span>R220</span>
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-textBottom">
                                <span>PER MONTH</span>
                            </div>
                        </div>
                        <div class="cro-t-86-Online-Quote-card-subheader">
                            <p class="cro-t-86-Online-Quote-card-subheader-text">We double/quadruple scheme pay out,
                                even
                                within MSA Savings Threshold. Plus cover for all cancers + mental health conditions and
                                added Accidental Death &amp; HIV cover at no extra premium.
                            </p>
                        </div>

                    </div>
                    <div class="cro-t-86-Online-Quote-card-download-icon">
                        <a href="https://gap.oneplan.co.za/?Referrer=getquoteHomePage" target="_blank">
                            <img src="/assets/homepage/img/btn-get-online-quote-green.png" class="cro-img-get-online-quote-green">
                        </a>
                    </div>
                </div>
                <div class="cro-t-86-Online-Quote-card Online-Quote-4">
                    <div class="cro-t-86-Online-Quote-card-top-part">
                        <div class="cro-t-86-Online-Quote-card-icon">
                            <a href="https://oneplanshortterm.co.za/?referrer=getquoteHomePageicon"><img src="/assets/homepage/img/home-shortterm-insurance.png" class="cro-usp-icon" alt="Short Term Home"></a>
                        </div>
                        <h3 class="cro-t-86-Online-Quote-card-header">Car &amp; Home Insurance</h3>
                        <div class="cro-t-86-Quote-card-price-part">
                            <div class="cro-t-86-Quote-card-price-from-text">
                                From
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-text">
                                 <span>FLEXIBLE COVER</span>
                            </div>
                            <div class="cro-t-86-Quote-card-Main-price-textBottom">
                                <span>PER MONTH</span>
                            </div>
                        </div>
                        <div class="cro-t-86-Online-Quote-card-subheader">
                            <p class="cro-t-86-Online-Quote-card-subheader-text">We can never predict when things can
                                go wrong, but we can make sure you have flexible cover, because some cover is better than none.
                            </p>
                        </div>

                    </div>
                    <div class="cro-t-86-Online-Quote-card-download-icon">
                        <a href="https://oneplanshortterm.co.za/?referrer=getquoteHomePage" target="_blank">
                            <img src="/assets/homepage/img/btn-get-online-quote-green.png" class="cro-img-get-online-quote-green">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        

        
        function init() {
            addClass("body", variation_name)
            
            waitForElement('.container-usp h1', function () {
                document.querySelectorAll('.container-usp h1').forEach(function (e) {
                    var parent = e.closest('.container-fluid.container-usp');
                        if (parent && e.innerHTML.indexOf('READY TO START YOUR FREE ONLINE QUOTE NOW?') !== -1) {
                            parent.classList.add('cro-online-quote');
                            }
                        });
            });

            waitForElement(".cro-online-quote", function () {
                if (!document.querySelector(".cro-t-86-Online-Quote-container")) {
                    insertHtml(".cro-online-quote", quoteSection, "beforebegin");
                }
            });
        }
        
        
        
        waitForElement('#header', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();