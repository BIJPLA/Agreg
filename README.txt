# Consulta Detalhada - Batch (Web, com Parar + Log em tempo real)

- **Iniciar**: começa o batch de todas as rotas (origem × destino).
- **Parar**: interrompe o processamento; gera automaticamente **OD_pairs_RESULT_parcial.xlsx** com o que já foi calculado.
- **Log**: mostra cada consulta no formato `[n/Total] Origem → Destino` e erros.

## Como usar
1. Abra **index.html** no navegador (Opera recomendado).
2. Ajuste o **Delay (ms)** se quiser (padrão 3000).
3. Clique **Iniciar**.
4. Acompanhe o progresso e o log.
5. Ao finalizar, baixa **OD_pairs_RESULT.xlsx** automaticamente. Se você clicar **Parar**, baixa **OD_pairs_RESULT_parcial.xlsx**.

Total configurado: 71 origens × 25 destinos = 1775 rotas.
