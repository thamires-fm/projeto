function toggleMode() {
  //para fazer a acao do botão de alterar dedark (pre-definido) para light
  const html = document.documentElement
  html.classList.toggle('light') 

  //mudar imagem

  const img = document.querySelector('#profile img')
 
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
     img.setAttribute('src', './assets/avatar.png')
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Thamires com óculos sorrindo de cabelo médio e colar"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Thamires com óculos e brinco, cabelo médio e colar"
    )
  }

}
