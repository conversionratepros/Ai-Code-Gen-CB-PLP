(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "croi5";
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

        var headerPart = `<div class="croi5-new-left-part">
        <div class="croi5-new-left-wrapper">
            <div class="croi5-new-left-header">
                <div class="croi5-new-left-header-text">
                    <span>Simplify your debt. </span>
                    One payment,<br> less stress.
                </div>
            </div>
            <div class="croi5-new-left-sub_header">
                <div class="croi5-new-left-subheader-text text-1">
                    Combine your high-interest debts into <span>one affordable payment.</span> 
                </div>
                <div class="croi5-new-left-subheader-text text-2">
                    Free up cash flow and pay off debt faster with our consolidation options.
                </div>

            </div>
        </div>
                        </div>`;

        
        function chageplaceholderText(){    
            waitForElement("#main-form #first_name", function () {
                var croInputElement = document.querySelector('#main-form #first_name');
                if (croInputElement) {
                    croInputElement.placeholder = 'First name*';
                }
            });

            waitForElement("#main-form #last_name", function () {
                var croInputElement = document.querySelector('#main-form #last_name');
                if (croInputElement) {
                    croInputElement.placeholder = 'Last name*';
                }
            });

            waitForElement("#main-form #phone_mobile", function () {
                var croInputElement = document.querySelector('#main-form #phone_mobile');
                if (croInputElement) {
                    croInputElement.placeholder = 'Phone*';
                }
            });

            waitForElement("#main-form #email", function () {
                var croInputElement = document.querySelector('#main-form #email');
                if (croInputElement) {
                    croInputElement.placeholder = 'Email address*';
                }
            });

            waitForElement("#main-form #id_number", function () {
                var croInputElement = document.querySelector('#main-form #id_number');
                if (croInputElement) {
                    croInputElement.placeholder = 'RSA ID number*';
                }
            });
        }

        function sectionAddClass(){
            waitForElement('.pt-10 h1 strong', function () {
                        document.querySelectorAll('.pt-10 h1 strong').forEach(function (e) {
                            var parent = e.closest('div');
                            if (parent && e.innerHTML.indexOf('Free Loan Calculator') !== -1) {
                                parent.classList.add('cro-header-left');
                                }
                            });
            });

            waitForElement("#main-form #Callback", function () {
                    var parent = document.querySelector('#main-form #Callback').closest('.grid.gap-5')
                        if (parent) {
                        parent.classList.add('croi5-from-button')
                        }
            });

            waitForElement('#main-form p', function () {
                    var paragraphs = document.querySelectorAll('#main-form p');

                    for (var i = 0; i < paragraphs.length; i++) {
                        var text = paragraphs[i].textContent || paragraphs[i].innerText;

                        if (text.indexOf('By continuing you accept our') !== -1) {
                            paragraphs[i].classList.add('croi5-From-tnc');
                        }
                    }
            });

            waitForElement('section h2', function () {
                    document.querySelectorAll('section h2').forEach(function (e) {
                        var parent = e.closest('section');
                            if (parent && e.innerHTML.indexOf('Our Partners') !== -1) {
                                    parent.classList.add('croi5-Partners-Section');
                                }
                            });
            });
        }

        
        function init() {
           addClass("body", variation_name);
           sectionAddClass();
           chageplaceholderText();

            waitForElement(".cro-header-left", function () {
                if (!document.querySelector(".croi5-new-left-part")) {
                    insertHtml(".cro-header-left", headerPart, "beforeend");
                }
            });          
        }
        
        
        waitForElement('#main-form', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();