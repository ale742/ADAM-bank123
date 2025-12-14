<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// СПИСОК СТРАНИЦ, ГДЕ МЕНЮ НЕ НУЖНО
// Навигация пропадет на страницах: Логин, Регистрация и QR
const showNavbar = computed(() => {
  return !['login', 'register', 'qr'].includes(route.name);
});
</script>

<template>
  <RouterView />

  <!-- Нижнее меню навигации (Показывается только если мы зашли) -->
  <nav v-if="showNavbar" class="navbar fixed-bottom navbar-light bg-white border-top shadow-lg" style="padding-bottom: 20px;">
    <div class="container d-flex justify-content-around text-center">
      
      <!-- 1. Главная -->
      <router-link to="/" class="text-decoration-none text-secondary" active-class="text-danger fw-bold">
        <i class="bi bi-house fs-4 d-block"></i>
        <span style="font-size: 10px;">Главная</span>
      </router-link>

      <!-- 2. Сервисы -->
      <router-link to="/services" class="text-decoration-none text-secondary" active-class="text-danger fw-bold">
        <i class="bi bi-grid fs-4 d-block"></i>
        <span style="font-size: 10px;">Сервисы</span>
      </router-link>

      <!-- 3. QR (Центральная кнопка) -->
      <router-link to="/qr" class="text-decoration-none text-secondary">
        <div class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px; margin-top: -30px; border: 4px solid white;">
          <i class="bi bi-qr-code fs-4"></i>
        </div>
      </router-link>

      <!-- 4. Сообщения / История -->
      <router-link to="/messages" class="text-decoration-none text-secondary" active-class="text-danger fw-bold">
        <i class="bi bi-chat-text fs-4 d-block"></i>
        <span style="font-size: 10px;">Сообщения</span>
      </router-link>

      <!-- 5. Профиль -->
      <router-link to="/profile" class="text-decoration-none text-secondary" active-class="text-danger fw-bold">
        <i class="bi bi-person-circle fs-4 d-block"></i>
        <span style="font-size: 10px;">Профиль</span>
      </router-link>
    </div>
  </nav>
</template>

<style>
/* Глобальные стили для всего приложения */
body {
  background-color: #f8f9fa; /* Светло-серый фон как в приложениях */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>