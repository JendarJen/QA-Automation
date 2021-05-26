describe ("Log in", function() {
    it ("Sing in", function(){
        cy.visit ('https://dev-app.symptomatical.com/')
        cy.contains('Sign in').click()
        cy.get('input[type="text"]').type('evgenia.rud@yojji.io')
        cy.get('input[type="password"]').type('qwerty123@Q')
        cy.get('button[type=submit]').click()
        cy.contains('submit').click()
        //cy.get('form').submit().click()
        
    })
}) 

