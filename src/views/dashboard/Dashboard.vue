<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header/>

      <div class="wrapper">
        <div class="row mb-5">
          <div class="col-lg-9 mt-lg-0 mt-4">
            <div class="card shadow text-center">
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card shadow text-center">
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>

            <div class="card shadow mt-4">
              <nav class="nav">
                <div class="nav-menu" id="settings-nav-menu"><a
                    class="list-group-item list-group-item-action nav-menu__item active" href="#nav-settings-home">
                  <svg class="icon">
                    <use xlink:href="#sprite-user-profile"></use>
                  </svg>
                  My details</a><a class="list-group-item list-group-item-action nav-menu__item"
                                   href="#nav-settings-profile">
                  <svg class="icon">
                    <use xlink:href="#sprite-user-details"></use>
                  </svg>
                  Basic Info</a><a class="list-group-item list-group-item-action nav-menu__item"
                                   href="#nav-settings-security">
                  <svg class="icon">
                    <use xlink:href="#sprite-security"></use>
                  </svg>
                  Security</a><a class="list-group-item list-group-item-action nav-menu__item"
                                 href="#nav-settings-billing">
                  <svg class="icon">
                    <use xlink:href="#sprite-card"></use>
                  </svg>
                  Billing</a><a class="list-group-item list-group-item-action nav-menu__item"
                                href="#nav-settings-notifications">
                  <svg class="icon">
                    <use xlink:href="#sprite-notification"></use>
                  </svg>
                  Notifications</a><a class="list-group-item list-group-item-action nav-menu__item"
                                      href="#nav-settings-integration">
                  <svg class="icon">
                    <use xlink:href="#sprite-extensions"></use>
                  </svg>
                  Integration</a><a class="list-group-item list-group-item-action nav-menu__item"
                                    href="#nav-settings-danger">
                  <svg class="icon">
                    <use xlink:href="#sprite-alert"></use>
                  </svg>
                  Danger Zone</a></div>
              </nav>
            </div>
            <div class="card shadow mt-4">
              <nav class="nav">
                <div class="nav-menu" id="settings-nav-menu"><a
                    class="list-group-item list-group-item-action nav-menu__item active" href="#nav-settings-home">
                  <svg class="icon">
                    <use xlink:href="#sprite-user-profile"></use>
                  </svg>
                  My details</a><a class="list-group-item list-group-item-action nav-menu__item"
                                   href="#nav-settings-profile">
                  <svg class="icon">
                    <use xlink:href="#sprite-user-details"></use>
                  </svg>
                  Basic Info</a><a class="list-group-item list-group-item-action nav-menu__item"
                                   href="#nav-settings-security">
                  <svg class="icon">
                    <use xlink:href="#sprite-security"></use>
                  </svg>
                  Security</a><a class="list-group-item list-group-item-action nav-menu__item"
                                 href="#nav-settings-billing">
                  <svg class="icon">
                    <use xlink:href="#sprite-card"></use>
                  </svg>
                  Billing</a><a class="list-group-item list-group-item-action nav-menu__item"
                                href="#nav-settings-notifications">
                  <svg class="icon">
                    <use xlink:href="#sprite-notification"></use>
                  </svg>
                  Notifications</a><a class="list-group-item list-group-item-action nav-menu__item"
                                      href="#nav-settings-integration">
                  <svg class="icon">
                    <use xlink:href="#sprite-extensions"></use>
                  </svg>
                  Integration</a><a class="list-group-item list-group-item-action nav-menu__item"
                                    href="#nav-settings-danger">
                  <svg class="icon">
                    <use xlink:href="#sprite-alert"></use>
                  </svg>
                  Danger Zone</a></div>
              </nav>
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
import {watch} from "vue";
import store from "@/store";

console.log(store.getters.userInfo);

</script>
