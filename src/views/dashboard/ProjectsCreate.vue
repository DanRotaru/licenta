<template>
  <div class="dashboard dashboard-create">
    <Navigation/>

    <main>
      <Header :pages="[['Projects', '/dashboard/projects'], ['Create']]"/>

      <div class="wrapper">
        <div class="dashboard-hero dashboard-hero_create">
          <h1>Add new project</h1><button type="button" class="btn btn-success mb-3" @click="create()">
          <i class="bi bi-plus-lg"></i>
          Publish Project
        </button>

          <div class="project-create-steps">
            <div class="project-create-steps-progress nav" :data-group-item="pillsId">
              <button class="project-create-steps-progress__btn"
                      v-for="(item, index) in stepsMenu" :key="item + index"
                      :class="{active: index === 0}"
                      data-bs-toggle="pill"
                      :data-bs-target="'#project-create-step-' + (index + 1)"
                      :aria-controls="'project-create-step-' + (index + 1)"
                      type="button"
                      role="tab"
                      @click="changePill(index)"
                      :aria-selected="index === 0">
                {{ item }}
              </button>
            </div>
          </div>
        </div>

        <div class="project-create-wrapper">

          <div class="tab-content pt-2" id="project-create-step-tabContent">
            <div class="tab-pane active show" id="project-create-step-1" role="tabpanel">
              <h5>Project Details</h5>
              <div class="row g-3">
                <div class="col-12 mt-4">
                  <label class="form-label" for="title">Project Title</label>
                  <div class="input-group">
                    <input id="title" class="form-control" type="text" placeholder="What's the name of project?"
                           required v-model="projectInfo.title"/>
                  </div>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Category</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm"
                          data-search-enabled="true" v-model="projectInfo.category" required>
                    <option value="">Select category</option>
                    <option v-for="category in data.categories" :key="category" :value="category">{{ category }}</option>
                  </select>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Language</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" multiple="multiple"
                          aria-label=".form-select-sm" data-max-item-count="10" data-remove-item-button="true" required>
                    <option value="">Select project language</option>
                    <option
                        v-for="lang in data.languages"
                        :key="lang"
                        :value="lang">{{ lang }}
                    </option>
                  </select>
                </div>

                <div class="col-12 mt-4">
                  <label class="form-label" for="summary">Short description</label>
                  <QuillEditor :content="projectInfo.summary" theme="snow" contentType="html"
                               @update:content="projectInfo.summary = $event" :aria-required="true"/>
                  <p class="form-text">Short description that will be displayed on projects list and hero block</p>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Tags</label>

                  <input class="form-control js-choice" @change="projectInfo.tags = $event.target.value" required type="text" data-edit-items="true" data-remove-item-button="true" data-max-item-count="10"/>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label" data-bs-toggle="tooltip" data-bs-placement="top"
                         data-bs-title="Specify project level">Project level</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" data-search-enabled="false"
                          data-remove-item-button="true">
                    <option value="">Select project level</option>
                    <option v-for="level in data.project_levels" :key="level">{{ level }}</option>
                  </select>
                </div>

                <div class="col-md-3 mt-4">
                  <label class="form-label" for="price">Price</label>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input id="price" type="number" min="0" class="form-control" placeholder="Enter project price" v-model="projectInfo.price">
                  </div>
                </div>

                <div class="col-md-3 mt-4">
                  <label class="form-label">Discount price</label>
                  <div class="input-group">
                    <span class="input-group-text">%</span>
                    <input type="number" class="form-control" placeholder="Enter discount" min="0" max="100" :disabled="!projectInfo.discount" v-model="projectInfo.discount_amount"/>
                  </div>

                  <div class="col-12 mt-1 mb-0">
                    <div class="form-check small mb-0">
                      <input class="form-check-input" type="checkbox" id="enableDiscount" @change="projectInfo.discount = $event.currentTarget.checked">
                      <label class="form-check-label" for="enableDiscount">
                        Enable this Discount
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 mt-4">
                  <label class="form-label">Price after discount</label>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="number" class="form-control" placeholder="Price after discount" :value="projectInfo.discount_amount_value" readonly/>
                  </div>
                </div>

                <div class="col-md-3 mt-4">
                  <label class="form-label" for="discount_end">End discount</label>
                  <input id="discount_end" type="datetime-local" class="form-control"  :disabled="!projectInfo.discount"
                         placeholder="End discount" v-model="projectInfo.discount_end">
                </div>

                <div class="col-12 mt-4">
                  <label class="form-label" for="description">Project Description</label>
                  <QuillEditor :content="projectInfo.description" theme="snow" style="height: 300px" contentType="html"
                               @update:content="projectInfo.description = $event"/>
                  <p class="form-text">Main Project description</p>
                </div>

                <div class="col-12 mt-4">
                  <label class="form-label" for="key_features">Key Features</label>
                  <p class="form-text">Will be displayed in project body content.</p>

                  <div class="d-sm-flex justify-content-between align-items-center gap-2 mb-2" v-for="(feature, index) in projectInfo.features" :key="feature">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <div class="form-floating w-100">
                      <input type="text" placeholder="Add new question" class="form-control faq__question"
                             :id="'feature-' + index" v-model="projectInfo.features[index]">
                      <label :for="'feature-' + index">Feature</label>
                    </div>
                    <button type="button" class="btn btn-sm btn-danger w-100px mb-0" @click="removeFeature(feature)" :disabled="index < 1">
                      <i class="bi bi-x-lg d-block"></i>
                      Remove
                    </button>
                  </div>

                  <div class="d-sm-flex justify-content-center mt-3">
                    <button @click="addNewFeature()" type="button" class="btn btn-info mb-3">
                      <i class="bi bi-plus-lg"></i>
                      Add new feature
                    </button>
                  </div>
                </div>

                <div class="mt-5 mb-3 d-flex justify-content-end">
                  <div class="project-create-steps-progress nav" role="tablist">
                    <button class="btn btn-primary next-btn mb-0" @click="navigateToPage()">
                      Next <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="project-create-step-2" role="tabpanel">
              <h5>Project Media</h5>

              <div class="row">
                <!-- Upload image START -->
                <div class="col-12">
                  <div
                      class="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                    <!-- Image -->
                    <i v-if="!projectInfo.picture" class="bi bi-image-alt" style="font-size: 150px; color: #333;"></i>
                    <img v-if="projectInfo.picture" :src="projectInfo.picture" alt="project picture">

                    <div>
                      <h6 class="mt-4 mb-2">Upload project image here, or <a href="#!" class="text-primary"> Browse</a>
                      </h6>
                      <label style="cursor:pointer;">
													<span>
														<input class="form-control stretched-link" type="file" name="my-image" id="image"
                                   accept="image/gif, image/jpeg, image/png, image/jpg, image/webp" @change="projectPicture($event)">
													</span>
                      </label>
                      <p class="small mb-0 mt-2">Only JPG, JPEG, PNG and WEBP. Our suggested dimensions are
                        600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                    </div>
                  </div>

                  <!-- Button -->
                  <div class="d-sm-flex justify-content-between mt-2">
                    <p class="small mb-0 mt-2"><b>Note:</b> If no picture is attached, the default (dummy) picture will
                      be used.</p>
                    <button type="button" class="btn btn-sm btn-danger-soft mb-3">Remove image</button>
                  </div>
                </div>
                <!-- Upload image END -->

                <!-- Upload video START -->
                <div class="col-12">
                  <h5>Upload video</h5>
                  <!-- Input -->
                  <div class="col-12 mt-4 mb-5">
                    <label class="form-label">YouTube Video URL</label>
                    <input class="form-control" type="text" placeholder="Enter video url">
                  </div>
                  <div class="position-relative my-4">
                    <hr>
                    <p class="small position-absolute top-50 start-50 translate-middle bg-body px-3 mb-0">Or</p>
                  </div>

                  <div class="col-12">
                    <label class="form-label">Upload video</label>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile01">
                      <label class="input-group-text">.mp4</label>
                    </div>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile02">
                      <label class="input-group-text">.WebM</label>
                    </div>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile03">
                      <label class="input-group-text">.OGG</label>
                    </div>
                  </div>
                </div>
                <!-- Upload video END -->

                <!-- Step 2 button -->
                <div class="d-flex justify-content-between mt-3">
                  <button class="btn btn-secondary prev-btn mb-0" @click="navigateToPage(true)"><i class="bi bi-arrow-left"></i> Previous</button>
                  <button class="btn btn-primary next-btn mb-0" @click="navigateToPage()">Next <i class="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="project-create-step-3" role="tabpanel">
              <h5>Project FaQs</h5>

              <p class="small mb-2">
                Frequently asked questions, or FAQs as they are known, are a great way to improve your customer’s
                experience. <br/>
                It allows you to answer the questions that are most commonly asked
                surrounding your product or service.
              </p>

              <div class="project-faqs">
                <div class="faq" v-for="(faq, index) in faqs" :key="faq.question">
                  <div class="d-sm-flex justify-content-between gap-2 mb-2">
                    <div class="form-floating w-100">
                      <input type="text" placeholder="Add new question" class="form-control faq__question"
                             :id="'faq-question-' + index">
                      <label :for="'faq-question-' + index">Question</label>
                    </div>
                    <button type="button" class="btn btn-sm btn-danger" @click="removeFaq(faq)" :disabled="index < 1">
                      <i class="bi bi-x-lg d-block"></i>
                      Remove question
                    </button>
                  </div>

                  <div class="form-floating w-100">
                    <textarea class="form-control faq__answer h-100px" placeholder="Add new Answer"
                              :id="'faq-answer-' + index"></textarea>
                    <label :for="'faq-answer-' + index">Answer</label>
                  </div>
                </div>

                <div class="d-sm-flex justify-content-center mt-3">
                  <button @click="addNewFaq()" type="button" class="btn btn-info mb-3">
                    <i class="bi bi-plus-lg"></i>
                    Add new
                  </button>
                </div>

                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-secondary prev-btn mb-0" @click="navigateToPage(true)"><i class="bi bi-arrow-left"></i> Previous</button>
                  <button class="btn btn-primary next-btn mb-0" @click="navigateToPage()">Next <i class="bi bi-arrow-right"></i></button>
                </div>
              </div>

            </div>

            <div class="tab-pane" id="project-create-step-4" role="tabpanel">
              <h5>Additional Info</h5>
              <p class="small">Additional project info. Choose how you receive notifications.</p>

              <div class="table-responsive mt-4">
                <table class="table mb-0">
                  <thead>
                  <tr>
                    <th class="ps-1" colspan="4"><p class="mb-0">Activity</p></th>
                    <th class="text-center"><p class="mb-0">Email</p></th>
                    <th class="text-center"><p class="mb-0">Push</p></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="ps-1" colspan="4">
                      <div class="my-auto"><span class="text-dark d-block text-sm">Comments</span>
                        <span class="text-xs font-weight-normal">
                              Notify when another user comments your project.
                            </span>
                      </div>
                    </td>
                    <td>
                      <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                        <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault14">
                      </div>
                    </td>
                    <td>
                      <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault15">
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-1" colspan="4">
                      <div class="my-auto"><span class="text-dark d-block text-sm">Liked</span>
                        <span class="text-xs font-weight-normal">
                              Notify when someone likes your project.
                            </span>
                      </div>
                    </td>
                    <td>
                      <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                        <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault11">
                      </div>
                    </td>
                    <td>
                      <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault12"></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-1" colspan="4">
                      <div class="my-auto"><span class="text-dark d-block text-sm">Views</span>
                        <span class="text-xs font-weight-normal">
                              Notify when project get specific count of views.
                            </span>
                        <input type="number" class="form-control w-150px form-control-sm mt-2" placeholder="Views"
                               value="1000"/>
                      </div>
                    </td>
                    <td>
                      <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault17"></div>
                    </td>
                    <td>
                      <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault18">
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="my-4">
                <div class="d-flex justify-content-between align-items-center">
                 <div>
                   <h5>GitHub Integration</h5>
                   <p class="small">Choose your GitHub repository to confirm your additional information.</p>
                 </div>

                  <button class="btn btn-github btn-lg" style="padding: 6px 15px;">
                    <i class="bi bi-github"></i>
                    Connect GitHub repository
                  </button>
                </div>
              </div>

              <div class="d-sm-flex justify-content-between align-items-center mt-2">
                <button class="btn btn-secondary prev-btn mb-0" @click="navigateToPage(true)"><i class="bi bi-arrow-left"></i> Previous</button>
                <button type="button" class="btn btn-success mb-3" @click="create()">
                  <i class="bi bi-plus-lg"></i>
                  Publish Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import {onMounted, ref, watch} from "vue";

