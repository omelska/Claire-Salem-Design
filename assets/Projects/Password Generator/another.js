window.addEventListener("load", () => {
    document.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.getElementById('passwordlenght')
        let passwordlenght = input.value
        let result = document.getElementById('result');
        let lowercase = "abcdefghijklmnopqrstuvwxyz".split('')
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~', '\'']
        


        if (passwordlenght >= 4) {
            let password = [];

            for(let i=0; i<passwordlenght; i++){
                let element = [numbers[randomNumber(numbers)], lowercase[randomNumber(lowercase)], uppercase[randomNumber(uppercase)], specialCharacters[randomNumber(specialCharacters)]]
                password[i] = element[randomNumber(element)];
            }
            console.log(password)
            //password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
            result.innerHTML = '<p>' + password + '</p>'


        }
        else if (passwordlenght < 4) {
            result.innerHTML = '<p>Lenght should be at least 4 symbols!!!</p>'
        }

    })

});

function randomNumber(array) {
    let index = Math.floor(Math.random() * array.length)
    return index;
}
