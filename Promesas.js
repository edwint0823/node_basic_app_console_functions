const empleados = [
    {
        id: 1,
        nombre: 'Edwin'
    },
    {
        id: 2,
        nombre: 'Mercedes'
    },
    {
        id: 3,
        nombre: 'Cariño'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
]

const getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre
        empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`)
    })
}
const getSalario = (id) => {
    return new Promise( (resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario
        salario ? resolve(salario) : reject(`No existe el salario para el id ${id}`)
    })
}
const id = 3
// getEmpleado(id).then(empleado => {
//     console.log(empleado)
//     getSalario(id).then(salario => console.log(`El empleado ${empleado} tiene un salario : ${salario}`)).catch(err => console.log(err))
// }).catch(err => console.log(err))
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario : ${salario}`))
    .catch(err => console.log(err))