import * as data from '@/store/data'
import axios from "axios";

const stepsMenu = ["Project Details", "Project Media", "Project FaQs", "Additional Info"];
const pillsId = ref(0);

const projectInfo = ref({
  title: '',
  category: '',
  language: '',
  summary: '',
  tags: '',
  level: '',
  price: null,
  discount: false,
  discount_amount: '',
  discount_amount_value: null,
  discount_end: '',
  description: '',
  features: [''],

  picture: '',
  pictureRaw: '',
  youtube: '',
  video: '',

  faqs: [],

  notification_comments: false,
  notification_likes: false,
  notification_views: false,
  notification_views_count: 1000,
});

watch(() => projectInfo.value.discount_amount, (percent) => {
  const originalPrice = projectInfo.value.price;
  percent = (percent / 100);
  projectInfo.value.discount_amount_value = originalPrice - (originalPrice * percent);
});

const changePill = (id) => {
  pillsId.value = id;
}

const addNewFeature = () => projectInfo.value.features.push('');
const removeFeature = (feature) => projectInfo.value.features.splice(projectInfo.value.features.indexOf(feature), 1);

const faqs = ref([{question: '', answer: ''}]);

const addNewFaq = () => faqs.value.push({question: '', answer: ''});
const removeFaq = (faq) => faqs.value.splice(faqs.value.indexOf(faq), 1);

