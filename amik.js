fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userData(data))

const userData = (data) => {
    const parentDiv = document.getElementById('users')
    data.forEach(user => {
        const personalInfo = document.createElement('p')
        personalInfo.innerHTML = `
        <h1>Name: ${user.name}</h1>
        <h2>Email:${user.email}</h2>
        `
        parentDiv.appendChild(personalInfo)
    })

}
