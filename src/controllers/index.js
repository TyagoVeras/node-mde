'use strict'

const DistribuicaoController = require('./distribuicaoDFe-controller')
const DistribuicaoCteController = require('./distribuicaoCte-controller')
const DistribuicaoMdfeController = require('./distribuicaoMdfe-controller')
const RecepcaoController = require('./recepcaoEvento-controller')

const controller = Object.freeze({
  DistribuicaoController,
  DistribuicaoCteController,
  DistribuicaoMdfeController,
  RecepcaoController,
})

module.exports = controller
