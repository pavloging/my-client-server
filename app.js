const CLIENT_URL = 'https://jsonplaceholder.typicode.com/users'

const result = fetch(CLIENT_URL, {
    method: 'GET',
})

const createClientElement = (text) => {
    const clientElement = document.createElement('li')
    const clientElementAnchor = document.createElement('a')
    clientElementAnchor.href = '#'
    clientElementAnchor.textContent = text
    clientElement.append(clientElementAnchor)

    return clientElement 
}

const toggleLoager = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if (isHidden){
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const dataName = document.querySelector('#data-name')
dataName.append('Name')

const dataUsername = document.querySelector('#data-username')
dataUsername.append('Username')

const dataEmail = document.querySelector('#data-emali')
dataEmail.append('Email')

const getAllClient = () => {
    toggleLoager()
    result
        .then((response) => {
            console.log(response)
            if (!response.ok){
                throw new Error('Ошибка запроса, данные не были получены')
            }
            return response.json()
        })
        .then((users) => {
            console.log('users', users)
            users.forEach(user => {
                const userNameHTML = createClientElement(user.name)
                dataName.append(userNameHTML)

                const userUsernameHTML = createClientElement(user.username)
                dataUsername.append(userUsernameHTML)

                const useremailHTML = createClientElement(user.email)
                dataEmail.append(useremailHTML)
            });
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoager()
        })
}
getAllClient()