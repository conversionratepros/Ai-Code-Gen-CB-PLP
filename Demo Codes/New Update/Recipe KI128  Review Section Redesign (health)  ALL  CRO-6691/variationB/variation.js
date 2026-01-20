(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "croki128";
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

        function waitForSwiper(trigger) {
            var interval = setInterval(function () {
                if (typeof window.Swiper !== "undefined") {
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
            scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js";
            document.querySelector("head").appendChild(scriptOne);
            var swiperCss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" integrity="sha512-ipO1yoQyZS3BeIuv2A8C5AwQChWt2Pi4KU3nUvXxc4TKr8QgG8dPexPAj2JGsJD6yelwKa4c7Y2he9TTkPM4Dg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
            document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
        }

        function swiperInit() {
            waitForElement(".croki128-left-part .swiper", function () {
                new Swiper(".croki128-left-part .swiper", {
                    loop: true,
                    navigation: {
                        nextEl: ".croki128-left-part-next",
                        prevEl: ".croki128-left-part-prev",
                    },
                    pagination: {
                        el: ".croki128-pagination",
                        clickable: true,
                    },
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 15,
                     breakpoints: {
                        300: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            autoHeight: true, // autoHeight only here
                        },
                        500: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 30,
                            autoHeight: true, // autoHeight only here
                        },
                        981: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            autoHeight: false,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 34,
                            autoHeight: false,
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 34,
                            autoHeight: false,
                        },
                        // 1536 / 1700 only needed if something changes there
                        // 1536: { slidesPerView: 4 }
                    },
                });
            });
        }


        var reviews = `<div class="croki128-left-part" id="croki128-Review-Section">
        <div class="croki128-left-part-wrapper cro-container">
            <div class="croki128-left-part-inner">
                <div class="croki128-header-part">
                    <div class="croki128-header-part-wrapper">
                        <div class="croki128-header-parent">
                            <div class="croki128-header-parent-text">
                                <h2 class="hellopeterText">
                    See why South Africans trust Oneplan for <span>simple, affordable</span> health cover that truly delivers.
                </h2>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="croki128-left-part-inner-swiper">
                    <div class="swiper">
                        <div class="swiper-wrapper croki128-swiperWrapper">
                            <div class="swiper-slide">
                                <div class="testimonial-slide card-1">

        <div class="testimonial_box">
            <div class="testimonial_box-inner">
                <div class="testimonial_box-top">
                    <div class="testimonial_box-text">
                        <div class="et_pb_text_inner nameinfo">
                            <h5 class="name">Tarryn</h5>
                                            
                        </div>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <div class="et_pb_text_inner thereview name"><h5>I had a query and was assisted within minutes</h5></div>
                        <div id="" class="et_pb_text_inner thereview"><p>"I had a query and was assisted within minutes. This gives reassurance that my family and I will be taken care of in an emergency"</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testimonial-slide card-2">
                        <div class="testimonial_box">
                            <div class="testimonial_box-inner">
                                <div class="testimonial_box-top">
                                    <div class="testimonial_box-text">
                                        <div class="et_pb_text_inner nameinfo">
                                            <h5 class="name">Pauline van der Spuy</h5>
                                            
                                        </div>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <div class="et_pb_text_inner thereview name"><h5>Sweetness</h5></div>
                                        <div id="" class="et_pb_text_inner thereview"><p>"I cannot express enough gratitude for the incredible service I received from Oneplan Insurance consultant Sweetness. She was absolutely amazing so friendly and approachable. She made what could have been a daunting process so effortless and stress-free. Her professionalism and genuine care stood out, ensuring I understood everything and felt confident in my decisions. Thanks to her, I now have the peace of mind that I'm protected. Highly recommend Oneplan Insurance for their outstanding customer service and personal touch!"</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
                            <div class="swiper-slide">
<div class="testimonial-slide card-3">
        <div class="testimonial_box">
            <div class="testimonial_box-inner">
                <div class="testimonial_box-top">
                    <div class="testimonial_box-text">
                            <div class="et_pb_text_inner nameinfo">
                                <h5 class="name">Colette</h5>                 
                            </div>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <div class="et_pb_text_inner thereview name"><h5>I had questions about my policy and the mandate and contacted Oneplan via WhatsApp</h5>
                            </div>
                            <div id="" class="et_pb_text_inner thereview"><p>"I had questions about my policy and the mandate and contacted Oneplan via WhatsApp. The friendly Shannon Mc Pherson was so friendly and helpful. I really felt like I got super customer service. Thank you Oneplan"</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
                            </div>
                            <div class="swiper-slide">
    <div class="testimonial-slide card-4">
                        <div class="testimonial_box">
                            <div class="testimonial_box-inner">
                                <div class="testimonial_box-top">
                                    <div class="testimonial_box-text">
                                        <div class="et_pb_text_inner nameinfo">
                                            <h5 class="name">Shawn P</h5>
                                            
                                        </div>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <div class="et_pb_text_inner thereview name"><h5>I would like to write a review about Oneplan Insurance</h5></div>
                                        <div id="" class="et_pb_text_inner thereview">
                                            <p>"I would like to write a review about Oneplan Insurance. Shannen Mc Pherson assisted me with my query and she walked the extra mile and friendly service to give me the correct information and advice. Wow, you don't get this kind of service every day. Thank you Shannon! Keep up the good work."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
                            </div>
                            <div class="swiper-slide">
<div class="testimonial-slide card-5">
        <div class="testimonial_box">
            <div class="testimonial_box-inner">
                <div class="testimonial_box-top">
                    <div class="testimonial_box-text">
                        <div class="et_pb_text_inner nameinfo">
                            <h5 class="name">Lulu M</h5>
                                            
                        </div>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <span class="fa fa-star" aria-hidden="true"></span>
                        <div class="et_pb_text_inner thereview name"><h5>To Nakedi Phahlahla</h5></div>
                        <div id="" class="et_pb_text_inner thereview"><p>"I would like to thank Nakedi Phahlahla for her assistance, she did an outstanding job helping me with my policy. She kept of updating me of the developments and I truly appreciate what you did for me. Keep it up my sister, you are amazing."</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                            </div>
                            <div class="swiper-slide">
<div class="testimonial-slide card-6">
        <div class="testimonial_box">
            <div class="testimonial_box-inner">
                                <div class="testimonial_box-top">
                                    <div class="testimonial_box-text">
                                        <div class="et_pb_text_inner nameinfo">
                                            <h5 class="name">Gregory S</h5>
                                            
                                        </div>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <div class="et_pb_text_inner thereview name"><h5>Reabetsoe Letsatsi at Oneplan</h5></div>
                                        <div id="" class="et_pb_text_inner thereview"><p>"Reabetsoe Letsatsi a Claims Consultant at Oneplan provided us with outstanding service throughout the process. We would highly recommend her to anyone as she went above and beyond to assist us through a stressful time. She always provided timeous feedback on all of our claims from start to finish. Keep up the good work."</p></div>
                                    </div>
                                </div>
            </div>
        </div>
    </div>
                            </div>
                            <div class="swiper-slide">
<div class="testimonial-slide card-7">
                        <div class="testimonial_box">
                            <div class="testimonial_box-inner">
                                <div class="testimonial_box-top">
                                    <div class="testimonial_box-text">
                                        <div class="et_pb_text_inner nameinfo">
                                            <h5 class="name">Erthney A</h5>
                                            
                                        </div>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <div class="et_pb_text_inner thereview name"><h5>This was the first time that I needed in-hospital treatment, and One Plan came through</h5></div>
                                        <div id="thereview" class="et_pb_text_inner thereview">
                                            <p>"This was the first time that I needed in-hospital treatment, and One Plan came through. I was admitted to the best private hospital and received the best care. I can sing their praises from the rooftops! Best medical insurance there is!"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
                            <div class="swiper-slide">
<div class="testimonial-slide card-8">
                        <div class="testimonial_box">
                            <div class="testimonial_box-inner">
                                <div class="testimonial_box-top">
                                    <div class="testimonial_box-text">
                                        <div class="et_pb_text_inner nameinfo">
                                            <h5 class="name">Justine H</h5>
                                            
                                        </div>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <div class="et_pb_text_inner thereview name">
                                            <h5>Top Service from Oneplan Health Insurance</h5>
                                        </div>
                                        <div id="thereview" class="et_pb_text_inner thereview">
                                            <p>
                                                "I have been with Oneplan since 2014. Over this time I have used them for the odd doctor's visit etc.
                                                This year has been a bad year for me with two different accidents resulting in firstly a broken pelvis and a few months later a broken ankle as well as heel. Each time they have paid my hospital bill, and I am so grateful to them. My heel operation is now taking place on Monday and have just had the authorisation. If you are looking for a company that cares about your health then I strongly recommend Oneplan. I will never change!"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
                            </div>
                            <div class="swiper-slide">
<div class="testimonial-slide card-9">
                        <div class="testimonial_box">
                            <div class="testimonial_box-inner">
                                <div class="testimonial_box-top">
                                    <div class="testimonial_box-text">
                                        <div class="et_pb_text_inner nameinfo">
                                            <h5 class="name">Loretta</h5>
                                            
                                        </div>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <span class="fa fa-star" aria-hidden="true"></span>
                                        <div class="et_pb_text_inner thereview name">
                                            <h5>One Plan has provided exceptional service, handling my request with remarkable efficiency</h5>
                                        </div>
                                        <div id="thereview" class="et_pb_text_inner thereview">
                                            <p>"One Plan has provided exceptional service, handling my request with remarkable efficiency. The process was seamless, and my card was successfully loaded without any issues"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
                            </div>
                        </div>

                    </div>
                    <div class="swiper-button-prev croki128-left-part-prev croki128-arrowbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.073 14.4878L7.24373 9.65858L12.073 4.82931" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="swiper-button-next croki128-left-part-next croki128-arrowbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.24414 4.82922L12.0734 9.65849L7.24414 14.4878" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>`;


        function init() {
            addClass("body", variation_name);
            addScript();

            waitForElement('#simpleandaffordable', function () {
                if (!document.querySelector('.croki128-left-part')) {
                    insertHtml('#simpleandaffordable', reviews, "beforebegin");
                }
            });

            waitForSwiper(swiperInit);
            // addScript();
        }



        waitForElement('body', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();