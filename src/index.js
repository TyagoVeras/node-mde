'use strict'

const DistribuicaoDFe = require('./apis/distribuicaoDFe-api')
const DistribuicaoCTe = require('./apis/distribuicaoCte-api')
const RecepcaoEvento = require('./apis/recepcaoEvento-api')

module.exports = {
  DistribuicaoDFe: DistribuicaoDFe,
  DistribuicaoCTe: DistribuicaoCTe,
  RecepcaoEvento: RecepcaoEvento,
}
module.exports.default = {
  DistribuicaoDFe: DistribuicaoDFe,
  DistribuicaoCTe: DistribuicaoCTe,
  RecepcaoEvento: RecepcaoEvento,
}
module.exports.mde = {
  DistribuicaoDFe: DistribuicaoDFe,
  DistribuicaoCTe: DistribuicaoCTe,
  RecepcaoEvento: RecepcaoEvento,
}
