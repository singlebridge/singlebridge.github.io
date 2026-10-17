document.getElementById('year').textContent = new Date().getFullYear();

// Keep the public website current without altering the downloadable CV.
const heroLead = document.querySelector('.hero-lead');
if (heroLead) {
  heroLead.innerHTML = 'I work at the intersection of materials science and artificial intelligence, with current interests in <strong>AI-assisted coating design</strong>, physics-informed inverse design, materials world models, scientific multi-agent systems, AI-ready knowledge infrastructure and trustworthy computer vision.';
}

const projectStack = document.querySelector('.project-stack');
if (projectStack && !document.getElementById('coatbrain-project')) {
  const coatProject = document.createElement('article');
  coatProject.id = 'coatbrain-project';
  coatProject.className = 'project reveal';
  coatProject.innerHTML = `
    <div class="project-visual agent-visual">
      <span class="visual-label">Dual-model coating intelligence</span>
      <div class="agent-line l1"></div><div class="agent-line l2"></div>
      <div class="agent-hub">CoatBrain</div>
      <span class="agent-node">Coat-R1</span><span class="agent-node">Coat-T1</span><span class="agent-node">Evidence</span><span class="agent-node">Tools</span>
    </div>
    <div class="project-body">
      <span class="project-meta">Current Research · AI + Protective Coatings · 2026—Present</span>
      <h3>CoatBrain: Coat-R1 + Coat-T1 for AI-Assisted Coating Research</h3>
      <p>Developing a dual-model scientific AI system for protective-coating research. <strong>Coat-R1</strong> performs evidence-grounded scientific reasoning over coating chemistry, curing, structure–property relationships and corrosion-protection mechanisms. <strong>Coat-T1</strong> decomposes tasks, selects retrieval and modelling tools, and executes predictor, simulation and optimisation workflows within a verification-feedback loop.</p>
      <div class="project-flow"><span>Scientific Question</span><b>→</b><span>Coat-R1 Reasoning</span><b>→</b><span>Coat-T1 Tools</span><b>→</b><span>Verification / Feedback</span></div>
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
