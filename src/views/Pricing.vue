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

              <button class="btn pricing-card__btn">Get Started</button>
              <ul class="list-unstyled mb-4">
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Access to all basic features
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Up to 10 individual projects
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Up to 100 monthly sells
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Basic reporting and analytics
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Basic chat and email support
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Store customization
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Monthly status reports
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Dedicated support
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Audit log and data history
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Priority chat and email support
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing-card">
              <h2 class="pricing-card__pre-title">Plus</h2>
              <h2 class="pricing-card__title">$19.99</h2>
              <div class="pricing-card__subtitle">For getting started</div>

              <button class="btn btn-primary pricing-card__btn">Get Started</button>
              <ul class="list-unstyled mb-4">
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Access to all basic features
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Up to 100 individual projects
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Up to 1 000 monthly sells
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Basic reporting and analytics
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Basic chat and email support
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Store customization
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Monthly status reports
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Dedicated support
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Audit log and data history
                </li>
                <li class="mb-3 text-muted1 opacity-6">
                  <i class="bi bi-x"></i>
                  Priority chat and email support
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing-card">
              <h2 class="pricing-card__pre-title">Pro</h2>
              <h2 class="pricing-card__title">$39.99</h2>
              <div class="pricing-card__subtitle">For getting started</div>

              <button class="btn pricing-card__btn">Get Started</button>
              <ul class="list-unstyled mb-4">
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Access to all basic features
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Unlimited individual projects
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Unlimited monthly sells
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Basic reporting and analytics
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Basic chat and email support
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Store customization
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Monthly status reports
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Dedicated support
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Audit log and data history
                </li>
                <li class="mb-3">
                  <i class="bi bi-check text-primary"></i>
                  Priority chat and email support
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
  import { ref } from 'vue'
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
</script>