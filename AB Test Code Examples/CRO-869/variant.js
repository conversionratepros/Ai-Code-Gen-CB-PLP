(function () {
	try {
	  /* main variables */
	  var debug = 1;
	  var recipe_name = "recipe_124";
  
	  function waitForElement(selector, trigger, delayInterval, delayTimeout) {
		var interval = setInterval(function () {
		  if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
			clearInterval(interval);
			trigger();
		  }
		}, delayInterval);
		setTimeout(function () {
		  clearInterval(interval);
		}, delayTimeout);
	  }
  
	  function listener() {
		window.addEventListener("locationchange", function () {
		  processChange();
		});
		history.pushState = (function (f) {
		  return function pushState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event("pushstate"));
			window.dispatchEvent(new Event("locationchange"));
			return ret;
		  };
		})(history.pushState);
		history.replaceState = (function (f) {
		  return function replaceState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event("replacestate"));
			window.dispatchEvent(new Event("locationchange"));
			return ret;
		  };
		})(history.replaceState);
		window.addEventListener("popstate", function () {
		  window.dispatchEvent(new Event("locationchange"));
		});
	  }
  
	  function processChange() {
		waitForElement("#layered-filter-block", init, 50, 25000);
	  }
  
	  // var appliedFiltersHtml = ` <div class="cro124-appliedFilters-header" style="display: none;">Applied Filters</div> `;
  
	  // function htmlInsertions() {
	  //   waitForElement(
	  //     "#layered-filter-block .filter-current .items",
	  //     function () {
	  //       if (!document.querySelector(".cro124-appliedFilters-header")) {
	  //         document.querySelector("#layered-filter-block .filter-current .items").insertAdjacentHTML("beforebegin", appliedFiltersHtml);
	  //       }
	  //     },
	  //     50,
	  //     25000
	  //   );
	  // }
  
	  function init() {
		document.body.classList.add(recipe_name);
	  }
	//   listener();
  
	  waitForElement("#maincontent", init, 50, 25000);
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + recipe_name);
	}
  })();