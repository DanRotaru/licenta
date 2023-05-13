<template>
  <Header/>

  <div class="pricing-wrapper">
    <section class="pricing">
      <div class="container">
        <div class="row">
          <h3 class="block-subtitle">Pricing</h3>
          <h1 class="block-title">Simple, transparent pricing</h1>
          <p class="block-text">We believe our solution should be accessible to all sellers and employers</p>
        </div>

        <div class="row pricing-list">
          <div class="col-lg-4">
            <div class="pricing-card">
              <h2 class="pricing-card__pre-title">Free</h2>
              <h2 class="pricing-card__title">$0</h2>
              <div class="pricing-card__subtitle">For getting started</div>

              <router-link to="/dashboard" v-if="store.getters.isAuthenticated" class="btn pricing-card__btn">
                Get Started
              </router-link>

              <button class="btn pricing-card__btn" v-if="!store.getters.isAuthenticated" data-bs-toggle="modal" data-bs-target="#authenticationModal">
                Get Started
              </button>

              <ul class="list-unstyled mb-4">
                <li class="mb-3"
                    v-for="(item, index) in features"
                    :class="{'opacity-8': index + 1 > pricingPlans.free}">
                  <i class="bi"
                     :class="{'bi-x': index + 1 > pricingPlans.free, 'bi-check text-primary': index + 1 <= pricingPlans.free}"></i>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing-card">
              <h2 class="pricing-card__pre-title">Plus</h2>
              <h2 class="pricing-card__title">$19.99</h2>
              <div class="pricing-card__subtitle">For getting started</div>

              <router-link to="/dashboard" v-if="store.getters.isAuthenticated" class="btn btn-primary pricing-card__btn">
                Get Started
              </router-link>

              <button class="btn btn-primary pricing-card__btn" v-if="!store.getters.isAuthenticated" data-bs-toggle="modal" data-bs-target="#authenticationModal">
                Get Started
              </button>

              <ul class="list-unstyled mb-4">
                <li class="mb-3"
                    v-for="(item, index) in features"
                    :class="{'opacity-8': index + 1 > pricingPlans.plus}">
                  <i class="bi"
                     :class="{'bi-x': index + 1 > pricingPlans.plus, 'bi-check text-primary': index + 1 <= pricingPlans.plus}"></i>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing-card">
              <h2 class="pricing-card__pre-title">Pro</h2>
              <h2 class="pricing-card__title">$39.99</h2>
              <div class="pricing-card__subtitle">For getting started</div>

              <router-link to="/dashboard" v-if="store.getters.isAuthenticated" class="btn pricing-card__btn">
                Get Started
              </router-link>

              <button class="btn pricing-card__btn" v-if="!store.getters.isAuthenticated" data-bs-toggle="modal" data-bs-target="#authenticationModal">
                Get Started
              </button>

              <ul class="list-unstyled mb-4">
                <li class="mb-3"
                    v-for="item in features">
                  <i class="bi bi-check text-primary"></i>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import store from "../store";

const features = [
  'Up to 100 individual projects',
  'Up to 1 000 monthly sells',
  'Basic reporting and analytics',
  'Basic chat and email support',
  'Store customization',
  'Monthly status reports',
  'Dedicated support',
  'Audit log and data history',
  'Priority chat and email support'
];

const pricingPlans = {
  free: 4,
  plus: 7,
  pro: features.length + 1
}
</script>