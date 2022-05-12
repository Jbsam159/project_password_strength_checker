(() => {

    let evaluatePassword = (password) => {

        let score = 0

        score = password.length
        score = (password.match(/[!]/gmi)) ? score + (password.match(/[!]/gmi).length * 3) : score

        score = (password.match(/[A-Z]/gm)) ? score + (password.match(/[!]/gmi).length * 3) : score
        score = (password.match(/[0-9]/gmi)) ? score + (password.match(/[!]/gmi).length * 3) : score

        return score

    };

    let scoreToData = (score) => {

        if (score >= 30) {

            return {

                width: '100%',
                color: '#26de81',
                label: 'Strong'

            };

        } else if (score >= 20) {

            return {

                width: '66%',
                color: '#fd9644',
                label: 'Medium'

            };

        } else {

            return {

                width: '33%',
                color: '#fc5c65',
                label: 'Weak'

            };

        }

    }

    window.addEventListener('DOMContentLoaded', () => {

        let p = document.querySelector('.js--password')
        let b = document.querySelector('.js--password-bar')
        let t = document.querySelector('.js--password-text')

        p.addEventListener('input', () => {

            let data = scoreToData(evaluatePassword(p.value))

            b.style.width = data.width
            b.style.background = data.color
            t.innerText = data.label

        })

    })

})()