<template>
  <div class="container py-4 pb-5 mb-5">
    <!-- Поиск -->
    <div class="input-group mb-4 shadow-sm">
      <span class="input-group-text bg-white border-end-0"><i class="bi bi-search"></i></span>
      <input type="text" class="form-control border-start-0 ps-0" placeholder="Найти платеж...">
    </div>

    <!-- Мои платежи (Частые) -->
    <h6 class="fw-bold mb-3">Мои платежи</h6>
    <div class="d-flex overflow-auto pb-2 mb-3" style="white-space: nowrap;">
      <div class="me-3 text-center" v-for="i in 3" :key="i">
        <div class="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center mx-auto" style="width: 60px; height: 60px;">
          <i class="bi bi-phone text-danger fs-4"></i>
        </div>
        <small class="d-block mt-1 text-muted">Баланс</small>
      </div>
    </div>

    <!-- Категории -->
    <h6 class="fw-bold mb-3">Все категории</h6>
    <div class="list-group shadow-sm rounded-3">
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex align-items-center border-0 border-bottom">
        <i class="bi bi-phone fs-4 text-primary me-3" style="width: 30px;"></i>
        <span>Мобильная связь</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex align-items-center border-0 border-bottom">
        <i class="bi bi-house-door fs-4 text-success me-3" style="width: 30px;"></i>
        <span>Коммуналка</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex align-items-center border-0 border-bottom">
        <i class="bi bi-wifi fs-4 text-info me-3" style="width: 30px;"></i>
        <span>Интернет и ТВ</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex align-items-center border-0 border-bottom">
        <i class="bi bi-controller fs-4 text-warning me-3" style="width: 30px;"></i>
        <span>Игры и развлечения</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 d-flex align-items-center border-0">
        <i class="bi bi-bank fs-4 text-danger me-3" style="width: 30px;"></i>
        <span>Погашение кредитов</span>
      </a>
    </div>
  </div>
</template>