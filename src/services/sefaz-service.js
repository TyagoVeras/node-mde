'use strict'

const axios = require('axios').default
const https = require('https')

const { VERSION } = require('../env')

class Instance {
  constructor(opts) {
    const { baseURL, ca, cert, key } = opts

    const AgentOptions = Object.assign(
      {
        cert: cert,
        key: key,
        ca: ca,
        rejectUnauthorized: false,
      },
      { ...opts.httpsOptions }
    )

    const httpsAgent = new https.Agent(AgentOptions)

    // Allow custom headers to be merged, especially for SOAPAction
    const defaultHeaders = {
      'User-Agent': `node-mde/${VERSION}`,
      'Content-Type': 'application/soap+xml; charset=utf-8',
    }
    const requestOptions = Object.assign(
      {
        baseURL: baseURL,
        headers: Object.assign({}, defaultHeaders, opts.headers || {}),
        httpsAgent: httpsAgent,
        timeout: 60000,
      },
      { ...opts.requestOptions }
    )

    const instance = axios.create({
      ...requestOptions,
    })

    this.instance = instance
  }

  /**
   * @returns {Promise<{status: number, data: string}>}
   */
  async request(config) {
    try {
      // Merge custom headers for each request, especially SOAPAction
      if (config.headers) {
        config.headers = Object.assign(
          {},
          this.instance.defaults.headers,
          config.headers
        )
      }
      const response = await this.instance(config)

      const { status, data } = response

      return { status, data }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response

        return { status, data }
      } else if (error.request) {
        if (error.code === 'ECONNABORTED') {
          const retorno = {
            status: 504,
            data: `<error>${error.message || error}</error>`,
          }

          return retorno
        }

        const retorno = {
          status: 502,
          data: `<error>${error.message || error}</error>`,
        }

        return retorno
      } else {
        const retorno = {
          status: 500,
          data: `<error>${error.message || error}</error>`,
        }

        return retorno
      }
    }
  }
}

module.exports = Instance
