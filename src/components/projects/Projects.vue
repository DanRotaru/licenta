<template>
  <div class="pb-5">
    <div class="row">
      <!-- Main content START -->
      <div class="col-lg-8">

        <!-- Search option START -->
        <div class="row mb-4 align-items-center">
          <!-- Search bar -->
          <div class="col-xl-6">
            <div class="bg-body border shadow rounded-4 p-2">
              <div class="input-group">
                <input class="form-control border-0 me-1 shadow-none" type="text" placeholder="Search a project">
                <button type="button" class="btn btn-blue mb-0 rounded-4 border-0">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Select option -->
          <div class="col-xl-3 mt-3 mt-xl-0">
            <div class="bg-body border shadow rounded-4 p-2">
              <div class="input-group">
                <select class="form-select border-0">
                  <option value="recent" selected>Recently added</option>
                  <option value="popular">Most popular</option>
                  <option value="viewed">Most viewed</option>
                  <option value="rated">Top rated</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
            <!-- Advanced filter responsive toggler START -->
            <button class="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
              <i class="fas fa-sliders-h me-1"></i> Show filter
            </button>
            <!-- Advanced filter responsive toggler END -->
            <p class="mb-0 text-end">Showing 1-9 of 30 result</p>
          </div>

        </div>
        <!-- Search option END -->

        <!-- Course Grid START -->
        <div id="projects-list" class="row g-4">

          <Project v-if="projectsLoading" v-for="i in 4" loading="true"/>

          <Project
              v-if="!projectsLoading"
              v-for="project in projects"
              :project-url="(dashboard ? 'dashboard/projects/id' : 'project/id')  + project.postId"
              :profile-url="(dashboard ? 'dashboard/users/id' : 'user/id') + project.createdBy.userId"
              :title="project.title"
              :category="project.category"
              :language="project.language"
              :image="project.image"
              :price="project.price"
              :author="project.createdBy.first_name + ' ' + project.createdBy.last_name"
              :author-image="project.createdBy.avatar"
              :description="project.summary"
              :level="project.level"/>
        </div>
        <!-- Course Grid END -->

        <!-- Pagination START -->
        <div class="col-12 text-center mt-5">
          <!--                <button class="btn">-->
          <!--                  <i class="bi bi-arrow-clockwise"></i>-->
          <!--                  Load more</button>-->
        </div>
        <!-- Pagination END -->
      </div>
      <!-- Main content END -->

      <!-- Right sidebar START -->
      <div class="col-lg-4">
        <!-- Responsive offcanvas body START -->
        <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar">
          <div class="offcanvas-header bg-light">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar"
                    aria-label="Close"></button>
          </div>
          <div class="offcanvas-body p-3 p-lg-0">
            <form>
              <div class="card card-body shadow p-4 mb-4">
                <!-- Title -->
                <h4 class="mb-3">Category</h4>

                <div class="row">
                  <div class="col-6" v-for="(item, index) in data.categories">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" :value="item" :id="'categoryItem' + index" @change="filterCategory($event)">
                      <label class="form-check-label" :for="'categoryItem' + index">{{ item }}</label>
                    </div>
                    <!-- <span class="small">(1256)</span>-->
                  </div>
                </div>
              </div>

              <div class="card card-body shadow p-4 mb-4">
                <!-- Title -->
                <h4 class="mb-3">Project Type</h4>
                <ul class="list-inline mb-0 g-3">
                  <li class="list-inline-item mb-2" v-for="(type, index) in data.project_types">
                    <input type="checkbox" class="btn-check" :id="'project-type-' + index">
                    <label class="btn" :for="'project-type-' + index">{{ type }}</label>
                  </li>
                </ul>
              </div>

              <div class="card card-body shadow p-4 mb-4">
                <!-- Title -->
                <h4 class="mb-3">Skill level</h4>
                <ul class="list-inline mb-0">
                  <!-- Item -->
                  <li class="list-inline-item mb-2">
                    <input type="checkbox" class="btn-check" id="level--1">
                    <label class="btn" for="level--1">All levels</label>
                  </li>
                  <!-- Item -->
                  <li class="list-inline-item mb-2" v-for="(level, index) in data.project_levels">
                    <input type="checkbox" class="btn-check" :id="'level-' + index">
                    <label class="btn" :for="'level-' + index">{{ level }}</label>
                  </li>
                </ul>
              </div>

              <div class="card card-body shadow p-4 mb-4">
                <h4 class="mb-3">Programming language</h4>
                <ul class="list-inline mb-0 g-3">
                  <li class="list-inline-item mb-2" v-for="(project, index) in data.programming_languages">
                    <input type="checkbox" class="btn-check" :id="'programming-language-' + index">
                    <label class="btn" :for="'programming-language-' + index">{{ project }}</label>
                  </li>
                </ul>
              </div>

              <div class="card card-body shadow p-4 mb-4">
                <h4 class="mb-3">Display as</h4>

                <div class="d-flex gap-3">
                  <a class="btn w-100">
                    <i class="fas fa-fw fa-th-large"></i> Grid view
                  </a>

                  <a class="btn w-100">
                    <i class="fas fa-fw fa-list-ul"></i> List View
                  </a>
                </div>
              </div>
            </form><!-- Form End -->
          </div>

          <!-- Button -->
          <div class="d-grid p-2 p-lg-0 text-center">
            <button class="btn btn-primary mb-0">Filter Results</button>
          </div>

        </div>
        <!-- Responsive offcanvas body END -->
      </div>
      <!-- Right sidebar END -->
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import store from "@/store";
import Project from '@/components/cards/card-project.vue'
import * as data from '@/store/data'
import Choices from "choices.js";
defineProps(['dashboard']);

const projects = ref([]);
const projectsLoading = ref(true);

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

  setTimeout(() => {
    projectsLoading.value = false;
  }, 1000);

  if (res.data.success) {
    console.log(res.data);
    projects.value = res.data.projects;
  } else {
    console.log('none...');
    // await Swal.fire('Error!', res.data.error, 'error');
  }

}

getProjects();

function filterCategory(e) {
  if (e.target.checked) {
    const value = e.target.value;
    document.querySelectorAll('#projects-list .card-project').forEach(el => {
      el.parentNode.classList.add("d-none");
    })

    document.querySelectorAll(`#projects-list .card-project[data-category="${value}"]`).forEach(el => {
      el.parentNode.classList.remove('d-none');
    })
  } else {
    document.querySelectorAll(`#projects-list .card-project`).forEach(el => {
      el.parentNode.classList.remove('d-none');
    })
  }



}

onMounted(() => {
  const choices = document.querySelectorAll('.js-choice');

  choices.forEach(function (item) {
    const removeItemBtn = item.getAttribute('data-remove-item-button') === 'true';
    const placeHolder = item.getAttribute('data-placeholder') !== 'false';
    const placeHolderVal = item.getAttribute('data-placeholder-val') ? item.getAttribute('data-placeholder-val') : 'Type and hit enter';
    const maxItemCount = item.getAttribute('data-max-item-count') ? item.getAttribute('data-max-item-count') : 3;
    const searchEnabled = item.getAttribute('data-search-enabled') !== 'false';

    new Choices(item, {
      removeItemButton: removeItemBtn,
      placeholder: placeHolder,
      placeholderValue: placeHolderVal,
      maxItemCount: maxItemCount,
      searchEnabled: searchEnabled,
      allowHTML: true
    });
  });
});

</script>