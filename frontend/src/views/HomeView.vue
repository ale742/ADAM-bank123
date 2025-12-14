<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// Данные для историй
const stories = [
    { title: 'Рассрочка', color: 'bg-warning' },
    { title: 'Бонусы', color: 'bg-danger' },
    { title: 'Auto', color: 'bg-primary' },
    { title: 'Travel', color: 'bg-info' },
    { title: 'Гид', color: 'bg-success' },
];
</script>

<template>
  <div class="container py-4 pb-5 mb-5">
    
    <!-- Шапка -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="fw-bold text-danger fst-italic">ADAM-BANK</h4>
      <div class="d-flex gap-3">
          <i class="bi bi-search fs-4"></i>
          <i class="bi bi-bell fs-4"></i>
      </div>
    </div>

    <!-- Истории (Stories) -->
    <div class="d-flex overflow-auto mb-4 pb-2" style="margin-left: -12px; padding-left: 12px;">
        <div v-for="(story, index) in stories" :key="index" class="text-center me-3" style="min-width: 70px;">
            <div :class="story.color" class="rounded-circle p-1 mb-1 d-flex align-items-center justify-content-center text-white border border-2 border-white shadow-sm" style="width: 65px; height: 65px; box-shadow: 0 0 0 2px #dc3545;">
                <span class="small fw-bold">{{ story.title }}</span>
            </div>
        </div>
    </div>

    <!-- Баланс Карты -->
    <div class="card text-white bg-dark mb-4 shadow rounded-4 overflow-hidden" style="position: relative;">
      <!-- Фон декоративный -->
      <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: red; border-radius: 50%; filter: blur(40px);"></div>
      
      <div class="card-body p-4">
        <div class="d-flex justify-content-between mb-3">
            <span class="badge bg-secondary bg-opacity-50">ADAM Gold</span>
            <i class="bi bi-wifi fs-4"></i>
        </div>
        <h2 class="fw-bold mb-1">1 250 000 ₸</h2>
        <div class="d-flex justify-content-between align-items-end mt-4">
            <div>
                <small class="text-white-50 d-block">Бонусы</small>
                <span class="fw-bold text-danger">5 400 B</span>
            </div>
            <div class="small text-white-50">
                **** 4567
            </div>
        </div>
      </div>
    </div>

    <!-- Кнопки действий (Обновленные ссылки) -->
    <div class="row text-center mb-4 g-2">
      <div class="col-3" @click="router.push('/qr')">
        <div class="p-3 border-0 rounded-4 bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
          <i class="bi bi-qr-code fs-3 text-danger mb-1"></i>
          <div class="small fw-bold" style="font-size: 11px;">QR</div>
        </div>
      </div>
      <div class="col-3" @click="router.push('/transfers')"> <!-- ССЫЛКА -->
        <div class="p-3 border-0 rounded-4 bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
          <i class="bi bi-arrow-left-right fs-3 text-primary mb-1"></i>
          <div class="small fw-bold" style="font-size: 11px;">Переводы</div>
        </div>
      </div>
      <div class="col-3" @click="router.push('/payments')"> <!-- ССЫЛКА -->
        <div class="p-3 border-0 rounded-4 bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
          <i class="bi bi-wallet2 fs-3 text-success mb-1"></i>
          <div class="small fw-bold" style="font-size: 11px;">Платежи</div>
        </div>
      </div>
      <div class="col-3" @click="router.push('/services')">
        <div class="p-3 border-0 rounded-4 bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
          <i class="bi bi-grid-fill fs-3 text-warning mb-1"></i>
          <div class="small fw-bold" style="font-size: 11px;">Госуслуги</div>
        </div>
      </div>
    </div>

    <!-- Баннер Магазина -->
    <h5 class="fw-bold mb-3">ADAM Магазин</h5>
    <div class="card border-0 shadow-sm mb-4">
        <div class="row g-0">
            <div class="col-7 p-3 d-flex flex-column justify-content-center">
                <h6 class="fw-bold">iPhone 15 Pro</h6>
                <p class="small text-muted mb-2">В рассрочку 0-0-24</p>
                <button class="btn btn-danger btn-sm w-75 rounded-pill">Купить</button>
            </div>
            <div class="col-5 bg-light d-flex align-items-center justify-content-center">
                <i class="bi bi-phone fs-1 text-secondary"></i>
            </div>
        </div>
    </div>
  </div>
</template>