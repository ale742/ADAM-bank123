<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const user = ref({
  name: 'Адам Адамов',
  phone: '+7 777 123 45 67',
  joined: '12.12.2024'
});

// Имитация загрузки данных (если бы было реально)
onMounted(() => {
  const savedLogin = localStorage.getItem('isLoggedIn');
  // Тут можно было бы достать имя из базы, но пока хардкод
});

const logout = () => {
  // Удаляем запись о входе
  localStorage.removeItem('isLoggedIn');
  // Кидаем на логин
  router.push('/login');
}
</script>

<template>
  <div class="container py-4 pb-5 mb-5">
    <h3 class="fw-bold mb-4">Профиль</h3>

    <!-- Карточка пользователя -->
    <div class="card border-0 shadow-sm mb-4">
      <div class="card-body d-flex align-items-center p-3">
        <div class="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 70px; height: 70px;">
          <i class="bi bi-person-fill fs-1 text-secondary"></i>
        </div>
        <div>
          <h5 class="fw-bold mb-1">{{ user.name }}</h5>
          <p class="text-muted mb-0 small">{{ user.phone }}</p>
          <span class="badge bg-success bg-opacity-10 text-success border border-success mt-1">Клиент с {{ user.joined }}</span>
        </div>
      </div>
    </div>

    <!-- Настройки -->
    <h6 class="fw-bold mb-3 ms-1">Настройки</h6>
    <div class="list-group shadow-sm rounded-3 mb-4">
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center border-0 border-bottom">
        <div class="d-flex align-items-center">
            <i class="bi bi-gear text-secondary fs-4 me-3"></i>
            <span>Настройки приложения</span>
        </div>
        <i class="bi bi-chevron-right text-muted"></i>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center border-0 border-bottom">
        <div class="d-flex align-items-center">
            <i class="bi bi-shield-lock text-secondary fs-4 me-3"></i>
            <span>Безопасность и пароль</span>
        </div>
        <i class="bi bi-chevron-right text-muted"></i>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center border-0">
        <div class="d-flex align-items-center">
            <i class="bi bi-question-circle text-secondary fs-4 me-3"></i>
            <span>Помощь и поддержка</span>
        </div>
        <i class="bi bi-chevron-right text-muted"></i>
      </a>
    </div>

    <!-- Кнопка Выхода -->
    <button @click="logout" class="btn btn-outline-danger w-100 py-3 fw-bold">
      <i class="bi bi-box-arrow-right me-2"></i> Выйти из аккаунта
    </button>
    
    <div class="text-center mt-4 text-muted small">
        Версия приложения 1.0.0
    </div>
  </div>
</template>