# 📧 Automação de E-mail Corporativo (Outlook Bypass)

Ferramenta desenvolvida para automação de comunicação em ambientes corporativos restritos, onde o uso de SMTP externo é bloqueado por Firewall ou Políticas de Segurança.

## 💡 O Desafio (Cenário Real)
Em muitas grandes empresas, portas de envio de e-mail (587, 465) são bloqueadas e APIs externas não são permitidas. O desafio era automatizar o envio de newsletters sem violar as regras de rede da infraestrutura.

## 🚀 A Solução
O script utiliza a biblioteca `pywin32` para controlar a instância local do **Microsoft Outlook**.
- **Firewall Bypass:** O envio é feito pelo próprio cliente de e-mail autenticado, trafegando como uma ação legítima do usuário.
- **Humanização:** Implementação de `random.randint` (delays aleatórios) para simular o comportamento humano e evitar bloqueios de SPAM interno.
- **Logs:** Geração automática de relatórios de entrega (`.txt`).
- **Pausas de Segurança:** O script pausa automaticamente a cada X envios para resfriar a conta.

## 🛠️ Tecnologias
- Python 3.12
- PyWin32 (Automação COM)
- Pandas (Manipulação de Excel)

## 📦 Como Usar
1. Certifique-se de que o Outlook está aberto e logado na máquina.
2. Prepare uma planilha Excel com as colunas `nome` e `email`.
3. Configure o nome do arquivo no script (`CONTATOS`).
4. Execute: `python enviador.py`

---

*Este projeto respeita as políticas de segurança de rede ao não realizar conexões externas não autorizadas.*
