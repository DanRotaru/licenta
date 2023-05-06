<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Projects', '/dashboard/projects'], ['Create']]"/>

      <div class="wrapper">
        <div class="dashboard-hero dashboard-hero_create">
          <h1>Add new project</h1>

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
              <div class="row">
                <div class="col-12 mt-4">
                  <label class="form-label" for="name">Project Name</label>
                  <div class="input-group">
                    <input id="name" class="form-control" type="text" placeholder="What's the name of project?"
                           required=""/>
                  </div>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Category</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm"
                          data-search-enabled="true">
                    <option value="">Select category</option>
                    <option>Engineer</option>
                    <option>Medical</option>
                    <option>Information technology</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Language</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" multiple="multiple"
                          aria-label=".form-select-sm" data-max-item-count="10" data-remove-item-button="true">
                      <option value="" disabled>Select project language</option>
                    <option
                            v-for="lang in languages"
                            :key="lang"
                            :value="lang">{{ lang }}</option>
                  </select>
                </div>

                <div class="col-12 mt-4">
                  <label class="form-label" for="summary">Short description</label>
                  <div class="input-group">
                <textarea id="summary" class="form-control"
                          placeholder="Short description that will be displayed on projects list and hero block"
                          rows="5"></textarea>
                  </div>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Tags</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" multiple="multiple"
                          aria-label=".form-select-sm" data-max-item-count="10" data-remove-item-button="true">
                    <option value="">Select tags</option>
                    <option>Tag1</option>
                    <option>Tag2</option>
                    <option>Tag3</option>
                    <option>Tag4</option>
                  </select>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label" data-bs-toggle="tooltip" data-bs-placement="top"
                         data-bs-title="Specify project level">Project level</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent" data-search-enabled="false"
                          data-remove-item-button="true">
                    <option value="">Select project level</option>
                    <option>All level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advance</option>
                  </select>
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label" for="price">Price</label>
                  <input id="price" type="number" class="form-control" placeholder="Enter project price">
                </div>

                <div class="col-md-6 mt-4">
                  <label class="form-label">Discount price</label>
                  <div class="input-group">
                    <span class="input-group-text">%</span>
                    <input type="number" class="form-control" placeholder="Enter discount" disabled/>
                  </div>

                  <div class="col-12 mt-1 mb-0">
                    <div class="form-check small mb-0">
                      <input class="form-check-input" type="checkbox" id="checkBox1">
                      <label class="form-check-label" for="checkBox1">
                        Enable this Discount
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-12 mt-4">
                  <label class="form-label" for="description">Project Description</label>
                  <div class="input-group">
                    <textarea id="description" class="form-control" placeholder="Project Description" rows="8"></textarea>
                  </div>
                </div>

                <div class="mt-5 mb-3 d-flex justify-content-end">
                  <button class="btn" style="width: 300px" data-bs-target="#project-create-step-2" data-bs-toggle="pill" aria-controls="project-create-step-2" role="tab">Next</button>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="project-create-step-2" role="tabpanel">
              <h5>Project Media</h5>
            </div>

            <div class="tab-pane" id="project-create-step-3" role="tabpanel">
              <h5>Project FaQs</h5>
            </div>

            <div class="tab-pane" id="project-create-step-4" role="tabpanel">
              <h5 @click="ck()">Additional Info</h5>
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
import {onMounted, ref} from "vue";

const stepsMenu = ["Project Details", "Project Media", "Project FaQs", "Additional Info"];
const pillsId = ref(0);

const languages = [  "English", "Romanian", "German", "French", "Italian", "Spanish", "Russian", "Turkish", "Polish", "Ukrainian", "Swedish", "Portuguese", "Greek", "Czech", "Hungarian", "Serbian", "Danish", "Norwegian", "Finnish", "Slovak", "Bulgarian", "Croatian"];

const changePill = (id) => {
  pillsId.value = id;
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

    new Choices(item, {
      removeItemButton: removeItemBtn,
      placeholder: placeHolder,
      placeholderValue: placeHolderVal,
      maxItemCount: maxItemCount,
      searchEnabled: searchEnabled,
      allowHTML: true
    });
  });
})
</script>
