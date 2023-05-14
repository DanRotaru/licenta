<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Help"/>

      <div class="wrapper">
        <div class="container">
          <div class="row g-4 g-sm-5 align-items-center py-4">
            <div class="col-lg-6 col-xl-5">
              <h1>Access to Full Resources</h1>
              <!-- Request search bar -->
              <form class="row align-items-center justify-content-center my-4">
                <div class="col-12">
                  <p class="mb-2 h6 fw-light">Enter your email address to get access</p>
                  <div class="bg-body shadow rounded-3 p-2">
                    <div class="input-group">
                      <input class="form-control border-0 me-1" type="email" placeholder="Enter your email">
                      <button type="button" class="btn btn-blue mb-0 rounded-3">Request access!</button>
                    </div>
                  </div>
                </div>
              </form>

              <!-- Avatar group and rating -->
              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div>
                  <!-- Avatar group -->
                  <ul class="avatar-group mb-3 mb-sm-0">
                    <li class="avatar avatar-sm">
                      <img class="avatar-img rounded-circle" src="/img/me.webp" alt="avatar">
                    </li>
                    <li class="avatar avatar-sm">
                      <img class="avatar-img rounded-circle" src="/img/me.webp" alt="avatar">
                    </li>
                    <li class="avatar avatar-sm">
                      <img class="avatar-img rounded-circle" src="/img/me.webp" alt="avatar">
                    </li>
                    <li class="avatar avatar-sm">
                      <img class="avatar-img rounded-circle" src="/img/me.webp" alt="avatar">
                    </li>
                    <li class="avatar avatar-sm">
                      <img class="avatar-img rounded-circle" src="/img/me.webp" alt="avatar">
                    </li>
                    <li class="avatar avatar-sm">
                      <div class="avatar-img rounded-circle bg-primary">
                        <span class="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Rating -->
                <div class="d-flex align-items-center">
                  <h5 class="mb-0 me-2">4.5/5.0</h5>
                  <ul class="list-inline mb-1">
                    <li class="list-inline-item me-0 mb-0"><i class="fas fa-star text-warning"></i></li>
                    <li class="list-inline-item me-0 mb-0"><i class="fas fa-star text-warning"></i></li>
                    <li class="list-inline-item me-0 mb-0"><i class="fas fa-star text-warning"></i></li>
                    <li class="list-inline-item me-0 mb-0"><i class="fas fa-star text-warning"></i></li>
                    <li class="list-inline-item me-0 mb-0"><i class="fas fa-star-half-alt text-warning"></i></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="col-lg-6 col-xl-7 text-center">
              <img src="/img/16.svg" alt="img">
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
import CardLoading from "@/components/Card-Loading.vue";
</script>