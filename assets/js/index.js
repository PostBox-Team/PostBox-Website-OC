setTimeout(function () {
    startScrollAnimation()

    AOS.init({
        duration: 1000,
        mirror: false,
        anchorPlacement: "top-center",
        offset: -200
    });
}, 0);

var startScrollAnimation = () => {
    lax.init();
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    });

    lax.addElements(".center-fade", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 1, 0],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".fade-in", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY"],
                [0.5, 1],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".fade-out", {
        scrollY: {
            opacity: [
                ["elCenterY", "elOutY"],
                [1, 0],
                {
                    easing: "easeOutBack"
                }
            ]
        }
    });

    lax.addElements(".slide-down", {
        scrollY: {
            translateY: [
                ["elInY", "elOutY"],
                [0, 500],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".slide-up", {
        scrollY: {
            translateY: [
                ["elInY", "elCenterY"],
                [100, 0],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".slide-up2", {
        scrollY: {
            translateY: [
                ["elInY", "elCenterY"],
                [170, 0],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".comes-up", {
        scrollY: {
            translateY: [
                ["elInY", "elCenterY"],
                [150, 0],
                {
                    easing: "easeInOutQuad"
                }
            ]
            ,
            translateZ: [
                ["elInY", "elCenterY"],
                [0, 0]
            ],
            opacity: [
                ["elInY", "elCenterY"],
                [0, 1],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".comes-up2", {
        scrollY: {
            translateY: [
                ["elCenterY", "elOutY"],
                [0, 150],
                {
                    easing: "easeInOutQuad"
                }
            ]
            ,
            translateZ: [
                ["elCenterY", "elOutY"],
                [0, 0]
            ],
            opacity: [
                ["elCenterY", "elOutY"],
                [1, 0],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".comes-down", {
        scrollY: {
            translateY: [
                ["elInY", "elCenterY"],
                [-150, 0],
                {
                    easing: "easeInOutQuad"
                }
            ],
            translateZ: [
                ["elInY", "elCenterY"],
                [0, 0]
            ],
            opacity: [
                ["elInY", "elCenterY"],
                [0, 1],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".comes-down-2", {
        scrollY: {
            translateY: [
                ["elInY", "elCenterY"],
                [-100, 0],
                {
                    easing: "easeInOutQuad"
                }
            ],
            opacity: [
                ["elInY", "elCenterY"],
                [0, 1],
                {
                    easing: "easeInOutQuad"
                }
            ]
        }
    });

    lax.addElements(".slide-right", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY"],
                [0, 1],
                {
                    easing: "easeInOutQuart"
                }
            ],
            translateX: [
                ["elInY", "elCenterY"],
                [-100, 0],
                {
                    easing: "easeInOutQuart"
                }
            ]
        }
    });

    lax.addElements(".slide-left", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY"],
                [0, 1],
                {
                    easing: "easeInOutQuart"
                }
            ],
            translateX: [
                ["elInY", "elCenterY"],
                [200, 0],
                {
                    easing: "easeInOutQuart"
                }
            ]
        }
    });
};