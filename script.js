function send() {
  const indique = {
    acao: 'cadastro',
    token: '1d0c8d6a34234ec65cba0bdc21b8f2211ee63878',
    info: {
      nome: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      celular: document.querySelector('#tel').value,
      obs: `INDICADOR: ${document.querySelector('#indicador-name').value}`
    }
  }


  fetch('https://api.kaits.com.br/interessados/', {
    method: 'POST',
    body: JSON.stringify(indique)
  }).then((r) => r.json()).then((json) => {
    if(json.sucesso === '1') {
      //document.querySelector('.resposta p').style.color = 'green'
      alert('Indicação efetuada com sucesso!')
      //return document.querySelector('.resposta p').innerText = 'Indicação efetuada com sucesso!'
    }

    document.querySelector('.resposta p').style.color = 'red'
    alert(json.msg)
    return document.querySelector('.resposta p').innerText = json.msg
  })
}