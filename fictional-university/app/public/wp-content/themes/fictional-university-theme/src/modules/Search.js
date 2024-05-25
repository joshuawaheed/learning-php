import $ from "jquery";

class Search {
    constructor() {
        this.addSearchHTML();
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

    addSearchHTML() {
        $("body").append(`
            <div class="search-overlay">
                <div class="search-overlay__top">
                    <div class="container">
                        <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
                        <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term" autocomplete="off">
                        <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="container">
                    <div id="search-overlay__results"></div>
                </div>
            </div>
        `);
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
        $.when(
            $.getJSON(universityData.root_url + "/wp-json/wp/v2/posts?search=" + this.searchField.val()),
            $.getJSON(universityData.root_url + "/wp-json/wp/v2/pages?search=" + this.searchField.val())
        ).then((posts, pages) => {
            var results = posts[0].concat(pages[0]);
            this.resultsDiv.html(`
                <h2 class="search-overlay__section-title">General Information</h2>
                ${results.length ? "<ul class=\"link-list min-list\">" : "<p>No general information matches your search.</p>"}
                ${results.map(result => `<li><a href="${result.link}">${result.title.rendered}</a></li>`).join("")}
                ${results.length ? "</ul>" : ""}
            `);
            this.isSpinnerVisible = false;
        }, () => {
            this.resultsDiv.html("<p>Unexpected error; please try again.</p>");
        });
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
        this.searchField.val("");
        setTimeout(() => this.searchField.focus(), 301);
    }

    typingLogic() {
        if (this.searchField.val() !== this.previousValue) {
            clearTimeout(this.typingTimer);

            if (this.searchField.val()) {
                if (!this.isSpinnerVisible) {
                    this.resultsDiv.html("<div class=\"spinner-loader\"></div>");
                    this.isSpinnerVisible = true;
                }
    
                this.typingTimer = setTimeout(this.getResults.bind(this), 750);
            } else {
                this.resultsDiv.html("");
                this.isSpinnerVisible = false;
            }
        }
        
        this.previousValue = this.searchField.val();
    }
}

export default Search;