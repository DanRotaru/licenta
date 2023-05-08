<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="footer-brand">
            <img src="/img/logo.svg" alt="logo">
          </div>
          <p class="copyright">
            Copyright © Codeazone, Inc. 2023. <br/> All rights reserved.
          </p>
          <div class="footer-socials">
            <a href="#">
              <i class="bi bi-github"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>

          <img class="mt-3" src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=348187&theme=light&period=weekly" alt="">
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Resources</h5>
          <ul class="footer-list">
            <li>
              <router-link to="/browse">Browse projects</router-link>
            </li>
            <li>
              <router-link to="/pricing">Pricing</router-link>
            </li>
            <li>
              <router-link to="/faq">FAQ</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Company</h5>
          <ul class="footer-list">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>