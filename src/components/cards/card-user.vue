<template>
  <div class="col-lg-10 col-xl-6">
    <!-- DEFAULT STATE -->
    <router-link :to="'/dashboard/users/id' + userId">
      <div v-if="!loading" class="card shadow p-2 text-black mb-3">
        <div class="row g-0">
          <!-- Image -->
          <div class="col-md-4">
            <img :src="avatar" class="rounded-3" alt="img">
          </div>

          <!-- Card body -->
          <div class="col-md-8">
            <div class="card-body p-0 ps-3 pt-2 pe-2 h-100 d-flex flex-column">
              <!-- Title -->
              <div class="d-sm-flex justify-content-sm-between mb-2">
                <div>
                  <h5 class="card-title mb-0">{{ first_name }} {{ last_name }}</h5>
                  <p class="small mb-2 mb-sm-0">{{ position ? position : 'User Position' }}</p>
                </div>
                <span class="h6 fw-light">
              {{ rating ? rating : '5.0' }}
              <i class="fas fa-star text-warning ms-1"></i>
            </span>
              </div>
              <!-- Content -->
              <div class="text-truncate-4 mb-3" v-html="description ? description : 'User description'"></div>
              <!-- Info -->
              <div class="d-sm-flex justify-content-sm-between align-items-center mt-auto mb-1">
                <!-- Title -->
                <h6 class="text-orange mb-0">{{ category }}</h6>

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

    <!-- LOADING STATE -->
    <div v-if="loading" class="card shadow p-2 text-black mb-3">
      <div class="row g-0">
        <!-- Image -->
        <div class="col-md-4">
          <Skeleton width="100%" height="222" class="rounded-3"/>
        </div>

        <!-- Card body -->
        <div class="col-md-8">
          <div class="card-body p-0 ps-3 pt-2 pe-2">
            <!-- Title -->
            <div class="d-sm-flex justify-content-sm-between mb-2">
              <div>
                <Skeleton width="150" height="26"/>
                <Skeleton width="200" height="22" top="5"/>
              </div>

              <Skeleton width="100" height="20"/>
            </div>
            <!-- Content -->
            <Skeleton width="100%" height="112" top="7"/>
            <!-- Info -->
            <div class="d-sm-flex justify-content-sm-between align-items-center">
              <!-- Title -->
              <Skeleton width="150" height="25" top="15"/>

              <!-- Social button -->
              <Skeleton width="100" height="15" top="15"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import Skeleton from "@/components/Skeleton.vue";

const props = defineProps([
  'loading',
  'userId',
  'first_name',
  'last_name',
  'avatar',
  'position',
  'description',
  'category',
  'rating'
]);
</script>