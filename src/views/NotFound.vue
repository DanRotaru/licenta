<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <Header/>

  <div class="error-404">
    <img class="d-block mb-5 m-auto" src="/img/404.svg" alt="error 404">
    <router-link to="/" class="btn btn-primary">Take me to Homepage</router-link>
  </div>


  <!-- Button Modal -->
  <button type="button" class="btn btn-block btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalSubscribe">Subscribe</button>
  <!-- Modal Content -->
  <div class="modal fade" id="modalSubscribe" tabindex="-1" role="dialog" aria-labelledby="modalTitleSubscribe" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content py-xl-4">
        <div class="modal-body text-center py-3">
          <svg class="icon icon-xl text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
          <h3 class="modal-title mb-3" id="modalTitleSubscribe">Join our 1,360,462 subscribers</h3>
          <p class="mb-4 lead">Get exclusive access to freebies, premium products and news.</p>
          <div class="form-group px-lg-5">
            <div class="d-flex mb-3 justify-content-center">
              <input type="text" id="subscribe" class="me-sm-1 mb-sm-0 form-control form-control-lg border-gray-300" placeholder="example@company.com">
              <div>
                <button type="submit" class="ms-2 btn large-form-btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer z-2 mx-auto text-center">
          <p class="text-dark fw-normal font-small">
            We’ll never share your details with third parties.
            <br class="visible-md">View our <a href="#">Privacy Policy</a> for more info.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Modal Content -->

  <Footer/>
</template>