import Circle from './Cirlce';
import initCanvas from './initCanvas'
import './index.css'

const canvas = initCanvas();
const radius = 20;

const controls = document.querySelectorAll("input[name='animation']")

controls.forEach((control) => {
    control.addEventListener('click', evt =>  {
        // @ts-ignore
        const value: string = evt.target?.value;
        const circle = new Circle(5, 5, radius, canvas)
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

function initAnimation(circle: Circle, animationMethod: keyof Circle) {
    circle[animationMethod]()
    
    function animation() {
        requestAnimationFrame(animation)
        canvas.clearRect(0, 0, innerWidth, innerHeight)
        circle.draw();
        circle.update();
    }
    
    animation()
}
