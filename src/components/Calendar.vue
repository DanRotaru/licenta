<template>
  <div class="card card--calendar">
    <div class="calendar">
      <div class="calendar-left">
        <div class="calendar__date">
          <div class="calendar-num">{{ date }}</div>
          <div>{{ month }}</div>
        </div>

        <div class="calendar-navigation">
          <div class="calendar__prev" @click="moveDate('prev')">&#10094</div>
          <div class="calendar__next" @click="moveDate('next')">&#10095</div>
        </div>
      </div>
      <div class="calendar-right">
        <div class="calendar__current-date">
          <div>
            <div id="calendarDateStr"></div>
            <div id="calendarDateStr1"></div>
            <div id="weekT"></div>
          </div>
        </div>
        <div class="calendar__week-days">
          <div v-for="item in daysSmall">{{ item }}</div>
        </div>
        <div class="calendar__days" id="calendar-days"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

let dt = new Date();
let dt1 = new Date();
const date = ref('');
const month = ref('');

const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  days = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
  daysSmall = ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa', 'Du'];

function renderDate() {
  dt.setDate(7);
  let day = dt.getDay(),
    endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate(),
    prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate(),
    today = new Date(),

    mon = (dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;

  date.value = (dt1.getDate()) < 10 ? '0' + (dt1.getDate()) : dt1.getDate();
  month.value = months[dt.getMonth()];

  let cells = '';
  let countDate = 0;

  for (let x = day; x > 0; x--) {
    cells += "<div class='calendar__prev-date'>" + (prevDate - x + 1) + '</div>';
  }

  for (let i = 1; i <= endDate; i++) {
    if (
      i === today.getDate() &&
      dt.getMonth() === today.getMonth() &&
      dt.getFullYear() === today.getFullYear()
    ) {
      cells += `<div class="calendar__today">${i}</div>`
    } else {
      cells += `<div>${i}</div>`
    }

    countDate = i;
  }

  let reservedDateCells = countDate + day + 1;
  for (let j1 = reservedDateCells, j2 = 1; j1 <= 42; j1++, j2++) {
    cells += `<div class="calendar__next-date">${j2}</div>`
  }

  document.getElementById('calendar-days').innerHTML = cells;
}

function moveDate(id) {
  id === 'prev' ? dt.setMonth(dt.getMonth() - 1) : dt.setMonth(dt.getMonth() + 1);
  renderDate();
}

onMounted(() => {
  renderDate();
})
</script>