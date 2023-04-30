<template>
  <div class="dashboard chat">
    <Navigation/>

    <main>
      <Header page="Chat"/>

      <div class="wrapper">
        <div class="row gx-3 h-100">
          <div class="col-lg-3">
            <div class="card shadow card-body h-100">
              <h4 class="h4">Messages</h4>

              <div class="search">
                <form class="position-relative">
                  <input class="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search">
                  <button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i class="fas fa-search fs-6 "></i>
                  </button>
                </form>
              </div>
            </div>

          </div>
          <div class="col-lg-9 mt-lg-0 mt-4">

            <div class="card shadow card-body h-100">
              <div class="d-flex align-items-center"><!-- Avatar -->
                <div class="avatar me-3"><img class="avatar-img rounded-circle shadow" src="/img/me.webp"
                                              alt="avatar"></div>
                <div>
                  <a class="h6">Dan Rotaru</a>
                  <p class="user__email">dan.rotaru2000@gmail.com</p>
                </div>
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
</script>
