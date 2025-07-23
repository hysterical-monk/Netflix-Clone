// Login form logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        if (email && password) {
          // Simulate login
          localStorage.setItem('loggedIn', 'true');
          window.location.href = 'home.html';
        } else {
          alert('Enter valid details');
        }
      });
    }
  
    // Protect home page if not logged in
    if (window.location.pathname.includes('home.html')) {
      if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
      }
    }
  });
  
  // Load movie categories dynamically
  function loadCategory(category) {
    const movies = document.getElementById('movies');
    const categoryTitle = document.getElementById('category-title');
  
    let images = [];
    if (category === 'popular') {
      categoryTitle.textContent = 'Popular on Netflix';
      images = [
        'https://source.unsplash.com/200x300/?popular',
        'https://source.unsplash.com/201x300/?series',
        'https://source.unsplash.com/202x300/?hollywood'
      ];
    } else if (category === 'new') {
      categoryTitle.textContent = 'New Movies';
      images = [
        'https://source.unsplash.com/203x300/?new',
        'https://source.unsplash.com/204x300/?latest',
        'https://source.unsplash.com/205x300/?blockbuster'
      ];
    } else if (category === 'trending') {
      categoryTitle.textContent = 'Trending Now';
      images = [
        'https://source.unsplash.com/206x300/?trending',
        'https://source.unsplash.com/207x300/?action',
        'https://source.unsplash.com/208x300/?adventure'
      ];
    }
  
    movies.innerHTML = '';
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      movies.appendChild(img);
    });
  }
  
  // Logout function
  function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  }
  