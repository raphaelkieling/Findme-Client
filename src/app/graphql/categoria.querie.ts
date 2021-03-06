import gql from 'graphql-tag';


export const CRIA_CATEGORIA = gql`
    mutation criarCategoria($nome:String!,$foto:String!){
        criarCategoria(nome:$nome,foto:$foto){
            id
            nome
            foto
        }
    }
`;

export const GET_ALL_CATEGORIAS = gql`
    query{
        categorias{
            id
            nome
            foto
        }
    }
`;

export const EDITAR_CATEGORIA =gql`
    mutation editarCategoria($id:ID!,$nome:String!,$foto:String!){
        editarCategoria(id:$id,nome:$nome,foto:$foto){
            id
            nome
            foto
        }
    }
`;

export const DELETAR_CATEGORIA = gql`
    mutation deletarCategoria($id:ID!){
        deletarCategoria(id:$id)
    }
`;

export const ADICIONAR_CATEGORIA_PESSOA = gql`
    mutation adicionaCategoriaPessoa($idCategoria:ID!,$idPessoa:ID!){
        adicionaCategoriaPessoa(idCategoria:$idCategoria,idPessoa:$idPessoa)
    }
`;

export const RETIRA_CATEGORIA_PESSOA = gql`
    mutation retiraCategoriaPessoa($idCategoria:ID!,$idPessoa:ID!){
        retiraCategoriaPessoa(idCategoria:$idCategoria,idPessoa:$idPessoa)
    }
`;
