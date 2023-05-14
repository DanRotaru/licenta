<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Support"/>

      <div class="wrapper">
        <!-- =======================
          Page Banner START -->
        <section class="bg-primary bg-opacity-10 rounded-4">
          <div class="container">
            <div class="row">
              <!-- Content START -->
              <div class="col-lg-8 mx-auto text-center">
                <!-- Title -->
                <h1 class="display-6">Search Solution. Get Support</h1>
                <p class="mb-0">Search here to get answers to your questions.</p>
                <!-- Search bar -->
                <form class="bg-body rounded p-2 mt-4">
                  <div class="input-group">
                    <input class="form-control border-0 me-1" type="text" placeholder="Search question...">
                    <button type="button" class="btn btn-dark mb-0 rounded">Search</button>
                  </div>
                </form>

                <!-- Popular questions START -->
                <div class="row mt-4 align-items-center">
                  <div class="col-12">
                    <h5 class="mb-3">Popular questions</h5>
                    <!-- Questions List START -->
                    <div class="list-group list-group-horizontal gap-2 justify-content-center flex-wrap mb-0 border-0">
                      <a class="btn btn-white btn-sm fw-light" href="#"> How can we help?</a>
                      <a class="btn btn-white btn-sm fw-light" href="#"> How to upload data to the system? </a>
                      <a class="btn btn-white btn-sm fw-light" href="#"> Installation Guide? </a>
                      <a class="btn btn-white btn-sm fw-light" href="#"> How to view expired course? </a>
                      <a class="btn btn-white btn-sm fw-light" href="#"> What's are the difference between a social?</a>
                      <a class="btn btn-primary-soft btn-sm fw-light" href="#">View all question</a>
                    </div>
                    <!-- Questions list END -->
                  </div>
                </div>
                <!-- Popular questions END -->
              </div>
              <!-- Content END -->

              <!-- Image -->
              <div class="col-12 mt-6">
                <img src="assets/images/element/help-center.svg" class="w-100" alt="">
              </div>
            </div>
          </div>
        </section>
        <!-- =======================
        Page Banner END -->

        <!-- =======================
        Recommended topics START -->
        <section>
          <div class="container">
            <!-- Titles -->
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="text-center mb-4">Recommended Topics</h2>
              </div>
            </div>

            <!-- Row START -->
            <div class="row g-4">
              <div class="col-md-6 col-xl-3">
                <!-- Card START -->
                <div class="card bg-light h-100">
                  <!-- Title -->
                  <div class="card-header bg-light pb-0 border-0">
                    <i class="bi bi-emoji-smile fs-1 text-success"></i>
                    <h5 class="card-title mb-0 mt-2">Get started </h5>
                  </div>
                  <!-- List -->
                  <div class="card-body">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Gulp and Customization</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Color Scheme and Logo Settings</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Dark mode, RTL Version and Lazy Load</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Sources, Credits and Changelog</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Updates and Support</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Card END -->
              </div>

              <div class="col-md-6 col-xl-3">
                <!-- Card START -->
                <div class="card bg-light h-100">
                  <!-- Title -->
                  <div class="card-header bg-light pb-0 border-0">
                    <i class="bi bi-layers fs-1 text-warning"></i>
                    <h5 class="card-title mb-0 mt-2">Account Setup</h5>
                  </div>
                  <!-- List -->
                  <div class="card-body">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Connecting to your Account</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Edit your profile information</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Connecting to other Social Media Accounts</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Adding your profile picture</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Describing your store</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Card END -->
              </div>

              <div class="col-md-6 col-xl-3">
                <!-- Card START -->
                <div class="card bg-light h-100">
                  <!-- Title -->
                  <div class="card-header bg-light pb-0 border-0">
                    <i class="bi bi-info-circle fs-1 text-orange"></i>
                    <h5 class="card-title mb-0 mt-2">Other Topics </h5>
                  </div>
                  <!-- List -->
                  <div class="card-body">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Security &amp; Privacy</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Author, Publisher &amp; Admin Guides</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Pricing plans</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Sales Tax &amp; Regulatory Fees</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Promotions &amp; Deals</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Card END -->
              </div>

              <div class="col-md-6 col-xl-3">
                <!-- Card START -->
                <div class="card bg-light h-100">
                  <!-- Title START -->
                  <div class="card-header bg-light pb-0 border-0">
                    <i class="bi bi-house fs-1 text-purple"></i>
                    <h5 class="card-title mb-0 mt-2">Advanced Usage </h5>
                  </div>
                  <!-- List -->
                  <div class="card-body">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Admin &amp; Billing</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Become a Pro</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Mobile application</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Guide</a></li>
                      <li class="nav-item"><a class="nav-link d-flex" href="#"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Promotions &amp; Deals</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Card END -->
              </div>
            </div>
            <!-- Row END -->
          </div>
        </section>
        <!-- =======================
        Recommended topics END -->

        <!-- =======================
        Action boxes START -->
        <section>
          <div class="container">
            <div class="row g-4">

              <!-- Action box item -->
              <div class="col-lg-4">
                <div class="bg-info bg-opacity-10 rounded-3 p-5">
                  <!-- Icon -->
                  <h2 class="display-5 text-info"><i class="bi bi-headset"></i></h2>
                  <!-- Title -->
                  <h3>Contact Support?</h3>
                  <p>Delay death ask to style Me mean able conviction For every delay death ask to style</p>
                  <!-- Button -->
                  <a href="#" class="btn btn-dark mb-0">Contact Us</a>
                </div>
              </div>

              <!-- Action box item -->
              <div class="col-lg-4">
                <div class="bg-purple bg-opacity-10 rounded-3 p-5">
                  <!-- Icon -->
                  <h2 class="display-5 text-purple"><i class="fas fa-ticket-alt"></i></h2>
                  <!-- Title -->
                  <h3>Submit a Ticket</h3>
                  <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
                  <!-- Button -->
                  <a href="#" class="btn btn-dark mb-0">Submit Ticket</a>
                </div>
              </div>

              <!-- Action box item -->
              <div class="col-lg-4">
                <div class="bg-warning bg-opacity-15 rounded-3 p-5">
                  <!-- Icon -->
                  <h2 class="display-5 text-warning"><i class="bi bi-envelope-fill"></i></h2>
                  <!-- Title -->
                  <h3>Request a feature</h3>
                  <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
                  <!-- Button -->
                  <a href="#" class="btn btn-dark mb-0">Request</a>
                </div>
              </div>

            </div> <!-- Row END -->
          </div>
        </section>
        <!-- =======================
        Action boxes ENd -->

      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
</script>
