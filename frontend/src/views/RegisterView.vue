<template>
  <div class="container d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
    <h1 class="text-danger fw-bold mb-4">ADAM-BANK</h1>
    <div class="card p-4 shadow-sm w-100" style="max-width: 400px;">
      <h3 class="text-center mb-3">Регистрация</h3>
      <input type="text" class="form-control mb-3" placeholder="Имя">
      <input type="text" class="form-control mb-3" placeholder="Номер телефона">
      <input type="password" class="form-control mb-3" placeholder="Придумайте пароль">
      <router-link to="/login" class="btn btn-danger w-100">Зарегистрироваться</router-link>
    </div>
  </div>
</template>