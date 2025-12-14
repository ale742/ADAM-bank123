import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ServicesView from '../views/ServicesView.vue'
import QrView from '../views/QrView.vue'
import MessagesView from '../views/MessagesView.vue'
import PaymentsView from '../views/PaymentsView.vue'
import TransfersView from '../views/TransfersView.vue'
import ProfileView from '../views/ProfileView.vue' // <-- ИМПОРТИРУЕМ ПРОФИЛЬ

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/qr', name: 'qr', component: QrView },
    { path: '/messages', name: 'messages', component: MessagesView }, // Это теперь История/Уведомления
    { path: '/payments', name: 'payments', component: PaymentsView },
    { path: '/transfers', name: 'transfers', component: TransfersView },
    { path: '/profile', name: 'profile', component: ProfileView }, // <-- НОВЫЙ ПУТЬ
  ]
})

// ЗАЩИТА
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn');
  if (to.name !== 'login' && to.name !== 'register' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});


// ... (тут твои routes)

// ЗАЩИТА: Если нет "токена", кидаем на логин
router.beforeEach((to, from, next) => {
  // Проверяем, есть ли запись в памяти браузера
  const isAuthenticated = localStorage.getItem('isLoggedIn');
  
  // Если человек НЕ вошел И пытается зайти НЕ на логин/регистрацию -> КИДАЕМ НА ЛОГИН
  if (to.name !== 'login' && to.name !== 'register' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next(); // Иначе пускаем куда хотел
  }
});

export default router