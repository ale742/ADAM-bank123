<template>
  <div class="container vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
    <h4 class="mb-5">Сканировать QR</h4>
    <div class="border border-3 border-danger p-5 rounded" style="width: 250px; height: 250px;">
      <!-- Имитация камеры -->
      <div class="w-100 h-100 bg-secondary opacity-25"></div>
    </div>
    <p class="mt-4 text-center">Наведите камеру на QR ADAM-BANK<br>или любого другого банка</p>
    <router-link to="/" class="btn btn-outline-light mt-3">Закрыть</router-link>
  </div>
</template>