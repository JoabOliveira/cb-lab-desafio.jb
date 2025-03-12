import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Cadastro {
    acessarPaginaDeCadastro(){
        /*cy.visit('https://app-hom.cocobambu.com/entrar');*/
        cy.get('[text-left=""] > .link').click();
    }
    preencherFormulario(){
        cy.get(el.nome).type('Joca Oliveira');
        cy.get(el.email).type('joacbs@gmail.com');
        cy.get(el.inputPassword).type('Senha@123');
        cy.get(el.confirmPassword).type('Senha@123');
        cy.get(el.selecineSeuEstado).click();
        cy.get(el.estado).click();
        cy.get(el.desejaReceberNotificacao).check();
        cy.get(el.termosCondicoesUso).check();
    }
    submeterCadastro(){
        cy.get(el.submitButton).click();
    }
}

export default new Cadastro();