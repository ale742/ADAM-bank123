<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handleLogin = () => {
  // Сохраняем типа "мы вошли"
  localStorage.setItem('isLoggedIn', 'true');
  router.push('/');
}
</script>

<template>
  <div class="container d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
    <div class="mb-5 text-center">
        <i class="bi bi-wallet2 text-danger display-1"></i>
        <h1 class="text-danger fw-bold mt-2">ADAM-BANK</h1>
        <p class="text-muted">Самый быстрый банк на районе</p>
    </div>
    
    <div class="w-100 px-4" style="max-width: 400px;">
      <div class="form-floating mb-3">
        <input type="tel" class="form-control" id="phoneInput" placeholder="+7" value="+7 777 123 45 67">
        <label for="phoneInput">Номер телефона</label>
      </div>
      <div class="form-floating mb-4">
        <input type="password" class="form-control" id="passInput" placeholder="Password">
        <label for="passInput">Пароль</label>
      </div>
      
      <button @click="handleLogin" class="btn btn-danger w-100 py-3 fw-bold fs-5 rounded-3 shadow">Войти</button>
      
      <div class="mt-4 text-center">
        <router-link to="/register" class="text-danger fw-bold text-decoration-none">Зарегистрироваться</router-link>
      </div>
      <div class="mt-2 text-center">
        <a href="#" class="text-secondary small text-decoration-none">Забыли пароль?</a>
      </div>
    </div>
  </div>
</template>