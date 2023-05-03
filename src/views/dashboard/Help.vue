<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Help"/>

      <div class="wrapper">
        <div>help</div>

        <div class="row g-4" style="width: 900px;">
          <div class="col-6">
            <div class="card shadow h-100 card-project">
              <a href="/dashboard/projects/1" class="">
                <img src="/img/webify.png" class="card-img-top" alt="project image"/>
              </a>
              <div class="card-body pb-0">
                <div class="d-flex justify-content-between mb-2">
                  <div class="d-flex gap-1">
                    <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
                  </div>
                  <a href="#" class="h6 fw-light mb-0">
                    <i class="far fa-heart"></i>
                  </a>
                </div>
                <h5 class="card-title">
                  <a href="/dashboard/projects/1" class="">
                    Webify - professional-looking websites without any coding skills
                  </a>
                </h5>
                <p class="mb-2 text-truncate-3">
                  Webify is a website builder platform that allows anyone to create professional-looking websites
                </p>
              </div>
              <div class="card-footer py-3">
                <a href="/user/DanRotaru" class="user-avatar">
                  <img src="https://avatars.githubusercontent.com/u/7759507" alt="avatar">
                  <div>
                    <span>DanRotaru</span>
                    <div class="rating">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                        <li class="list-inline-item ms-2 h6 fw-medium mb-0">4.5/5.0</li>
                      </ul>
                    </div>
                  </div>
                  <div class="user-avatar__price">10$</div>
                </a>
              </div>
            </div>
          </div>

          <div class="col-6" v-for="n in 9">
            <CardLoading/>
          </div>
        </div>

        <div class="cards">


          <div class="card is-loading">
            <div class="image"></div>
            <div class="content">
              <h2></h2>
              <p></p>
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