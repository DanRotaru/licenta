<template>
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

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.5 20.5" class="h-20px">
            <path d="m20.5,10.25c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33,2.19c-1.4-.46-2.91-.2-3.92.81-1.01,1.01-1.26,2.52-.8,3.91-1.31.67-2.2,1.91-2.2,3.34s.89,2.67,2.2,3.34c-.46,1.39-.21,2.9.8,3.91,1.01,1.01,2.52,1.26,3.91.81.67,1.31,1.91,2.19,3.34,2.19s2.68-.88,3.34-2.19c1.39.45,2.9.2,3.91-.81s1.27-2.52.81-3.91c1.31-.67,2.19-1.91,2.19-3.34Zm-11.71,4.2l-3.74-3.74,1.41-1.42,2.26,2.26,4.8-5.23,1.47,1.36s-6.2,6.77-6.2,6.77Z" style="fill: #1d9bf0;"/>
            <path d="m8.79,14.45l-3.74-3.74,1.41-1.42,2.26,2.26,4.8-5.23,1.47,1.36s-6.2,6.77-6.2,6.77Z" style="fill: #fff;"/>
          </svg>
        </h1>
        <p class="opacity-9">{{ userInfo.position }}</p>

        <div v-html="userInfo.description"></div>

        <ul class="list-group list-group-borderless">
          <li class="list-group-item px-0"><span class="h6 fw-light"><i
              class="fas fa-fw fa-envelope text-primary me-1 me-sm-3"></i>Email:</span>
            <a href="#">{{ userInfo.email }}</a>
          </li>
          <li class="list-group-item px-0"><span class="h6 fw-light"><i
              class="fas fa-fw fa-headphones text-primary me-1 me-sm-3"></i>Phone number:</span>
            <a href="#">{{ userInfo.phone ? userInfo.phone : 'none' }}</a>
          </li>
          <li class="list-group-item px-0"><span class="h6 fw-light"><i
              class="fas fa-fw fa-globe text-primary me-1 me-sm-3"></i>Website:</span>
            <a :href="userInfo.website ? userInfo.website : '#none'" target="_blank">{{ userInfo.website ? userInfo.website : 'none' }}</a>
          </li>
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
        <div class="row g-4 mt-4">
          <h2>Project list</h2>

          <Project v-if="projectsLoading" v-for="i in 4" loading="true"/>

          <Project
              v-if="!projectsLoading"
              v-for="project in userInfo.projects"
              :project-url="'dashboard/projects/id'  + project.postId"
              :profile-url="'dashboard/users/id' + project.createdBy.userId"
              :title="project.title"
              :image="project.image"
              :price="project.price"
              :author="project.createdBy.first_name + ' ' + project.createdBy.last_name"
              :author-image="project.createdBy.avatar"
              :description="project.summary"
              :level="project.level"/>

        </div>
      </div>
    </div>

    <div v-if="userInfo.not_found" class="row">
      <div class="text-center">
        <h1>User not found!</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import * as data from "@/store/data";
import Project from "@/components/cards/card-project.vue";

const projectsLoading = ref(true);

setTimeout(() => {
  projectsLoading.value = false;
}, 1000);

const props = defineProps({
  userId: {
    type: Number
  },
  height: {
    type: [Number, String],
    default: '100%',
  },
});

const route = useRoute();
const id = route.params.id;

const userInfo = ref({
  first_name: '',
  last_name: '',
  email: '',
  description: '',
  position: '',
  avatar: '',
  projects: [],
  founded: false,
  not_found: false
});

// const id = '64579688899654c8cea1b4a3';

const baseURL = data.BACKEND_API;
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
    userInfo.value.projects = res.data.userInfo.projects;

    userInfo.value.founded = true;
  } else {
    userInfo.value.not_found = true;
  }
  console.log(res);
}

getUserInfo(id);


onMounted(() => {
  const link = document.querySelector('a[href="/dashboard/users"]');
  if (link) {
    link.classList.add("router-link-active");
  }
})
</script>
