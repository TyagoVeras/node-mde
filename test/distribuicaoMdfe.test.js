'use strict'

const assert = require('assert')
const { DistribuicaoMDFe } = require('../src')

describe('DistribuicaoMDFe', function () {
  describe('#constructor()', function () {
    it('Objeto instanciado com dados mínimos', function () {
      const config = {
        cert: '',
        key: '',
        cnpj: '12345678901234',
        cUFAutor: '41',
        tpAmb: '2',
      }

      const distribuicao = new DistribuicaoMDFe(config)
      assert.ok(distribuicao)
    })
  })
})
