const projects = {
  
  'turismo': {
    title: 'Gestión de Turismo',
    images: ['imagenes/Menu-turis.png','imagenes/sub-turis.png','imagenes/BD-turis.png'],
    desc: 'Plataforma web dinámica.',
    tags: ['JS', 'HTML5', 'CSS','PostgreSQL'], link: '#'
  },
  'fullstack': {
    title: 'Angular + Spring',
    images: ['imagenes/Menu-angular.png','imagenes/sub-angular.png','imagenes/Cesar-angular.png'],
    desc: 'Arquitectura limpia Fullstack.',
    tags: ['Angular', 'Spring Boot','PostgreSQL','CSS'], link: '#'
  }
};

function goTo(id) {
  const container = document.querySelector('.container');
  const target = document.getElementById(id);
  if (target) {
    container.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
}

function openProject(id) {
  const p = projects[id];
  const body = document.getElementById('overlay-body');
  const imgs = p.images.map(img => `<img src="${img}">`).join('');
  
  body.innerHTML = `
    <div class="modal-gallery">${imgs}</div>
    <h2>${p.title}</h2>
    <p style="margin:10px 0">${p.desc}</p>
    <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  `;
  document.getElementById('project-overlay').classList.add('active');
}

function closeProject() {
  document.getElementById('project-overlay').classList.remove('active');
}

// Typewriter
const textElement = document.querySelector(".typewriter");
const words = ["el Backend", "Java", "Ingeniería"];
let wordIdx = 0, charIdx = 0, isDel = false;

function type() {
  const current = words[wordIdx];
  textElement.textContent = isDel ? current.substring(0, charIdx--) : current.substring(0, charIdx++);
  
  if (!isDel && charIdx > current.length) { isDel = true; setTimeout(type, 2000); }
  else if (isDel && charIdx < 0) { isDel = false; wordIdx = (wordIdx + 1) % words.length; setTimeout(type, 500); }
  else { setTimeout(type, isDel ? 50 : 150); }
}
document.addEventListener("DOMContentLoaded", type);

function goTo(id) {
  const container = document.querySelector('.container');
  const target = document.getElementById(id);
  
  if (target) {
    const headerOffset = 70;
    const elementPosition = target.offsetTop;
    
    container.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}