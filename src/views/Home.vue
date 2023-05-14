<template>
  <Header/>

  <section class="hero">
    <div class="container">
      <div class="hero-beta">
        <a href="#" class="hero-beta__btn">Blank 2023 Release</a>
        <a href="#" class="hero-beta__next">Join to waitlist</a>
      </div>

      <h1 class="hero__title">
        Maximize your sales <span class="lined">potential</span>
        anytime, anywhere with our
        <span class="lined">flexible selling</span> solutions
      </h1>

      <p class="hero__text">
        Web projects, mobile applications, modules, themes and plugins, templates, libraries and snippets of any kind and more for any budget, built by the world's best developers.
        <br/>Built by the world's best developers.
      </p>

      <div class="hero-get-started">
        <router-link to="/pricing" class="btn btn-hero">Pricing</router-link>
        <router-link to="/browse" class="btn border-12">Browse projects</router-link>
      </div>
    </div>
  </section>

  <section class="pt-0 pb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <!-- Slider START -->
          <div class="tiny-slider">
            <div class="tiny-slider-inner" data-arrow="false" data-dots="false" data-gutter="80" data-items-xl="6"
                 data-items-lg="5" data-items-md="4" data-items-sm="3" data-items-xs="2" data-autoplay="2000">
              <!-- Slide item START -->
              <div class="item"><img class="grayscale" src="/img/clients/coca-cola.svg" alt="client-logo"></div>
              <div class="item"><img class="grayscale" src="/img/clients/android.svg" alt="client-logo"></div>
              <div class="item"><img class="grayscale" src="/img/clients/envato.svg" alt="client-logo"></div>
              <div class="item"><img class="grayscale" src="/img/clients/microsoft.svg" alt="client-logo"></div>
              <div class="item"><img class="grayscale" src="/img/clients/netflix.svg" alt="client-logo"></div>
              <div class="item"><img class="grayscale" src="/img/clients/google.svg" alt="client-logo"></div>
              <div class="item"><img class="grayscale" src="/img/clients/linkedin.svg" alt="client-logo"></div>
              <!-- Slide item END -->
            </div>
          </div>
          <!-- Slider END -->
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-5">
          <!-- Title -->
          <h2 class="mb-4">A better way to <span class="text-warning">start</span> building.</h2>
          <!-- Image -->
          <img
              src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              class="rounded-2" alt="">
        </div>
        <div class="col-lg-7">
          <div class="row g-4">
            <!-- Item -->
            <div class="col-sm-6">
              <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-2">
                <i class="bi bi-collection fs-5"></i>
              </div>
              <h5 class="my-3">User-Friendly Platform</h5>
              <p class="mb-0">
                The company’s platform should be designed to make it easy for developers to showcase and
                sell their projects. This could include features such as a streamlined onboarding process, simple
                project upload procedures, and intuitive navigation tools.
              </p>
            </div>

            <div class="col-sm-6">
              <div class="icon-lg bg-info bg-opacity-10 text-info rounded-2">
                <i class="bi bi-building"></i>
              </div>
              <h5 class="my-3">Developer Community</h5>
              <p class="mb-0">A strong developer community can be a valuable asset for both buyers and sellers. The
                platform could offer a space for developers to connect with each other, exchange ideas, and collaborate
                on new projects.</p>
            </div>

            <div class="col-sm-6">
              <div class="icon-lg bg-success bg-opacity-10 text-success rounded-2">
                <i class="bi bi-shield-lock"></i>
              </div>
              <h5 class="my-3">Secure Transactions</h5>
              <p class="mb-0">It is crucial that any transactions taking place on the platform are safe and secure. The
                company should provide robust security measures such as SSL encryption, secure payment processing, and
                multi-factor authentication to protect both the buyers and sellers.</p>
            </div>
            <!-- Item -->
            <div class="col-sm-6">
              <div class="icon-lg bg-purple bg-opacity-10 text-purple rounded-2"><i class="bi bi-toggles2"></i>
              </div>
              <h5 class="my-3">Comprehensive Project Listings</h5>
              <p class="mb-0">To attract potential buyers, the platform should offer detailed and informative project
                listings that include key details such as project descriptions, technical specifications, screenshots,
                and demo videos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-focus">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5">

          <h2>Stay focused on your product.</h2>
          <h2 class="text-primary">Let us handle the selling</h2>
          <p class="lead text-gray-700 my-3">
            You can create amazing things! Stop worrying about promotion, how to sell your product, keeping your mind
            clear and focus only on your product.
            Let us do that for you.
          </p>

          <div class="d-flex mt-5 text-center">
            <div class="pe-5">
              <h3 class="mb-0">
                <span>100</span>%
              </h3>
              <p class="text-gray-700 mb-0">
                Satisfaction
              </p>
            </div>
            <div class="border-start border-gray-300"></div>
            <div class="px-5">
              <h3 class="mb-0">
                <span>24</span>/
                <span>7</span>
              </h3>
              <p class="text-gray-700 mb-0">
                Support
              </p>
            </div>
            <div class="border-start border-gray-300"></div>
            <div class="ps-5">
              <h3 class="mb-0">
                <span>100</span>k+
              </h3>
              <p class="text-gray-700 mb-0">
                Sales
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 offset-1">
          <img src="/img/focus.png" alt="focus">
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-dots"></i></div>
          <h5 class="h5 mb-2">Chat with us</h5>
          <p class=" mb-0">Chat live with one of our support specialists.</p>
        </div>
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
          <h5 class="h5">Ask the community</h5>
          <p class=" mb-0">Explore our community forums and communicate with other users.</p>
        </div>
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-question-circle"></i>
          </div>
          <h5 class="h5">Support center</h5>
          <p class=" mb-0">Browse FAQ's and support articles to find solutions.</p>
        </div>
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone"></i></div>
          <h5 class="h5">Call us</h5>
          <p class=" mb-0">Call us during normal business hours at (555) 892-9403.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-5">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img
              class="rounded-3"
              src="/img/grow.webp"
              alt="grow">
        </div>
        <div class="col-lg-6">
          <h2>About Codeazone</h2>
          <p class="mt-3">
            Our platform is built on the latest technologies and follows industry best practices to ensure that your data is secure and your operations are efficient. We have a team of experienced professionals who are dedicated to delivering high-quality solutions and excellent customer service. Our platform is easy to use and flexible, allowing you to customize your solutions to meet your unique business needs.
            Whether you are looking for a custom software solution or need help migrating to the cloud, our platform has got you covered. We offer a range of services, including web development, mobile app development, cloud hosting, and IT consulting. Our solutions are designed to be scalable, so you can start small and grow as your business expands.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-review p-0">
    <div class="container">
      <div class="row g-4 g-lg-5 align-items-center">
        <div class="col-xl-7 order-2 order-xl-1">
          <div class="row mt-0 mt-xl-5">
            <!-- Review -->
            <div class="col-md-7 position-relative mb-0 mt-0 mt-md-5">
              <!-- SVG -->
              <figure class="fill-danger opacity-2 position-absolute top-0 start-0 translate-middle mb-3">
                <svg width="211px" height="211px">
                  <path
                      d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
                </svg>
              </figure>

              <div class="bg-body shadow text-center p-4 rounded-3 position-relative mb-5 mb-md-0">
                <!-- Avatar -->
                <div class="avatar avatar-xl mb-3">
                  <img class="avatar-img rounded-circle" src="/img/avatar/01.jpg" alt="avatar">
                </div>
                <!-- Content -->
                <blockquote>
                  <p>
                    <span class="me-1 small"><i class="fas fa-quote-left"></i></span>
                    I absolutely love this platform! It's so user-friendly and makes my life so much easier. The interface is intuitive and the features are exactly what I need to get my work done efficiently. Highly recommend!
                    <span class="ms-1 small"><i class="fas fa-quote-right"></i></span>
                  </p>
                </blockquote>
                <!-- Rating -->
                <ul class="list-inline mb-2">
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                </ul>
                <!-- Info -->
                <h6 class="mb-0">Carolyn Ortiz</h6>
              </div>
            </div>

            <!-- Mentor list -->
            <div class="col-md-5 mt-5 mt-md-0 d-none d-md-block">
              <div class="bg-body shadow p-4 rounded-3 d-inline-block position-relative">
                <!-- Icon -->
                <div class="icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle">
                  <i class="bi bi-shield-fill-check text-dark"></i>
                </div>
                <!-- Title -->
                <h6 class="mb-3">100+ Verified Sellers</h6>
                <!-- Mentor Item -->
                <div class="d-flex align-items-center mb-3">
                  <!-- Avatar -->
                  <div class="avatar avatar-sm">
                    <img class="avatar-img rounded-1" src="/img/avatar/09.jpg" alt="avatar">
                  </div>
                  <!-- Info -->
                  <div class="ms-2">
                    <h6 class="mb-0">Lori Stevens</h6>
                    <p class="mb-0 small">HR & Recruitment</p>
                  </div>
                </div>

                <!-- Mentor Item -->
                <div class="d-flex align-items-center mb-3">
                  <!-- Avatar -->
                  <div class="avatar avatar-sm">
                    <img class="avatar-img rounded-1" src="/img/avatar/04.jpg" alt="avatar">
                  </div>
                  <!-- Info -->
                  <div class="ms-2">
                    <h6 class="mb-0">Billy Vasquez</h6>
                    <p class="mb-0 small">Cyber-security</p>
                  </div>
                </div>

                <!-- Mentor Item -->
                <div class="d-flex align-items-center">
                  <!-- Avatar -->
                  <div class="avatar avatar-sm">
                    <img class="avatar-img rounded-1" src="/img/avatar/02.jpg" alt="avatar">
                  </div>
                  <!-- Info -->
                  <div class="ms-2">
                    <h6 class="mb-0">Larry Lawson</h6>
                    <p class="mb-0 small">Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- Row END -->

          <div class="row mt-5 mt-xl-0">
            <!-- Rating -->
            <div class="col-7 mt-0 mt-xl-5 text-end position-relative z-index-1 d-none d-md-block">
              <!-- SVG -->
              <figure class="fill-danger position-absolute top-0 start-50 mt-n7 ms-6 ps-3 pt-2 z-index-n1 d-none d-lg-block">
                <svg enable-background="new 0 0 160.7 159.8" height="180px">
                  <path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2"></ellipse>
                  <path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"></path>
                  <path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z"></path>
                  <path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"></path>
                  <path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
                  <path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2"></ellipse>
                  <path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2"></ellipse>
                  <ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2"></ellipse>
                  <path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
                  <ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2"></ellipse>
                  <path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2"></ellipse>
                  <path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
                  <path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                  <path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                  <ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2"></ellipse>
                  <path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                  <path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                  <path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                  <path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                  <path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                  <path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                  <path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                  <path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                  <path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z"></path>
                </svg>
              </figure>

              <div class="p-3 bg-primary d-inline-block rounded-4 shadow-lg text-center" style="background:url(/img/pattern.png) no-repeat center center; background-size:cover;">
                <!-- Info -->
                <h5 class="text-white mb-0">4.5/5.0</h5>
                <!-- Rating -->
                <ul class="list-inline mb-2">
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                </ul>
                <p class="text-white mb-0">Based on 3265 ratings</p>
              </div>
            </div>

            <!-- Review -->
            <div class="col-md-5 mt-n6 mb-0 mb-md-5">
              <div class="bg-body shadow text-center p-4 rounded-3">
                <!-- Avatar -->
                <div class="avatar avatar-xl mb-3">
                  <img class="avatar-img rounded-circle" src="/img/avatar/03.jpg" alt="avatar">
                </div>
                <!-- Content -->
                <blockquote>
                  <p>
                    <span class="me-1 small"><i class="fas fa-quote-left"></i></span>
                    I've been using this platform for a few months now and it has completely transformed the way I work. The user interface is clean and intuitive, making it easy to navigate and find the tools I need.                  </p>
                </blockquote>
                <!-- Rating -->
                <ul class="list-inline mb-2">
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                  <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                </ul>
                <!-- Info -->
                <h6 class="mb-0">Dennis Barrett</h6>
              </div>
            </div>
          </div> <!-- Row END -->
        </div>
        <div class="col-xl-5 order-1 text-center text-xl-start">
          <!-- Title -->
          <h2 class="fs-1">Some valuable feedback</h2>
          <p>Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
          <a href="#" class="btn btn-primary mb-0">View Reviews</a>
        </div>
      </div> <!-- Row END -->
    </div>
  </section>

  <section class="section-review">
    <div class="container">
      <div class="review">
        <div class="review-user">
          <img class="review-user__avatar" src="/img/me.jpg" alt="image">
          <img class="review-user__review"
               src="https://static.vecteezy.com/system/resources/previews/011/032/012/large_2x/3d-realistic-thumbs-up-illustration-vector.jpg"
               alt="review">
        </div>
        <div class="review-text">
          <div class="review-text__stars">★★★★★</div>
          <p class="review-text__quote">"Our platform <b>increase</b> your sales potential at the <b>maximum</b>.
            It’s easy to use, publish any kind of code."</p>
          <div class="review-text__name">Dan Rotaru</div>
          <div class="review-text__position">CEO | FullStack web developer</div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light position-relative">
    <!-- SVG decoration -->
    <figure class="position-absolute bottom-0 start-0 d-none d-lg-block">
      <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
        <path class="fill-warning" d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"></path>
      </svg>
    </figure>

    <!-- SVG decoration -->
    <figure class="position-absolute top-0 end-0">
      <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
        <path class="fill-primary" d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"></path>
      </svg>
    </figure>

    <!-- SVG decoration -->
    <figure class="position-absolute bottom-0 start-50 translate-middle-x ms-n9 mb-5">
      <svg width="23px" height="23px">
        <path class="fill-primary" d="M23.003,11.501 C23.003,17.854 17.853,23.003 11.501,23.003 C5.149,23.003 -0.001,17.854 -0.001,11.501 C-0.001,5.149 5.149,-0.000 11.501,-0.000 C17.853,-0.000 23.003,5.149 23.003,11.501 Z"></path>
      </svg>
    </figure>

    <!-- SVG decoration -->
    <figure class="position-absolute bottom-0 end-0 me-5 mb-5">
      <svg width="22px" height="22px">
        <path class="fill-warning" d="M22.003,11.001 C22.003,17.078 17.077,22.003 11.001,22.003 C4.925,22.003 -0.001,17.078 -0.001,11.001 C-0.001,4.925 4.925,-0.000 11.001,-0.000 C17.077,-0.000 22.003,4.925 22.003,11.001 Z"></path>
      </svg>
    </figure>

    <div class="container position-relative">
      <div class="row justify-content-between align-items-center my-5">

        <div class="col-lg-5 position-relative">
          <!-- SVG decoration -->
          <figure class="position-absolute top-0 start-0 translate-middle mt-n5">
            <svg width="29px" height="29px">
              <path class="fill-orange" d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z"></path>
            </svg>
          </figure>

          <!-- Title -->
          <h2 class="h1">Work whenever you want, from any place in the world.</h2>
        </div>

        <div class="col-lg-5 position-relative mt-4 mt-lg-0">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" class="rounded-3" alt="image">
        </div>
      </div>
    </div>
  </section>

  <CTA/>

  <Footer/>
