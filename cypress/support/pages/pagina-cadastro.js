import { ELEMENTS } from "./elements";
import { faker } from '@faker-js/faker';

const el = ELEMENTS ;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.get('[text-left=""] > .link').click();
    }
    preencherFormulario(){
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();

        cy.get(el.nome).type(randomName);
        cy.get(el.email).type(randomEmail);
        cy.get(el.inputPassword).type('Senha@123');
        cy.get(el.confirmPassword).type('Senha@123');

        cy.get(el.selecineSeuEstado).click();
        cy.get(el.popUp1).should('be.visible');
        cy.get(el.estado).contains('Acre').click();

        cy.get(el.desejaReceberNotificacao).click();

        cy.get(el.termosCondicoesUso).click();
        cy.get(el.submitButtonAceitar).contains('ACEITAR').click();
        cy.wait(6000);
    }
    submeterCadastro(){
        cy.get(el.submitButtonCadastrar).click();
    }
    codigoAutenticacao(){
        cy.wait(10000);
        cy.get(el.popUp2).should('be.visible');
        cy.get(el.submitButtonFechar).contains('FECHAR').click();
        cy.get(el.codigo).type('A A A A A A');
        cy.get(el.submitButtonAcessar).click();
    }
}

export default new Cadastro();