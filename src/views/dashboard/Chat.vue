<template>
  <div class="dashboard chat">
    <Navigation/>

    <main>
      <Header page="Chat"/>

      <div class="wrapper">
        <div class="row gx-3 h-100">
          <div class="h-100 col-lg-3">
            <div class="card shadow card-body h-100">
              <h4 class="h4">Messages</h4>

              <div class="search">
                <form class="position-relative">
                  <input class="form-control pe-5 bg-transparent" type="search" placeholder="Search"
                         aria-label="Search">
                  <button
                      class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                      type="submit">
                    <i class="fas fa-search fs-6 "></i>
                  </button>
                </form>
              </div>

              <div class="users">
                <div v-for="n in 10" class="user">
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle"
                         src="/img/me.webp"
                         alt="avatar">
                  </div>

                  <div>
                    <a class="h6">Dan Rotaru</a>
                    <p class="user__message">Message #{{ n }}</p>
                  </div>

                  <div class="user-date">
                    <div class="user-date__time">13:20</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="h-100 col-lg-9 mt-lg-0 mt-4">

            <div class="card shadow card-body h-100">
              <div class="d-flex align-items-center"><!-- Avatar -->
                <div class="avatar me-3">
                  <img class="avatar-img rounded-circle"
                       src="/img/me.webp"
                       alt="avatar">
                </div>
                <div>
                  <a class="h6">Dan Rotaru</a>
                  <p class="small opacity-8 mb-0">last active 5 min ago</p>
                </div>
              </div>

              <div class="chat-messages">

                <div class="message">
                  <div class="avatar avatar-xs">
                    <img class="avatar-img rounded-circle"
                         src="/img/me.webp"
                         alt="avatar">
                  </div>
                  <div class="message__text">Hello my friend</div>
                </div>
                <div class="message mine">
                  <div class="avatar avatar-xs">
                    <img class="avatar-img rounded-circle"
                         src="/img/me.webp"
                         alt="avatar">
                  </div>
                  <div class="message__text">Hello my friend</div>
                </div>
                <div class="message mine">
                  <div class="avatar avatar-xs">
                    <img class="avatar-img rounded-circle"
                         src="/img/me.webp"
                         alt="avatar">
                  </div>
                  <div class="message__text">Hello my friend</div>
                </div>
              </div>

              <div class="chat-message-input">
                <div class="position-relative w-100">
                  <input class="form-control" type="text" placeholder="Message..."/>
                  <div class="chat-message-input__emoji">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>
                  </div>
                </div>
                <button class="btn">Send</button>
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
</script>
