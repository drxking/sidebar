
let left = document.querySelector(".left-btn")
let right = document.querySelector(".right-btn")

arr = ["Nike air jordan", "Nike Sports", "Gucci Basket", "Adidas Sports"]

let x = 0
let y = 0
let text = document.querySelector(".main-text")
text.innerHTML = arr[y]
right.addEventListener("click", () => {
    if (x != 300) {
        x += 100
        y++
        let tl = gsap.timeline()
        let clutter = ""
        arr[y].split("").forEach((elem) => {
            if (elem == " ") {
                clutter += `<span>&nbsp;</span>`
            }
            else {
                clutter += `<span>${elem}</span>`
            }
        })

        text.innerHTML = clutter

        tl.from(".main-text span", {
            y: 100,
            stagger: 0.02,
            duration: 0.7
        }, "a")
        tl.to(".slime", {
            x: `-${x}%`,
            duration: 1
        }, "a")
    }
})

left.addEventListener("click", () => {
    if (x != 0) {
        x -= 100
        y--
        let tt = gsap.timeline()
        let clutter = ""
        arr[y].split("").forEach((elem) => {
            if (elem == " ") {
                clutter += `<span>&nbsp;</span>`
            }
            else {
                clutter += `<span>${elem}</span>`
            }
        })

        text.innerHTML = clutter

        tt.from(".main-text span", {
            y: 100,
            stagger: 0.02,
            duration: 0.7

        }, "b")
        tt.to(".slime", {
            x: `-${x}%`,
            duration: 1
        }, "b")
    }
})




let temp = document.querySelector(".temp")
let on = false
temp.addEventListener("click", () => {
    if (!on) {
        gsap.to(".top", {
            y: `-100%`
        })
        gsap.to(".bottom", {
            y: `100%`
        })
        gsap.to(".slime", {
            width: `100vw`
        })
        gsap.to(".main-text", {
            scale: 0.9,
            duration: 0.7
        })
        gsap.to(".slime img", {
            scale: 1
        })
        gsap.to(".slide", {
            paddingLeft: 0
        })
        on = true
    }
    else {
        scaleLess()
    }
})

window.addEventListener("scroll", () => {
    scaleLess()
})

function scaleLess() {

    gsap.to(".top", {
        y: `0%`
    })
    gsap.to(".bottom", {
        y: `50%`
    })
    gsap.to(".slime", {
        width: `90vw`
    })
    gsap.to(".main-text", {
        scale: 1,
        duration: 0.7
    })
    gsap.to(".slime img", {
        scale: 0.9
    })
    gsap.to(".slide", {
        paddingLeft: `4.5vw`
    })
    on = false
}