<template>
  <Header/>

  <div class="user-banner"></div>
  <section class="section-user">
    <div class="container">
      <div class="row g-0 g-lg-5">

        <!-- Left sidebar START -->
        <div class="col-lg-4">
          <div class="row">
            <div class="col-md-6 col-lg-12">
              <!-- Instructor image START -->
              <div class="card shadow p-2 mb-4 text-center">
                <div class="rounded-3">
                  <!-- Image -->
                  <img src="/img/me.webp" class="card-img" alt="user">
                </div>

                <!-- Card body -->
                <div class="card-body px-3">

                  <Rating :stars="5.0" class="mb-3"/>
                  <!-- Social media button -->
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item"> <a class="btn px-2 btn-sm bg-facebook" href="#"><i class="fab fa-fw fa-facebook-f"></i></a> </li>
                    <li class="list-inline-item"> <a class="btn px-2 btn-sm bg-instagram-gradient" href="#"><i class="fab fa-fw fa-instagram"></i></a> </li>
                    <li class="list-inline-item"> <a class="btn px-2 btn-sm bg-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a> </li>
                    <li class="list-inline-item"> <a class="btn px-2 btn-sm bg-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
                  </ul>
                </div>
              </div>
              <!-- Instructor image END -->
            </div>

            <div class="col-md-6 col-lg-12">
              <div class="card card-body shadow p-4 mb-4">

                <h4 class="mb-3">Location</h4>
                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3"><i class="fas fa-globe"></i></span>
                  <div class="ms-3">
                    <h6 class="mb-0">Republic of Moldova</h6>
                    <p class="mb-0 small">English, Romanian, Russian</p>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3"><i class="fas fa-city"></i></span>
                  <div class="ms-3">
                    <h6 class="mb-0">Chisinau</h6>
                    <p class="mb-0 small">Current city</p>
                  </div>
                </div>

                <hr>

                <h4 class="mb-3">Education</h4>
                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3"><i class="fas fa-graduation-cap"></i></span>
                  <div class="ms-3">
                    <h6 class="mb-0">Technical University of Moldova</h6>
                    <p class="mb-0 small">Licensed engineer</p>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3"><i class="fas fa-graduation-cap"></i></span>
                  <div class="ms-3">
                    <h6 class="mb-0">East Ray University</h6>
                    <p class="mb-0 small">Bachelor in Computer Graphics</p>
                  </div>
                </div>

                <hr>

                <h4 class="mb-3">Skills</h4>

                <!-- Progress item -->
                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">HTML/CSS</h6>
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div class="progress-bar bg-warning aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 95%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                      <span class="progress-percent-simple h6 mb-0">95%</span>
                    </div>
                  </div>
                </div>

                <!-- Progress item -->
                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">JavaScript</h6>
                  <div class="progress progress-sm bg-primary bg-opacity-10">
                    <div class="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 80%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span class="progress-percent-simple h6 mb-0">80%</span>
                    </div>
                  </div>
                </div>

                <!-- Progress item -->
                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">Web design</h6>
                  <div class="progress progress-sm bg-success bg-opacity-10">
                    <div class="progress-bar bg-success aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 70%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <span class="progress-percent-simple h6 mb-0">70%</span>
                    </div>
                  </div>
                </div>

                <!-- Progress item -->
                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">UI/UX</h6>
                  <div class="progress progress-sm bg-danger bg-opacity-10">
                    <div class="progress-bar bg-danger aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <span class="progress-percent-simple h6 mb-0">50%</span>
                    </div>
                  </div>
                </div>
                <!-- Skills END -->

              </div>
            </div>
          </div> <!-- Row End -->
        </div>
        <!-- Left sidebar END -->

        <!-- Main content START -->
        <div class="col-lg-8">

          <!-- Title -->
          <h5 class="mb-0">Hi, I am</h5>
          <h1 class="mb-0">Dan Rotaru</h1>
          <p>FullStack Web Developer</p>
          <!-- Content -->
          <p class="mt-4">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
          <p>We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
          <!-- Personal info -->
          <ul class="list-group list-group-borderless">
            <li class="list-group-item px-0">
              <span class="h6 fw-light"><i class="fas fa-fw fa-envelope text-primary me-1 me-sm-3"></i>Email:</span>
              <a href="#">rotaru.dan@isa.utm.md</a>
            </li>
            <li class="list-group-item px-0">
              <span class="h6 fw-light"><i class="fas fa-fw fa-headphones text-primary me-1 me-sm-3"></i>Phone number:</span>
              <a href="#">(373) 69-020-119</a>
            </li>
            <li class="list-group-item px-0">
              <span class="h6 fw-light"><i class="fas fa-fw fa-globe text-primary me-1 me-sm-3"></i>Website:</span>
              <a href="https://danrotaru.github.io/" target="_blank">https://danrotaru.github.io/</a>
            </li>
          </ul>

          <!-- Counter START -->
          <div class="row mt-4 g-3">
            <!-- Counter item -->
            <div class="col-sm-6 col-lg-4">
              <div class="d-flex align-items-center">
                <span class="icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3"><i class="fas fa-play"></i></span>
                <div class="ms-3">
                  <div class="d-flex">
                    <h5 class="mb-0 fw-bold f-inter">15</h5>
                    <span class="mb-0 h5">+</span>
                  </div>
                  <p class="mb-0 h6 fw-light">Total Projects</p>
                </div>
              </div>
            </div>
            <!-- Counter item -->
            <div class="col-sm-6 col-lg-4">
              <div class="d-flex align-items-center">
                <span class="icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0"><i class="fas fa-users"></i></span>
                <div class="ms-3">
                  <div class="d-flex">
                    <h5 class="mb-0 fw-bold f-inter">36</h5>
                    <span class="mb-0 h5">K+</span>
                  </div>
                  <p class="mb-0 h6 fw-light">Total Users</p>
                </div>
              </div>
            </div>
            <!-- Counter item -->
            <div class="col-sm-6 col-lg-4">
              <div class="d-flex align-items-center">
                <span class="icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0"><i class="fas fa-trophy"></i></span>
                <div class="ms-3">
                  <div class="d-flex">
                    <h5 class="mb-0 fw-bold f-inter">5</h5>
                    <span class="mb-0 h5">+</span>
                  </div>
                  <p class="mb-0 h6 fw-light">Years in Experience</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Counter END -->

          <!-- Course START -->
          <div class="row g-4 mt-4">
            <!-- Title -->
            <h2>Project list</h2>

            <Card
                cardType="2"
                v-for="n in 2"
                project-url="project/1"
                profile-url="user/DanRotaru"
                image="/img/webify.png"
                :title="`Webify - professional-looking websites without any coding skills`"
                price="10"
                author="DanRotaru"
                author-image="/img/me.webp"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>

          </div>
          <!-- Course END -->
        </div>
        <!-- Main content END -->

      </div><!-- Row END -->
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Rating from "@/components/Rating.vue";
import Card from "@/components/cards/card-project.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>