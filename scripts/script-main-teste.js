const todos = [
    {
        id: 1,
        description: "Estudar",
        isCompleted: false
    },
    {
        id: 2,
        description: "Correr",
        isCompleted: false
    },
    {
        id: 3,
        description: "Dançar",
        isCompleted: true
    },
]

for(const item of todos){
    const {id, description, isCompleted} = item
    console.log(`A atividade ${description} está ${(isCompleted === true)? 'completa' : 'incompleta'}`)
    
    if(!isCompleted){
        console.log(`Agora irei ${description}`)
        item.isCompleted = true
    }
}

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)

const retorno = JSON.parse(todosJSON)
console.log(retorno)

for(const item of todos){
    const {id, description, isCompleted} = item   
    console.log(`A atividade ${description} está ${(isCompleted === true)? 'completa' : 'incompleta'}`)
    console.log(isCompleted)
}

const ehgata = (omg) => (console.log(omg))

ehgata("oie")