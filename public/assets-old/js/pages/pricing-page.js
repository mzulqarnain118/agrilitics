// Pricing Page
$(function () {
    $("#pricing-billed").change(function (e) {
        if (e.target.checked) {
            $(".hp-pricing-billed-yearly-text").addClass("active");
            $(".hp-pricing-billed-monthly-text").removeClass("active");

            $(".hp-pricing-billed-active").removeClass("d-none")
            $(".hp-pricing-billed-inactive").addClass("d-none")
        } else {
            $(".hp-pricing-billed-monthly-text").addClass("active");
            $(".hp-pricing-billed-yearly-text").removeClass("active");

            $(".hp-pricing-billed-active").addClass("d-none")
            $(".hp-pricing-billed-inactive").removeClass("d-none")
        }
    })
})
