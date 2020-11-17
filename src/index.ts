import Circle from './Cirlce';
import initCanvas from './initCanvas'
import './index.css'

const canvas = initCanvas();
let radius = 20;

const animationControl = document.querySelectorAll("input[name='animation']")
const circle = new Circle(3, radius, canvas)

animationControl.forEach((control) => {
    control.addEventListener('click', evt =>  {
        // @ts-ignore
        const value: string = evt.target?.value;
        switch (value) {
            case 'fromLeftToRight':
                initAnimation(circle, 'initFromRightToLeft')
                break;
            case 'fromTopToBottom':
                initAnimation(circle, 'initFromBottomToTop')
                break;
            case 'infinitySymbol':
                initAnimation(circle, 'initInfinitySymbol')
            default:
                break;
        }
    })
})

type CircleMethods = keyof Circle;

function initAnimation(circle: Circle, animationMethod: Extract<CircleMethods, 'initFromRightToLeft' | 'initFromBottomToTop' | 'initInfinitySymbol'>) {
    circle[animationMethod]()
    
    function animation() {
        requestAnimationFrame(animation)
        canvas.clearRect(0, 0, innerWidth, innerHeight)
        circle.draw();
        circle.update();
    }
    
    animation()
}
