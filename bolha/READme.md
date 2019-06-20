## Desafio: **Bolhas** 

Desenvolva um jogo com as seguintes objetivos: 
- O Site começa com uma tela 100% branca 
- Quando o usuário pressionar o botão do mouse mousedown em uma parte do mapa uma esfera deve ser formada 
- Enquanto o usuário não liberar o mouse mouseup a bolha deve crescer pixel a pixel 
- A cor da bolha deve ser gerada aleatoriamente enquanto o usuario mantém o mouse pressionado Ex.: https://cl.ly/ac7eb0146098 Fisicas do jogo: 
- [0] Quando a bolha tocar em outra bolha existente elas não podem se sobrepor, as bolhas existentes tem que ser empurradas seguindo conceito basicos fisica 
- [1] Se o usuario mover o mouse mousemove enquanto pressiona o mouse mouseup a bolha deve continuar crescendo e deve seguir o mouse, observação: mantenha a fisica de empurrar as demais bolas Obrigatorios: 
- O sistema tem que ser em HTML, CSS e JS. Sem precompiladores 
- Use o window.requestAnimationFrame() e o window.cancelAnimationFrame(requestID) para controlar as animações Pontos se fizer: 
- Fazer deploy no github.io e deixar disponivel 
- Utilizar algum bundle para compactar e organizar o código de produção