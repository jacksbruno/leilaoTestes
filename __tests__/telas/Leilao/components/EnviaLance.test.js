import React from 'react'
import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance'
import { render } from '@testing-library/react-native'
import { ENVIADO } from '../../../../src/negocio/constantes/estadosLance'

describe('telas/Leilao/componentes/EnviaLance', () => {
  it('deve enviar o lance quando o botão for pressionado', () => {
    const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO)))
    const { getByPlaceholderText } = render(
      <EnviaLance
        envialance={enviaLance}
        cor="blue"
      />
    )

    const input = getByPlaceholderText('R$')
  })
})