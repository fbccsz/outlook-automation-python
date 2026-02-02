import win32com.client as win32
import pandas as pd
import time
import random
import datetime

# --- CONFIGURAÇÕES ---
ARQUIVO_CONTATOS = 'contatos.xlsx'
ARQUIVO_LOG = 'relatorio_envios.txt'
LIMITE_HORA = 190

def salvar_log(mensagem):
    """Escreve o status no arquivo de texto para o cliente ver depois."""
    timestamp = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    with open(ARQUIVO_LOG, 'a', encoding='utf-8') as f:
        f.write(f"[{timestamp}] {mensagem}\n")
    print(mensagem)

def enviar_emails():
    try:
        # 1. Conecta ao Outlook que já está aberto
        outlook = win32.Dispatch('outlook.application')
        
        # 2. Lê a planilha (tem que ter colunas 'nome' e 'email')
        df = pd.read_excel(ARQUIVO_CONTATOS)
        total = len(df)
        
        salvar_log(f"--- Iniciando envio para {total} contatos ---")

        for index, row in df.iterrows():
            try:
                # Cria o email
                mail = outlook.CreateItem(0)
                mail.To = row['email']
                mail.Subject = "Sua Newsletter Exclusiva" # Título do email
                
                # Corpo do email (pode usar HTML para ficar bonito)
                mail.HTMLBody = f"""
                <p>Olá <b>{row['nome']}</b>,</p>
                <p>Aqui está a notícia da semana...</p>
                <p>Atenciosamente,<br>Seu Nome</p>
                """
                
                mail.Send() # Envia
                
                salvar_log(f"Sucesso: Linha {index + 2} - Email enviado para {row['email']}")
                
                # Delay Aleatório (Simulação Humana)
                tempo_espera = random.randint(15, 25) # Aleatoriza entre 15 e 25 segundos para enviar o email
                time.sleep(tempo_espera)

                # Pausa de Segurança a cada 190 emails
                if (index + 1) % LIMITE_HORA == 0:
                    salvar_log("PAUSA DE SEGURANÇA: Aguardando 10 minutos...")
                    time.sleep(600) 

            except Exception as e_envio:
                salvar_log(f"ERRO na linha {index + 2} ({row['email']}): {e_envio}")
                continue # Continua para o próximo mesmo se der erro

        salvar_log("--- Processo Finalizado ---")

    except Exception as e_geral:
        salvar_log(f"ERRO FATAL: Não foi possível ler o arquivo ou conectar ao Outlook. {e_geral}")
        input("Pressione Enter para sair...")

if __name__ == "__main__":
    enviar_emails()