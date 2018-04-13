import gql from 'graphql-tag';

export const ME_USUARIO = gql`
  query {
      me{
          usuario
          pessoa{
            id
            nome
            avatar{
              id
              base64
            }
            sobrenome
            nascimento
            cpf
            cnpj
            telefone
            observacao
            categorias{
              id
              nome
            }
            enderecos{
              id
              cep
              numero
              latitude
              longitude
              logradouro
              numero
              complemento
              bairro
              cidade
              estado
            }
          }
        }
  }
`;

export const MODIFICA_SENHA = gql`
  mutation editarSenha($senha:String!){
    editarSenha(senha:$senha)
  }
`

export const TODOS_USUARIOS = gql`
  query{
    usuarios{
      id
      usuario
      pessoa{
        nome
      }
    }
  }
`;