<div align="center">

# 📧 Outlook Automation

[![Python](https://img.shields.io/badge/Python-3.12+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white)](https://www.microsoft.com/outlook)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

**Automação de e-mails personalizados no Outlook a partir de planilhas Excel, com logs detalhados e simulador web interativo.**

**Personalized email automation for Outlook from Excel spreadsheets, with detailed logs and an interactive web simulator.**

[Funcionalidades](#-funcionalidades) •
[Tech Stack](#-tech-stack) •
[Instalação](#-instalação) •
[Simulador Web](#-simulador-web) •
[Portfólio](https://www.yshdev.me/#projects)

</div>

---

## 🇧🇷 Português

### 📋 Sobre o Projeto

Script Python que automatiza o envio de e-mails personalizados pelo **Microsoft Outlook** (via COM/Win32), lendo contatos de uma planilha Excel. Inclui intervalo aleatório entre envios para simular comportamento humano, pausas de segurança a cada 190 e-mails e logs completos de cada operação.

O repositório também inclui um **simulador web interativo** (Mailflow) — um painel completo construído com HTML/CSS/JS puro que permite visualizar o fluxo de campanha sem enviar e-mails reais.

### ✨ Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| 📊 **Importação Excel** | Leitura automática de planilhas com colunas `nome` e `email` |
| ✉️ **E-mails HTML** | Corpo personalizado com o nome de cada destinatário |
| ⏱️ **Delay humanizado** | Intervalo aleatório de 15–25s entre envios |
| 🛡️ **Pausa de segurança** | Pausa automática de 10 min a cada 190 e-mails |
| 📝 **Logs detalhados** | Registro de sucesso/erro com timestamp em `relatorio_envios.txt` |
| 🔄 **Tolerância a falhas** | Continua o lote mesmo quando um envio individual falha |
| 🌐 **Simulador web** | Painel interativo para testar o fluxo sem enviar e-mails |

### 📐 Arquitetura

```
outlook-automation-python/
├── enviador.py          # Script principal de automação
├── contatos.xlsx        # Planilha de contatos (não versionada)
├── relatorio_envios.txt # Log de execução (não versionado)
├── index.html           # Simulador web — estrutura
├── style.css            # Simulador web — estilos
├── app.js               # Simulador web — lógica
├── requirements.txt     # Dependências Python
└── LICENSE              # Licença MIT
```

---

## 🇺🇸 English

### 📋 About the Project

Python script that automates personalized email sending through **Microsoft Outlook** (via COM/Win32), reading contacts from an Excel spreadsheet. Includes randomized delays between sends to simulate human behavior, safety pauses every 190 emails, and comprehensive logging.

The repository also includes an **interactive web simulator** (Mailflow) — a full dashboard built with vanilla HTML/CSS/JS that lets you visualize the campaign flow without sending real emails.

### ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 **Excel Import** | Automatic reading of spreadsheets with `nome` and `email` columns |
| ✉️ **HTML Emails** | Personalized body with each recipient's name |
| ⏱️ **Humanized Delay** | Random 15–25s interval between sends |
| 🛡️ **Safety Pause** | Automatic 10-min pause every 190 emails |
| 📝 **Detailed Logs** | Success/error logging with timestamps to `relatorio_envios.txt` |
| 🔄 **Fault Tolerance** | Continues the batch even when an individual send fails |
| 🌐 **Web Simulator** | Interactive dashboard to test the flow without sending emails |

---

## 🛠️ Tech Stack

| Camada / Layer | Tecnologia / Technology |
|----------------|------------------------|
| Automação / Automation | Python 3.12+, PyWin32 |
| Dados / Data | Pandas, OpenPyXL |
| Simulador / Simulator | HTML5, CSS3, JavaScript |
| Plataforma / Platform | Windows + Microsoft Outlook (COM) |

## 🚀 Instalação

> **Pré-requisitos / Prerequisites:** Windows, Python 3.12+, Microsoft Outlook instalado e configurado.

```powershell
# 1. Clone o repositório / Clone the repository
git clone https://github.com/fbccsz/outlook-automation-python.git
cd outlook-automation-python

# 2. Crie o ambiente virtual / Create virtual environment
python -m venv .venv
.venv\Scripts\Activate.ps1

# 3. Instale as dependências / Install dependencies
python -m pip install -r requirements.txt
```

### ▶️ Executar / Run

1. Abra o **Outlook** com a conta desejada / Open **Outlook** with the desired account
2. Crie `contatos.xlsx` com colunas `nome` e `email` / Create `contatos.xlsx` with `nome` and `email` columns
3. Ajuste o assunto e corpo HTML em `enviador.py` / Adjust subject and HTML body in `enviador.py`
4. Execute / Run:

```powershell
python enviador.py
```

Os resultados serão registrados em `relatorio_envios.txt`.
Results will be logged to `relatorio_envios.txt`.

## 🌐 Simulador Web

O simulador **Mailflow** permite experimentar o fluxo completo sem enviar e-mails:

The **Mailflow** simulator lets you experience the full flow without sending emails:

```bash
python -m http.server 8000
```

Acesse / Visit `http://localhost:8000` — o painel inclui:

- **Visão geral** — métricas e atividade de envios
- **Nova campanha** — composição, importação e prévia do e-mail
- **Contatos** — tabela de destinatários com busca
- **Histórico** — registro de campanhas anteriores

> ⚠️ O simulador é independente do script Python. Ele não controla o Outlook.

## 👨‍💻 Autor / Author

Mantido por **ysh** · [Portfólio](https://www.yshdev.me/) · [Contato](mailto:yshdev@outlook.com)

## 📄 Licença / License

Este projeto está licenciado sob a [MIT License](LICENSE).

This project is licensed under the [MIT License](LICENSE).
