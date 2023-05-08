<template>
  <div class="modal fade modal_auth" id="authenticationModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-body">
          <div class="modal-body__first" :class="{'w-100': modalContent === 'register'}">
            <div class="auth-logo">
              <img src="/img/logo.svg" alt="logo">
            </div>

            <div class="modal-heading" v-if="modalContent === 'login'">
              <div class="modal-title">Welcome back!</div>
              <div class="modal-subtitle">{{ message }}</div>
            </div>

            <div class="modal-heading" v-if="modalContent === 'register'">
              <div class="modal-title">Create an account</div>
              <div class="modal-subtitle">{{ message }}</div>
            </div>


            <div class="btn-tab-group" :class="{ active: modalContent === 'register' }">
              <button class="btn-tab-group__btn" :class="{ active: modalContent === 'login' }"
                      @click="showContent('login')">Sign in
              </button>
              <button class="btn-tab-group__btn"
                      :class="{ active: modalContent === 'register' }"
                      @click="showContent('register')">
                Signup
              </button>
            </div>

            <div class="content modal-content-login" v-if="modalContent === 'login'">
              <form @submit.prevent="authenticate()">
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input
                    v-model="auth.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': validations.auth.email }"
                    id="email"
                    required
                    placeholder="name@example.com"/>
                  <div class="invalid-feedback" v-if="validations.auth.email">{{ validations.auth.email }}</div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="auth.password"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': validations.auth.password }"
                    id="password"
                    required
                    placeholder="Your password"/>
                  <div class="invalid-feedback" v-if="validations.auth.password">{{ validations.auth.password }}</div>
                </div>

                <button class="btn btn-hero">Sign in</button>
              </form>
            </div>

            <div class="content modal-content-register" v-if="modalContent === 'register'">
              <form @submit.prevent="register()">

                <div class="row">
                  <div class="col-md-6 pr-5">
                    <div class="mb-3">
                      <label for="first_name" class="form-label">First Name</label>
                      <input
                          v-model="reg.first_name"
                          type="text"
                          class="form-control"
                          required
                          id="first_name"
                          placeholder="Please enter your first name">
                    </div>
                  </div>
                  <div class="col-md-6 pl-5">
                    <div class="mb-3">
                      <label for="last_name" class="form-label">Last Name</label>
                      <input
                          v-model="reg.last_name"
                          type="text"
                          class="form-control"
                          required
                          id="last_name"
                          placeholder="Please enter your last name">
                    </div>
                  </div>

                  <div class="col-md-6 pr-5">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email address</label>
                      <input
                          v-model="reg.email"
                          type="email"
                          class="form-control"
                          required
                          :class="{ 'is-invalid': validations.reg.email }"
                          id="email"
                          placeholder="name@example.com">
                      <div class="invalid-feedback" v-if="validations.reg.email">{{ validations.reg.email }}</div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-5">
                    <div class="mb-3">
                      <label for="role" class="form-label">Your role</label>
                      <select v-model="reg.role" class="form-select" aria-label="Default select example" required>
                        <option selected value="">Select your role</option>
                        <option value="1">Merchant</option>
                        <option value="2">Customer</option>
                        <option value="3">Not sure (decide later)</option>
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 pr-5">
                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input
                          v-model="reg.password"
                          type="password"
                          class="form-control"
                          :class="{ 'is-invalid': validations.reg.password }"
                          required
                          id="password"
                          placeholder="Your password">
                      <div class="invalid-feedback" v-if="validations.reg.password">{{ validations.reg.password }}</div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-5">
                    <div class="mb-3">
                      <label for="password2" class="form-label">Repeat Password</label>
                      <input
                          v-model="reg.password2"
                          type="password"
                          class="form-control"
                          :class="{ 'is-invalid': validations.reg.password2 }"
                          required
                          id="password2"
                          placeholder="Repeat your password">
                      <div class="invalid-feedback" v-if="validations.reg.password2">{{ validations.reg.password2 }}</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-check mb-4">
                      <input class="form-check-input small" type="checkbox" id="agree" required>
                      <label class="form-check-label small" for="agree">
                        I agree to <a class="text-decoration-underline">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                </div>

                <button class="btn btn-hero">Sign up</button>
              </form>
            </div>

            <div class="form-label-text"></div>
            <a href="https://github.com/login/oauth/authorize?client_id=4e23425f30ed641ff5c9&scope=user,repo" class="btn btn-github">
              <i class="bi bi-github"></i>
              Continue with GitHub
            </a>
          </div>
          <div class="modal-body__second" v-if="modalContent === 'login'">
            <img src="/img/login.webp" alt="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, toRefs, watch} from "vue";
import store from '@/store'
import axios from 'axios'
import {useRouter} from 'vue-router';

const router = useRouter();

const modalContent = ref('login');
const props = defineProps(['content']);

const {content} = toRefs(props)
const showContent = (content) => {
  modalContent.value = content;
}

watch(content, () => {
  modalContent.value = content.value;
});

const validations = ref({
  auth: {
    email: '',
    password: '',
  },

  reg: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
  }
})

// Authentication
const message = ref('Log in to your account');

const auth = ref({
  email: '',
  password: '',
});

const reg = ref({
  first_name: '',
  last_name: '',
  email: '',
  role: '',
  password: '',
  password2: ''
});

const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
  withCredentials: true
});

const closeModal = () => {
  Swal.close();
  document.querySelector('.modal-backdrop').remove();
}

function authenticate() {
  const url = '/user/auth/',
    data = {
    email: auth.value.email,
    password: auth.value.password
  };

  api.post(baseURL + url, data)
    .then(response => {
      // message.value = JSON.stringify(response.data);
      console.log(response.data);

      if (!response.data) {
        Swal.fire('Error!', 'Error while sending request!', 'error');
        return false;
      }

      if (response.data.success) {
        validations.value.auth.email = validations.value.auth.password = '';

        Swal.fire('Success!', 'Successfully auth, redirecting...', 'success');
        store.commit('auth', response.data.userInfo);

        setTimeout(() => {
          router.push('/dashboard');

          closeModal();
        }, 3000);

      } else {
        Swal.fire('Error!', response.data.error, 'error');

        if (response.data.error === 'Invalid email or password!') {
          validations.value.auth.email = validations.value.auth.password = response.data.error;
        }
      }
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error
    });
}

function register() {
  validations.value.reg.first_name = '';
  validations.value.reg.last_name = '';
  validations.value.reg.email = '';
  validations.value.reg.password = '';
  validations.value.reg.password2 = '';

  if (reg.value.password !== reg.value.password2) {
    Swal.fire('Error!', `The password confirmation does not match!`, 'error');

    validations.value.reg.password = validations.value.reg.password2 = 'The password confirmation does not match!';

    return false;
  }

  const url = '/user/create/',
    data = {
      email: reg.value.email,
      first_name: reg.value.first_name,
      role: reg.value.role,
      last_name: reg.value.last_name,
      password: reg.value.password
    };

  api.post(baseURL + url, data)
    .then(response => {
      // message.value = JSON.stringify(response.data);
      console.log(response.data);

      if (!response.data) {
        Swal.fire('Error!', 'Error while sending request!', 'error');
        return false;
      }

      if (response.data.success) {
        Swal.fire('Success!', 'Successfully registered, redirecting...', 'success');
        store.commit('auth', response.data.userInfo);

        setTimeout(() => {
          router.push('/dashboard');

          closeModal();
        }, 3000);
      } else {
        Swal.fire('Error!', response.data.error, 'error');

        if (response.data.error === 'Email already taken!') {
          validations.value.reg.email = response.data.error;
        }
      }
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error
    });

}
</script>