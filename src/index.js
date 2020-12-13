import './index.css'

window.onload = function () {
    const circle = document.querySelector('.circle');
    const animationControl = document.querySelectorAll("input[name='animation']")
    const sizeRange = document.getElementById('circle-size')
    const speedRange = document.getElementById("circle-speed")

    console.log(sizeRange)

    sizeRange.addEventListener("input", (event) => {
        const size = event.target.value
        circle.style.cssText = `width: ${size}px; height: ${size}px`
    });

    speedRange.addEventListener("input", (event) => {
        const speed = event.target.value
        circle.style.animationDuration = `${speed}s`
    });

    animationControl.forEach((control) => {
        control.addEventListener('click', evt =>  {
            const value = evt.target.value;
            switch (value) {
                case 'fromLeftToRight':
                    initAnimation(circle, 'initFromRightToLeft')
                    break;
                case 'fromTopToBottom':
                    initAnimation(circle, 'initFromBottomToTop')
                    break;
                default:
                    break;
            }
        })
    })
};

const animationClasses = {
    leftRight: 'circle__animation_leftRight',
    topBottom: 'circle__animation_topBottom'
}

function initAnimation(cirlce, animation) {
    if (!animation || !cirlce) {
        return;
    }

    switch(animation) {
        case 'initFromRightToLeft':
            console.log('initFromRightToLeft')
            cirlce.classList.remove(animationClasses.topBottom)
            cirlce.classList.add(animationClasses.leftRight)
            console.log(cirlce.classList)
            return;
        case 'initFromBottomToTop':
            console.log('initFromBottomToTop');
            cirlce.classList.remove(animationClasses.leftRight)
            cirlce.classList.add(animationClasses.topBottom)
            console.log(cirlce.classList)
            return;
        default:
            return;
    }
}