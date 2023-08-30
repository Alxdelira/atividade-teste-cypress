describe('Pagina de login, cenário de sucesso', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Deve verificar as mensagem de dados obrigatórios no login', () => {
        cy.getByData('loginUserName').type('BarbasNegras')
        cy.getByData('loginPassword').type('0000000')
        cy.getByData('loginBtn').click()
        cy.get('.text-danger').contains('User name is required!')
        cy.get('.text-danger').contains('Password is required!')

        cy.on('window:alert',() => { include('Invalid user name or password') })
        

    })

    it('Deve verificar as mensagem de dados obrigatórios no login', () => {
        cy.getByData('loginUserName').type('11111')
        cy.getByData('loginPassword').type('0000000')
        cy.getByData('loginBtn').click()

        cy.on('window:alert',(texto) => { 
            expec(texto).to.equal('Invalid user name or password') 
        });
        

    })

})