const navigateToPage = (prev = false) => {
  const $tabContent = document.getElementById("project-create-step-tabContent");
  const currentStepId = parseInt($tabContent.querySelector('.tab-pane.active.show').getAttribute("id").replace("project-create-step-", ""));

  $tabContent.querySelectorAll('.tab-pane').forEach(el => {
    el.classList.remove('active');
    el.classList.remove('show');
  });

  document.querySelectorAll('.project-create-steps-progress__btn').forEach(el => {
    el.classList.remove('active');
    el.setAttribute('aria-selected', 'false');
  });

  const nextStepId = prev ? currentStepId - 1 : currentStepId + 1;

  const $nextStepBtn = document.querySelector(`.project-create-steps-progress__btn[aria-controls="project-create-step-${nextStepId}"]`);
  $nextStepBtn.classList.add('active');
  $nextStepBtn.setAttribute('aria-selected', 'true');

  const $nextStep = $tabContent.querySelector(`#project-create-step-${nextStepId}`);
  $nextStep.classList.add('active');
  $nextStep.classList.add('show');
  window.scrollTo(0, 0);
}

function projectPicture(e) {
  let files = e.target.files;
  projectInfo.value.pictureRaw = e.target.files[0];

  if (files.length) {
    const fReader = new FileReader();
    fReader.readAsDataURL(files[0]);

    fReader.onloadend = function () {
      projectInfo.value.picture = fReader.result;
    }
  }
}

