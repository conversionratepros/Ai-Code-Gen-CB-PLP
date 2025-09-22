(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "CRO-5296";

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

        function init() {
            const categoryFilter = document.querySelector('#narrow-by-list .filter-options-item.cat');
            if (!categoryFilter) {
                if(debug) console.log('Category filter not found');
                return;
            }

            const list = categoryFilter.querySelector('ul.items.filter-checkbox');
            if (!list) {
                if(debug) console.log('Category list not found');
                return;
            }

            document.body.classList.add(variation_name);

            const parentLis = list.querySelectorAll('li:not(.child)');

            parentLis.forEach(parentLi => {
                parentLi.classList.add('cro-parent-category');
                const childrenContainer = document.createElement('ul');
                childrenContainer.className = 'cro-children-container';

                let nextSibling = parentLi.nextElementSibling;
                while (nextSibling && nextSibling.classList.contains('child')) {
                    const toMove = nextSibling;
                    nextSibling = nextSibling.nextElementSibling;
                    childrenContainer.appendChild(toMove);
                }

                if (childrenContainer.hasChildNodes()) {
                    parentLi.appendChild(childrenContainer);
                    
                    const chevron = document.createElement('span');
                    chevron.className = 'cro-chevron';
                    parentLi.appendChild(chevron);

                    parentLi.addEventListener('click', function(e) {
                        if (e.target.tagName.toLowerCase() !== 'input') {
                            e.preventDefault();
                            this.classList.toggle('cro-expanded');
                             // if the click is not on the label, prevent the checkbox from toggling
                            if (e.target.tagName.toLowerCase() !== 'label') {
                                e.preventDefault();
                            }
                        }
                    });
                }
            });
        }

        waitForElement('body.catalog-category-view #narrow-by-list .filter-options-item.cat', init, 100, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();