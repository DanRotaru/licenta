<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header/>

      <div class="wrapper dashboard-main">

        <div class="row mb-4">
          <div class="col-lg-8">
            <div class="card dashboard-card dashboard-card_main mb-4">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="card-title card-title_line">Overview</h5>
                  <select class="form-select">
                    <option value="">All Time</option>
                    <option value="">This week</option>
                    <option value="">This month</option>
                    <option value="">This year</option>
                  </select>
                </div>

                <div class="dashboard-card-tabs">
                  <div class="item active">
                    <div class="item__icon">
                      <i class="bi bi-bag"></i>
                    </div>
                    <div class="item__title">
                      <div class="description">Customers</div>
                      <div class="number">1024</div>
                    </div>
                    <div class="item__diff negative">
                      <i class="bi bi-arrow-down-short"></i>
                      18.8%
                    </div>
                  </div>
                  <div class="item">
                    <div class="item__icon item__icon_2">
                      <i class="bi bi-activity"></i>
                    </div>
                    <div class="item__title">
                      <div class="description">Income</div>
                      <div class="number">$865</div>
                    </div>
                    <div class="item__diff positive">
                      <i class="bi bi-arrow-up-short"></i>
                      85.6%
                    </div>
                  </div>
                </div>

                <div class="dashboard-card-users">
                  <router-link
                      to="/dashboard/users/id1"
                      class="item" v-for="i in 3">
                    <img src="/img/me.webp" alt="avatar">
                    <div>Dan Rotaru</div>
                  </router-link>

                  <div class="item">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-lg-4">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h5 class="card-title">Account Activity</h5>
                  </div>
                  <apexchart :options="options2" :series="options2.series"/>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h5 class="card-title">Project selling</h5>
                  </div>
                  <apexchart :options="options5" :series="options5.series"/>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h6 class="mb-0">This month earning</h6>
                    <h2 class="mb-2 mt-2 poppins">$865</h2>
                    <p class="mb-0">Expected payout on 05/06/2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow mb-4">
              <div class="card-body">
                <h5 class="card-title">Recent Projects</h5>
                <table class="table mt-2">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th width="40%">Name</th>
                    <th>Category</th>
                    <th>Created by</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="project in projects">
                    <td>1</td>
                    <td>
                      <router-link :to="'/dashboard/projects/id' + project.postId"
                      style="display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 400px;
    white-space: nowrap;">
                        {{ project.title }}
                      </router-link>
                    </td>
                    <td>
                      <span class="badge bg-purple bg-opacity-10 text-purple text-capitalize">{{ project.category }}</span>
                    </td>
                    <td>
                      <div class="d-flex gap-2 align-items-center">
                        <div class="avatar">
                          <img class="avatar-img rounded-circle" :src="project.createdBy.avatar" alt="avatar">
                        </div>
                        <div>
                          <div>{{ project.createdBy.first_name + ' ' + project.createdBy.last_name }}</div>
                          <div class="text-sm">{{ project.createdBy.position }}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>

                </table>
              </div>
            </div>

            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title">Activity</h5>
              </div>
              <apexchart :options="options9" :series="options9.series"/>
            </div>

          </div>

          <div class="col-lg-4">
            <div class="card dashboard-card dashboard-card_info shadow mb-4">
              <div class="card-body">
                <h5 class="card-title card-title_line">Project views</h5>
                <apexchart :options="viewsChart" :series="viewsChart.series"/>
              </div>
            </div>

            <div class="card shadow mb-4">
              <div class="card-body">
                <h5 class="card-title">Weekly visitors</h5>
              </div>
              <apexchart :options="visitorsChart" :series="visitorsChart.series"/>
            </div>

            <div class="card shadow mb-4">
              <div class="card-body">
                <h5 class="card-title">Popular projects</h5>

                <div class="project-popular-header">
                  <div>Project</div>
                  <div>Price</div>
                </div>

                <div class="project-popular">
                  <div class="project-popular__item" v-for="project in projects">
                    <div class="d-flex gap-2">
                      <img :src="project.image" alt="project">
                      <div>
                        <div class="project__title" style="    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 260px;
    white-space: nowrap;">{{ project.title }}</div>
                        <span class="badge bg-purple bg-opacity-10 text-purple text-capitalize">
                          {{ project.category }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div class="project__price text-success">{{ project.price }} $</div>
                      <span class="badge bg-success bg-opacity-10 text-success text-capitalize">
                          Active
                        </span>
                    </div>
                  </div>


                </div>
                <a href="#" class="btn w-100">All Projects</a>
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
import {onMounted, ref, watch} from "vue";
import ApexCharts from 'apexcharts'

import store from "@/store";
import Calendar from "@/components/Calendar.vue";
import * as data from "@/store/data";
import axios from "axios";

const viewsChart = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  series: [{
    name: 'Views',
    data: [30,40,35,50,67,90,125]
  }],
  dataLabels: {
    enabled: false
  },
  tooltip: {
    x: {
      show: false
    },
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
    height: 100,
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

const options5 = {
  series: [{
    name: 'series1',
    data: [30, 50, 70, 65, 80, 90]
  }],
  chart: {
    height: 110,
    type: 'area',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true
    }
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'numeric',
    lines: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  yaxis: [{
    y: 0,
    offsetX: 0,
    offsetY: 0,
    labels: {
      show: false,
    },
    padding: {
      left: 0,
      right: 0
    },
  }],
  tooltip: {
    x: {
      show: false,
      format: 'dd/MM/yy HH:mm'
    },
  },
};

const visitorsChart = {
  series: [{
    name: 'New Visitors',
    data: [70, 50, 30, 40, 90, 100, 100],
  }, {
    name: 'Returning Visitors',
    data: [20, 30, 50, 80, 20, 100, 90],
  }],
  chart: {
    height: 350,
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2
  },
  fill: {
    opacity: 0.1
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
};

const options9 = {
  height: 200,
  chart: {
    height: 200,
    type: 'bar',
    parentHeightOffset: 0,
    fontFamily: 'Poppins, sans-serif',
    toolbar: {
      show: false,
    },
  },
  colors: ['#EB4738', '#F7AE1D'],
  grid: {
    borderColor: '#c7d2dd',
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '15px',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'In Progress',
    data: [40, 28, 47, 22, 34, 25]
  }, {
    name: 'Complete',
    data: [30, 20, 37, 10, 28, 11]
  }],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    labels: {
      style: {
        colors: ['#353535'],
        fontSize: '16px',
      },
    },
    axisBorder: {
      color: '#8fa6bc',
    }
  },
  yaxis: {
    title: {
      text: ''
    },
    labels: {
      style: {
        colors: '#353535',
        fontSize: '16px',
      },
    },
    axisBorder: {
      color: '#f00',
    }
  },
  legend: {
    horizontalAlign: 'right',
    position: 'top',
    fontSize: '16px',
    offsetY: 0,
    labels: {
      colors: '#353535',
    },
    markers: {
      width: 10,
      height: 10,
      radius: 15,
    },
    itemMargin: {
      vertical: 0
    },
  },
  fill: {
    opacity: 1

  },
  tooltip: {
    style: {
      fontSize: '15px',
      fontFamily: 'Poppins, sans-serif',
    },
    y: {
      formatter: function (val) {
        return val
      }
    }
  }
}

const projects = ref([]);
const baseURL = data.BACKEND_API;

const api = axios.create({
  baseURL: data.BACKEND_API,
  withCredentials: true
});

async function getProjects() {
  const res = await api.get(baseURL + "/post/all");

  if (!res.data) {
    console.log('none');
    return false;
    // await Swal.fire('Error!', 'Error while sending request!', 'error');
  }

  if (res.data.success) {
    console.log(res.data);
    projects.value = res.data.projects;
  } else {
    console.log('none...');
    // await Swal.fire('Error!', res.data.error, 'error');
  }

}

getProjects();
</script>
