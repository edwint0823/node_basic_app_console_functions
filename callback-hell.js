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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre
    if(empleado){
        callback(null,empleado)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario
    if(salario){
        callback(null, salario)
    }else{
        callback(`Error el salario con id ${id} no existe`)
    }
}

const id = 3
// getEmpleado(id, (err,empleado) => {
//     if(err){
//         console.log('Error!!')
//         return console.log(err)
//     }
//     console.log('Empleado existe')
//     console.log(empleado.nombre)
// })
// getSalario(id, (err,salario) => {
//     if(err){
//         console.log('Error!!')
//         return console.log(err)
//     }
//     console.log('Salario existe')
//     console.log(salario)
// })

getEmpleado(id, (err,empleado) => {
    if(err){
        console.log('Error!!')
        return console.log(err)
    }
    getSalario(id, (err,salario) => {
        if(err){
            console.log('Error!!')
            return console.log(err)
        }
        console.log(`El empleado: ${empleado}, tiene un salario de: ${salario}`)
    })
})