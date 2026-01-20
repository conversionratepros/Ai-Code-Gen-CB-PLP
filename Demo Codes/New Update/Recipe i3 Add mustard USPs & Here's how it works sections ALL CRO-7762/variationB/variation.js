(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cro-i3-mustard";
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


        var pointsDesk = `<div class="cro-i3-bulletPoints cro-i3-bulletPointsDesktop">
        <div class="cro-i3-bulletPoints-wrapper">
            <h2 class="cro-i3-bulletPoints-heading">Here’s how it works</h2>
            <div class="cro-i3-bulletPoints-inner">
                <div class="cro-i3-step">
                    <div class="cro-i3-step-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_1.svg" alt="Step 1">
                    </div>
                    <div class="cro-i3-step-content">
                        <h3 class="cro-i3-step-heading">Complete our assessment</h3>
                        <p class="cro-i3-step-text">Fill out the quick assessment telling us about your debts.</p>
                    </div>
                </div>
                <div class="cro-i3-step">
                    <div class="cro-i3-step-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_2.svg" alt="Step 2">
                    </div>
                    <div class="cro-i3-step-content">
                        <h3 class="cro-i3-step-heading">Get an instant result</h3>
                        <p class="cro-i3-step-text">Instantly see if debt consolidation is your best option (and how much you could save!)</p>
                    </div>
                </div>
                <div class="cro-i3-step">
                    <div class="cro-i3-step-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_3.svg" alt="Step 3">
                    </div>
                    <div class="cro-i3-step-content">
                        <h3 class="cro-i3-step-heading">Start paying off debt faster</h3>
                        <p class="cro-i3-step-text">If it's right for you, our consultants will help combine your debts into one easy payment.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;


    var pointsMob = `<div class="cro-i3-bulletPoints cro-i3-bulletPointsMobile">
    <div class="cro-i3-bulletPoints-wrapper">
        <h2 class="cro-i3-bulletPoints-heading">Here’s how it works</h2>
        <div class="cro-i3-bulletPoints-inner">
            <div class="cro-i3-step">
                <div class="cro-i3-step-icon">
                    <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_1.svg" alt="Step 1">
                </div>
                <div class="cro-i3-step-content">
                    <h3 class="cro-i3-step-heading">Complete our assessment</h3>
                    <p class="cro-i3-step-text">Fill out the quick assessment telling us about your debts.</p>
                </div>
            </div>
            <div class="cro-i3-step">
                <div class="cro-i3-step-icon">
                    <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_2.svg" alt="Step 2">
                </div>
                <div class="cro-i3-step-content">
                    <h3 class="cro-i3-step-heading">Get an instant result</h3>
                    <p class="cro-i3-step-text">Instantly see if debt consolidation is your best option (and how much you could save!)</p>
                </div>
            </div>
            <div class="cro-i3-step">
                <div class="cro-i3-step-icon">
                    <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_3.svg" alt="Step 3">
                </div>
                <div class="cro-i3-step-content">
                    <h3 class="cro-i3-step-heading">Start paying off debt faster</h3>
                    <p class="cro-i3-step-text">If it's right for you, our consultants will help combine your debts into one easy payment.</p>
                </div>
            </div>
        </div>
    </div>
</div>`;

    var uspsSection = `<div class="cro-i3-usps">
        <div class="cro-i3-usps-wrapper container">
            <h2 class="cro-i3-usps-heading">Let us help ease your debt burden.</h2>
            <div class="cro-i3-usps-inner">
                <div class="cro-i3-usp-item">
                    <div class="cro-i3-usp-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_4.svg" alt="Lower interest rates">
                    </div>
                    <div class="cro-i3-usp-content">
                        <h3 class="cro-i3-usp-heading">Lower interest rates!</h3>
                        <p class="cro-i3-usp-text">Reduce your interest rates and monthly payments by merging your debts. Save money each month and over the life of your debt.</p>
                    </div>
                </div>
                <div class="cro-i3-usp-item">
                    <div class="cro-i3-usp-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_5.svg" alt="One easy payment">
                    </div>
                    <div class="cro-i3-usp-content">
                        <h3 class="cro-i3-usp-heading">One easy payment</h3>
                        <p class="cro-i3-usp-text">Replace multiple bills with a single payment. No more juggling due dates. Manage your debt with one simple plan.</p>
                    </div>
                </div>
                <div class="cro-i3-usp-item">
                    <div class="cro-i3-usp-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_6.svg" alt="Improve cash flow">
                    </div>
                    <div class="cro-i3-usp-content">
                        <h3 class="cro-i3-usp-heading">Improve cash flow</h3>
                        <p class="cro-i3-usp-text">Free up cash each month by consolidating - get breathing room in your budget.</p>
                    </div>
                </div>
                <div class="cro-i3-usp-item">
                    <div class="cro-i3-usp-icon">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Debt-co-za/Recipe_i3/cro_debtBuster-i3_7.svg" alt="Fast and easy process">
                    </div>
                    <div class="cro-i3-usp-content">
                        <h3 class="cro-i3-usp-heading">Fast and easy process</h3>
                        <p class="cro-i3-usp-text">Find out if consolidation is right for you in minutes with our free assessment tool. No obligation, just clear guidance.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        
        function init() {
            addClass("body", variation_name);

            // .pt-10 .rounded.bg-gray
            waitForElement(".pt-10 .rounded.bg-gray", function () {
                if (!document.querySelector(".cro-i3-bulletPointsMobile")) {
                    insertHtml(".pt-10 .rounded.bg-gray", pointsMob, "afterend");
                }
            });

            waitForElement(".pt-10 .container", function () {
                if (!document.querySelector(".cro-i3-bulletPointsDesktop")) {
                    insertHtml(".pt-10 .container .decorated", pointsDesk, "beforebegin");
                }
            });

            // Insert USPs section below .pt-10
            waitForElement(".pt-10", function () {
                if (!document.querySelector(".cro-i3-usps")) {
                    var pt10El = document.querySelector(".pt-10");
                    if (pt10El) {
                        insertHtml(".pt-10", uspsSection, "afterend");
                    }
                }
            });
            
        }
        
        waitForElement('.decorated', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();