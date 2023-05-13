<template>
  <Header/>

  <section class="section-faq">
    <div class="container">
      <h3 class="block-subtitle mb-3">FAQ</h3>
      <h1 class="block-title">Frequently Asked Questions</h1>
      <p class="block-text">
        A lot of people don't appreciate the moment until it’s passed. I'm not trying my hardest,
        and I'm not trying to do
      </p>

      <div class="row">
        <div class="col-lg-10 col-xl-8 mx-auto text-center position-relative">

          <!-- FAQ START -->
          <div class="accordion accordion-icon mt-4 text-start position-relative" id="faqAccordion">
            <!-- Item -->
            <div class="accordion-item mb-3" v-for="(item, i) in faq">
              <h6 class="accordion-header font-base" :id="'heading-' + i">
                <button class="accordion-button pe-5"
                        :class="{collapsed: i !== 0 }"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#collapse-' + i"
                        :aria-expanded="'true' ? i === 0 : 'false'"
                        :aria-controls="'collapse-' + i">
                  {{ item.question }}
                </button>
              </h6>
              <!-- Body -->
              <div :id="'collapse-' + i"
                   class="accordion-collapse collapse"
                   :class="{show: i === 0}"
                   :aria-labelledby="'heading-' + i"
                   data-bs-parent="#faqAccordion">
                <div class="accordion-body mt-3">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </div>
          <!-- FAQ END -->
        </div>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const faq = [
  {
    question: 'What is your platform?',
    answer: 'Our platform is a marketplace where developers can sell and buy source code.'
  },
  {
    question: 'How can I sell my source code on your platform?',
    answer: 'You can create a seller account on our platform and upload your source code. Our team will review it and approve it for sale if it meets our quality standards.'
  },
  {
    question: 'How much does it cost to sell my source code on your platform?',
    answer: 'We charge a commission fee for each sale made on our platform. The commission fee varies depending on the price of the source code and the seller’s account level.'
  },
  {
    question: 'How do I buy source code on your platform?',
    answer: 'You can browse the listings on our platform and purchase the source code that you’re interested in. You can pay using various payment methods, such as credit cards or PayPal.\n'
  },
  {
    question: 'How can I be sure that the source code I’m buying is of good quality?',
    answer: 'Our team of experts reviews all source code uploaded to our platform to ensure that it meets our quality standards. We also offer a money-back guarantee in case the source code you receive is not as described.'
  },
  {
    question: 'What kind of source code can I sell on your platform?',
    answer: 'We accept various types of source code, such as web applications, mobile apps, plugins, and themes. However, the source code must be original and not violate any copyright or intellectual property laws.'
  },
  {
    question: 'How long does it take for my source code to be approved for sale?',
    answer: 'Our team reviews each source code submission within 24-48 hours. If there are any issues with your submission, we will notify you via email.'
  },
  {
    question: 'How do I receive payment for my source code sales?',
    answer: 'We transfer your earnings to your account balance on our platform. You can then withdraw your earnings to your bank account or PayPal account.'
  },
  {
    question: 'What happens if there’s a dispute between a buyer and a seller?',
    answer: 'We have a dispute resolution process in place to resolve any issues between buyers and sellers. We encourage buyers and sellers to communicate and try to resolve the issue themselves first. If that’s not possible, we will step in to help.'
  },
  {
    question: 'Can I offer discounts on my source code?',
    answer: 'Yes, you can create discount codes for your source code and share them with your customers. You can set the discount amount and the expiration date for each code.'
  },
  {
    question: 'How do I get more visibility for my source code listings?',
    answer: 'You can promote your source code listings on our platform by featuring them on our homepage or in our newsletters. You can also use social media and other marketing channels to drive traffic to your listings.'
  },
  {
    question: 'Can I sell the same source code on other platforms?',
    answer: 'Yes, you can sell your source code on other platforms. However, we recommend that you avoid exclusive agreements that could limit your ability to sell your source code elsewhere.'
  },
  {
    question: 'How do I report a copyright infringement or other violation on your platform?',
    answer: 'You can report any copyright infringement or other violation on our platform by contacting our support team. We take all reports of violations seriously and will investigate them promptly.'
  },
  {
    question: 'What happens if I violate your platform’s terms of service?',
    answer: 'If you violate our platform’s terms of service, we may suspend or terminate your account and remove your source code listings. We may also take legal action if necessary.'
  },
  {
    question: 'Why Codeazone?',
    answer: 'If you would like to know the meaning behind the name "Codeazone", it could be interpreted as a combination of "Code" and "Zone", suggesting a place or platform for developers to focus on coding and showcasing their projects.'
  }
];


</script>