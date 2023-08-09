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


const getInfoUsuario = async(id)=>{
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)
    return `el salario del empleado ${empleado} es de ${salario}`
}

const id = 10
getInfoUsuario(id).then(msg => console.log(msg)).catch(err => console.log(err))