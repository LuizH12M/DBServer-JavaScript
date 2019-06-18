export class Circulo {
    constructor (private raio : number) { }
    area() : number
    { return Math.PI * this.raio ** 2; }
}

exports.Circulo = Circulo;