<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Favorites"/>

      <div class="wrapper">
        <div>favorites</div>

        <div class="row">
          <div class="col-4">
            <div id="list-example" class="list-group">
              <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
              <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
              <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
            </div>
          </div>
          <div class="col-8">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
              <h4 id="list-item-1">Item 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa dignissimos esse facere, illo, ipsum molestiae mollitia neque nobis perferendis placeat quae quaerat ratione repellat soluta tempore! Natus, saepe!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa dignissimos esse facere, illo, ipsum molestiae mollitia neque nobis perferendis placeat quae quaerat ratione repellat soluta tempore! Natus, saepe!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa dignissimos esse facere, illo, ipsum molestiae mollitia neque nobis perferendis placeat quae quaerat ratione repellat soluta tempore! Natus, saepe!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa dignissimos esse facere, illo, ipsum molestiae mollitia neque nobis perferendis placeat quae quaerat ratione repellat soluta tempore! Natus, saepe!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa dignissimos esse facere, illo, ipsum molestiae mollitia neque nobis perferendis placeat quae quaerat ratione repellat soluta tempore! Natus, saepe!</p>
              <h4 id="list-item-2">Item 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda at, beatae culpa delectus distinctio eius eos, excepturi non odio quibusdam quidem quisquam, recusandae saepe sequi totam velit veritatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda at, beatae culpa delectus distinctio eius eos, excepturi non odio quibusdam quidem quisquam, recusandae saepe sequi totam velit veritatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda at, beatae culpa delectus distinctio eius eos, excepturi non odio quibusdam quidem quisquam, recusandae saepe sequi totam velit veritatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda at, beatae culpa delectus distinctio eius eos, excepturi non odio quibusdam quidem quisquam, recusandae saepe sequi totam velit veritatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda at, beatae culpa delectus distinctio eius eos, excepturi non odio quibusdam quidem quisquam, recusandae saepe sequi totam velit veritatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda at, beatae culpa delectus distinctio eius eos, excepturi non odio quibusdam quidem quisquam, recusandae saepe sequi totam velit veritatis.</p>
              <h4 id="list-item-3">Item 3</h4>
              <p>Lorem ipsum dolor sit ammmet, consectetur adipisicing elit. Doloremque minus pariatur quae? Cumque dolorum eveniet officiis qui quidem quod rerum? Exercitationem expedita harum illo libero odio optio possimus quas tempora!</p>
              <p>Lorem ipsum dolor sit ammmet, consectetur adipisicing elit. Doloremque minus pariatur quae? Cumque dolorum eveniet officiis qui quidem quod rerum? Exercitationem expedita harum illo libero odio optio possimus quas tempora!</p>
              <p>Lorem ipsum dolor sit ammmet, consectetur adipisicing elit. Doloremque minus pariatur quae? Cumque dolorum eveniet officiis qui quidem quod rerum? Exercitationem expedita harum illo libero odio optio possimus quas tempora!</p>
              <p>Lorem ipsum dolor sit ammmet, consectetur adipisicing elit. Doloremque minus pariatur quae? Cumque dolorum eveniet officiis qui quidem quod rerum? Exercitationem expedita harum illo libero odio optio possimus quas tempora!</p>
              <p>Lorem ipsum dolor sit ammmet, consectetur adipisicing elit. Doloremque minus pariatur quae? Cumque dolorum eveniet officiis qui quidem quod rerum? Exercitationem expedita harum illo libero odio optio possimus quas tempora!</p>
              <h4 id="list-item-4">Item 4</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, hic, tenetur. Architecto aut autem blanditiis commodi debitis dolor dolore dolorum ducimus, eos est fuga harum, maiores molestias quos rem saepe?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, hic, tenetur. Architecto aut autem blanditiis commodi debitis dolor dolore dolorum ducimus, eos est fuga harum, maiores molestias quos rem saepe?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, hic, tenetur. Architecto aut autem blanditiis commodi debitis dolor dolore dolorum ducimus, eos est fuga harum, maiores molestias quos rem saepe?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, hic, tenetur. Architecto aut autem blanditiis commodi debitis dolor dolore dolorum ducimus, eos est fuga harum, maiores molestias quos rem saepe?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, hic, tenetur. Architecto aut autem blanditiis commodi debitis dolor dolore dolorum ducimus, eos est fuga harum, maiores molestias quos rem saepe?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, hic, tenetur. Architecto aut autem blanditiis commodi debitis dolor dolore dolorum ducimus, eos est fuga harum, maiores molestias quos rem saepe?</p>
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
