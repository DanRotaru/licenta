<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Users"/>

      <div class="wrapper">
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

        <div class="row g-4 justify-content-center">

          <!-- Card item START -->
          <div class="col-lg-10 col-xl-6" v-for="n in 10">
            <div class="card shadow p-2">
              <div class="row g-0">
                <!-- Image -->
                <div class="col-md-4">
                  <img src="/img/me.webp" class="rounded-3" alt="img">
                </div>

                <!-- Card body -->
                <div class="col-md-8">
                  <div class="card-body">
                    <!-- Title -->
                    <div class="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                      <div>
                        <h5 class="card-title mb-0"><a href="#">DanRotaru</a></h5>
                        <p class="small mb-2 mb-sm-0">Fullstack web developer</p>
                      </div>
                      <span class="h6 fw-light">4.3<i class="fas fa-star text-warning ms-1"></i></span>
                    </div>
                    <!-- Content -->
                    <p class="text-truncate-4 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur cumque ex, in
                      maxime officia pariatur perferendis perspiciatis possimus rem rerum totam. Culpa doloremque eius
                      est et repellat unde vero.
                    </p>
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
</script>
