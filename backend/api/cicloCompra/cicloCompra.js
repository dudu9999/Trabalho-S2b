const restful = require('node-restful')
const mongoose = restful.mongoose

const user = new mongoose.Schema({
	nomeCompleto : { type: String, required: true},
	cpf      : { type: Number, min: 0, max: 11 ,required: true},
	login    : { type: String, required: true},
	senha    : { type: String, required: true},
	email    : { type: String, required: true},
	avalicao : { type: Number, min: 0, max: 10 ,required: true},
	sexo     : { type: String, required: true},
	endereco : { type: String, required: true},
	cep      : { type: Number, min: 0, max: 8 ,required: true},
	numero   : { type: Number, min: 0, required: true},
	complemento : { type: String, required: true},
	estado   : { type: String, required: true},
	cidade   : { type: String, required: true},
	telefone : { type: String, required: true},
	dataNascimento : { type: Number, min: 1970, max: 2000, required: true}
})

const item = new mongoose.Schema({
	titulo : { type: String, required: true},
	user : { type: user, required: true},
	valor : { type: Number, required: true},
	imagens : { type: String, required: true},
	categoria : { type: String, required: true},
	cidade : { type: String, required: true}
})

const anuncio = new mongoose.Schema({
	ID : { type: Number, required: true},
	Item : { type: String, required: true},
	Vendedor : { type: user, required: true},
	bloqueado : { type: Boolean, required: true},
	vendido : { type: Boolean, required: true},
	Comprador : { type: user, required: true},
	Comentarios : { type: String, required: true}
})

const coment = new mongoose.Schema({
	titulo : { type: String, required: true },
	descricao : { type: String, required: true },
	imagem : { type: String, required: true }
})

const compra = new mongoose.Schema({
	name : { type: String, required: true },
	value : { type: String, required: true },
	status : { type: String, required: false, uppercase: true,
		enum :['PAGO', 'PENDENTE', 'AGENDADO']}
		})



module.exports = restful.model('cicloCompra', compra)


/*
coment
- titulo : String
 descricao : String
 - imagem : obj
*/

/*
user
- nomeCompleto : String
- cpf : String
- login : String
- senha : String
- email : String
- avalicao : double
- sexo : char
- endereco : String
- cep : String
- numero : Number
- complemento : String
- estado : String
- cidade : String
- telefone : String
- dataNascimento : Number
*/

/*
anuncio
- Item : Item
- Vendedor : user
- ID : Number
- bloqueado : Boolean
- vendido : Boolean
- Comprador : user
- Comentarios[] : Comentario
*/

/*
itemm
- titulo : String
- user : user
- valor : double
- imagens[] : imagem
- categoria : String
- cidade : String
*/
