const express = require('express')

module.exports = function(server){
	// api routes
	const router = express.Router()
	server.use('/api', router)

//rotas da API
const cicloCompraService = require('../api/cicloCompra/cicloCompraService')
cicloCompraService.register(router, '/cicloCompras')

//const compraSummaryService = require('../api/compraSummary/compraSummaryService')
//router.route('/compraSummary').get(compraSummaryService.getSummary)
}
