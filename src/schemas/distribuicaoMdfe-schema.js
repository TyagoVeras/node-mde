'use strict'

class DistribuicaoMdfeSchema {
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
    } else if (options.chMDFe) {
      distDFeInt['consChMDFe'] = {
        ['chMDFe']: options.chMDFe,
      }
    } else {
      distDFeInt['consNSU'] = {
        ['NSU']: options.nsu,
      }
    }

    distDFeInt['@_xmlns'] = 'http://www.portalfiscal.inf.br/mdfe'
    distDFeInt['@_versao'] = '1.00'

    return {
      mdfeDistDFeInteresse: {
        mdfeDadosMsg: {
          distDFeInt: distDFeInt,
        },
        '@_xmlns': 'http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeDistribuicaoDFe',
      },
    }
  }
}

module.exports = Object.freeze(DistribuicaoMdfeSchema)
