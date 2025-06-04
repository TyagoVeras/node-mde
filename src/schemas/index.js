'use strict'

const DistribuicaoSchema = require('./distribuicaoDFe-schema')
const RecepcaoSchema = require('./recepcaoEvento-schema')
const DistribuicaoCteSchema = require('./distribuicaoCte-schema')

const schema = Object.freeze({
  DistribuicaoSchema,
  RecepcaoSchema,
  DistribuicaoCteSchema,
})

module.exports = schema
