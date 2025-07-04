'use strict'

const DistribuicaoHelper = require('./distribuicaoDFe-helper')
const DistribuicaoCteHelper = require('./distribuicaoCte-helper')
const DistribuicaoMdfeHelper = require('./distribuicaoMdfe-helper')
const RecepcaoHelper = require('./recepcaoEvento-helper')
const RetornoHelper = require('./retorno-helper')

const helper = Object.freeze({
  DistribuicaoHelper,
  DistribuicaoCteHelper,
  DistribuicaoMdfeHelper,
  RecepcaoHelper,
  RetornoHelper,
})

module.exports = helper
