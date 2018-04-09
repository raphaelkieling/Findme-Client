import gql from 'graphql-tag';

export const ME_USUARIO = gql`
query {
    me{
        usuario
        pessoa{
          id
          nome
          sobrenome
          nascimento
          cpf
          cnpj
          telefone
          observacao
          categorias{
            id
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