describe('Pagina de cadastro, cenário de cadastro incorreto', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })


    it('Deve verificar as mensagem de dados obrigatórios no cadastro', () => {
        cy.getByData('register').click()
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('Email is required!')
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('Full name is required!')
        cy.get('.text-danger').contains('User name is required!')
        cy.get('.text-danger').contains('Password is required!')

    })


})