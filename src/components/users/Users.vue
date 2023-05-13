<template>
  <div class="row mb-4 align-items-center">
    <div class="col-xl-6">
      <div class="bg-body border shadow rounded-4 p-2">
        <div class="input-group">
          <input class="form-control border-0 me-1 shadow-none" type="text"
                 placeholder="Search a user">
          <button type="button" class="btn btn-blue mb-0 rounded-4 border-0"><i class="bi bi-search"></i></button>
        </div>
      </div>
    </div>

    <div class="col-xl-3 mt-3 mt-xl-0">
      <div class="bg-body border shadow rounded-4 p-2">
        <div class="input-group"><select class="form-select border-0">
          <option value="">Most Viewed</option>
          <option value="">Most popular</option>
          <option value="">Top rated</option>
        </select></div>
      </div>
    </div>

    <div class="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
      <button class="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
        <i class="fas fa-sliders-h me-1"></i>

        Show filter
      </button>
      <p class="mb-0 text-end">
        Showing 1-9 of 30 result
      </p>
    </div>
  </div>

  <div class="row g-4">

    <User v-if="usersLoading" v-for="i in 4" loading="true"/>

    <User
        v-if="!usersLoading"
        v-for="user in users"
        :userId="user.userId"
        :avatar="user.avatar"
        :first_name="user.first_name"
        :last_name="user.last_name"
        :position="user.position"
        :description="user.description"
        :category="'Web Development'"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import User from "@/components/cards/card-user.vue";
import * as data from "@/store/data";

const usersLoading = ref(true);
const users = ref([]);

const baseURL = data.BACKEND_API;

const api = axios.create({
  baseURL,
  withCredentials: true
});

async function getUsers() {
  const res = await api.get(baseURL + "/user/all");

  setTimeout(() => {
    usersLoading.value = false;
  }, 1000);

  if (!res.data) {
    console.log('none');
    return false;
    // await Swal.fire('Error!', 'Error while sending request!', 'error');
  }

  if (res.data.success) {
    console.log(res.data);
    users.value = res.data.users;
  } else {
    console.log('none...');
    // await Swal.fire('Error!', res.data.error, 'error');
  }

}

getUsers();

</script>