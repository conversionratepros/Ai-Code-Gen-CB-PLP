(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "croki88";
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
        
        // Reviews data
        var reviewsData = [
            {
                name: "Kate Johanna Van Wyk",
                date: "17 Sep 2025 at 19:34",
                title: "Great service",
                review: "Great service, friendly and experienced personnel. Their help me alot through did dark time in my life, thank you again, keep on helping people like me."
            },
            {
                name: "Jacqueline S",
                date: "16 Sep 2025 at 13:57",
                title: "Grateful",
                review: "I am so pleased I contact Debt Busters to help me with my debt. It will not be long now I will be debt free and that will be a massive load off my shoulders. The staff are pleasant and very helpful. The best choice I have made. Thank you Debt Buster"
            },
            {
                name: "Jacob",
                date: "16 Sep 2025 at 12:12",
                title: "Great service with Debdbusters.",
                review: "They offered realistic and practical solutions to my financial situation. Their debt repayment solutions provide relief to your situation. Assisted by Bongiwe. I recommend them if you're highly indebted."
            },
            {
                name: "Michelle N",
                date: "6 Sep 2025 at 09:42",
                title: "Excellent Service from DebtBusters!",
                review: "The process was smooth, and I never felt judged or overwhelmed. Instead, I felt empowered to take control of my finances with confidence. I truly appreciate the care and dedication shown by the team. Thank you, DebtBusters, for making a stressful situation manageable—and even hopeful. Highly recommended!"
            },
            {
                name: "Mazw S",
                date: "16 Sep 2025 at 09:37",
                title: "Super happy",
                review: "When I applied for help I was seriously drowning. Now I can budget and sort my life out and that even before my account is closed for debt review. They are transparent and I would recommend debt busters to everyone who needs help"
            },
            {
                name: "Mrs. Hiramen",
                date: "16 Sep 2025 at 09:29",
                title: "Debt busters is da way",
                review: "Debt Busters really helped me with my monthly expenses by reducing my monthly bill,if it wasn't for debt busters I wouldn't know how I wid survive every month."
            },
            {
                name: "John T",
                date: "12 Sep 2025 at 15:05",
                title: "Toward Full Debt Repayment with DebtBusters",
                review: "Thank you, DebtBusters, for your efficient, effective response in regard to an account that I paid off completely in September 2025, by adding payment onto the monthly payment negotiated by DebtBusters. I am now heading to, hopefully, fully pay off another account by December 2025 using the same method. With DebtBusters, there is clear progress year by year toward financial freedom."
            }
        ];

        // Function to get initials from name
        function getInitials(name) {
            var parts = name.trim().split(' ');
            if (parts.length >= 2) {
                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
            }
            return name.substring(0, 2).toUpperCase();
        }

        // Function to create star HTML
        function createStars(filled, total) {
            var starsHtml = '';
            for (var i = 0; i < total; i++) {
                var color = i < filled ? '#25B888' : '#B8B8B8';
                var clipId = 'clip0_112_985_' + i + '_' + Date.now();
                starsHtml += '<span class="hellopeter-star"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#' + clipId + ')"><path d="M23.5497 8.90137C23.3734 8.37675 22.9193 7.99425 22.3726 7.91062L16.0092 6.93825L13.1509 0.849375C12.9072 0.330375 12.3863 0 11.8141 0C11.2414 0 10.7209 0.330375 10.4772 0.849375L7.61856 6.93863L1.25519 7.911C0.708439 7.99463 0.254314 8.37675 0.0784392 8.90175C-0.0974358 9.42675 0.0353142 10.005 0.421939 10.4018L5.06894 15.1669L3.96831 21.9083C3.87756 22.4662 4.11419 23.0273 4.57581 23.3535C5.03706 23.6798 5.64606 23.7128 6.14219 23.439L11.8144 20.3021L17.4867 23.439C17.7106 23.5627 17.9569 23.6235 18.2022 23.6235C18.5007 23.6235 18.7992 23.5328 19.0531 23.3535C19.5147 23.0276 19.7509 22.4666 19.6602 21.9083L18.5596 15.1669L23.2069 10.4018C23.5928 10.005 23.7256 9.42675 23.5497 8.90137Z" fill="' + color + '"/></g><defs><clipPath id="' + clipId + '"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></span>';
            }
            return starsHtml;
        }

        // Function to create review card HTML
        function createReviewCard(review) {
            var initials = getInitials(review.name);
            var titleHtml = review.title ? '<div class="hellopeter-review-title">' + review.title + '</div>' : '';
            return `
                <div class="hellopeter-review-card">
                    <div class="hellopeter-review-header">
                        <div class="hellopeter-reviewer-avatar">${initials}</div>
                        <div class="hellopeter-reviewer-info">
                            <div class="hellopeter-reviewer-name">${review.name}</div>
                            <div class="hellopeter-review-date">${review.date}</div>
                        </div>
                    </div>
                    <div class="hellopeter-review-stars">
                        ${createStars(5, 5)}
                    </div>
                    ${titleHtml}
                    <div class="hellopeter-review-text">${review.review}</div>
                </div>
            `;
        }

        // Reviews section HTML
        var reviewsSectionHTML = `
            <section class="hellopeter-reviews-section">
                <div class="hellopeter-reviews-container">
                    <h2 class="hellopeter-reviews-heading">Rated <span>4.04</span> from <span>10,000+ Reviews</span> on Hellopeter</h2>
                    <div class="hellopeter-logo-stars">
                        <div class="hellopeter-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="119" height="30" viewBox="0 0 119 30" fill="none">
                                <path d="M9.17284 20.2463V11.5123C9.18998 11.1238 9.12586 10.7361 8.98459 10.3738C8.84332 10.0116 8.628 9.68277 8.35242 9.40847C8.06579 9.14026 7.7286 8.93187 7.3605 8.7955C6.9924 8.65914 6.60078 8.59754 6.20859 8.61429C5.62842 8.62244 5.05939 8.77466 4.55262 9.05726C4.07449 9.28555 3.66404 9.63439 3.36168 10.0695V20.2463H0V0.795226L3.36168 0.0010376V6.97485C4.34905 6.15232 5.61219 5.73596 6.89514 5.81014C7.64686 5.76344 8.40025 5.86973 9.10971 6.12258C9.81917 6.37544 10.47 6.7696 11.0227 7.28121C11.5384 7.85159 11.9342 8.51982 12.1866 9.24619C12.4389 9.97256 12.5427 10.7422 12.4917 11.5095V20.2463H9.17284Z" fill="#29357F"/>
                                <path d="M26.0085 19.0988C24.545 20.2017 22.7419 20.7577 20.9115 20.6706C19.9796 20.6917 19.0534 20.5202 18.1908 20.1669C17.3283 19.8135 16.548 19.286 15.8987 18.6172C14.6695 17.355 14.055 15.5932 14.055 13.3318C14.013 12.3403 14.1705 11.3505 14.5183 10.421C14.866 9.49151 15.3969 8.64132 16.0794 7.92087C17.352 6.6366 19.0722 5.89461 20.8796 5.85037C22.687 5.80612 24.4414 6.46305 25.7753 7.68351C26.3806 8.29757 26.8545 9.02851 27.1681 9.83175C27.4816 10.635 27.6282 11.4937 27.5989 12.3555C27.5905 13.0656 27.5129 13.7732 27.3671 14.4683L17.2317 14.4282C17.2673 14.939 17.4038 15.4376 17.6333 15.8953C17.8628 16.3529 18.1808 16.7605 18.5689 17.0944C19.3573 17.7509 20.3645 18.0856 21.3889 18.0314C22.0189 18.0299 22.6419 17.9003 23.2202 17.6505C23.7984 17.4007 24.3198 17.0359 24.7527 16.5783L25.0073 16.3257L26.9738 18.0114C26.6787 18.3967 26.3561 18.7602 26.0085 19.0988ZM17.1379 12.2734H24.3525C24.1147 9.82941 22.926 8.60741 20.7866 8.60741C18.8298 8.60695 17.6135 9.82895 17.1379 12.2734Z" fill="#29357F"/>
                                <path d="M106.263 19.0988C104.799 20.2016 102.996 20.7577 101.166 20.6706C100.234 20.6916 99.3076 20.5201 98.4451 20.1667C97.5825 19.8134 96.8021 19.2859 96.1528 18.6172C94.9237 17.3549 94.3091 15.5931 94.3091 13.3318C94.2671 12.3403 94.4247 11.3504 94.7725 10.4209C95.1202 9.49146 95.6511 8.64127 96.3336 7.92081C97.6061 6.63639 99.3263 5.89431 101.134 5.85006C102.941 5.80581 104.696 6.46283 106.029 7.68346C106.635 8.29746 107.109 9.02839 107.423 9.83164C107.736 10.6349 107.883 11.4936 107.854 12.3554C107.845 13.0655 107.768 13.7732 107.622 14.4682L97.4866 14.4282C97.5221 14.9389 97.6586 15.4376 97.8882 15.8952C98.1177 16.3529 98.4357 16.7604 98.8238 17.0943C99.6122 17.7509 100.619 18.0855 101.644 18.0314C102.274 18.0298 102.897 17.9002 103.475 17.6504C104.053 17.4006 104.575 17.0358 105.008 16.5782L105.262 16.3257L107.228 18.0113C106.933 18.3966 106.61 18.7601 106.263 19.0988ZM97.3921 12.2733H104.607C104.369 9.82936 103.18 8.60736 101.041 8.60736C99.0839 8.6069 97.8677 9.8289 97.3921 12.2733Z" fill="#29357F"/>
                                <path d="M82.6645 19.0988C81.201 20.2017 79.3979 20.7577 77.5675 20.6706C76.6356 20.6917 75.7095 20.5202 74.8469 20.1669C73.9844 19.8135 73.204 19.286 72.5546 18.6172C71.3255 17.355 70.711 15.5932 70.711 13.3318C70.669 12.3403 70.8266 11.3505 71.1744 10.421C71.5221 9.49154 72.053 8.64135 72.7355 7.92087C74.008 6.6366 75.7281 5.89461 77.5356 5.85037C79.343 5.80612 81.0975 6.46305 82.4313 7.68351C83.0367 8.29757 83.5105 9.02851 83.8241 9.83175C84.1376 10.635 84.2842 11.4937 84.255 12.3555C84.2465 13.0656 84.1689 13.7732 84.0232 14.4683L73.8877 14.4282C73.9233 14.939 74.0598 15.4376 74.2893 15.8953C74.5189 16.3529 74.8368 16.7605 75.2249 17.0944C76.0133 17.7509 77.0205 18.0856 78.045 18.0314C78.6749 18.0299 79.2979 17.9003 79.8762 17.6505C80.4544 17.4007 80.9758 17.0359 81.4087 16.5783L81.6633 16.3257L83.6298 18.0114C83.3348 18.3967 83.0121 18.7602 82.6645 19.0988ZM73.7939 12.2734H81.0086C80.7707 9.82941 79.582 8.60741 77.4426 8.60741C75.4857 8.60695 74.2695 9.82895 73.7939 12.2734Z" fill="#29357F"/>
                                <path d="M30.2346 0.0452105C30.4778 -0.0127993 30.7308 -0.01501 30.975 0.038725C31.2191 0.0924599 31.4479 0.200747 31.6441 0.355487C31.8404 0.510226 31.9991 0.707384 32.1084 0.932198C32.2176 1.15701 32.2746 1.40364 32.2749 1.65359V15.9317C32.2396 16.6689 32.3815 17.4039 32.6889 18.0749C32.8219 18.3241 32.8889 18.6033 32.8836 18.8857C32.8782 19.1682 32.8007 19.4446 32.6584 19.6886C32.5161 19.9327 32.3137 20.1362 32.0705 20.28C31.8273 20.4237 31.5513 20.5029 31.2689 20.5099H31.213C29.713 20.5099 28.9632 19.4689 28.9636 17.3869V1.65498C28.9638 1.28288 29.0893 0.921694 29.3199 0.62965C29.5505 0.337606 29.8727 0.131723 30.2346 0.0452105Z" fill="#FFD25A"/>
                                <path d="M37.1447 0.0452105C37.3879 -0.0127993 37.641 -0.01501 37.8851 0.038725C38.1292 0.0924599 38.358 0.200747 38.5543 0.355487C38.7506 0.510226 38.9093 0.707384 39.0185 0.932198C39.1278 1.15701 39.1847 1.40364 39.185 1.65359V15.9317C39.1498 16.6689 39.2918 17.4038 39.5991 18.0749C39.7321 18.3241 39.7991 18.6033 39.7937 18.8857C39.7884 19.1682 39.7109 19.4446 39.5685 19.6886C39.4262 19.9327 39.2238 20.1362 38.9806 20.28C38.7374 20.4237 38.4615 20.5029 38.1791 20.5099H38.1231C36.6231 20.5099 35.8733 19.4689 35.8738 17.3869V1.65498C35.874 1.28288 35.9994 0.921694 36.23 0.62965C36.4606 0.337606 36.7828 0.131723 37.1447 0.0452105Z" fill="#FFD25A"/>
                                <path d="M40.9316 13.1269C40.8502 11.1911 41.5213 9.29889 42.8043 7.84702C44.1341 6.55345 45.9117 5.82291 47.7668 5.80762C49.6219 5.79232 51.4114 6.49345 52.7623 7.76492C53.9275 9.31534 54.5547 11.2037 54.5488 13.1431C54.5428 15.0826 53.9039 16.967 52.7292 18.5103C51.3802 19.7966 49.5867 20.5125 47.7227 20.5088C45.8587 20.5051 44.0681 19.782 42.7242 18.4903C41.4751 16.9906 40.8353 15.0762 40.9316 13.1269ZM44.3726 13.1269C44.3726 16.2498 45.4975 17.8113 47.7474 17.8113C48.2253 17.8266 48.6996 17.7234 49.128 17.5109C49.5563 17.2984 49.9255 16.9832 50.2024 16.5934C50.8681 15.5646 51.1859 14.3492 51.1091 13.1262C51.1091 10.0474 49.9888 8.50804 47.7481 8.50804C47.2695 8.4934 46.7946 8.59678 46.3654 8.80905C45.9362 9.02132 45.5658 9.33595 45.2869 9.7252C44.6219 10.7302 44.3011 11.9239 44.3726 13.1269Z" fill="#29357F"/>
                                <path d="M59.5925 19.8889V25.8042H56.2839V6.07029H59.5925V7.02316C59.9938 6.62497 60.4715 6.31187 60.9967 6.10261C61.5219 5.89335 62.0839 5.79225 62.6492 5.80532C67.1659 5.80532 69.4245 8.29322 69.4249 13.269C69.4249 15.5897 68.8007 17.3764 67.5523 18.6289C66.8719 19.2729 66.0675 19.7717 65.1881 20.0947C64.3087 20.4177 63.3728 20.5583 62.4374 20.5078C61.4543 20.5214 60.4811 20.3097 59.5925 19.8889ZM59.5925 9.53889V16.9909C60.1859 17.4742 60.9311 17.732 61.6963 17.7188C63.2226 17.7188 64.3187 17.355 64.9848 16.6272C65.6509 15.8995 65.9839 14.7495 65.9839 13.1773C65.9839 11.501 65.6532 10.3209 64.9917 9.63687C64.3302 8.95285 63.2364 8.61108 61.7101 8.61154C61.3124 8.61373 60.9195 8.69726 60.5553 8.85698C60.1911 9.0167 59.8634 9.24923 59.5925 9.54028V9.53889Z" fill="#29357F"/>
                                <path d="M86.048 8.73294H84.4072V6.07302H86.048V3.18813L89.3566 1.97028V6.07232H93.2475V8.73227H89.3566V14.9423C89.2904 15.6911 89.4566 16.442 89.8326 17.093C90.0415 17.3215 90.3013 17.4975 90.5909 17.6067C90.8806 17.716 91.1919 17.7553 91.4997 17.7216C92.2876 17.7233 93.0595 17.4981 93.7229 17.073V20.1165C92.6567 20.4207 91.5492 20.5546 90.4413 20.5133C89.8451 20.552 89.2474 20.4654 88.6867 20.2591C88.126 20.0528 87.6147 19.7314 87.1858 19.3155C86.375 18.3722 85.9663 17.1487 86.0473 15.9076L86.048 8.73294Z" fill="#29357F"/>
                                <path d="M117.532 9.15665C116.956 8.77309 116.279 8.57031 115.587 8.57429C115.19 8.58333 114.799 8.68202 114.445 8.86303C114.091 9.04404 113.783 9.30268 113.543 9.61963C112.941 10.332 112.623 11.2408 112.649 12.1726V20.2456H109.341V6.07372H112.649V7.37092C113.111 6.85455 113.682 6.44679 114.32 6.17684C114.959 5.90689 115.649 5.78143 116.341 5.80946C117.236 5.75908 118.128 5.93668 118.935 6.32559L117.532 9.15665Z" fill="#29357F"/>
                                <path d="M44.1406 23.0435C43.823 22.8119 43.4283 22.7118 43.0387 22.764C42.6491 22.8162 42.2946 23.0167 42.0492 23.3237C41.1743 24.4058 40.07 25.2802 38.816 25.8835C37.562 26.4869 36.1898 26.8043 34.7982 26.8128C33.4067 26.8212 32.0306 26.5205 30.7694 25.9324C29.5082 25.3443 28.3934 24.4834 27.5054 23.412C27.2581 23.1105 26.9049 22.9149 26.518 22.8655C26.1312 22.8161 25.7402 22.9166 25.425 23.1464C25.2581 23.2683 25.1179 23.4232 25.0129 23.6013C24.908 23.7794 24.8405 23.9771 24.8146 24.1822C24.7888 24.3873 24.8051 24.5956 24.8626 24.7942C24.9201 24.9928 25.0176 25.1775 25.1491 25.3371C26.3239 26.76 27.8006 27.9037 29.4721 28.6853C31.1436 29.4668 32.9681 29.8668 34.8133 29.856C36.6585 29.8452 38.4782 29.424 40.1405 28.623C41.8028 27.822 43.266 26.6611 44.4242 25.2246C44.5535 25.0648 44.649 24.8803 44.7049 24.6825C44.7608 24.4846 44.7759 24.2774 44.7493 24.0735C44.7228 23.8696 44.655 23.6732 44.5503 23.4963C44.4455 23.3194 44.3059 23.1656 44.1399 23.0442L44.1406 23.0435Z" fill="#FFD25A"/>
                            </svg>
                        </div>
                        <div class="hellopeter-main-stars">
                            ${createStars(4, 5)}
                        </div>
                    </div>
                    <div class="hellopeter-subtitle">Reviews from Hellopeter</div>
                    <div class="hellopeter-reviews-grid" id="hellopeterReviewsGrid">
                        ${reviewsData.slice(0, 3).map(createReviewCard).join('')}
                    </div>
                    <div class="hellopeter-reviews-hidden" id="hellopeterReviewsHidden" style="display: none;">
                        ${reviewsData.slice(3).map(createReviewCard).join('')}
                    </div>
                    <button class="hellopeter-see-more-btn" id="hellopeterSeeMoreBtn">See more reviews</button>
                </div>
            </section>
        `;

        // Inject CSS styles - Link to external CSS file
       

        function init() {
            addClass("body", variation_name)

            // Insert reviews section after .relative.overflow-hidden
            waitForElement(".relative.overflow-hidden", function () {
                if (!document.querySelector(".hellopeter-reviews-section")) {
                    insertHtml(".relative.overflow-hidden", reviewsSectionHTML, "afterend");
                    
                    // Add event listener for expand/collapse
                    var seeMoreBtn = document.querySelector("#hellopeterSeeMoreBtn");
                    var hiddenReviews = document.querySelector("#hellopeterReviewsHidden");
                    var reviewsGrid = document.querySelector("#hellopeterReviewsGrid");
                    
                    if (seeMoreBtn && hiddenReviews) {
                        seeMoreBtn.addEventListener('click', function() {
                            if (hiddenReviews.style.display === 'none') {
                                // Expand
                                hiddenReviews.style.display = 'block';
                                seeMoreBtn.textContent = 'See fewer reviews';
                            } else {
                                // Collapse
                                hiddenReviews.style.display = 'none';
                                seeMoreBtn.textContent = 'See more reviews';
                                // Scroll to top of section
                                var section = document.querySelector(".hellopeter-reviews-section");
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }
                        });
                    }
                }
            });
        }
        
        waitForElement('.landing', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();