const dialog = document.getElementById("conteudoPopup")
const wrapper = document.querySelector(".wrapper")

function showDialog(){
    dialog.showModal()
}
function closeDialog(){
    dialog.close()
}
dialog.addEventListener("click", (e) => {
    if(!wrapper.contains(e.target)){
        dialog.close()
    }
})