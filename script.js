var pessoa = {

	nome: 'Wesklay Vinicius',
	cargo: 'Desenvolvedor',
	foto: 'wesklay.jpg'

}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;
