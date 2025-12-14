<template>
  <div class="container py-4 pb-5 mb-5">
    <h3 class="fw-bold mb-4">История</h3>
    
    <div class="card mb-2 shadow-sm" v-for="n in 5" :key="n">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <div class="bg-light rounded-circle p-2 me-3">
            <i class="bi bi-basket text-danger"></i>
          </div>
          <div>
            <h6 class="mb-0">Magnum</h6>
            <small class="text-muted">Продукты</small>
          </div>
        </div>
        <div class="text-end">
          <div class="fw-bold">- 5 400 ₸</div>
          <small class="text-muted">Бонус: +10 B</small>
        </div>
      </div>
    </div>
  </div>
</template>