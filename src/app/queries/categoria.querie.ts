import gql from 'graphql-tag';


export const criarCategoria = gql`
    mutation criarCategoria($nome:String!,$foto:String!){
        criarCategoria(nome:$nome,foto:$foto){
            nome
            foto
        }
    }
`;

export const getAllCategorias = gql`
    query{
        categorias{
            id
            nome
            foto
        }
    }
`;