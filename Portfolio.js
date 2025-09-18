// abrir popup com a tag dialog
// const dialog = document.getElementById("conteudoPopup")
// const wrapper = document.querySelector(".wrapper")

// function showDialog(){ //mostrar popup
//     dialog.showModal()
// }
// function closeDialog(){ 
//     dialog.close() // fecha o popup
// }
// dialog.addEventListener("click", (e) => { // fecha se clicar fora da caixa de dialogo
//     if(!wrapper.contains(e.target)){
//         dialog.close()
//     }
// });

// ---------------
// tornar o formulario funcional

const botao = document.querySelector('#formContato')
botao.addEventListener("submit", function(event){
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const fone = document.querySelector('#fone').value
    const msg = document.querySelector('#mensagem').value

    let arrayDados = [nome, email, fone, msg]

    console.table(arrayDados)
});


document.addEventListener('DOMContentLoaded', () =>{
    const switchEl = document.getElementById('languageSwitch');
    const lang = localStorage.getItem('lang');
    if (!switchEl) return;


    if (window.location.href.includes('indexEnglish.html')) {
    switchEl.checked = true;
  } else {
    switchEl.checked = false;
  }

    switchEl.addEventListener('change', () => {
    if (switchEl.checked) {
        console.log('muda pra ingles')
        // Redireciona para inglês
        localStorage.setItem('lang', 'en');
        window.location.href = 'indexEnglish.html';
    } else {
        console.log('muda pra pt')
        // Redireciona para português
        localStorage.setItem('lang', 'pt');
        window.location.href = 'index.html';
    }
    });
})