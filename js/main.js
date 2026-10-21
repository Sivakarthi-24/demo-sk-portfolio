document.addEventListener('DOMContentLoaded', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('portfolio-theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('portfolio-theme', nextTheme);
    });
  }

  const navMenu = document.getElementById('nav-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active');
      const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
      link.classList.add('active');
      if (hamburgerBtn) {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const terminalBtn = document.getElementById('run-terminal-btn');
  const terminalOutput = document.getElementById('terminal-output');
  if (terminalBtn && terminalOutput) {
    terminalBtn.addEventListener('click', () => {
      terminalOutput.classList.toggle('visible');
    });
  }

  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      filterTabs.forEach(item => {
        item.classList.toggle('active', item === tab);
        item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
      });

      skillCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });

  const projectModal = document.getElementById('project-modal');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalStatusBadge = document.getElementById('modal-status-badge');
  const modalProjectBody = document.getElementById('modal-project-body');
  const modalGitHubAction = document.getElementById('modal-github-action');
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const closeButtons = [
    document.getElementById('modal-close-btn'),
    document.getElementById('modal-dismiss-btn')
  ];

  const projectMap = Object.fromEntries((window.portfolioData?.projects || []).map(project => [project.id, project]));

  function openProjectModal(projectId) {
    const project = projectMap[projectId];
    if (!project || !projectModal) return;

    modalProjectTitle.textContent = project.title;
    modalStatusBadge.textContent = project.status;
    modalStatusBadge.className = 'project-status-tag';

    modalProjectBody.innerHTML = `
      <p>${project.description}</p>
      <div class="project-tech-list">
        ${(project.tech || []).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    `;

    if (project.repo) {
      modalGitHubAction.href = project.repo;
      modalGitHubAction.style.display = 'inline-flex';
    } else {
      modalGitHubAction.href = '#';
      modalGitHubAction.style.display = 'none';
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
  }

  openButtons.forEach(button => {
    button.addEventListener('click', () => openProjectModal(button.dataset.project));
  });
  closeButtons.forEach(button => button && button.addEventListener('click', closeProjectModal));
  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) closeProjectModal();
    });
  }

  const certCards = document.querySelectorAll('.cert-action-btn');
  certCards.forEach(button => {
    button.addEventListener('click', () => {
      const certId = button.dataset.certId;
      const cert = (window.portfolioData?.certificates || []).find(item => item.id === certId);
      if (!cert) return;

      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toast-message');
      if (!toast || !toastMessage) return;

      toastMessage.textContent = `${cert.title} • ${cert.issuer}`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    });
  });

  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const subject = (formData.get('subject') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isValid = name.length >= 2 && validEmail && subject.length >= 3 && message.length >= 10;

      ['group-name', 'group-email', 'group-subject', 'group-message'].forEach(groupId => {
        const group = document.getElementById(groupId);
        if (!group) return;
        group.classList.remove('error');
      });

      if (!isValid) {
        if (name.length < 2) document.getElementById('group-name')?.classList.add('error');
        if (!validEmail) document.getElementById('group-email')?.classList.add('error');
        if (subject.length < 3) document.getElementById('group-subject')?.classList.add('error');
        if (message.length < 10) document.getElementById('group-message')?.classList.add('error');
        return;
      }

      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toast-message');
      if (toast && toastMessage) {
        toastMessage.textContent = 'Message prepared successfully. Connect your email backend to send it.';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2600);
      }
      form.reset();
    });
  }
});
