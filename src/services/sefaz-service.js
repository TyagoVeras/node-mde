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

    // Merge all possible header sources, including requestOptions.headers
    const defaultHeaders = {
      'User-Agent': `node-mde/${VERSION}`,
      'Content-Type': 'application/soap+xml; charset=utf-8',
    }
    const mergedHeaders = Object.assign(
      {},
      defaultHeaders,
      (opts.requestOptions && opts.requestOptions.headers) || {},
      opts.headers || {}
    )
    const requestOptions = Object.assign(
      {
        baseURL: baseURL,
        headers: mergedHeaders,
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
      // Always merge config.headers into instance.defaults.headers
      if (config.headers) {
        config.headers = Object.assign(
          {},
          this.instance.defaults.headers,
          config.headers
        )
      } else {
        config.headers = { ...this.instance.defaults.headers }
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
