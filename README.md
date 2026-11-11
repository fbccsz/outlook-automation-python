# Outlook Automation

Automação em Python para preparar e enviar mensagens personalizadas pelo Outlook instalado no Windows, usando uma planilha Excel como origem dos contatos.

**[Portfólio](https://www.yshdev.me/#projects)** · **[Contato](mailto:yshdev@outlook.com)**

## Visão geral

O script utiliza a interface COM do Outlook para criar mensagens na conta já configurada no computador. Os contatos são lidos com Pandas, o corpo da mensagem recebe o nome do destinatário e cada tentativa é registrada em um arquivo de log.

O repositório também inclui um **protótipo web de simulação**, independente do script Python.

| Versão | Comportamento |
| --- | --- |
| Script Python | Cria e envia mensagens reais pelo Outlook local. |
| Protótipo web | Simula o fluxo de importação, composição e execução, sem enviar e-mails. |

## Funcionalidades

- Leitura de contatos em Excel com colunas `nome` e `email`.
- Personalização do corpo HTML.
- Intervalos entre as tentativas e pausas configuradas no script.
- Registro de sucessos e erros em `relatorio_envios.txt`.
- Continuação do lote quando uma tentativa individual falha.

Os logs registram o resultado da chamada ao Outlook; eles não confirmam leitura ou entrega final ao destinatário.

## Tecnologias

Python · Pandas · PyWin32 · OpenPyXL · HTML · CSS · JavaScript

## Executar a automação

Requisitos: Windows, Python e Outlook instalado e configurado com suporte à automação COM.

```powershell
git clone https://github.com/fbccsz/outlook-automation-python.git
cd outlook-automation-python
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

1. Abra o Outlook com a conta que será utilizada.
2. Crie `contatos.xlsx` na pasta do projeto com as colunas `nome` e `email`.
3. Revise o assunto, o corpo HTML e os parâmetros em `enviador.py`.
4. Execute o script para iniciar os envios reais:

```powershell
python enviador.py
```

O parâmetro `ARQUIVO_CONTATOS` define a planilha; `ARQUIVO_LOG` define o relatório. O processamento ocorre no computador local.

## Experimentar a interface web

Abra `index.html` no navegador ou sirva a pasta:

```sh
python -m http.server 8000
```

Acesse `http://localhost:8000`. A interface permite navegar pelo painel, compor uma campanha, simular a importação, revisar a personalização e executar uma demonstração. Ela não controla o Outlook nem executa o script Python.

---

Desenvolvido por [Fabrício Silva · ysh](https://www.yshdev.me/).
