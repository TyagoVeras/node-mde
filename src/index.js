'use strict'

const DistribuicaoDFe = require('./apis/distribuicaoDFe-api')
const DistribuicaoCTe = require('./apis/distribuicaoCte-api')
const DistribuicaoMDFe = require('./apis/distribuicaoMdfe-api')
const RecepcaoEvento = require('./apis/recepcaoEvento-api')

module.exports = {
  DistribuicaoDFe: DistribuicaoDFe,
  DistribuicaoCTe: DistribuicaoCTe,
  DistribuicaoMDFe: DistribuicaoMDFe,
  RecepcaoEvento: RecepcaoEvento,
}
module.exports.default = {
  DistribuicaoDFe: DistribuicaoDFe,
  DistribuicaoCTe: DistribuicaoCTe,
  DistribuicaoMDFe: DistribuicaoMDFe,
  RecepcaoEvento: RecepcaoEvento,
}
module.exports.mde = {
  DistribuicaoDFe: DistribuicaoDFe,
  DistribuicaoCTe: DistribuicaoCTe,
  DistribuicaoMDFe: DistribuicaoMDFe,
  RecepcaoEvento: RecepcaoEvento,
}
