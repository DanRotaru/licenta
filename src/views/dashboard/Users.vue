<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Users', '/users']]"/>

      <div class="wrapper">
        <section class="dashboard-hero">
          <h1>Users</h1>
          <h5>Browse the best of the best</h5>
        </section>


        <div class="row mb-4 align-items-center"><!-- Search bar -->
          <div class="col-xl-6">
            <div class="bg-body border shadow rounded-4 p-2">
              <div class="input-group"><input class="form-control border-0 me-1 shadow-none" type="text"
                                              placeholder="Search a user">
                <button type="button" class="btn btn-blue mb-0 rounded-4 border-0"><i class="bi bi-search"></i></button>
              </div>
            </div>
          </div><!-- Select option -->
          <div class="col-xl-3 mt-3 mt-xl-0">
            <div class="bg-body border shadow rounded-4 p-2">
              <div class="input-group"><select class="form-select border-0">
                <option value="">Most Viewed</option>
                <option value="">Most popular</option>
                <option value="">Top rated</option>
              </select></div>
            </div>
          </div><!-- Content -->
          <div class="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
            <!-- Advanced filter responsive toggler START -->
            <button class="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar"><i
                class="fas fa-sliders-h me-1"></i> Show filter
            </button><!-- Advanced filter responsive toggler END --><p class="mb-0 text-end">Showing 1-9 of 30
            result</p></div>
        </div>

        <div class="row g-4">

          <!-- Card item START -->
          <div class="col-lg-10 col-xl-6" v-for="user in users">
            <router-link :to="'/dashboard/users/id' + user.userId">
              <div class="card shadow p-2 text-black">
                <div class="row g-0">
                  <!-- Image -->
                  <div class="col-md-4">
                    <img :src="user.avatar" class="rounded-3" alt="img">
                  </div>

                  <!-- Card body -->
                  <div class="col-md-8">
                    <div class="card-body p-0 ps-3 pt-2 pe-2">
                      <!-- Title -->
                      <div class="d-sm-flex justify-content-sm-between mb-2">
                        <div>
                          <h5 class="card-title mb-0">{{ user.first_name }} {{ user.last_name }}</h5>
                          <p class="small mb-2 mb-sm-0">{{ user.position }}</p>
                        </div>
                        <span class="h6 fw-light">4.3<i class="fas fa-star text-warning ms-1"></i></span>
                      </div>
                      <!-- Content -->
                      <div class="text-truncate-3 mb-3" v-html="user.description"></div>
                      <!-- Info -->
                      <div class="d-sm-flex justify-content-sm-between align-items-center">
                        <!-- Title -->
                        <h6 class="text-orange mb-0">Web Development</h6>

                        <!-- Social button -->
                        <ul class="list-inline mb-0 mt-3 mt-sm-0">
                          <li class="list-inline-item">
                            <a class="mb-0 me-1 text-facebook" href="#"><i class="fab fa-fw fa-facebook-f"></i></a>
                          </li>
                          <li class="list-inline-item">
                            <a class="mb-0 me-1 text-instagram-gradient" href="#"><i
                              class="fab fa-fw fa-instagram"></i></a>
                          </li>
                          <li class="list-inline-item">
                            <a class="mb-0 me-1 text-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a>
                          </li>
                          <li class="list-inline-item">
                            <a class="mb-0 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Card item END -->
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import {ref} from "vue";
import axios from "axios";

const users = ref([]);

const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
  withCredentials: true
});

async function getUsers() {
  const res = await api.get(baseURL + "/user/all");

  if (!res.data) {
    console.log('none');
    // await Swal.fire('Error!', 'Error while sending request!', 'error');
    // return false;
  }

  if (res.data.success) {
    console.log(res.data);
    users.value = res.data.users;
  } else {
    console.log('none...');
    // await Swal.fire('Error!', res.data.error, 'error');
  }

}
getUsers();

</script>
