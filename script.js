// ============ MA'LUMOTLAR ============
const popularEvents = [
  {
    img: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=600&auto=format&fit=crop",
    badge: "Bugun", badgeClass: "ep-badge-today",
    category: "Konsert",
    title: "Yulduzlar kechasi — Live konsert",
    date: "12-avgust, 19:00",
    place: "Humo Arena, Toshkent",
    price: "150 000 so'm"
  },
  {
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=600&auto=format&fit=crop",
    badge: "Bu hafta", badgeClass: "ep-badge-week",
    category: "Konferensiya",
    title: "Digital Business Forum 2026",
    date: "16-avgust, 10:00",
    place: "Poytaxt Business Hub",
    price: "400 000 so'm"
  },
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=600&auto=format&fit=crop",
    badge: "Mashhur", badgeClass: "ep-badge-today",
    category: "Sport",
    title: "Chempionlar kubogi — final o'yin",
    date: "20-avgust, 18:30",
    place: "Milliy stadion",
    price: "80 000 so'm"
  },
  {
    img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=600&auto=format&fit=crop",
    badge: "-15%", badgeClass: "ep-badge-week",
    category: "Ko'ngilochar",
    title: "Stand-up Comedy Show",
    date: "22-avgust, 20:00",
    place: "Ilkhom teatri",
    price: "120 000 so'm"
  }
];

const upcomingEvents = [
  {
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=300&auto=format&fit=crop",
    badge: "Bugun", badgeClass: "ep-badge-today",
    title: "Jazz kechasi — akustik dastur",
    date: "Bugun, 19:00 — Amir Temur xiyoboni",
    price: "90 000 so'm"
  },
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=300&auto=format&fit=crop",
    badge: "Bu hafta", badgeClass: "ep-badge-week",
    title: "Tech Summit 2026",
    date: "15-avgust — Samarqand, IT Park",
    price: "250 000 so'm"
  },
  {
    img: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=300&auto=format&fit=crop",
    badge: "Bu hafta", badgeClass: "ep-badge-week",
    title: "Startup Pitch Night",
    date: "17-avgust — Toshkent, IT Park",
    price: "Bepul"
  },
  {
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=300&auto=format&fit=crop",
    badge: "Bugun", badgeClass: "ep-badge-today",
    title: "Yoga va meditatsiya kuni",
    date: "Bugun, 08:00 — Bog'i Eram",
    price: "50 000 so'm"
  }
];

// ============ RENDER ============
function eventCardHTML(e){
  return `
  <div class="col-md-6 col-lg-3">
    <div class="ep-event-card">
      <div class="ep-event-img" style="background-image:url('${e.img}')">
        <span class="ep-badge ${e.badgeClass}">${e.badge}</span>
        <button class="ep-fav-btn" aria-label="Sevimlilarga qo'shish"><i class="ti ti-heart"></i></button>
      </div>
      <div class="ep-event-body">
        <div class="ep-event-cat">${e.category}</div>
        <div class="ep-event-title">${e.title}</div>
        <div class="ep-event-meta"><i class="ti ti-calendar"></i>${e.date}</div>
        <div class="ep-event-meta"><i class="ti ti-map-pin"></i>${e.place}</div>
        <div class="ep-event-footer">
          <span class="ep-event-price">${e.price}</span>
          <a href="#" class="ep-event-cta">Chipta olish</a>
        </div>
      </div>
    </div>
  </div>`;
}

function upcomingCardHTML(e){
  return `
  <div class="ep-upcoming-card">
    <img src="${e.img}" alt="${e.title}">
    <div class="ep-upcoming-body">
      <span class="ep-badge ${e.badgeClass} mb-2">${e.badge}</span>
      <div class="ep-event-title" style="font-size:16px;">${e.title}</div>
      <div class="ep-event-meta"><i class="ti ti-clock"></i>${e.date}</div>
      <div class="ep-event-footer" style="border:none;padding-top:8px;margin-top:8px;">
        <span class="ep-event-price" style="font-size:15px;">${e.price}</span>
        <a href="#" class="ep-event-cta">Ko'rish</a>
      </div>
    </div>
  </div>`;
}

document.getElementById('popularEvents').innerHTML = popularEvents.map(eventCardHTML).join('');
document.getElementById('upcomingEvents').innerHTML = upcomingEvents.map(upcomingCardHTML).join('');

// Navbar bg on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNavbar');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(15,10,31,0.92)';
  } else {
    nav.style.background = 'rgba(15,10,31,0.7)';
  }
});
