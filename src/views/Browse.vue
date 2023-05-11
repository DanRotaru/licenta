<template>
  <Header/>

  <section class="section-browse" style="
    background: #F5F7F9;
    padding: 200px 0 100px;
    text-align: center;
">
    <div class="container"><h1>Browse projects</h1><h5 style="
    max-width: 600px;
    margin: 10px auto;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
">Browse our diverse range of innovative projects and discover the perfect solution for your needs.</h5></div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row">
        <!-- Main content START -->
        <div class="col-lg-8 col-xl-9">

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
                    <option value="">Most Viewed</option>
                    <option value="">Most popular</option>
                    <option value="">Recently added</option>
                    <option value="">Top rated</option>
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
          <div class="row g-4">
            <Card
              v-for="n in 9"
              project-url="project/1"
              profile-url="user/DanRotaru"
              :title="`Webify - professional-looking websites without any coding skills`"
              image="/img/webify.png"
              price="10"
              author="DanRotaru"
              author-image="https://avatars.githubusercontent.com/u/7759507"
              description="Webify is a website builder platform that allows anyone to create professional-looking websites without any coding skills. With a simple drag-and-drop interface, users can choose from a variety of pre-built templates and customize them to their liking with images, text, and other content. Webify also includes features such as built-in SEO optimization, e-commerce functionality, and responsive design to ensure that the websites created are optimized for search engines and display correctly on all devices."/>
          </div>
          <!-- Course Grid END -->

          <!-- Pagination START -->
          <div class="col-12 text-center mt-5">
<!--            <button class="btn">-->
<!--              <i class="bi bi-arrow-clockwise"></i>-->
<!--              Load more</button>-->
          </div>
          <!-- Pagination END -->
        </div>
        <!-- Main content END -->

        <!-- Right sidebar START -->
        <div class="col-lg-4 col-xl-3">
          <!-- Responsive offcanvas body START -->
          <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar">
            <div class="offcanvas-header bg-light">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar"
                      aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-3 p-lg-0">
              <form>
                <!-- Category START -->
                <div class="card card-body shadow p-4 mb-4">
                  <!-- Title -->
                  <h4 class="mb-3">Category</h4>
                  <!-- Category group -->
                  <div class="col-12">
                    <!-- Checkbox -->
                    <div
                      v-for="(item, index) in categories"
                      class="d-flex justify-content-between align-items-center">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" :id="'categoryItem' + index">
                        <label class="form-check-label" :for="'categoryItem' + index">{{ item }}</label>
                      </div>
                      <!-- <span class="small">(1256)</span>-->
                    </div>


                    <!-- Collapse body -->
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                      <div class="card card-body p-0">
                        <!-- Checkbox -->
                        <div
                            v-for="(item, index) in categories2"
                            class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" :id="'categoryItem2-' + index">
                            <label class="form-check-label" :for="'categoryItem2-' + index">{{ item }}</label>
                          </div>
                          <!-- <span class="small">(1256)</span>-->
                        </div>
                      </div>
                    </div>
                    <!-- Collapse button -->
                    <a class=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse"
                       href="#multiCollapseExample1" role="button" aria-expanded="false"
                       aria-controls="multiCollapseExample1">
                      See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span><i
                      class="fas fa-angle-down ms-2"></i>
                    </a>
                  </div>
                </div>
                <!-- Category END -->

                <!-- Language START -->
                <div class="card card-body shadow p-4 mb-4">
                  <!-- Title -->
                  <h4 class="mb-3">Language</h4>
                  <ul class="list-inline mb-0 g-3">
                    <li class="list-inline-item mb-2" v-for="(lang, index) in languages">
                      <input type="checkbox" class="btn-check" :id="'project-language-' + index">
                      <label class="btn btn-light btn-primary-soft-check" :for="'project-language-' + index">{{ lang }}</label>
                    </li>
                  </ul>
                </div>
                <!-- Language END -->

                <div class="card card-body shadow p-4 mb-4">
                  <!-- Title -->
                  <h4 class="mb-3">Skill level</h4>
                  <ul class="list-inline mb-0">
                    <!-- Item -->
                    <li class="list-inline-item mb-2">
                      <input type="checkbox" class="btn-check" id="btn-check-12">
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-12">All levels</label>
                    </li>
                    <!-- Item -->
                    <li class="list-inline-item mb-2">
                      <input type="checkbox" class="btn-check" id="btn-check-9">
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-9">Beginner</label>
                    </li>
                    <!-- Item -->
                    <li class="list-inline-item mb-2">
                      <input type="checkbox" class="btn-check" id="btn-check-10">
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-10">Intermediate</label>
                    </li>
                    <!-- Item -->
                    <li class="list-inline-item mb-2">
                      <input type="checkbox" class="btn-check" id="btn-check-11">
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-11">Advanced</label>
                    </li>
                  </ul>
                </div>

                <div class="card card-body shadow p-4 mb-4">
                  <h4 class="mb-3">Project type</h4>
                  <ul class="list-inline mb-0 g-3">
                    <li class="list-inline-item mb-2" v-for="(project, index) in project_types">
                      <input type="checkbox" class="btn-check" :id="'project-type-' + index">
                      <label class="btn btn-light btn-primary-soft-check" :for="'project-type-' + index">{{ project }}</label>
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
      </div><!-- Row END -->
    </div>
  </section>

  <Footer/>
</template>


<script setup>
import {ref} from 'vue'
import Card from '@/components/Card.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const categories = ['All', 'Web Dev', 'Mobile Dev', 'Desktop Apps', 'Game Dev', 'AI & ML', 'E-Commerce', 'Social Networking', 'Project Management', 'HR & Recruitment', 'Analytics & Data Viz', 'AR & VR', 'Cybersecurity', 'Education & Learning', 'IoT', 'CRM', 'Finance & Accounting', 'Healthcare Apps', 'Marketing & Advertising', 'Finance & Accounting', 'Productivity Tools', 'Content Management'];
const categories2 = ['Robotics & Automation', 'GIS & Mapping', 'Scientific Apps'];
const languages = [ 'JavaScript', 'Python', 'Java', 'TypeScript', 'PHP', 'HTML/CSS', 'C++', 'C#', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust', 'SQL', 'MATLAB', 'Perl', 'Lua', 'R', 'Dart', 'Objective-C', 'Shell', 'Scala' ];
const project_types = ['Web App', 'Mobile App', 'HTML/CSS/JS Components', 'Finished project (ready for startup)', 'Code snippets', 'Plugins', 'Modules', 'Desktop App', 'Other'];


</script>