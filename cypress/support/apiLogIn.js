Cypress.Commands.add('apiLogIn', (url) => {

    // cy.request({
    //     method: 'POST',
    //     url: 'https://api.realworld.io/api/users/login',
    //     body: {
    //         user: {
    //             email: "test@test.rs",
    //             password: "123456",
    //         }
    //     }
    // })
    //     .then((resp) => {
    //         window.localStorage.setItem('jwt', resp.body.user.token)
    //     })
    const userCedentials = {
        "user": {
            "email": "test@test.rs",
            "password": "123456"
        }
    }

    cy.request('POST', 'https://api.realworld.io/api/users/login', userCedentials).its('body').then(body => {
        const token = body.user.token
        console.log(token)

        cy.visit(url, {
            onBeforeLoad (win) {
                win.localStorage.setItem('jwtToken', token)
            }
        })
    })

})