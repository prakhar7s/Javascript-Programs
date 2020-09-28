class Triangle {
  constructor(rad){
    this.rad = rad
  }

  calcArea(){
    return Math.PI *  this.rad * this.rad
  }
}

let t = new Triangle(5)
console.log(t.calcArea())