async function create() {
  const baseURL = data.BACKEND_API;

  const api = axios.create({
    baseURL,
    withCredentials: true
  });

  const formData = new FormData();
  for (const field_name in projectInfo.value) {
    if (field_name !== 'picture') {
      formData.append(field_name, projectInfo.value[field_name]);
    }
  }

  const noRequiredData = (
    !projectInfo.value.title ||
    !projectInfo.value.category ||
    !projectInfo.value.language ||
    !projectInfo.value.summary ||
    !projectInfo.value.tags ||
    !projectInfo.value.level ||
    !projectInfo.value.price ||
    !projectInfo.value.description
  );


  delete formData.picture;

  const res = await api.post('/post/create', formData);

  if (!res.data) {
    await Swal.fire('Error!', 'Error while sending request!', 'error');
    return false;
  }

  if (res.data.success) {
    await Swal.fire('Success!', 'Project was successfully created!', 'success');
  } else {
    await Swal.fire('Error!', res.data.error, 'error');
  }
}

onMounted(() => {
  document.querySelector('a[href="/dashboard/projects"]').classList.add("router-link-active");

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  const choices = document.querySelectorAll('.js-choice');

  choices.forEach(function (item) {
    const removeItemBtn = item.getAttribute('data-remove-item-button') === 'true';
    const placeHolder = item.getAttribute('data-placeholder') !== 'false';
    const placeHolderVal = item.getAttribute('data-placeholder-val') ? item.getAttribute('data-placeholder-val') : 'Type and hit enter';
    const maxItemCount = item.getAttribute('data-max-item-count') ? item.getAttribute('data-max-item-count') : 3;
    const searchEnabled = item.getAttribute('data-search-enabled') !== 'false';
    const editItems = item.getAttribute('data-edit-items') !== 'false';

    new Choices(item, {
      removeItemButton: removeItemBtn,
      placeholder: placeHolder,
      placeholderValue: placeHolderVal,
      maxItemCount: maxItemCount,
      searchEnabled: searchEnabled,
      shouldSort: false,
      editItems: editItems,
      delimiter: '|',
      allowHTML: true
    });
  });
})
</script>
