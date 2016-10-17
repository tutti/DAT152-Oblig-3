(function() {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("bilmeny").addEventListener("click", function(e) {
            e.preventDefault();
            if (e.target.tagName == "A" || e.target.tagName == "a") {
                document.getElementById("hovedvindu").setAttribute("data-klasse", e.target.getAttribute("data-klasse"));
            }
        });
    });
})();