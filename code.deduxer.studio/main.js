import {
    g as t
} from "../code.deduxer.studio/assets/index-10963069/";
let e = document.querySelector(".component_preloader"),
    n = 1500,
    s = 500,
    r = "no-transition";
window.addEventListener("load", function() {
    e && (l(), document.body.classList.add("no-scroll"), setTimeout(() => {
        document.body.classList.remove("no-scroll")
    }, n))
});
document.querySelectorAll("a").forEach(function(o) {
    o.addEventListener("click", function(i) {
        if (this.hostname === window.location.host && this.getAttribute("href").indexOf("#") === -1 && !this.classList.contains(r) && this.getAttribute("target") !== "_blank" && e) {
            i.preventDefault(), document.body.classList.add("no-scroll");
            let a = this.getAttribute("href");
            d(), setTimeout(function() {
                window.location = a
            }, s)
        }
    })
});
window.addEventListener("pageshow", function(o) {
    o.persisted && window.location.reload()
});
setTimeout(() => {
    window.addEventListener("resize", function() {
        setTimeout(() => {
            document.querySelector(".component_preloader").style.display = "none"
        }, 50)
    })
}, n);

function l() {
    t.to(".component_preloader", {
        duration: 1.5,
        startAt: {
            clipPath: "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)"
        },
        clipPath: "polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)",
        ease: "expo.out"
    }), t.to(".loader-logo-itself", {
        opacity: .4,
        duration: 1.4,
        ease: "expo.out"
    })
}

function d() {
    t.to(".component_preloader", {
        duration: .6,
        startAt: {
            clipPath: "polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)"
        },
        clipPath: "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
        ease: "expo.out"
    }), t.to(".loader-logo-itself", {
        duration: .6,
        opacity: 1,
        ease: "expo.out"
    })
}