class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;

    }
    obtDetalles = function () {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nGenero: ${this.genero}`
    }
}
const persona = new Persona("Dani", 25, "Masc")
persona.obtDetalles()
console.log(persona.obtDetalles());

//2

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nGenero: ${this.genero}\nCurso: ${this.curso}\nGrupo: ${this.grupo}`
    }
}
const estudiante = new Estudiante("Juan", 18, "Masc", "2º", "D");
console.log(estudiante.registrar());
//3
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nGenero: ${this.genero}\nAsignatura: ${this.asignatura}\nNivel: ${this.nivel}`
    }
}

const profe = new Profesor("Lara", 20, "Fem", "Programación", "3");
console.log(profe.asignar());


//EXTRAS

//KATA1
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    power() {
        return `Power: ${this.power}`
    }
    defend(damage) {
        this.life -= damage;
        return `Vida Restante: ${this.life}`;
    }
}

const warrior = new Warrior(100, 20);
console.log(warrior.power);
console.log(warrior.defend(10));

class Maya extends Warrior {
    constructor(life, power, drinkColacao) {
        super(life, power);
        this.drinkColacao = drinkColacao;
    }
}
