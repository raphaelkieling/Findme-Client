import gql from 'graphql-tag';

export const COLOCAR_AVATAR = gql`
    mutation adicionarFoto($idPessoa: ID!, $base64:String!){
        adicionarFoto(idPessoa: $idPessoa, base64:$base64){
            id
            base64
        }
    }
`;