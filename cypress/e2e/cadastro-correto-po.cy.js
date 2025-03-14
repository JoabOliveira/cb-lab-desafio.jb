import Cadastro from '../support/pages/pagina-cadastro';

describe('Página de cadastro', () => {
    beforeEach(() =>{
        cy.visit('https://app-hom.cocobambu.com/entrar');
               
    })
       
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
          Cadastro.acessarPaginaDeCadastro();
          Cadastro.preencherFormulario();
          Cadastro.submeterCadastro();
          
          Cadastro.codigoAutenticacao();
          
     
    })
  })