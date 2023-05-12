<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header/>

      <div class="wrapper">

        <div class="row mb-4">
          <div class="col-lg-6">
            <div class="row mb-4">
              <div class="col-lg-6">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <div id="chart"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <div id="chart2"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <div id="chart1"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-lg-8">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title">Popular projects</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import {onMounted, watch} from "vue";
import ApexCharts from 'apexcharts'

import store from "@/store";
import Calendar from "@/components/Calendar.vue";

const options = {
  chart: {
    type: 'area'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

const options1 = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

const options2 = {
  colors: ['#e9a153'],
  grid: {show: false},
  series: [{
    name: 'Orders',
    data: [20, 45, 40, 51, 30, 45, 18]
  }],
  chart: {
    sparkline: {enabled: true},
    height: 200,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      show: false
    },
  },
};

onMounted(() => {
  new ApexCharts(document.querySelector("#chart"), options).render();
  new ApexCharts(document.querySelector("#chart1"), options1).render();
  new ApexCharts(document.querySelector("#chart2"), options2).render();
});



console.log(store.getters.userInfo);

</script>
