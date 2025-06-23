const etapas = {
  "Fundamentos de Programação": {
    estudar: [
      ["Curso de Python - Curso em Vídeo", "https://www.youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o"],
      ["Git e GitHub - Curso em Vídeo", "https://www.youtube.com/playlist?list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x"],
      ["Livro Python Para Zumbis", "https://www.pycursos.com/python-para-zumbis/"]
    ],
    meta: "Subir 2 scripts no GitHub"
  },
  "Python para IA": {
    estudar: [
      ["Python Básico - Programação Dinâmica", "https://www.youtube.com/@ProgramacaoDinamica"],
      ["Python - W3Schools", "https://www.w3schools.com/python/"],
      ["Livro Automate the Boring Stuff with Python", "https://automatetheboringstuff.com/"]
    ],
    meta: "Mini projetos: calculadora, análise simples"
  },
  "Matemática para IA": {
    estudar: [
      ["Khan Academy", "https://pt.khanacademy.org/"],
      ["3Blue1Brown - YouTube", "https://www.youtube.com/c/3blue1brown"],
      ["Essence of Linear Algebra", "https://www.youtube.com/watch?v=kjBOesZCoqc&list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6"]
    ],
    meta: "Resolver exercícios no Desmos ou Khan Academy"
  }
  // Adicionar mais etapas conforme desejar
};

const menu = document.getElementById('menu');
const titulo = document.getElementById('titulo');
const conteudo = document.getElementById('conteudo');

// Preencher o menu
for (let etapa in etapas) {
  const li = document.createElement('li');
  li.textContent = etapa;
  li.onclick = () => carregarEtapa(etapa);
  menu.appendChild(li);
}

function carregarEtapa(etapa) {
  titulo.textContent = etapa;
  const dados = etapas[etapa];
  
  let html = "<h3>O que estudar:</h3><ul>";
  dados.estudar.forEach(([nome, link]) => {
    html += `<li><a href="${link}" target="_blank">${nome}</a></li>`;
  });
  html += "</ul>";

  html += `<h3>Meta prática:</h3><p>${dados.meta}</p>`;
  html += `<button onclick="alert('Parabéns! Etapa marcada como concluída.')">✅ Marcar como concluído</button>`;
  
  conteudo.innerHTML = html;
}
