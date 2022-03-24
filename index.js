// const { default: axios } = require("axios")

const userInput = document.querySelector('.username-input')
const passInput = document.querySelector('.password-input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => {
    const email = userInput.value
    const password = passInput.value
    try {
        const { data } = await axios.post('https://app-beiu.herokuapp.com/api/v1/auth/login', { email, password })
        console.log(data);
        localStorage.setItem('token', data.token)
        location.href = './selection.html'
    } catch (error) {
        console.log(error);
        localStorage.removeItem('token')
    }
})