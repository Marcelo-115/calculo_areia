function calcularResultado() {
            // Captura dos valores de furos
            const furo1 = parseFloat(document.getElementById("furo1").value);
            const furo2 = parseFloat(document.getElementById("furo2").value);
            const furo3 = parseFloat(document.getElementById("furo3").value);
            const furo4 = parseFloat(document.getElementById("furo4").value);
            const furo5 = parseFloat(document.getElementById("furo5").value);
            const furo6 = parseFloat(document.getElementById("furo6").value);

            // Captura dos valores de largura e comprimento
            const largura = parseFloat(document.getElementById("largura").value);
            const comprimento = parseFloat(document.getElementById("comprimento").value);

            // Cálculo da média dos furos
            const media_furos = (furo1 + furo2 + furo3 + furo4 + furo5 + furo6) / 6;

            // Cálculo final
            const resultado_metro_cubico = media_furos * largura * comprimento;

            const resultado_toneladas = resultado_metro_cubico * 1.5;

            // Exibir o resultado formatado
            document.getElementById("resultado").innerText = `O resultado em m3 é: ${resultado_metro_cubico.toFixed(2)}`;

            document.getElementById("resultado-to").innerText = `O resultado em to é: ${resultado_toneladas.toFixed(2)}`;
        }