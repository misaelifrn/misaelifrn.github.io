<?php
if (isset($_GET['checar'])) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'nova' => true,
        'titulo' => 'Confissão',
        'mensagem' => 'Haverá confissão',
        'link' => 'http://localhost:8000/index2.php'
    ]);
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Notificação PHP + JS</title>
</head>
<body>
    <button onclick="ativarNotificacoes()">Ativar e Testar Notificação</button>
    <p id="status"></p>

    <script>
        const statusTexto = document.getElementById('status');

        function ativarNotificacoes() {
            if (!("Notification" in window)) {
                statusTexto.innerText = "Seu navegador não suporta notificações.";
                return;
            }

            Notification.requestPermission().then(permissao => {
                if (permissao === "granted") {
                    statusTexto.innerText = "Permissão OK! Buscando notificação...";
                    buscarNotificacaoNoPHP();
                } else {
                    statusTexto.innerText = "Permissão bloqueada (" + permissao + "). Libere no cadeado da barra de endereços.";
                }
            });
        }

        function buscarNotificacaoNoPHP() {
            fetch('index2.php?checar=1')
                .then(resposta => resposta.json())
                .then(dados => {
                    if (dados.nova) {
                        const notificacao = new Notification(dados.titulo, {
                            body: dados.mensagem
                        });
                        
                        notificacao.onshow = () => {
                            statusTexto.innerText = "Notificação enviada com sucesso!";
                        };

                        notificacao.onerror = () => {
                            statusTexto.innerText = "O navegador disparou, mas o Windows/Mac bloqueou a exibição.";
                        };

                        notificacao.onclick = () => {
                            window.open(dados.link, '_blank');
                        };
                    }
                })
                .catch(erro => {
                    statusTexto.innerText = "Erro na comunicação com o PHP. Veja o console (F12).";
                    console.error('Erro:', erro);
                });
        }
    </script>
</body>
</html>
