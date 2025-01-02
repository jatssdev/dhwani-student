let users = []
let usersWrapper = document.getElementById('usersWrapper')
let userInput = document.getElementById('userInput')

function AddUserHandler(e) {
    e.preventDefault()
    // users = []
    users.push(userInput.value)
    usersWrapper.innerHTML = users.map((x,i) => {
        return `<h4><span>${x}</span> <i onclick='removeUser(${i})' class='fa-solid fa-x'></i></h4>`
    }).join('')
    userInput.value = ''
}

function removeUser (index){
// alert(index)
let newValues = users.filter((x,i)=>i != index)
users = newValues
usersWrapper.innerHTML = users.map((x,i) => {
    return `<h4><span>${x}</span> <i onclick='removeUser(${i})' class='fa-solid fa-x'></i></h4>`
}).join('')
}