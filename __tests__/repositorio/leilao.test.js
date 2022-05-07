import { obtemLeiloes } from "../../src/repositorio/leilao"
import apiLeiloes from '../../src/servicos/apiLeiloes'

jest.mock('../../src/servicos/apiLeiloes')

const mockLeiloes = [
  {
    id: 1,
    nome: 'Leilão',
    descricao: 'Descrição do leilão'
  }
]
const mockRequisicao = retorno => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      data: retorno
    })
  },1000)
})
const mockRequisicaoErro = () => new Promise((_, reject) => {
  setTimeout(() => {
    reject()
  },1000)
})

describe('repositorio/leilao', () => {
  describe('obtemLeiloes', () => {
    it('deve retornar uma lista de leilões', async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))
      const leiloes = await obtemLeiloes()
      expect(leiloes).toEqual(mockLeiloes)
      expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes')
    })
    it('deve retornar uma lista vazia quando a requisição falhar', async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
      const leiloes = await obtemLeiloes()
      expect(leiloes).toEqual([])
    })
  })
})