(function() {
    document.addEventListener("DOMContentLoaded", function() {
        let bilmeny = document.getElementById("bilmeny");
        if (bilmeny) {
            bilmeny.addEventListener("click", function(e) {
                e.preventDefault();
                if (e.target.tagName == "A" || e.target.tagName == "a") {
                    document.getElementById("hovedvindu").setAttribute("data-klasse", e.target.getAttribute("data-klasse"));
                }
            });
        }

        let toggleMeny = false;

        document.getElementById("hovedmeny-container").addEventListener("click", function(e) {
            if (e.target.tagName == "DIV") {
                toggleMeny = !toggleMeny;
                if (toggleMeny) {
                    document.getElementById("hovedmeny").setAttribute("class", "active");
                } else {
                    document.getElementById("hovedmeny").setAttribute("class", "");
                }
            }
        });

        let bestillingsfaneKnapp = document.getElementById("bestillingsfane-link");
        let avbestillingsfaneKnapp = document.getElementById("avbestillingsfane-link");
        
        if (bestillingsfaneKnapp) {
            bestillingsfaneKnapp.addEventListener("click", function(e) {
                e.preventDefault();
                bestillingsfaneKnapp.setAttribute("class", "active");
                avbestillingsfaneKnapp.setAttribute("class", "");
                document.getElementById("bestillingsfane").setAttribute("class", "active");
                document.getElementById("avbestillingsfane").setAttribute("class", "");
            });
            avbestillingsfaneKnapp.addEventListener("click", function(e) {
                e.preventDefault();
                bestillingsfaneKnapp.setAttribute("class", "");
                avbestillingsfaneKnapp.setAttribute("class", "active");
                document.getElementById("bestillingsfane").setAttribute("class", "");
                document.getElementById("avbestillingsfane").setAttribute("class", "active");
            });
        }
    });
})();