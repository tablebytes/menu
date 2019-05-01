'use strict'

exports.config = {
  app_name: ['Menu'],
  license_key: '0ffb725f7afe0a1b03a92f4ccc46c557a2d7c2b2',
  logging: {
    level: 'trace',
    filepath: '../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: false,
    detect_pcf: false,
    detect_azure: false,
    detect_gcp: false,
    detect_docker: false
  },
  transaction_tracer: {
    enabled: true
  }
}
