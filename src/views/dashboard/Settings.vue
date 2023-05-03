<template>
  <div class="dashboard settings">
    <Navigation/>

    <main>
      <Header page="Settings"/>

      <div class="wrapper">
        <div class="row mb-5 settings-row">
          <div class="col-lg-3">
            <aside class="settings-aside card position-sticky">
              <nav class="nav">
                <div class="nav-menu" id="settings-nav-menu">
                  <a
                      v-for="(item, index) in menu"
                      :key="item.link"
                      class="list-group-item list-group-item-action nav-menu__item"
                      :class="{active: index === 0}"
                      :href="item.to"
                  >
                    <svg class="icon">
                      <use :xlink:href="'#sprite-' + item.icon"></use>
                    </svg>

                    {{ item.text }}
                  </a>
                </div>
              </nav>
            </aside>
          </div>

          <div class="col-lg-9 mt-lg-0 mt-4">
            <div id="scrollSpy" data-bs-spy="scroll" data-bs-target="#settings-nav-menu" data-bs-smooth-scroll="true"
                 class="scrollspy-example" tabindex="0">

              <div class="card card-body" id="nav-settings-home">
                <div class="row align-items-center">
                  <div class="col-5">
                    <img src="/img/me.webp" alt="bruce" class="rounded-3">
                    <button class="btn settings-btn-sm">Upload new avatar</button>
                  </div>
                  <div class="col-7">
                    <div class="h-100"><h5 class="mb-1 font-weight-bolder"> Dan Rotaru </h5>
                      <p class="mb-0 font-weight-bold small"> CEO / Co-Founder </p>

                      <div class="form-floating">
                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                    style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Profile description</label>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-4" id="nav-settings-profile">
                <div class="card-header">
                  <h5>Basic Info</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label">First Name</label>
                      <div class="input-group">
                        <input id="firstName" name="firstName" class="form-control" type="text" placeholder="Alec"
                               required="required" onfocus="focused(this)" onfocusout="defocused(this)">
                      </div>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Last Name</label>
                      <div class="input-group">
                        <input id="lastName" name="lastName" class="form-control" type="text" placeholder="Thompson"
                               required="required" onfocus="focused(this)" onfocusout="defocused(this)">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 col-6">
                      <label class="form-label mt-4">I'm</label>
                      <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                           aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                        <div class="choices__inner"><select class="form-control choices__input" name="choices-gender"
                                                            id="choices-gender" hidden="" tabindex="-1"
                                                            data-choice="active">
                          <option value="Male">Male</option>
                        </select>
                          <div class="choices__list choices__list--single">
                            <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                 data-value="Male" data-custom-properties="null" aria-selected="true">Male
                            </div>
                          </div>
                        </div>
                        <div class="choices__list choices__list--dropdown" aria-expanded="false">
                          <input type="text"
                                 class="choices__input choices__input--cloned"
                                 autocomplete="off"
                                 autocapitalize="off"
                                 spellcheck="false"
                                 role="textbox"
                                 aria-autocomplete="list"
                                 aria-label="false"
                                 placeholder=""
                                 aria-activedescendant="choices--choices-gender-item-choice-1">
                          <div class="choices__list" role="listbox">
                            <div id="choices--choices-gender-item-choice-1"
                                 class="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                 role="option" data-choice="" data-id="1" data-value="Female"
                                 data-select-text="Press to select" data-choice-selectable="" aria-selected="true">
                              Female
                            </div>
                            <div id="choices--choices-gender-item-choice-2"
                                 class="choices__item choices__item--choice is-selected choices__item--selectable"
                                 role="option" data-choice="" data-id="2" data-value="Male"
                                 data-select-text="Press to select" data-choice-selectable="" aria-selected="false">
                              Male
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="row">
                        <div class="col-sm-5 col-5">
                          <label class="form-label mt-4">Birth Date</label>
                          <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                               aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                            <div class="choices__inner"><select class="form-control choices__input"
                                                                name="choices-month" id="choices-month" hidden=""
                                                                tabindex="-1" data-choice="active">
                              <option value="2">February</option>
                            </select>
                              <div class="choices__list choices__list--single">
                                <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                     data-value="2" data-custom-properties="null" aria-selected="true">February
                                </div>
                              </div>
                            </div>
                            <div class="choices__list choices__list--dropdown" aria-expanded="false"><input
                                type="text" class="choices__input choices__input--cloned" autocomplete="off"
                                autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list"
                                aria-label="false" placeholder="">
                              <div class="choices__list" role="listbox">
                                <div id="choices--choices-month-item-choice-1"
                                     class="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                     role="option" data-choice="" data-id="1" data-value="4"
                                     data-select-text="Press to select" data-choice-selectable=""
                                     aria-selected="true">April
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 col-3">
                          <label class="form-label mt-4">&nbsp;</label>
                          <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                               aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                            <div class="choices__inner"><select class="form-control choices__input" name="choices-day"
                                                                id="choices-day" hidden="" tabindex="-1"
                                                                data-choice="active">
                              <option value="1">1</option>
                            </select>
                              <div class="choices__list choices__list--single">
                                <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                     data-value="1" data-custom-properties="null" aria-selected="true">1
                                </div>
                              </div>
                            </div>
                            <div class="choices__list choices__list--dropdown" aria-expanded="false"><input
                                type="text" class="choices__input choices__input--cloned" autocomplete="off"
                                autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list"
                                aria-label="false" placeholder="">
                              <div class="choices__list" role="listbox">
                                <div id="choices--choices-day-item-choice-1"
                                     class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                     role="option" data-choice="" data-id="1" data-value="1"
                                     data-select-text="Press to select" data-choice-selectable=""
                                     aria-selected="true">1
                                </div>
                                <div id="choices--choices-day-item-choice-2"
                                     class="choices__item choices__item--choice choices__item--selectable"
                                     role="option" data-choice="" data-id="2" data-value="2"
                                     data-select-text="Press to select" data-choice-selectable="">2
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3 col-4">
                          <label class="form-label mt-4">&nbsp;</label>
                          <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                               aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                            <div class="choices__inner"><select class="form-control choices__input"
                                                                name="choices-year" id="choices-year" hidden=""
                                                                tabindex="-1" data-choice="active">
                              <option value="2020">2020</option>
                            </select>
                              <div class="choices__list choices__list--single">
                                <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                     data-value="2020" data-custom-properties="null" aria-selected="true">2020
                                </div>
                              </div>
                            </div>
                            <div class="choices__list choices__list--dropdown" aria-expanded="false"><input
                                type="text" class="choices__input choices__input--cloned" autocomplete="off"
                                autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list"
                                aria-label="false" placeholder="">
                              <div class="choices__list" role="listbox">
                                <div id="choices--choices-year-item-choice-1"
                                     class="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                     role="option" data-choice="" data-id="1" data-value="1900"
                                     data-select-text="Press to select" data-choice-selectable=""
                                     aria-selected="true">1900
                                </div>
                                <div id="choices--choices-year-item-choice-2"
                                     class="choices__item choices__item--choice choices__item--selectable"
                                     role="option" data-choice="" data-id="2" data-value="1901"
                                     data-select-text="Press to select" data-choice-selectable="">1901
                                </div>
                                <div id="choices--choices-year-item-choice-3"
                                     class="choices__item choices__item--choice choices__item--selectable"
                                     role="option" data-choice="" data-id="3" data-value="1902"
                                     data-select-text="Press to select" data-choice-selectable="">1902
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label mt-4">Email</label>
                      <div class="input-group">
                        <input id="email" name="email" class="form-control" type="email"
                               placeholder="example@email.com" onfocus="focused(this)" onfocusout="defocused(this)">
                      </div>
                    </div>
                    <div class="col-6">
                      <label class="form-label mt-4">Confirmation Email</label>
                      <div class="input-group">
                        <input id="confirmation" name="confirmation" class="form-control" type="email"
                               placeholder="example@email.com" onfocus="focused(this)" onfocusout="defocused(this)">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label mt-4">Your location</label>
                      <div class="input-group">
                        <input id="location" name="location" class="form-control" type="text" placeholder="Sydney, A"
                               onfocus="focused(this)" onfocusout="defocused(this)">
                      </div>
                    </div>
                    <div class="col-6">
                      <label class="form-label mt-4">Phone Number</label>
                      <div class="input-group">
                        <input id="phone" name="phone" class="form-control" type="number"
                               placeholder="+40 735 631 620" onfocus="focused(this)" onfocusout="defocused(this)">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 align-self-center">
                      <label class="form-label mt-4">Language</label>
                      <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                           aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                        <div class="choices__inner"><select class="form-control choices__input"
                                                            name="choices-language" id="choices-language" hidden=""
                                                            tabindex="-1" data-choice="active">
                          <option value="English">English</option>
                        </select>
                          <div class="choices__list choices__list--single">
                            <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                 data-value="English" data-custom-properties="null" aria-selected="true">English
                            </div>
                          </div>
                        </div>
                        <div class="choices__list choices__list--dropdown" aria-expanded="false"><input type="text"
                                                                                                        class="choices__input choices__input--cloned"
                                                                                                        autocomplete="off"
                                                                                                        autocapitalize="off"
                                                                                                        spellcheck="false"
                                                                                                        role="textbox"
                                                                                                        aria-autocomplete="list"
                                                                                                        aria-label="false"
                                                                                                        placeholder="">
                          <div class="choices__list" role="listbox">
                            <div id="choices--choices-language-item-choice-1"
                                 class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                 role="option" data-choice="" data-id="1" data-value="English"
                                 data-select-text="Press to select" data-choice-selectable="" aria-selected="true">
                              English
                            </div>
                            <div id="choices--choices-language-item-choice-2"
                                 class="choices__item choices__item--choice choices__item--selectable" role="option"
                                 data-choice="" data-id="2" data-value="French" data-select-text="Press to select"
                                 data-choice-selectable="">French
                            </div>
                            <div id="choices--choices-language-item-choice-3"
                                 class="choices__item choices__item--choice choices__item--selectable" role="option"
                                 data-choice="" data-id="3" data-value="Spanish" data-select-text="Press to select"
                                 data-choice-selectable="">Spanish
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label mt-4">Skills</label>
                      <div class="choices" data-type="text" aria-haspopup="true" aria-expanded="false">
                        <div class="choices__inner"><input class="form-control choices__input" id="choices-skills"
                                                           type="text" value="vuejs,angular,react"
                                                           placeholder="Enter something" hidden="" tabindex="-1"
                                                           data-choice="active" onfocus="focused(this)"
                                                           onfocusout="defocused(this)">
                          <div class="choices__list choices__list--multiple">
                            <div class="choices__item choices__item--selectable" data-item="" data-id="1"
                                 data-value="vuejs" data-custom-properties="null" aria-selected="true"
                                 data-deletable="">vuejs
                              <button type="button" class="choices__button" aria-label="Remove item: 'vuejs'"
                                      data-button="">Remove item
                              </button>
                            </div>
                            <div class="choices__item choices__item--selectable" data-item="" data-id="2"
                                 data-value="angular" data-custom-properties="null" aria-selected="true"
                                 data-deletable="">angular
                              <button type="button" class="choices__button" aria-label="Remove item: 'angular'"
                                      data-button="">Remove item
                              </button>
                            </div>
                            <div class="choices__item choices__item--selectable" data-item="" data-id="3"
                                 data-value="react" data-custom-properties="null" aria-selected="true"
                                 data-deletable="">react
                              <button type="button" class="choices__button" aria-label="Remove item: 'react'"
                                      data-button="">Remove item
                              </button>
                            </div>
                          </div>
                          <input type="text" class="choices__input choices__input--cloned" autocomplete="off"
                                 autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list"
                                 aria-label="false"></div>
                        <div class="choices__list choices__list--dropdown" aria-expanded="false"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-4" id="nav-settings-security">
                <div class="card-header">
                  <h5>Security</h5>
                </div>
                <div class="card-body pt-0">
                  <label class="form-label" for="current-password">Current password</label>
                  <div class="form-group mb-3">
                    <input id="current-password" class="form-control" type="password" placeholder="Current password">
                  </div>
                  <label class="form-label" for="new-password">New password</label>
                  <div class="form-group mb-3">
                    <input id="new-password" class="form-control" type="password" placeholder="New password">
                  </div>
                  <label class="form-label" for="new-password2">Confirm new password</label>
                  <div class="form-group mb-3">
                    <input id="new-password2" class="form-control" type="password" placeholder="Confirm password">
                  </div>
                  <h5 class="mt-4">Password requirements</h5>
                  <p class="mb-2">
                    Please follow this guide for a strong password:
                  </p>
                  <ul class="ps-4 mb-0 float-start">
                    <li>
                      <span class="small">One special characters</span>
                    </li>
                    <li>
                      <span class="small">Min 6 characters</span>
                    </li>
                    <li>
                      <span class="small">One number (2 are recommended)</span>
                    </li>
                    <li>
                      <span class="small">Change it often</span>
                    </li>
                  </ul>
                  <button class="btn btn-sm float-end mt-6 mb-0">Update password</button>
                </div>
              </div>

              <div class="card mt-4" id="nav-settings-billing">
                <div class="card-header">
                  <h5>Billing</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-lg-4 mb-4">
                      <div class="card h-100 border-start-lg border-start-primary">
                        <div class="card-body">
                          <div class="small opacity-6 mb-2">Current monthly bill</div>
                          <div class="h3">$0.00</div>
                          <a class="text-arrow-icon small" href="#!"> Switch to yearly billing
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="feather feather-arrow-right">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a></div>
                      </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                      <div class="card h-100 border-start-lg border-start-secondary">
                        <div class="card-body">
                          <div class="small opacity-6 mb-2">Next payment due</div>
                          <div class="h3">July 15</div>
                          <a class="text-arrow-icon small text-secondary" href="#!"> View payment history
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="feather feather-arrow-right">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a></div>
                      </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                      <div class="card h-100 border-start-lg border-start-success">
                        <div class="card-body">
                          <div class="small opacity-6 mb-2">Current plan</div>
                          <div class="h3 d-flex align-items-center">Free</div>
                          <a class="text-arrow-icon small text-success" href="#!"> Upgrade plan
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="feather feather-arrow-right">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="card mt-4" id="nav-settings-notifications">
                <div class="card-header">
                  <h5>Notifications</h5>

                  <p class="small">Choose how you receive notifications. These notification settings apply to the
                    things you’re watching.</p>
                </div>
                <div class="card-body pt-0">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead>
                      <tr>
                        <th class="ps-1" colspan="4">
                          <p class="mb-0">Activity</p>
                        </th>
                        <th class="text-center">
                          <p class="mb-0">Email</p>
                        </th>
                        <th class="text-center">
                          <p class="mb-0">Push</p>
                        </th>
                        <th class="text-center">
                          <p class="mb-0 opacity-3">SMS</p>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <span class="text-dark d-block text-sm">Mentions</span>
                            <span class="text-xs font-weight-normal">Notify when another user mentions you in a comment</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault11">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault12">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault13" disabled>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <span class="text-dark d-block text-sm">Comments</span>
                            <span
                                class="text-xs font-weight-normal">Notify when another user comments your item.</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault14">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault15">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault16" disabled>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <span class="text-dark d-block text-sm">Follows</span>
                            <span class="text-xs font-weight-normal">Notify when another user follows you.</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault17">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault18">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault19" disabled>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <p class="text-sm mb-0">Log in from a new device</p>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault20">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked="" type="checkbox" id="flexSwitchCheckDefault21">
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault22" disabled>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="card mt-4" id="nav-settings-integration">
                <div class="card-header">
                  <h5>Integration</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="d-flex">
                    <img
                        class="w-48"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E"
                        alt="github"/>
                    <div class="my-auto ms-3">
                      <div class="h-100"><h5 class="mb-0">Github</h5>
                        <p class="mb-0 text-sm">Integrate with Github and easily manage projects</p>
                      </div>
                    </div>
                    <p class="text-sm text-secondary ms-auto me-3 my-auto">Connected</p>
                    <div class="form-check form-switch my-auto">
                      <input class="form-check-input" type="checkbox" checked
                             id="flexSwitchCheckDefault2"></div>
                  </div>
                  <hr class="horizontal dark">
                  <div class="d-flex">
                    <img
                        class="w-48"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='xMidYMid' viewBox='0 0 256 262' width='256' height='256'%3E%3Cpath fill='%234285f4' d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027' class='color4285F4 svgShape'%3E%3C/path%3E%3Cpath fill='%2334a853' d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1' class='color34A853 svgShape'%3E%3C/path%3E%3Cpath fill='%23fbbc05' d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782' class='colorFBBC05 svgShape'%3E%3C/path%3E%3Cpath fill='%23eb4335' d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251' class='colorEB4335 svgShape'%3E%3C/path%3E%3C/svg%3E"
                        alt="google"
                    />
                    <div class="my-auto ms-3">
                      <div class="h-100"><h5 class="mb-0">Google</h5>
                        <p class="mb-0 text-sm">Integration with Google</p>
                      </div>
                    </div>
                    <p class="text-sm text-secondary ms-auto me-3 my-auto">Not connected</p>
                    <div class="form-check form-switch my-auto">
                      <input class="form-check-input" type="checkbox"
                             id="flexSwitchCheckDefault2"></div>
                  </div>
                </div>
              </div>

              <div class="card mt-4" id="nav-settings-danger">
                <div class="card-header">
                  <h5>Danger Zone</h5>
                  <h5 class="text-danger">Delete account</h5>
                  <p class="small mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                </div>
                <div class="card-body d-sm-flex pt-0">
                  <div class="d-flex align-items-center mb-sm-0 mb-4">
                    <div>
                      <div class="form-check form-switch mb-0">
                        <input class="form-check-input" type="checkbox" id="delete-my-account">
                      </div>
                    </div>
                    <label for="delete-my-account" class="d-block ms-2">
                      <span class="text-dark font-weight-bold d-block text-sm">Confirm</span>
                      <span class="text-xs d-block">I want to delete my account.</span>
                    </label>
                  </div>
                  <button class="btn btn-danger mb-0 ms-auto" type="button" name="button">Delete Account</button>
                </div>
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

import {onMounted} from "vue";
import Choices from "choices.js";
// import Choices from "choices.js";

const menu = [
  {to: '#nav-settings-home', icon: 'user-profile', text: 'My details'},
  {to: '#nav-settings-profile', icon: 'user-details', text: 'Basic Info'},
  {to: '#nav-settings-security', icon: 'security', text: 'Security'},
  {to: '#nav-settings-billing', icon: 'card', text: 'Billing'},
  {to: '#nav-settings-notifications', icon: 'notification', text: 'Notifications'},
  {to: '#nav-settings-integration', icon: 'extensions', text: 'Integration'},
  {to: '#nav-settings-danger', icon: 'alert', text: 'Danger Zone'},
];

onMounted(() => {

  const createScrollSpy = () => {
    new bootstrap.ScrollSpy(document.querySelector("#scrollSpy"));
  }

  createScrollSpy();
  setTimeout(createScrollSpy, 1000);

  const choices = new Choices('[data-choice]');

  // dataSpyList.forEach(dataSpyEl => {
  //   console.log(bootstrap.ScrollSpy.getInstance(dataSpyEl));
  //   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  //     target: dataSpyEl
  //   })
  // })
});

</script>
