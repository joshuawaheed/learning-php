import $ from "jquery";

class Search {
    constructor() {
        this.closeButton = $(".search-overlay__close");
        this.isOverlayOpen = false;
        this.isSpinnerVisible = false;
        this.openButton = $(".js-search-trigger");
        this.previousValue;
        this.resultsDiv = $("#search-overlay__results");
        this.searchField = $("#search-term");
        this.searchOverlay = $(".search-overlay");
        this.typingTimer;
        this.events();
    }

    closeOverlay() {
        this.isOverlayOpen = false;
        this.searchOverlay.removeClass("search-overlay--active");
        $("body").removeClass("body-no-scroll");
    }

    events() {
        this.openButton.on("click", this.openOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
        this.searchField.on("keyup", this.typingLogic.bind(this));
        $(document).on("keydown", this.keyPressDispatcher.bind(this));
    }

    getResults() {
        this.resultsDiv.html("Imagine real search results here...");
        this.isSpinnerVisible = false;
    }

    keyPressDispatcher(e) {
        if (e.keyCode == 83 && !this.isOverlayOpen && !$("input, textarea").is(":focus")) {
            this.openOverlay();
        } else if (e.keyCode == 27 && this.isOverlayOpen) {
            this.closeOverlay();
        }
    }

    openOverlay() {
        this.isOverlayOpen = true;
        this.searchOverlay.addClass("search-overlay--active");
        $("body").addClass("body-no-scroll");
    }

    typingLogic() {
        if (this.searchField.val() !== this.previousValue) {
            clearTimeout(this.typingTimer);

            if (this.searchField.val()) {
                if (!this.isSpinnerVisible) {
                    this.resultsDiv.html("<div class=\"spinner-loader\"></div>");
                    this.isSpinnerVisible = true;
                }
    
                this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
            } else {
                this.resultsDiv.html("");
                this.isSpinnerVisible = false;
            }
        }
        
        this.previousValue = this.searchField.val();
    }
}

export default Search;