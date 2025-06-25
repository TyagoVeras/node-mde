const { CA } = require('./ca')
const { DISTRIBUICAO } = require('./distribuicao')
const { DISTRIBUICAO_CTE } = require('./distribuicao-cte')
const { DISTRIBUICAO_MDFE } = require('./distribuicao-mdfe')
const { EVENTOS } = require('./evento')
const { RECEPCAO } = require('./recepcao')
const { CODIGOS_UF } = require('./uf')
const { VERSION } = require('./version')
const { ZONES } = require('./zone')

module.exports = {
  CA: CA,
  CODIGOS_UF: CODIGOS_UF,
  DISTRIBUICAO: DISTRIBUICAO,
  DISTRIBUICAO_CTE: DISTRIBUICAO_CTE,
  DISTRIBUICAO_MDFE: DISTRIBUICAO_MDFE,
  EVENTOS: EVENTOS,
  RECEPCAO: RECEPCAO,
  VERSION: VERSION,
  ZONES: ZONES,
}
