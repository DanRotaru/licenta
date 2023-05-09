<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Users', '/dashboard/users'], [userInfo.first_name + ' ' + userInfo.last_name]]"/>

      <div class="wrapper">
        <div v-if="userInfo.founded" class="row g-0 g-lg-5">
          <div class="col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <div class="card shadow p-2 mb-4 text-center">
                  <div class="rounded-3">
                    <img :src="userInfo.avatar" class="card-img" alt="user">
                  </div>
                  
                  <div class="card-body px-3">
                    <div>User 1 - {{ id }}</div>
                    <div class="rating mb-3">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item ms-2 h6 fw-medium mb-0">5/5.0</li>
                      </ul>
                    </div>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item"><a class="btn px-2 btn-sm bg-facebook" href="#"><i
                          class="fab fa-fw fa-facebook-f"></i></a></li>
                      <li class="list-inline-item"><a class="btn px-2 btn-sm bg-instagram-gradient" href="#"><i
                          class="fab fa-fw fa-instagram"></i></a></li>
                      <li class="list-inline-item"><a class="btn px-2 btn-sm bg-twitter" href="#"><i
                          class="fab fa-fw fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a class="btn px-2 btn-sm bg-linkedin" href="#"><i
                          class="fab fa-fw fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div></div>
              <div class="col-md-6 col-lg-12">
                <div class="card card-body shadow p-4 mb-4"><h4 class="mb-3">Location</h4>
                  <div class="d-flex align-items-center mb-4"><span class="icon-md mb-0 bg-light rounded-3"><i
                      class="fas fa-globe"></i></span>
                    <div class="ms-3"><h6 class="mb-0">Republic of Moldova</h6>
                      <p class="mb-0 small">English, Romanian, Russian</p></div>
                  </div>
                  <div class="d-flex align-items-center mb-4"><span class="icon-md mb-0 bg-light rounded-3"><i
                      class="fas fa-city"></i></span>
                    <div class="ms-3"><h6 class="mb-0">Chisinau</h6>
                      <p class="mb-0 small">Current city</p></div>
                  </div>
                  <hr>
                  <h4 class="mb-3">Education</h4>
                  <div class="d-flex align-items-center mb-4"><span class="icon-md mb-0 bg-light rounded-3"><i
                      class="fas fa-graduation-cap"></i></span>
                    <div class="ms-3"><h6 class="mb-0">Technical University of Moldova</h6>
                      <p class="mb-0 small">Licensed engineer</p></div>
                  </div>
                  <div class="d-flex align-items-center mb-4"><span class="icon-md mb-0 bg-light rounded-3"><i
                      class="fas fa-graduation-cap"></i></span>
                    <div class="ms-3"><h6 class="mb-0">East Ray University</h6>
                      <p class="mb-0 small">Bachelor in Computer Graphics</p></div>
                  </div>
                  <hr>
                  <h4 class="mb-3">Skills</h4>
                  <div class="overflow-hidden mb-4"><h6 class="uppercase">HTML/CSS</h6>
                    <div class="progress progress-sm bg-warning bg-opacity-15">
                      <div class="progress-bar bg-warning aos aos-init aos-animate" role="progressbar"
                           data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000"
                           data-aos-easing="ease-in-out" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 95%;"><span class="progress-percent-simple h6 mb-0">95%</span></div>
                    </div>
                  </div>
                  <div class="overflow-hidden mb-4"><h6 class="uppercase">JavaScript</h6>
                    <div class="progress progress-sm bg-primary bg-opacity-10">
                      <div class="progress-bar bg-primary aos aos-init aos-animate" role="progressbar"
                           data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000"
                           data-aos-easing="ease-in-out" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                           style="width: 80%;"><span class="progress-percent-simple h6 mb-0">80%</span></div>
                    </div>
                  </div>
                  <div class="overflow-hidden mb-4"><h6 class="uppercase">Web design</h6>
                    <div class="progress progress-sm bg-success bg-opacity-10">
                      <div class="progress-bar bg-success aos aos-init aos-animate" role="progressbar"
                           data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000"
                           data-aos-easing="ease-in-out" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                           style="width: 70%;"><span class="progress-percent-simple h6 mb-0">70%</span></div>
                    </div>
                  </div>
                  <div class="overflow-hidden mb-4"><h6 class="uppercase">UI/UX</h6>
                    <div class="progress progress-sm bg-danger bg-opacity-10">
                      <div class="progress-bar bg-danger aos aos-init aos-animate" role="progressbar"
                           data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000"
                           data-aos-easing="ease-in-out" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                           style="width: 50%;"><span class="progress-percent-simple h6 mb-0">50%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
          <div class="col-lg-8"><h5 class="mb-0">Hi, I am</h5>
            <h1 class="mb-0">
              {{ userInfo.first_name }} {{ userInfo.last_name }}
            </h1>
            <p class="opacity-9">{{ userInfo.position }}</p>

            <div v-html="userInfo.description"></div>
            
            <ul class="list-group list-group-borderless">
              <li class="list-group-item px-0"><span class="h6 fw-light"><i
                  class="fas fa-fw fa-envelope text-primary me-1 me-sm-3"></i>Email:</span><a href="#">rotaru.dan@isa.utm.md</a>
              </li>
              <li class="list-group-item px-0"><span class="h6 fw-light"><i
                  class="fas fa-fw fa-headphones text-primary me-1 me-sm-3"></i>Phone number:</span><a href="#">(373)
                69-020-119</a></li>
              <li class="list-group-item px-0"><span class="h6 fw-light"><i
                  class="fas fa-fw fa-globe text-primary me-1 me-sm-3"></i>Website:</span><a
                  href="https://danrotaru.github.io/" target="_blank">https://danrotaru.github.io/</a></li>
            </ul>
            <div class="row mt-4 g-3">
              <div class="col-sm-6 col-lg-4">
                <div class="d-flex align-items-center"><span
                    class="icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3"><i
                    class="fas fa-play"></i></span>
                  <div class="ms-3">
                    <div class="d-flex"><h5 class="mb-0 fw-bold f-inter">15</h5><span class="mb-0 h5">+</span></div>
                    <p class="mb-0 h6 fw-light">Total Projects</p></div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="d-flex align-items-center"><span
                    class="icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0"><i
                    class="fas fa-users"></i></span>
                  <div class="ms-3">
                    <div class="d-flex"><h5 class="mb-0 fw-bold f-inter">36</h5><span class="mb-0 h5">K+</span></div>
                    <p class="mb-0 h6 fw-light">Total Users</p></div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="d-flex align-items-center"><span
                    class="icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0"><i
                    class="fas fa-trophy"></i></span>
                  <div class="ms-3">
                    <div class="d-flex"><h5 class="mb-0 fw-bold f-inter">5</h5><span class="mb-0 h5">+</span></div>
                    <p class="mb-0 h6 fw-light">Years in Experience</p></div>
                </div>
              </div>
            </div>
            <div class="row g-4 mt-4"><h2>Project list</h2>
              <div class="col-sm-6 cardTypeClass">
                <div class="card shadow h-100 card-project"><a href="/project/1" class=""><img
                    src="/img/webify.png" class="card-img-top" alt="project image"></a>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between mb-2">
                      <div class="d-flex gap-1"><a href="#" class="badge bg-purple bg-opacity-10 text-purple">All
                        level</a></div>
                      <a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a></div><h5
                        class="card-title"><a href="/project/1" class="">Webify - professional-looking websites without
                      any coding skills</a></h5>
                    <p class="mb-2 text-truncate-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.</p></div>
                  <div class="card-footer py-3"><a aria-current="page" href="/user/DanRotaru"
                                                   class="router-link-active router-link-exact-active user-avatar"><img
                      src="/img/me.webp" alt="avatar">
                    <div><span>DanRotaru</span>
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
                  </a></div>
                </div>
              </div>
              <div class="col-sm-6 cardTypeClass">
                <div class="card shadow h-100 card-project"><a href="/project/1" class=""><img
                    src="/img/webify.png" class="card-img-top" alt="project image"></a>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between mb-2">
                      <div class="d-flex gap-1"><a href="#" class="badge bg-purple bg-opacity-10 text-purple">All
                        level</a></div>
                      <a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a></div><h5
                        class="card-title"><a href="/project/1" class="">Webify - professional-looking websites without
                      any coding skills</a></h5>
                    <p class="mb-2 text-truncate-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.</p></div>
                  <div class="card-footer py-3"><a aria-current="page" href="/user/DanRotaru"
                                                   class="router-link-active router-link-exact-active user-avatar"><img
                      src="/img/me.webp" alt="avatar">
                    <div><span>DanRotaru</span>
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
                  </a></div>
                </div>
              </div>
            </div></div></div>

        <div v-if="userInfo.not_found" class="row">
          <div class="text-center">
            <h1>User not found!</h1>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import {onMounted, ref} from "vue";

import {useRoute} from "vue-router";
import axios from "axios";

const route = useRoute();
const id = route.params.id;

const userInfo = ref({
  first_name: '',
  last_name: '',
  email: '',
  description: '',
  position: '',
  avatar: '',
  founded: false,
  not_found: false
});

// const id = '64579688899654c8cea1b4a3';

const baseURL = 'http://localhost:3000/api';
const api = axios.create({
  baseURL,
  withCredentials: true
});

async function getUserInfo(id) {
  const res = await api.get('/user/info/' + id);
  if (res.data.success) {
    userInfo.value.first_name = res.data.userInfo.first_name;
    userInfo.value.last_name = res.data.userInfo.last_name;
    userInfo.value.email = res.data.userInfo.email;
    userInfo.value.description = res.data.userInfo.description;
    userInfo.value.position = res.data.userInfo.position;
    userInfo.value.avatar = res.data.userInfo.avatar;
    userInfo.value.founded = true;
  } else {
    userInfo.value.not_found = true;
  }
  console.log(res);
}

getUserInfo(id);


onMounted(() => {
  document.querySelector('a[href="/dashboard/users"]').classList.add("router-link-active");
})
</script>
