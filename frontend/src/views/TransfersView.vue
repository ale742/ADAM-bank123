<script setup>
import { ref } from 'vue';
const activeTab = ref('client'); // 'client', 'card', 'me'

const sendMoney = () => {
    alert("Деньги улетели, брат! 💸");
}
</script>

<template>
  <div class="container py-4 pb-5 mb-5">
    <h3 class="fw-bold mb-4">Переводы</h3>

    <!-- Табы -->
    <ul class="nav nav-pills nav-fill mb-4 bg-white p-1 rounded shadow-sm">
      <li class="nav-item">
        <a class="nav-link" :class="{ 'active bg-danger': activeTab === 'client', 'text-dark': activeTab !== 'client' }" @click="activeTab = 'client'" href="#">Клиенту</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ 'active bg-danger': activeTab === 'card', 'text-dark': activeTab !== 'card' }" @click="activeTab = 'card'" href="#">На карту</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ 'active bg-danger': activeTab === 'me', 'text-dark': activeTab !== 'me' }" @click="activeTab = 'me'" href="#">Между счетами</a>
      </li>
    </ul>

    <!-- Форма Клиенту -->
    <div v-if="activeTab === 'client'" class="animate__animated animate__fadeIn">
      <div class="card border-0 shadow-sm p-3 mb-3">
        <label class="form-label text-muted small">Телефон получателя</label>
        <div class="input-group mb-3">
            <span class="input-group-text bg-white border-end-0"><i class="bi bi-telephone text-danger"></i></span>
            <input type="tel" class="form-control border-start-0 ps-0" placeholder="+7 (700) 000-00-00">
            <span class="input-group-text bg-white text-danger"><i class="bi bi-person-lines-fill"></i></span>
        </div>
      </div>
      
      <div class="card border-0 shadow-sm p-3 mb-3">
        <label class="form-label text-muted small">Сумма (₸)</label>
        <input type="number" class="form-control fs-3 fw-bold text-danger border-0 p-0" placeholder="0">
        <small class="text-muted">На счету: 1 250 000 ₸</small>
      </div>

      <div class="mb-3">
        <input type="text" class="form-control bg-transparent border-0" placeholder="Сообщение получателю (необязательно)">
      </div>

      <button @click="sendMoney" class="btn btn-danger w-100 py-3 fw-bold shadow">Перевести</button>
    </div>

     <!-- Форма На карту -->
     <div v-if="activeTab === 'card'">
        <div class="card border-0 shadow-sm p-3 mb-3">
            <label class="form-label text-muted small">Номер карты</label>
            <div class="input-group">
                <span class="input-group-text bg-white border-end-0"><i class="bi bi-credit-card text-danger"></i></span>
                <input type="text" class="form-control border-start-0 ps-0" placeholder="0000 0000 0000 0000">
            </div>
        </div>
         <div class="card border-0 shadow-sm p-3 mb-3">
            <label class="form-label text-muted small">Сумма (₸)</label>
            <input type="number" class="form-control fs-3 fw-bold text-danger border-0 p-0" placeholder="0">
        </div>
        <button @click="sendMoney" class="btn btn-danger w-100 py-3 fw-bold shadow">Перевести</button>
     </div>

  </div>
</template>