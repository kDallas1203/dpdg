class Circle {
  private x: number = 0;
  private y: number = 0;
  private step: number;
  private radius: number;
  private canvas: CanvasRenderingContext2D;
  public update: () => void;
  
  constructor(step: number, radius: number, canvas: CanvasRenderingContext2D) {
    this.step = step;
    this.radius = radius;
    this.canvas = canvas;
    this.update = () => null;
  }
  
  draw() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.canvas.fillStyle = "white";
    this.canvas.fill()
  }
  
  private _startFromLeftToRight() {
    if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
      this.step = -this.step;
    }
  
    this.x += this.step;
  }
  
  private _startFromBottomToTop() {
    if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
      this.step = -this.step;
    }
    
    this.y += this.step;
  }
  
  private _startInfinitySymbolAnimation() {
    
  }
  
  initFromBottomToTop() {
    this.x = window.innerWidth / 2;
    this.y = 30;
    this.update = this._startFromBottomToTop
  }
  
  initFromRightToLeft() {
    this.x = 30;
    this.y = window.innerHeight / 2;
    this.update = this._startFromLeftToRight
  }
  
  initInfinitySymbol() {
    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
    this.update = this._startInfinitySymbolAnimation;
  }
}

export default Circle;
