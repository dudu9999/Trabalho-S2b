const _ = require('lodash')
const CicloCompra = require('./cicloCompra')

CicloCompra.methods(['get', 'post', 'put', 'delete'])
CicloCompra.updateOptions({new: true, runValidators: true})

CicloCompra.after('post', sendErrorsOrNext).after('put',sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
  const bundle = res.locals.bundle

  if(bundle.errors){
    var errors =parseErrors(bundle.errors)
    res.status(500).json({errors})
    }else{
        next()
    }
  }

function parseErrors(nodeRestfulErrors){
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
  }

CicloCompra.route('count', function(req, res, next){
CicloCompra.count(function(error, value){
  if(error){
    res.status(500).json({erros: [error]})
  }else {
    res.json({value})
  }
})
})

module.exports = CicloCompra
