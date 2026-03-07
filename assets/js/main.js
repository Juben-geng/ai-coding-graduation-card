document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initMobileMenu();
  initScrollSpy();
  renderContent();
});

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('#nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        closeMobileMenu();
      }
    });
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
  }
  if (hamburger) {
    hamburger.classList.remove('active');
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-menu .nav-link');
  
  function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
    
    mobileNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
}

function renderContent() {
  renderHeader();
  renderRoadshow();
  renderReview();
  renderProducts();
  renderFooter();
}

function renderHeader() {
  const headerTitle = document.querySelector('#header .header-title');
  const headerSubtitle = document.querySelector('#header .header-subtitle');
  const headerIntro = document.querySelector('#header .header-intro');
  const enterBtn = document.querySelector('#header .enter-btn');
  
  if (!headerTitle || !headerSubtitle || !headerIntro || !siteConfig.personal) return;
  
  headerTitle.textContent = siteConfig.personal.name;
  headerSubtitle.textContent = siteConfig.personal.slogan;
  headerIntro.textContent = siteConfig.personal.intro;
  
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      scrollToSection('#roadshow');
    });
  }
}

function renderRoadshow() {
  const roadshowSection = document.querySelector('#roadshow .roadshow-grid');
  if (!roadshowSection || !siteConfig.roadshow) return;
  
  const { painPoints, mvpIntro, thinking } = siteConfig.roadshow;
  
  const painPointsHTML = painPoints.map(point => 
    '<div class="list-item">' +
      '<div class="list-dot"></div>' +
      '<span>' + point + '</span>' +
    '</div>'
  ).join('');
  
  const mvpIntroHTML = mvpIntro.map(mvp => 
    '<div class="list-item">' +
      '<div class="list-dot"></div>' +
      '<span>' + mvp + '</span>' +
    '</div>'
  ).join('');
  
  roadshowSection.innerHTML = 
    '<div class="roadshow-section">' +
      '<h3 class="roadshow-subtitle">痛点场景</h3>' +
      painPointsHTML +
    '</div>' +
    '<div class="roadshow-section">' +
      '<h3 class="roadshow-subtitle">MVP介绍</h3>' +
      mvpIntroHTML +
    '</div>' +
    '<div class="roadshow-section" style="grid-column: 1 / -1;">' +
      '<h3 class="roadshow-subtitle">挖掘思路</h3>' +
      '<div class="thinking-content">' +
        thinking +
      '</div>' +
    '</div>';
}

function renderReview() {
  const reviewSection = document.querySelector('#review');
  if (!reviewSection || !siteConfig.review) return;
  
  const { content, highlight } = siteConfig.review;
  
  let formattedContent = content;
  highlight.forEach(keyword => {
    const regex = new RegExp('(' + keyword + ')', 'g');
    formattedContent = formattedContent.replace(regex, '<span class="highlight">$1</span>');
  });
  
  const contentHTML = formattedContent.split('\n\n').map(para => 
    '<p>' + para.replace(/\n/g, '<br>') + '</p>'
  ).join('');
  
  reviewSection.innerHTML = 
    '<h2 class="section-title"><i class="fas fa-book-reader"></i> 学习复盘</h2>' +
    '<div class="section-divider"></div>' +
    '<div class="review-content">' +
      contentHTML +
    '</div>';
}

function renderProducts() {
  const productsSection = document.querySelector('#products .products-grid');
  if (!productsSection || !siteConfig.products) return;
  
  const productsHTML = siteConfig.products.map(product => {
    const featuresHTML = product.features.map(feature => 
      '<li>' + feature + '</li>'
    ).join('');
    
    const linksHTML = product.links.map(link => 
      '<div class="link-wrapper">' +
        '<div class="link-label">' + link.type + '</div>' +
        '<a href="' + link.url + '" target="_blank" class="link-btn">' +
          '<i class="fas fa-external-link-alt" style="margin-right: 8px;"></i>' +
          '访问产品' +
        '</a>' +
      '</div>'
    ).join('');
    
    return 
      '<div class="product-card">' +
        '<div class="product-icon">' +
          '<i class="fas fa-' + product.icon + '"></i>' +
        '</div>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-value">' + product.value + '</p>' +
        '<ul class="product-features">' +
          featuresHTML +
        '</ul>' +
        linksHTML +
      '</div>';
  }).join('');
  
  productsSection.innerHTML = productsHTML;
}

function renderFooter() {
  const footerDeploy = document.querySelector('#footer .footer-deploy');
  const footerTech = document.querySelector('#footer .footer-tech');
  
  if (!footerDeploy || !footerTech || !siteConfig.footer) return;
  
  const { deployDesc, techStack } = siteConfig.footer;
  
  footerDeploy.textContent = deployDesc;
  footerTech.textContent = techStack;
}

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    const navHeight = document.querySelector('#nav')?.offsetHeight || 0;
    const targetPosition = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}