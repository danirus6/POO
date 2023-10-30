class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;

    }
    obtDetalles = function () {
        return `Nombre: ${this.nombre}\n Edad: ${this.edad}\n genero: ${this.genero}`
    }
}
const persona = Persona("Dani", 25, "Masc")
persona.obtDetalles()
console.log(persona.obtDetalles());