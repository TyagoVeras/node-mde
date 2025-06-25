'use strict'

const { DistribuicaoMdfeHelper, RetornoHelper } = require('../helpers')

class DistribuicaoMdfeController {
  /**
   *
   * @param {Object} opts
   * @returns {Promise<{data:{tpAmb: string,verAplic: string,cStat: string,xMotivo: string,dhResp: string,ultNSU: string,maxNSU: string, docZip:[{xml: string,json: Object,nsu: string,schema: string}]}, error: string, reqXml: string, resXml: string, status: number}>}
   */
  static async enviar(opts) {
    const data = DistribuicaoMdfeHelper.montarRequest(opts)

    const retornoSefaz = await DistribuicaoMdfeHelper.enviarConsulta(data, opts)

    const json = await DistribuicaoMdfeHelper.montarResponse(retornoSefaz.data)

    const retorno = RetornoHelper.montarRetorno({
      json: json,
      data: data,
      retornoSefaz: retornoSefaz,
    })

    return retorno
  }
}

module.exports = Object.freeze(DistribuicaoMdfeController)
