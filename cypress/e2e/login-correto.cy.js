describe('Pagina de login, cenário de sucesso', () => {
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Pagina de login, cenário de sucesso', () => {
      cy.getByData('loginUserName').type('alxdelira')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
    })
  
  })