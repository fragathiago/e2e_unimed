/// <reference types="cypress" />
const faker = require('faker-br');

describe('Guia Rápido Testes', () => {
  beforeEach(() => {
    cy.visit('/site/web/riodejaneiro/guia-medico#/')
    cy.get('h1[class="Heading--title"').should('contain.text', 'Guia Médico')
    cy.acceptCookies()
  })

  it('CT001 - Pesquisar via busca rápida - médico especialista', () => {
    let MEDICO_ESPECIALISTA = 'Médico Pediatra Infantil'
    let NOME_HOSPITAL = 'Hospital Albert Sabin Ltda'

    cy.get('li[id="react-tabs-0"]').click()
    cy.get('input[id="react-select-2-input"]').type(MEDICO_ESPECIALISTA, {force: true})
    cy.get('div[class="row"] button[type="submit"]').click()
    cy.get('div[class="Provider--name"]').contains(NOME_HOSPITAL).should('be.visible')
  })

  it('CT002 - Pesquisar via busca rápida - por CPF inexistente', () => {
    let CPF = faker.br.cpf()
    let TEXTO_ERROR = 'Olá, não foi possível localizar os seus dados no sistema. Se preferir, você pode pesquisar apenas por palavras-chaves, ou tentar novamente.'

    cy.get('li[id="react-tabs-0"]').click()
    cy.get('input[id="client-input"]').type(CPF)
    cy.get('span[class="NoCardAvailable--text"]').contains(TEXTO_ERROR).should('be.visible')
  })
})
