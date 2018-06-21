import gql from 'graphql-tag';

export const COMENTARIOS = gql`
    query comentariosUsuario($id:ID=1){
        comentariosUsuario(id:$id){
          mensagem,
          nota,
          createdAt,
          usuario_criador{
            id
            usuario
            pessoa{
              nome
              sobrenome
              avatar{
                base64
              }
            }
          }
        }
      }
`

export const CRIAR_COMENTARIO = gql`
    mutation criarComentario($input: ComentarioCriarInput!){
        criarComentario(input:$input){
            mensagem
        }
    }
`