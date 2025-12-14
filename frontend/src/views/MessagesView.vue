<script setup>
const transactions = [
    { type: 'outcome', title: 'Magnum', desc: 'Продукты', amount: '- 12 400 ₸', date: 'Сегодня, 14:30', icon: 'bi-basket', color: 'text-danger' },
    { type: 'income', title: 'Пополнение', desc: 'Kaspi Gold', amount: '+ 50 000 ₸', date: 'Сегодня, 10:00', icon: 'bi-arrow-down-left', color: 'text-success' },
    { type: 'outcome', title: 'Перевод', desc: 'Алишер Б.', amount: '- 5 000 ₸', date: 'Вчера, 18:20', icon: 'bi-person', color: 'text-dark' },
    { type: 'outcome', title: 'Apple Services', desc: 'Подписка', amount: '- 990 ₸', date: 'Вчера, 09:15', icon: 'bi-apple', color: 'text-dark' },
    { type: 'outcome', title: 'Burger King', desc: 'Еда', amount: '- 3 200 ₸', date: '12 Декабря', icon: 'bi-egg-fried', color: 'text-warning' },
];
</script>

<template>
  <div class="container py-4 pb-5 mb-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="fw-bold mb-0">Уведомления</h3>
        <i class="bi bi-check-all fs-3 text-primary"></i>
    </div>
    
    <div class="list-group">
      <div v-for="(item, index) in transactions" :key="index" class="list-group-item border-0 border-bottom py-3 px-0">
        <div class="d-flex align-items-center">
            <!-- Иконка -->
            <div class="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px; min-width: 50px;">
                <i :class="`bi ${item.icon} fs-4 text-secondary`"></i>
            </div>
            
            <!-- Инфо -->
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0 fw-bold">{{ item.title }}</h6>
                    <span :class="`fw-bold ${item.color}`">{{ item.amount }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-1">
                    <small class="text-secondary">{{ item.desc }}</small>
                    <small class="text-muted" style="font-size: 11px;">{{ item.date }}</small>
                </div>
            </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-3">
        <button class="btn btn-light text-secondary btn-sm">Показать старые</button>
    </div>
  </div>
</template>