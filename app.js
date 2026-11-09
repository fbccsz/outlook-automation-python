const contacts = [
  { name: "Ana Souza", email: "ana@empresa.com", initials: "AS", last: "Hoje, 09:42" },
  { name: "Bruno Martins", email: "bruno@empresa.com", initials: "BM", last: "Hoje, 09:42" },
  { name: "Carla Oliveira", email: "carla@empresa.com", initials: "CO", last: "Hoje, 09:42" }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function showView(name) {
  $$(".view").forEach((view) => view.classList.toggle("active-view", view.id === name));
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.section === name));
  const titles = { overview: "Visão geral", campaign: "Nova campanha", contacts: "Contatos", history: "Histórico" };
  $("#page-title").textContent = titles[name] || "Visão geral";
}

function renderContacts(filter = "") {
  const visible = contacts.filter((contact) => `${contact.name} ${contact.email}`.toLowerCase().includes(filter.toLowerCase()));
  $("#contact-count").textContent = `${contacts.length} contatos`;
  $("#table-count").textContent = `${visible.length} contatos`;
  $("#contact-preview").innerHTML = contacts.map((contact) => `<div class="contact-row"><span class="mini-avatar">${contact.initials}</span><b>${contact.name}</b><small>${contact.email}</small></div>`).join("");
  $("#contacts-body").innerHTML = visible.map((contact) => `<tr><td><strong>${contact.name}</strong></td><td>${contact.email}</td><td><span class="pill delivered">Pronto</span></td><td>${contact.last}</td></tr>`).join("");
  updatePreview();
}

function updatePreview() {
  const subject = $("#subject-input").value;
  const message = $("#message-input").value.replaceAll("{{nome}}", contacts[0].name);
  $("#preview-subject").textContent = subject || "Sem assunto";
  $("#preview-body").textContent = message;
  $("#preview-name").textContent = contacts[0].name;
  $("#preview-email").textContent = `<${contacts[0].email}>`;
  $("#preview-recipient").textContent = contacts[0].email;
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  window.setTimeout(() => element.classList.remove("show"), 2800);
}

$$(".nav-item").forEach((item) => item.addEventListener("click", () => showView(item.dataset.section)));
$$("[data-section-link]").forEach((item) => item.addEventListener("click", () => showView(item.dataset.sectionLink)));
$("#new-campaign").addEventListener("click", () => showView("campaign"));
$("#contacts-upload").addEventListener("click", () => showView("campaign"));
$("#subject-input").addEventListener("input", updatePreview);
$("#message-input").addEventListener("input", updatePreview);
$("#contact-search").addEventListener("input", (event) => renderContacts(event.target.value));
$(".close-tip").addEventListener("click", (event) => event.currentTarget.closest(".tip-banner").remove());

$("#file-input").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  toast(`Arquivo "${file.name}" carregado para a simulação.`);
});

$("#simulate-button").addEventListener("click", () => {
  const button = $("#simulate-button");
  button.disabled = true;
  button.textContent = "⏳ Simulando envio...";
  toast("Simulação iniciada: nenhum e-mail real será enviado.");
  window.setTimeout(() => {
    button.disabled = false;
    button.textContent = "✓ Simulação concluída";
    toast("3 de 3 mensagens processadas com sucesso.");
  }, 1800);
});

renderContacts();
