import gql from 'graphql-tag';

export const CRIAR_MENSAGEM = gql`
    mutation criarMensagem($input: MensagemCriarInput!){
        criarMensagem(input: $input){
            mensagem
            usuario_enviou
            usuario_recebeu
        }
    }
`

export const MENSAGENS = gql`
query mensagemsUsuario($id: ID!){
    mensagemsUsuario(id: $id){
        mensagem
        usuario_enviou
        usuario_recebeu
    }
}
`