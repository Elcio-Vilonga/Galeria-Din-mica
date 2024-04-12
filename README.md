Galeria Dinâmica


Conceitos Essenciais:
📌 Manipulação do DOM: Usa métodos como document.createElement , appendChild , 
removeChild , document.getElementById , para adicionar e remover imagens dinamicamente.
📌Local Storage: Armazena informações sobre as imagens adicionadas/removidas 
para que o estado da galeria seja persistido entreas sessões de navegação.


Desenvolvimento Passo a Passo:
1. Estrutura HTML: Estrutura básica com um input para carregar imagens,
   um botão para adicionar e um container onde as imagens serão exibidas.

3. Adicionar Imagens:
- Captura o evento de clique no botão de adicionar.
- Lê a imagem do input e criar um elemento img no DOM para exibi-la na galeria.
- Armazena informações da imagem adicionada no localStorage.

3. Remoção de Imagens:
- Associa um evento de clique a cada imagem para remoção. 
- Remove a imagem do DOM e atualiza o localStorage para refletir essa mudança.

4. Persistência com Local Storage:
- Ao carregar a página, verifica o localStorage para qualquer imagem previamente adicionada e exibi-las automaticamente.
