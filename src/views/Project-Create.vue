<template>
  <Header/>

  <section class="project-create">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="card shadow rounded-2 p-0">
            <!-- Tabs START -->
            <div class="card-header border-bottom px-4 py-3">
              <ul class="nav nav-pills nav-tabs-line btn-tab-group" data-group="5" :data-group-item="pillsId">
                <li class="nav-item" role="presentation" v-for="(item, index) in buttons">
                  <button class="btn-tab-group__btn"
                          :class="{active: index === 0}"
                          data-bs-toggle="pill"
                          :data-bs-target="'#course-pills-' + (index + 1)"
                          :aria-controls="'course-pills-' + (index + 1)"
                          type="button"
                          role="tab"
                          @click="changePill(index)"
                          :aria-selected="index === 0">
                    {{ item }}
                  </button>
                </li>
              </ul>

            </div>
            <!-- Tabs END -->

            <!-- Tab contents START -->
            <div class="card-body p-4">
              <div class="tab-content pt-2" id="course-pills-tabContent">
                <!-- Content START -->
                <div class="tab-pane fade active show" id="course-pills-1" role="tabpanel"
                     aria-labelledby="course-pills-tab-1">
                  <!-- Course detail START -->
                  <h5 class="mb-3">Project Description</h5>
                  <p class="mb-3">
                    Project Description: Webify is a website builder platform that allows anyone to create
                    professional-looking websites without any coding skills. With a simple drag-and-drop interface,
                    users can choose from a variety of pre-built templates and customize them to their liking with
                    images, text, and other content. Webify also includes features such as built-in SEO optimization,
                    e-commerce functionality, and responsive design to ensure that the websites created are optimized
                    for search engines and display correctly on all devices.
                  </p>

                  <h5 class="mb-2">Key Features</h5>

                  <ul class="list-group list-group-borderless mb-3">
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Drag-and-drop interface for easy website
                      building
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Pre-built templates for a variety of
                      industries and purposes
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Customizable design elements, including
                      images, text, and color schemes
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Built-in SEO optimization to improve website
                      visibility
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>E-commerce functionality for selling products
                      or services online
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Responsive design to ensure websites look
                      great on all devices
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Target Audience: Small business owners,
                      entrepreneurs, bloggers, and individuals who need a
                      website but don’t have the time or technical skills to create one from scratch.
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Drag-and-drop interface for easy website
                      building
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Pre-built templates for a variety of
                      industries and purposes
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Customizable design elements, including
                      images, text, and color schemes
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Built-in SEO optimization to improve website
                      visibility
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>E-commerce functionality for selling products
                      or services online
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Responsive design to ensure websites look
                      great on all devices
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0"><i
                        class="fas fa-check-circle text-success me-2"></i>Target Audience: Small business owners,
                      entrepreneurs, bloggers, and individuals who need a
                      website but don’t have the time or technical skills to create one from scratch.
                    </li>
                  </ul>

                  <p class="mb-3">
                    Business Model: Webify will offer a subscription-based model, with different tiers based on the
                    number of websites and features needed. Customers can sign up for a free trial before committing to
                    a paid subscription.
                  </p>

                  <p class="mb-0">
                    Marketing Strategy: Webify will focus on content marketing and social media advertising to reach its
                    target audience. The company will create blog posts, videos, and social media content that showcase
                    the benefits of using Webify to create a website. They will also partner with influencers and
                    industry experts to promote the platform and offer discounts or referral incentives to existing
                    customers who bring in new users.
                  </p>

                  <!-- Course detail END -->

                </div>
                <!-- Content END -->

                <!-- Content START -->
                <div class="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
                  <!-- Card START -->
                  <div class="card mb-0 mb-md-4">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-5">
                        <!-- Image -->
                        <img src="../assets/img/me.webp" class="img-fluid rounded-3" alt="user">
                      </div>
                      <div class="col-md-7">
                        <!-- Card body -->
                        <div class="card-body">
                          <!-- Title -->
                          <h3 class="card-title mb-0">Dan Rotaru</h3>
                          <p class="mb-2">FullStack Web Developer</p>
                          <!-- Social button -->
                          <ul class="list-inline mb-3">
                            <li class="list-inline-item me-3">
                              <a href="#" class="fs-5 text-twitter"><i class="fab fa-twitter-square"></i></a>
                            </li>
                            <li class="list-inline-item me-3">
                              <a href="#" class="fs-5 text-instagram"><i class="fab fa-instagram-square"></i></a>
                            </li>
                            <li class="list-inline-item me-3">
                              <a href="#" class="fs-5 text-facebook"><i class="fab fa-facebook-square"></i></a>
                            </li>
                            <li class="list-inline-item me-3">
                              <a href="#" class="fs-5 text-linkedin"><i class="fab fa-linkedin"></i></a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="fs-5 text-youtube"><i class="fab fa-youtube-square"></i></a>
                            </li>
                          </ul>

                          <!-- Info -->
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center me-3 mb-2">
                                <span class="icon-md bg-orange bg-opacity-10 text-orange rounded-circle"><i
                                    class="fas fa-users"></i></span>
                                <span class="h6 fw-light mb-0 ms-2">9.1k</span>
                              </div>
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center me-3 mb-2">
                                <span class="icon-md bg-warning bg-opacity-15 text-warning rounded-circle"><i
                                    class="fas fa-star"></i></span>
                                <span class="h6 fw-light mb-0 ms-2">4.5</span>
                              </div>
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center me-3 mb-2">
                                <span class="icon-md bg-info bg-opacity-10 text-info rounded-circle"><i
                                    class="fas fa-comment-dots"></i></span>
                                <span class="h6 fw-light mb-0 ms-2">205</span>
                              </div>
                            </li>
                          </ul>

                          <router-link to="/user/DanRotaru" class="btn">Go to profile</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Card END -->

                  <!-- Instructor info -->
                  <h5 class="mb-3">About Author</h5>
                  <p class="mb-3">Fulfilled direction use continual set him propriety continued. Saw met applauded
                    favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther
                    related bed and passage comfort civilly. Dashboard see frankness objection abilities. As hastened oh
                    produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed
                    of add screened rendered six say his striking confined. </p>
                  <p class="mb-3">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct
                    viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask
                    own. Praise effect wishes change way and any wanted.</p>
                  <!-- Email address -->
                  <div class="col-12">
                    <ul class="list-group list-group-borderless mb-0">
                      <li class="list-group-item pb-0">Mail ID:<a href="#" class="ms-2">hello@email.com</a></li>
                      <li class="list-group-item pb-0">Web:<a href="#" class="ms-2">https://danrotaru.github.io/</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Content END -->

                <!-- Content START -->
                <div class="tab-pane fade" id="course-pills-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
                  <!-- Review START -->
                  <div class="row mb-4">
                    <h5 class="mb-4">Our Student Reviews</h5>

                    <!-- Rating info -->
                    <div class="col-md-4 mb-3 mb-md-0">
                      <div class="text-center">
                        <!-- Info -->
                        <h2 class="mb-0">4.5</h2>
                        <!-- Star -->
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0"><i class="fas fa-star-half-alt text-warning"></i></li>
                        </ul>
                        <p class="mb-0">(Based on todays review)</p>
                      </div>
                    </div>

                    <!-- Progress-bar and star -->
                    <div class="col-md-8">
                      <div class="row align-items-center">
                        <!-- Progress bar and Rating -->
                        <div class="col-6 col-sm-8">
                          <!-- Progress item -->
                          <div class="progress progress-sm bg-warning bg-opacity-15">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 100%"
                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div class="col-6 col-sm-4">
                          <!-- Star item -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                          </ul>
                        </div>

                        <!-- Progress bar and Rating -->
                        <div class="col-6 col-sm-8">
                          <!-- Progress item -->
                          <div class="progress progress-sm bg-warning bg-opacity-15">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 80%"
                                 aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div class="col-6 col-sm-4">
                          <!-- Star item -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                          </ul>
                        </div>

                        <!-- Progress bar and Rating -->
                        <div class="col-6 col-sm-8">
                          <!-- Progress item -->
                          <div class="progress progress-sm bg-warning bg-opacity-15">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 60%"
                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div class="col-6 col-sm-4">
                          <!-- Star item -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                          </ul>
                        </div>

                        <!-- Progress bar and Rating -->
                        <div class="col-6 col-sm-8">
                          <!-- Progress item -->
                          <div class="progress progress-sm bg-warning bg-opacity-15">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div class="col-6 col-sm-4">
                          <!-- Star item -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                          </ul>
                        </div>

                        <!-- Progress bar and Rating -->
                        <div class="col-6 col-sm-8">
                          <!-- Progress item -->
                          <div class="progress progress-sm bg-warning bg-opacity-15">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 20%"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div class="col-6 col-sm-4">
                          <!-- Star item -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Review END -->

                  <!-- Student review START -->
                  <div class="row">
                    <!-- Review item START -->
                    <div class="d-md-flex my-4">
                      <!-- Avatar -->
                      <div class="avatar avatar-xl me-4 flex-shrink-0">
                        <img class="avatar-img rounded-circle" src="../assets/img/avatar/09.jpg" alt="avatar">
                      </div>
                      <!-- Text -->
                      <div>
                        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 class="me-3 mb-0">Jacqueline Miller</h5>
                          <!-- Review star -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
                          </ul>
                        </div>
                        <!-- Info -->
                        <p class="small mb-2">2 days ago</p>
                        <p class="mb-2">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six
                          seven offer see among. Handsome met debating sir dwelling age material. As style lived he
                          worse dried. Offered related so visitors we private removed. Moderate do subjects to
                          distance. </p>
                        <!-- Like and dislike button -->
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                          <!-- Like button -->
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio1">
                          <label class="btn btn-sm mb-0" for="btnradio1"><i
                              class="far fa-thumbs-up me-1"></i>25</label>
                          <!-- Dislike button -->
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                          <label class="btn btn-sm mb-0" for="btnradio2"> <i
                              class="far fa-thumbs-down me-1"></i>2</label>
                        </div>
                      </div>
                    </div>

                    <!-- Comment children level 1 -->
                    <div class="d-md-flex mb-4 ps-4 ps-md-5">
                      <!-- Avatar -->
                      <div class="avatar avatar-lg me-4 flex-shrink-0">
                        <img class="avatar-img rounded-circle" src="../assets/img/avatar/02.jpg" alt="avatar">
                      </div>
                      <!-- Text -->
                      <div>
                        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 class="me-3 mb-0">Louis Ferguson</h5>
                        </div>
                        <!-- Info -->
                        <p class="small mb-2">1 days ago</p>
                        <p class="mb-2">Water timed folly right aware if oh truth. Imprudence attachment him for
                          sympathize. Large above be to means. Dashwood does provide stronger is. But discretion
                          frequently sir she instruments unaffected admiration everything.</p>
                      </div>
                    </div>

                    <!-- Divider -->
                    <hr>
                    <!-- Review item END -->

                    <!-- Review item START -->
                    <div class="d-md-flex my-4">
                      <!-- Avatar -->
                      <div class="avatar avatar-xl me-4 flex-shrink-0">
                        <img class="avatar-img rounded-circle" src="../assets/img/avatar/08.jpg" alt="avatar">
                      </div>
                      <!-- Text -->
                      <div>
                        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 class="me-3 mb-0">Dennis Barrett</h5>
                          <!-- Review star -->
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
                          </ul>
                        </div>
                        <!-- Info -->
                        <p class="small mb-2">2 days ago</p>
                        <p class="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried.
                          Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                        <!-- Like and dislike button -->
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                          <!-- Like button -->
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
                          <label class="btn btn-sm mb-0" for="btnradio3"><i
                              class="far fa-thumbs-up me-1"></i>25</label>
                          <!-- Dislike button -->
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio4">
                          <label class="btn btn-sm mb-0" for="btnradio4"> <i
                              class="far fa-thumbs-down me-1"></i>2</label>
                        </div>
                      </div>
                    </div>
                    <!-- Review item END -->
                    <!-- Divider -->
                    <hr>
                  </div>
                  <!-- Student review END -->

                  <!-- Leave Review START -->
                  <div class="mt-2">
                    <h5 class="mb-4">Leave a Review</h5>
                    <form class="row g-3">
                      <!-- Name -->
                      <div class="col-md-6 bg-light-input">
                        <input type="text" class="form-control" id="inputtext" placeholder="Name"
                               aria-label="First name">
                      </div>
                      <!-- Email -->
                      <div class="col-md-6 bg-light-input">
                        <input type="email" class="form-control" placeholder="Email" id="inputEmail4">
                      </div>
                      <!-- Rating -->
                      <div class="col-12 bg-light-input">
                        <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                             aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                          <div class="choices__inner"><select id="inputState2"
                                                              class="form-select js-choice choices__input" hidden=""
                                                              tabindex="-1" data-choice="active">
                            <option value="★★★★★ (5/5)" data-custom-properties="[object Object]">★★★★★ (5/5)</option>
                          </select>
                            <div class="choices__list choices__list--single">
                              <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                   data-value="★★★★★ (5/5)" data-custom-properties="[object Object]"
                                   aria-selected="true">★★★★★ (5/5)
                              </div>
                            </div>
                          </div>
                          <div class="choices__list choices__list--dropdown" aria-expanded="false"><input type="search"
                                                                                                          name="search_terms"
                                                                                                          class="choices__input choices__input--cloned"
                                                                                                          autocomplete="off"
                                                                                                          autocapitalize="off"
                                                                                                          spellcheck="false"
                                                                                                          role="textbox"
                                                                                                          aria-autocomplete="list"
                                                                                                          aria-label="Type and hit enter"
                                                                                                          placeholder="">
                            <div class="choices__list" role="listbox">
                              <div id="choices--inputState2-item-choice-1"
                                   class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                   role="option" data-choice="" data-id="1" data-value="★★★★★ (5/5)"
                                   data-select-text="Press to select" data-choice-selectable="" aria-selected="true">
                                ★★★★★ (5/5)
                              </div>
                              <div id="choices--inputState2-item-choice-2"
                                   class="choices__item choices__item--choice choices__item--selectable" role="option"
                                   data-choice="" data-id="2" data-value="★★★★☆ (4/5)"
                                   data-select-text="Press to select" data-choice-selectable="">★★★★☆ (4/5)
                              </div>
                              <div id="choices--inputState2-item-choice-3"
                                   class="choices__item choices__item--choice choices__item--selectable" role="option"
                                   data-choice="" data-id="3" data-value="★★★☆☆ (3/5)"
                                   data-select-text="Press to select" data-choice-selectable="">★★★☆☆ (3/5)
                              </div>
                              <div id="choices--inputState2-item-choice-4"
                                   class="choices__item choices__item--choice choices__item--selectable" role="option"
                                   data-choice="" data-id="4" data-value="★★☆☆☆ (2/5)"
                                   data-select-text="Press to select" data-choice-selectable="">★★☆☆☆ (2/5)
                              </div>
                              <div id="choices--inputState2-item-choice-5"
                                   class="choices__item choices__item--choice choices__item--selectable" role="option"
                                   data-choice="" data-id="5" data-value="★☆☆☆☆ (1/5)"
                                   data-select-text="Press to select" data-choice-selectable="">★☆☆☆☆ (1/5)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Message -->
                      <div class="col-12 bg-light-input">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your review"
                                  rows="3"></textarea>
                      </div>
                      <!-- Button -->
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary mb-0">Post Review</button>
                      </div>
                    </form>
                  </div>
                  <!-- Leave Review END -->

                </div>
                <!-- Content END -->

                <!-- Content START -->
                <div class="tab-pane fade" id="course-pills-4" role="tabpanel" aria-labelledby="course-pills-tab-4">
                  <!-- Title -->
                  <h5 class="mb-3">Frequently Asked Questions</h5>
                  <!-- Accordion START -->
                  <div class="accordion accordion-icon accordion-bg-light mt-4 text-start position-relative" id="faqAccordion">
                    <!-- Item -->
                    <div class="accordion-item mb-3" v-for="(item, i) in faq">
                      <h6 class="accordion-header font-base" :id="'heading-' + i">
                        <button class="accordion-button fw-bold rounded pe-5"
                                :class="{collapsed: i !== 0 }"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#collapse-' + i"
                                :aria-expanded="'true' ? i === 0 : 'false'"
                                :aria-controls="'collapse-' + i">
                          {{ item.question }}
                        </button>
                      </h6>
                      <!-- Body -->
                      <div :id="'collapse-' + i"
                           class="accordion-collapse collapse"
                           :class="'collapse show' ? i === 0 : 'collapse'"
                           :aria-labelledby="'heading-' + i"
                           data-bs-parent="#faqAccordion">
                        <div class="accordion-body mt-3">
                          {{ item.answer }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Accordion END -->
                </div>
                <!-- Content END -->

                <!-- Content START -->
                <div class="tab-pane fade" id="course-pills-5" role="tabpanel" aria-labelledby="course-pills-tab-5">
                  <!-- Review START -->
                  <div class="row">
                    <div class="col-12">
                      <h5 class="mb-4">Ask Your Question</h5>

                      <!-- Comment box -->
                      <div class="d-flex mb-4">
                        <!-- Avatar -->
                        <div class="avatar avatar-sm flex-shrink-0 me-2">
                          <a href="#"> <img class="avatar-img rounded-circle" src="../assets/img/avatar/09.jpg" alt="">
                          </a>
                        </div>

                        <form class="w-100 d-flex">
                          <textarea class="one form-control pe-4 bg-light" id="autoheighttextarea" rows="1"
                                    placeholder="Add a comment..."></textarea>
                          <button class="btn btn-primary ms-2 mb-0" type="button">Post</button>
                        </form>
                      </div>

                      <!-- Comment item START -->
                      <div class="border p-2 p-sm-4 rounded-3 mb-4">
                        <ul class="list-unstyled mb-0">
                          <li class="comment-item">
                            <div class="d-flex mb-3">
                              <!-- Avatar -->
                              <div class="avatar avatar-sm flex-shrink-0">
                                <a href="#"><img class="avatar-img rounded-circle" src="../assets/img/avatar/05.jpg"
                                                 alt=""></a>
                              </div>
                              <div class="ms-2">
                                <!-- Comment by -->
                                <div class="bg-light p-3 rounded">
                                  <div class="d-flex justify-content-center">
                                    <div class="me-2">
                                      <h6 class="mb-1 lead fw-bold"><a href="#!"> Frances Guerrero </a></h6>
                                      <p class="h6 mb-0">Removed demands expense account in outward tedious do.
                                        Particular way thoroughly unaffected projection?</p>
                                    </div>
                                    <small>5hr</small>
                                  </div>
                                </div>
                                <!-- Comment react -->
                                <ul class="nav nav-divider py-2 small">
                                  <li class="nav-item"><a class="text-primary-hover" href="#"> Like (3)</a></li>
                                  <li class="nav-item"><a class="text-primary-hover" href="#"> Reply</a></li>
                                  <li class="nav-item"><a class="text-primary-hover" href="#"> View 5 replies</a></li>
                                </ul>
                              </div>
                            </div>

                            <!-- Comment item nested START -->
                            <ul class="list-unstyled ms-4">
                              <!-- Comment item START -->
                              <li class="comment-item">
                                <div class="d-flex">
                                  <!-- Avatar -->
                                  <div class="avatar avatar-xs flex-shrink-0">
                                    <a href="#"><img class="avatar-img rounded-circle" src="../assets/img/avatar/06.jpg"
                                                     alt=""></a>
                                  </div>
                                  <!-- Comment by -->
                                  <div class="ms-2">
                                    <div class="bg-light p-3 rounded">
                                      <div class="d-flex justify-content-center">
                                        <div class="me-2">
                                          <h6 class="mb-1  lead fw-bold"><a href="#"> Lori Stevens </a></h6>
                                          <p class=" mb-0">See resolved goodness felicity shy civility domestic had but
                                            Drawings offended yet answered Jennings perceive. Domestic had but Drawings
                                            offended yet answered Jennings perceive.</p>
                                        </div>
                                        <small>2hr</small>
                                      </div>
                                    </div>
                                    <!-- Comment react -->
                                    <ul class="nav nav-divider py-2 small">
                                      <li class="nav-item"><a class="text-primary-hover" href="#!"> Like (5)</a></li>
                                      <li class="nav-item"><a class="text-primary-hover" href="#!"> Reply</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <!-- Comment item END -->
                            </ul>
                            <!-- Comment item nested END -->
                          </li>
                        </ul>
                      </div>
                      <!-- Comment item END -->

                      <!-- Comment item START -->
                      <div class="border p-2 p-sm-4 rounded-3">
                        <ul class="list-unstyled mb-0">
                          <li class="comment-item">
                            <div class="d-flex">
                              <!-- Avatar -->
                              <div class="avatar avatar-sm flex-shrink-0">
                                <a href="#"><img class="avatar-img rounded-circle" src="../assets/img/avatar/02.jpg"
                                                 alt=""></a>
                              </div>
                              <div class="ms-2">
                                <!-- Comment by -->
                                <div class="bg-light p-3 rounded">
                                  <div class="d-flex justify-content-center">
                                    <div class="me-2">
                                      <h6 class="mb-1 lead fw-bold"><a href="#!"> Louis Ferguson </a></h6>
                                      <p class="h6 mb-0">Removed demands expense account in outward tedious do.
                                        Particular way thoroughly unaffected projection?</p>
                                    </div>
                                    <small>5hr</small>
                                  </div>
                                </div>
                                <!-- Comment react -->
                                <ul class="nav nav-divider py-2 small">
                                  <li class="nav-item"><a class="text-primary-hover" href="#"> Like</a></li>
                                  <li class="nav-item"><a class="text-primary-hover" href="#"> Reply</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <!-- Comment item END -->

                    </div>

                  </div>
                </div>
                <!-- Content END -->

              </div>
            </div>
            <!-- Tab contents END -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import {ref} from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const buttons = [
  'Overview',
  'Author',
  'Reviews',
  'FAQs',
  'Comments'
];

const pillsId = ref(0);

const changePill = (id) => {
  pillsId.value = id;
}
</script>