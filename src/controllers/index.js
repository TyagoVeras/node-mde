'use strict'

const DistribuicaoController = require('./distribuicaoDFe-controller')
const DistribuicaoCteController = require('./distribuicaoCte-controller')
const RecepcaoController = require('./recepcaoEvento-controller')

const controller = Object.freeze({
  DistribuicaoController,
  DistribuicaoCteController,
  RecepcaoController,
})

module.exports = controller
