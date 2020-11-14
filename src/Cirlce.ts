class Circle {
  private x: number = 0;
  private y: number = 0;
  private dx: number;
  private radius: number;
  private canvas: CanvasRenderingContext2D;
  private dy: number;
  public update: () => void;
  
  constructor(dx: number, dy: number, radius: number, canvas: CanvasRenderingContext2D) {
    this.dx = dx;
    this.dy = dy;
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
      this.dx = -this.dx;
    }
  
    this.x += this.dx;
  }
  
  private _startFromBottomToTop() {
    if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
      this.dy = -this.dy;
    }
    
    this.y += this.dy;
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
}

export default Circle;
