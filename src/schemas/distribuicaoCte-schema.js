'use strict'

class DistribuicaoCteSchema {
  static montarSchema(options) {
    const distDFeInt = {
      tpAmb: options.tpAmb,
      cUFAutor: options.cUFAutor,
    }

    if (options.cnpj) {
      distDFeInt['CNPJ'] = options.cnpj
    } else {
      distDFeInt['CPF'] = options.cpf
    }

    if (options.ultNSU) {
      distDFeInt['distNSU'] = {
        ['ultNSU']: options.ultNSU,
      }
    } else if (options.chCTe) {
      distDFeInt['consChCTe'] = {
        ['chCTe']: options.chCTe,
      }
    } else {
      distDFeInt['consNSU'] = {
        ['NSU']: options.nsu,
      }
    }

    distDFeInt['@_xmlns'] = 'http://www.portalfiscal.inf.br/cte'
    distDFeInt['@_versao'] = '1.00'

    return {
      cteDistDFeInteresse: {
        cteDadosMsg: {
          distDFeInt: distDFeInt,
        },
        '@_xmlns': 'http://www.portalfiscal.inf.br/cte/wsdl/CTeDistribuicaoDFe',
      },
    }
  }
}

module.exports = Object.freeze(DistribuicaoCteSchema)
