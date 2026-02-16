// API
const baseUrl = "https://jsonplaceholder.typicode.com/users";

const listaEl = document.getElementById("listaUsuarios");
const detalheEl = document.getElementById("detalhe");

// GET: fetch usuários

const url = "https://jsonplaceholder.typicode.com/users";
const lista = document.getElementById("listaUsuarios");

fetch(url)
  .then(res => res.json())
  .then(users => {
    users.forEach(user => {
      lista.innerHTML += `
        <div class="col-md-4 col-sm-6">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">${user.email}</p>
              <button class="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#modalUser"
                onclick="verDetalhe(${user.id})">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });


// Mostrar detalhe
function verDetalhe(id) {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(u => {
      document.getElementById("detalheUser").innerHTML = `
        <p><strong>Nome:</strong> ${u.name}</p>
        <p><strong>Email:</strong> ${u.email}</p>
        <p><strong>Telefone:</strong> ${u.phone}</p>
        <p><strong>Empresa:</strong> ${u.company.name}</p>
      `;
    });
}
