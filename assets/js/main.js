document.getElementById('year').textContent = new Date().getFullYear();

// Keep CV buttons synced with the actual uploaded PDF filename.
document.querySelectorAll('a[href*="Jitao_Zhou_CV.pdf"]').forEach(link => {
  link.setAttribute('href', 'assets/files/Jitao%20Zhou_CV.pdf');
});

// Keep the public website current without altering the downloadable CV.
const heroLead = document.querySelector('.hero-lead');
if (heroLead) {
  heroLead.innerHTML = 'I work at the intersection of materials science and artificial intelligence, with current interests in <strong>AI-assisted coating research</strong>, physics-informed inverse design, materials world models, scientific multi-agent systems, AI-ready knowledge infrastructure and trustworthy computer vision.';
}

const projectStack = document.querySelector('.project-stack');
if (projectStack && !document.getElementById('coatbrain-project')) {
  const coatProject = document.createElement('article');
  coatProject.id = 'coatbrain-project';
  coatProject.className = 'project reveal';
  coatProject.innerHTML = `
    <div class="project-visual agent-visual">
      <span class="visual-label">Current coating AI research</span>
      <div class="agent-line l1"></div><div class="agent-line l2"></div>
      <div class="agent-hub">Coat AI</div>
      <span class="agent-node">Coat-V1</span><span class="agent-node">Coat-T1</span><span class="agent-node">Materials</span><span class="agent-node">Scientific AI</span>
    </div>
    <div class="project-body">
      <span class="project-meta">Current Research · AI + Coatings · 2026—Present</span>
      <h3>Coat-V1 & Coat-T1</h3>
      <p>Ongoing development of two coating-oriented AI models, Coat-V1 and Coat-T1, as part of my current work at the intersection of artificial intelligence and coating materials research.</p>
      <div class="project-flow"><span>Coating Research</span><b>→</b><span>Coat-V1</span><b>+</b><span>Coat-T1</span><b>→</b><span>Scientific AI</span></div>
    </div>`;
  projectStack.prepend(coatProject);
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll('.reveal');
if (reduced || !('IntersectionObserver' in window)) {
  items.forEach(el => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
  items.forEach(el => observer.observe(el));
}
