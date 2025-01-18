let users = []
let usersWrapper = document.getElementById('usersWrapper')
let userInput = document.getElementById('userInput')
let searchInput = document.getElementById('searchInput')

function AddUserHandler(e) {
    e.preventDefault()
    // users = []
    users.push(userInput.value)
    renderValues()
    userInput.value = ''
}

function removeUser(index) {
    // alert(index)
    let newValues = users.filter((x, i) => i != index)
    users = newValues
    renderValues()
}

function renderValues() {
    usersWrapper.innerHTML = users.map((x, i) => {
        return `<h4><span>${x}</span> <i onclick='removeUser(${i})' class='fa-solid fa-x'></i></h4>`
    }).join('')
}
function searchHandler() {

    let searchedValues = users.filter((x) => x.toLowerCase().includes(searchInput.value.toLowerCase()))
    if(searchedValues.length){
        usersWrapper.innerHTML = searchedValues.map((x, i) => {
            return `<h4><span>${x}</span> <i onclick='removeUser(${i})' class='fa-solid fa-x'></i></h4>`
        }).join('')
    }else{
        usersWrapper.innerHTML  = 'No Results Found For ' + searchInput.value
    }
   

}