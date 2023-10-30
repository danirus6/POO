const person = {
    name: 'Marina',
    age: 22,
    speak: function () {
        console.log(this.name)
    },
}

person.speak()

console.log(person)

function sayName(obj) {
    obj.speak = function () {
        console.log(this.name)
    }
}

const person1 = {
    name: 'Maite',
    age: 22,
}

const person2 = {
    name: 'Juan',
    age: 25,
}

sayName(person1)
sayName(person2)

person2.speak()
person1.speak()

function Moto(brand, model, year, color, engine) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.engine = engine

    this.start = function () {
        return 'Arranco motores'
    }
}

const miMoto = new Moto('Ducati', 'Monster', '2009', 'Rojo', '1200cc')
const motoBmw = new Moto('BMW', 'GS', 2002, 'rojo', 'trail')

motoBmw.start()

console.log(miMoto)
// console.log(miMoto2)
function Gato(raza, nombre, color, tamanio) {
    this.raza = raza
    this.nombre = nombre
    this.color = color
    this.tamanio = tamanio

    this.maullar = function () {
        return 'marramiauuuu'
    }
    this.araniar = function () {
        return 'ha roto el sofá'
    }
    this.correr = function () {
        return 'son las 3 de la mañana maldito'
    }
}

const gato1 = new Gato('persa', 'pedro', 'negro', 'grande')
const gato2 = new Gato('siames', 'teo', 'blanco', 'pequeño')

console.log(gato1, gato2)

const moto1 = {
    model: 'Hornet',
    brand: 'Honda',
    color: 'negro',
    sound: 'bruuum tuputupu',
    start: function () {
        return `${this.brand} suena al arrancar ${this.sound}`
    },
}

const moto2 = {
    model: 'Sportster',
    brand: 'Harley Davidson',
    color: 'azul',
    sound: 'putuputu pah',
    start: function () {
        return `${this.brand} suena al arrancar ${this.sound}`
    },
}

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.details = function () {
        return `${this.title} año publicación ${this.year}`
    }
}

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year)
    this.month = month
}

// const newMagazine = new Magazine('Mag One', 'John Doe', '2018', 'January')

// console.log(newMagazine)

class Vehicle {
    constructor(brand, model, year, color) {
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
    }
    start = () => {
        return 'Arranca motores'
    }
}

const myCar = new Vehicle('Ford', 'Focus', 2013, 'azul')
myCar.start()

console.log(myCar)

class Van extends Vehicle {
    static info(age) {
        console.info(
            `Tienes ${age} años ${age >= 18 ? 'puedes conducir' : '¡Sorry! Sigue esperando.'
            }`
        )
    }
    constructor(brand, model, year, color, minTare, usefulLoad, loadVolume) {
        super(brand, model, year, color)
        this.minTare = minTare
        this.usefulLoad = usefulLoad
        this.loadVolume = loadVolume
    }
}

Van.info(50)
Van.info(8)

const myVan = new Van('Peugeot', '607', 2002, 'rojo', 1200, 768, 4.5)
