(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-t-ki53";
		var swiperInstance = null;
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

		function fireX() {
			// Prevent multiple observers if init runs again
			if (window.__cro_ki53_reviews_observer) {
				try { window.__cro_ki53_reviews_observer.disconnect(); } catch (e) { }
				window.__cro_ki53_reviews_observer = null;
			}

			function markAndGetHeadingAnchor() {
				var headings = document.querySelectorAll("header .heading-text h3.heading");
				for (var i = 0; i < headings.length; i++) {
					var h = headings[i];
					if (h && h.innerHTML && h.innerHTML.indexOf("You May Also Like") !== -1) {
						var parent = h.closest(".px-4");
						if (parent) {
							parent.classList.add("cro-t-53-heading");
							return parent;
						}
					}
				}
				return null;
			}

			function getFallbackAnchor() {
				return document.querySelector(".section.three");
			}

			function ensureReviewsExists() {
				if (!document.querySelector(".cro-ki53-reviews")) {
					var fallback = getFallbackAnchor();
					if (fallback) fallback.insertAdjacentHTML("afterend", reviews);
				}
			}

			function moveAfter(anchorEl, elementEl) {
				if (!anchorEl || !elementEl) return;

				// already in correct place
				if (anchorEl.nextSibling === elementEl) return;

				var parent = anchorEl.parentNode;
				if (!parent) return;

				if (anchorEl.nextSibling) parent.insertBefore(elementEl, anchorEl.nextSibling);
				else parent.appendChild(elementEl);
			}

			function ensureSubscriptionFollowsReviews(reviewsEl) {
				var subEl = document.querySelector(".cro-ki53-reviews-subscription");
				if (!subEl || !reviewsEl) return;
				moveAfter(reviewsEl, subEl);
			}

			function ensureCorrectPlacement() {
				ensureReviewsExists();

				var reviewsEl = document.querySelector(".cro-ki53-reviews");
				if (!reviewsEl) return;

				// Prefer heading anchor, else fallback
				var headingAnchor = markAndGetHeadingAnchor();
				if (headingAnchor) {
					moveAfter(headingAnchor, reviewsEl);
					ensureSubscriptionFollowsReviews(reviewsEl);
					return;
				}

				var fallbackAnchor = getFallbackAnchor();
				if (fallbackAnchor) {
					moveAfter(fallbackAnchor, reviewsEl);
					ensureSubscriptionFollowsReviews(reviewsEl);
				}
			}

			// Initial placement
			ensureCorrectPlacement();

			// React to SPA DOM changes (debounced)
			var debounceTimer = null;
			window.__cro_ki53_reviews_observer = new MutationObserver(function () {
				if (debounceTimer) clearTimeout(debounceTimer);
				debounceTimer = setTimeout(function () {
					ensureCorrectPlacement();
				}, 150);
			});

			window.__cro_ki53_reviews_observer.observe(document.body, { childList: true, subtree: true });

			// Optional safety stop
			setTimeout(function () {
				if (window.__cro_ki53_reviews_observer) {
					try { window.__cro_ki53_reviews_observer.disconnect(); } catch (e) { }
					window.__cro_ki53_reviews_observer = null;
				}
			}, 12000);
		}



		function addScript() {
			var scriptOne = document.createElement("script");
			scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js";
			document.querySelector("head").appendChild(scriptOne);
			var swiperCss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" integrity="sha512-ipO1yoQyZS3BeIuv2A8C5AwQChWt2Pi4KU3nUvXxc4TKr8QgG8dPexPAj2JGsJD6yelwKa4c7Y2he9TTkPM4Dg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
			document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
		}

		var reviews = `<div class="cro-ki53-reviews" style="display: none;">
        <div class="cro-ki53-reviews-wrapper">
            <div class="cro-ki53-reviews-inner"></div>
        </div>
    </div>`;

		var reviewsData = [
			"It always feels a treat to have a Babylonstoren delivery. Notifications are good, service is good and even if it's only one or two items, it is done so well. Thank you so much!",
			"I enjoy the fact that when I have a problem or question, I can send a whatsapp message and receive a helpful, prompt reply.",
			"I am in love with Babylonstoren - I order online for our clients, and every time I am overwhelmed by the beautiful packaging, the contents, the fast delivery  and the friendly chauffeur delivering my clients orders.",
			"Your delivery system is excellent and your staff is always friendly and efficient.",
			"Thank you for keeping me informed of the delivery and for the speedy service. Would recommend Babelonstoren ANYTIME!"
		];

		function buildReviewsContent() {
			var innerDiv = document.querySelector('.cro-ki53-reviews-inner');
			if (!innerDiv) return;

			var deliverySection = `<div class="cro-ki53-delivery-section">
                    <div class="cro-ki53-delivery-content">
                        <h2 class="cro-ki53-delivery-heading">Free Delivery Nationwide</h2>
                        <p class="cro-ki53-delivery-paragraph">We offer next-day* delivery in Cape Town and surrounds, as well as in Johannesburg and Pretoria main areas.</p>
                    </div>
                    <button class="cro-ki53-learn-more-btn cro-ki53-learn-more-desktop">LEARN MORE</button>
                </div> `;

			var reviewsHTML = reviewsData.map(function (review) {
				return `<div class="swiper-slide"><div class="cro-ki53-review-card">"${review}"</div></div>`;
			}).join('');

			var carouselHTML = `<div class="cro-ki53-reviews-carousel-wrapper">
                    <div class="swiper cro-ki53-reviews-swiper">
                        <div class="swiper-wrapper">
                            ${reviewsHTML}
                        </div>
                    </div>
                    <div class="cro-ki53-carousel-indicators"></div>
                    <button class="cro-ki53-learn-more-btn cro-ki53-learn-more-mobile">LEARN MORE</button>
                </div>`;

			innerDiv.innerHTML = deliverySection + carouselHTML;
		}

		function addSubscriptionSection() {
			var innerDiv = document.querySelector('.cro-ki53-reviews-inner');
			if (!innerDiv) return;

			var subscriptionHTML = `<div class="cro-ki53-reviews-subscription" style="display: none;">
			<div class="cro-ki53-reviews-subscription-wrapper container">
				<div class="col-12 col-md-4 column-two px-3 mid-column">
					<x-markdown-view class="x-markdown-view ng-star-inserted">
						<h6 id="recurring">RECURRING</h6>
						<h2 id="subscriptions">Subscriptions</h2>
						<p>Have your farm favourites delivered throughout<br>the year. From scented spoils to exclusive treats,<br>there's something for every taste.</p>
					</x-markdown-view>
					<section class="align-center button-section">
						<div class="buttons">
							<div class="button ng-star-inserted">
								<x-button class="x-button primary cro-ki53-subscription-btn">
									<a href="" target="_self" class="ng-star-inserted">
										<div class="align-start color-primary outline ng-star-inserted"> LEARN MORE </div>
									</a>
								</x-button>
							</div>
						</div>
					</section>
				</div>
				<div class="col-12 col-md-4 column-three px-3">
					<x-markdown-view class="x-markdown-view ng-star-inserted">
						<h6 id="wine-club">WINE CLUB</h6>
						<h2 id="join-the-club">Join the Club</h2>
						<p>Members receive exclusive limited-edition<br>releases as well as first access to the latest<br>Babylonstoren favourites.</p>
					</x-markdown-view>
					<div>
						<section class="align-center button-section">
							<div class="buttons">
								<div class="button ng-star-inserted">
									<x-button class="x-button primary cro-ki53-joinClub-btn">
										<a href="" target="_self" class="ng-star-inserted">
											<div class="align-start color-primary outline ng-star-inserted"> LEARN MORE </div>
										</a>
									</x-button>
								</div>
							</div>
						</section>
					</div>
				</div>
				</div>
			</div>`;

			if (!document.querySelector('.cro-ki53-reviews-subscription')) {
				insertHtml('.cro-ki53-reviews', subscriptionHTML, "afterend");
			}
		}

		function initIndicators() {
			var indicatorsContainer = document.querySelector('.cro-ki53-carousel-indicators');
			if (!indicatorsContainer) return;

			indicatorsContainer.innerHTML = '';
			for (var i = 0; i < reviewsData.length; i++) {
				var dot = document.createElement('div');
				dot.className = 'cro-ki53-indicator';
				if (i === 0) dot.classList.add('active');
				dot.setAttribute('data-index', i);
				dot.addEventListener('click', function () {
					var index = parseInt(this.getAttribute('data-index'));
					if (swiperInstance) {
						swiperInstance.slideToLoop(index);
					}
				});
				indicatorsContainer.appendChild(dot);
			}
		}

		function updateIndicators(activeIndex) {
			var indicators = document.querySelectorAll('.cro-ki53-indicator');
			indicators.forEach(function (indicator, index) {
				if (index === activeIndex) {
					indicator.classList.add('active');
				} else {
					indicator.classList.remove('active');
				}
			});
		}

		function swiperInit() {
			waitForElement(".cro-ki53-reviews-swiper", function () {
				swiperInstance = new Swiper(".cro-ki53-reviews-swiper", {
					loop: true,
					loopedSlides: reviewsData.length,
					slidesPerView: 1.15,
					spaceBetween: 20,
					freeMode: false,
					grabCursor: true,
					resistance: true,
					resistanceRatio: 0,
					breakpoints: {
						550: {
							slidesPerView: 2.15,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3.15,
							spaceBetween: 20,
						},
					},
					on: {
						init: function () {
							updateIndicators(this.realIndex);
						},
						slideChange: function () {
							updateIndicators(this.realIndex);
						}
					}
				});
			});
		}

		function init() {
			addClass("body", variation_name);

			fireX();

			// .section.three
			// header .heading-text h3.heading



			waitForElement('.cro-ki53-reviews-inner', function () {
				buildReviewsContent();
				initIndicators();
				waitForSwiper(function () {
					swiperInit();
				});
				addSubscriptionSection();
			});


			waitForElement(".x-shop-footer .section.three #free-delivery-nationwide", function () {
				var parent = document.querySelector('.x-shop-footer .section.three #free-delivery-nationwide').closest('.col-12')
				if (parent) {
					parent.classList.add('cro-t-53-delivery')
				}
			});


		}

		function croEventHandkler() {
			live(".cro-ki53-learn-more-btn", "click", function (e) {
				e.preventDefault();
				var targetElement = document.querySelector('.section.three .column-one .buttons .button a div');
				if (targetElement) {
					targetElement.click();
				}
			});

			live(".cro-ki53-subscription-btn", "click", function (e) {
				e.preventDefault();
				var targetElementTwo = document.querySelector('.section.three .column-two .buttons .button a div');
				if (targetElementTwo) {
					targetElementTwo.click();
				}
			});

			live(".cro-ki53-joinClub-btn", "click", function (e) {
				e.preventDefault();
				var targetElementThree = document.querySelector('.section.three .column-three .buttons .button a div');
				if (targetElementThree) {
					targetElementThree.click();
				}
			});
		}

		if (!window.cro_t_ki53) {
			addScript();
			waitForElement('.x-shop-footer', init);
			croEventHandkler();
			window.cro_t_ki53 = true;
		}

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();