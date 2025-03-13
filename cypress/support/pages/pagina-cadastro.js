import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Cadastro {
    acessarPaginaDeCadastro(){
        /*cy.visit('https://app-hom.cocobambu.com/entrar');*/
        cy.get('[text-left=""] > .link').click();
    }
    preencherFormulario(){
        cy.get(el.nome).type('Joca Borges');
        cy.get(el.email).type('joca.borges@gmail.com');
        cy.get(el.inputPassword).type('Senha@123');
        cy.get(el.confirmPassword).type('Senha@123');
        cy.get(el.selecineSeuEstado).click();
        cy.get(el.popUp).should('be.visible');
        cy.get(el.estado).contains('Alagoas').click();
        cy.get(el.desejaReceberNotificacao).click();
        cy.get(el.termosCondicoesUso).click();
        cy.get(el.submitButtonAceitar).click();
        cy.get(el.submitButtonCadastrar).click();
    }
    codigoAutenticacao(){
        cy.get(el.submitButtonFechar).click();
        cy.get(el.codigo).type(AAAAAA);
        cy.get(el.submitButtonAcessar).click();
    }
}

export default new Cadastro();