</template>

<script setup>
import CTA from '@/components/CTA.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import {tns} from "../../node_modules/tiny-slider/src/tiny-slider"
import {onMounted} from "vue";

onMounted(() => {
  var slides = document.querySelectorAll('.tiny-slider-inner');
  if (slides) {
    slides.forEach(slider => {
      var slider1 = slider;
      var sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
      var sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
      var sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
      var sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

      var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
      var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
      var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
      var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
      var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
      var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

      var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
      var sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
      var sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
      var sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

      var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
      var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
      var sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
      if (document.querySelector('.custom-thumb')) {
        var sliderNavContainer = document.querySelector('.custom-thumb');
      }
      var sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
      var sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
      var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
      var sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
      var sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
      var sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
      // Check if document DIR is RTL
      var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
      var sliderDirection;
      if (ifRtl === 'rtl') {
        sliderDirection = 'rtl';
      }

      var tnsSlider = tns({
        container: slider,
        mode: sliderMode,
        axis: sliderAxis,
        gutter: sliderSpace,
        edgePadding: sliderEdge,
        speed: sliderSpeed,
        autoWidth: sliderautoWidth,
        controls: sliderArrow,
        nav: sliderDots,
        autoplay: sliderAutoPlay,
        autoplayTimeout: sliderAutoPlayTime,
        autoplayHoverPause: sliderHoverPause,
        autoplayButton: false,
        autoplayButtonOutput: false,
        controlsPosition: top,
        navContainer: sliderNavContainer,
        navPosition: top,
        autoplayPosition: top,
        controlsText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        loop: sliderLoop,
        rewind: sliderRewind,
        autoHeight: sliderAutoHeight,
        fixedWidth: sliderfixedWidth,
        touch: sliderTouch,
        mouseDrag: sliderDrag,
        arrowKeys: true,
        items: sliderItems,
        textDirection: sliderDirection,
        responsive: {
          0: {
            items: Number(sliderItemsXs)
          },
          576: {
            items: Number(sliderItemsSm)
          },
          768: {
            items: Number(sliderItemsMd)
          },
          992: {
            items: Number(sliderItemsLg)
          },
          1200: {
            items: Number(sliderItemsXl)
          }
        }
      });
    })
  }
})
</script>
