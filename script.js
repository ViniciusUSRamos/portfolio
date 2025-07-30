 const form = document.getElementById("formContato");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbw7xvN19NVMx8m7cMmfrhv9ihi8XjBAkyzFyMLXpDBptpdSa-gB1h_XVXxdY1t4NyO4tA/exec", {
      method: "POST",
      body: data
    })
    .then(response => response.text())
    .then(result => {
      console.log("Sucesso:", result);
      //alert("Enviado!");
      form.reset();
    })
    .catch(error => {
      console.error("Erro:", error);
      //alert("Erro ao enviar");
    });
  });