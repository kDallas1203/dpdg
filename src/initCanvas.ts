export default function initCanvas(): CanvasRenderingContext2D {
  const canvas = <HTMLCanvasElement>document.getElementById('canvas')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return <CanvasRenderingContext2D> canvas.getContext('2d');
}
