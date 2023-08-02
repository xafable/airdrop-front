<template>
  <q-page class="c-page">
    <div class="c-container">
      <div style="height: 10px;"></div>

        <p  class="text-h4 self-center" style="color: #e6e1e5; text-align: left;">Upcomings events:</p>


      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        infinite
        padding
        autoplay
        height="400px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >

        <q-carousel-slide name="slide_1" class="column no-wrap ">
          <div class="row">

              <q-card class="c-card" style="background: rgba(178,91,43,0.9) !important;width: 100% !important;">
                <q-card-section>

                    <div class="text-h3 text-weight-bolder" style="color: #e6e1e5;">
                        <q-icon class="text-dark" size="lg">
                            <img src="icons/arch.ico"/>
                        </q-icon>
                        Archway</div>
                    <br>
                  <p class="text-weight-bolder">CoinList ARCH distribution</p>
                 </q-card-section>
              </q-card>

          </div>
          <br>

            <div class="row">
                <p class="text-weight-bolder">Airdrop registration start:</p>
            </div>
            <div class="row">
                 <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Jul 25, 12:00 AM</p>
            </div>

            <div class="row">
              <p class="text-weight-bolder">Registration ends:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Ends in 5 days</p>
          </div>

        </q-carousel-slide>

        <q-carousel-slide name="slide_2" class="column no-wrap ">

            <div class="row">
              <q-card class="c-card" style="background: rgba(52, 87, 204, 0.904) !important;width: 100% !important;">
                <q-card-section>
                    <div class="text-h3 text-weight-bolder" style="color: #e6e1e5;">
                        <q-icon class="text-dark" size="lg">
                            <img src="icons/coinbase.png"/>
                        </q-icon>
                        Base</div>
                    <br>
                    <p class="text-weight-bolder">Coinbase's Base Mainnet launch</p>
                 </q-card-section>
              </q-card>
            </div>
          <br>
            <div class="row">
              <p class="text-weight-bolder">Airdrop registration start:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Aug 5, 08:00 AM</p>
          </div>

            <div class="row">
              <p class="text-weight-bolder">Registration ends:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Ends in 25 days</p>
          </div>

        </q-carousel-slide>

        <q-carousel-slide name="slide_3" class="column no-wrap ">

            <div class="row">
              <q-card class="c-card" style="background: rgba(238,84,56,0.9) !important;width: 100% !important;">
                <q-card-section>
                  <div class="text-h3 text-weight-bolder" style="color: #e6e1e5;">
                    <q-icon class="text-dark" size="lg">
                      <img src="icons/shiba.png"/>
                    </q-icon>
                    Shiba Ibu</div>
                  <br>
                  <p class="text-weight-bolder">Shiba Inu-Based Shibarium Blockchain expected to go live in August</p>
                 </q-card-section>
              </q-card>
            </div>
          <br>
            <div class="row">
              <p class="text-weight-bolder">Airdrop registration start:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Jul 28, 10:00 AM</p>
          </div>

            <div class="row">
              <p class="text-weight-bolder">Registration ends:</p>

            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Ends in 56 days</p>
          </div>

        </q-carousel-slide>

        <q-carousel-slide name="slide_4" class="column no-wrap ">

            <div class="row">
              <q-card class="c-card" style="background: rgb(157,157,77) !important;width: 100% !important;">
                <q-card-section>
                  <div class="text-h3 text-weight-bolder" style="color: #e6e1e5;">
                    <q-icon class="text-dark" size="lg">
                      <img src="icons/scroll.ico"/>
                    </q-icon>
                    Scroll</div>
                  <br>
                  <p class="text-weight-bolder">Mainnet launch in early August</p>
                </q-card-section>
              </q-card>
            </div>
          <br>
            <div class="row">
              <p class="text-weight-bolder">Airdrop registration start:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Aug 10, 10:00 AM</p>
          </div>

            <div class="row">
              <p class="text-weight-bolder">Registration ends:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Ends in 90 days</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="slide_5" class="column no-wrap ">

            <div class="row">
              <q-card class="c-card" style="background: rgb(50,115,83) !important;">
                <q-card-section>
                  <div class="text-h3 text-weight-bolder" style="color: #e6e1e5;">
                    <q-icon class="text-dark" size="lg">
                      <img src="icons/zklink.ico"/>
                    </q-icon>
                    zkLink </div>
                  <br>
                  <p class="text-weight-bolder">zkLink Odyssey, an incentivized campaign, to be launched in August</p>
                </q-card-section>
              </q-card>
            </div>
          <br>
            <div class="row">
              <p class="text-weight-bolder">Airdrop registration start:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Jun 18, 02:00 AM</p>
          </div>

            <div class="row">
              <p class="text-weight-bolder">Registration ends:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Ends in 12 days</p>
          </div>

        </q-carousel-slide>

        <q-carousel-slide name="slide_6" class="column no-wrap ">

            <div class="row">
              <q-card class="c-card" style="background: rgb(68,56,115) !important;">
                <q-card-section>
                  <div class="text-h3 text-weight-bolder" style="color: #e6e1e5;">
                    <q-icon class="text-dark" size="lg">
                      <img src="icons/joexyz.png"/>
                    </q-icon>
                    Trader Joe </div>
                  <br>
                  <p class="text-weight-bolder">Lending & leveraged trading to be launched August</p>
                </q-card-section>
              </q-card>
            </div>
          <br>
            <div class="row">
              <p class="text-weight-bolder">Airdrop registration start:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Aug 25, 03:00 AM</p>
          </div>

            <div class="row">
              <p class="text-weight-bolder">Registration ends:</p>
            </div>
          <div class="row">
            <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">Ends in 120 days</p>
          </div>

        </q-carousel-slide>

      </q-carousel>

      <div style="height: 50px;"></div>
      <q-card class="c-card-2">
      <q-card-section>
        <p class="text-weight-bolder">Register now for a chance to earn money by participating in Airdrop or Play2Earn project.</p>
        <p>This website provides information about different giveaways and P2E projects. We have a list of top P2E blockchain games that offer users a rich gaming experience along with multiple opportunities to earn money.
           If you want to earn money and immerse yourself in the world of blockchain leave an application below and we will contact you via mail.
           Attention: the initial testing of most GameFi projects (alpha and beta versions) is carried out on the Windows OS</p>
      </q-card-section>
      </q-card>
      <div style="height: 30px;"></div>
      <div class="row justify-center">
        <p class="text-h5 text-weight-bolder" style="color: #e6e1e5;">To Join this Airdrop you''ll need:</p>

      </div>
      <div class="row justify-center">




    <q-stepper
    style="width: 100%;background:#26232a ;height: auto"
      v-model="step"
      ref="stepper"
      done-color="red-4"
      active-color="deep-purple-3"
      inactive-color="red-3"
      animated
    vertical
    >
      <q-step
        :name="1"
        title="Your email"
        icon="mail"
        :done="step > 1"
      >
      <q-input ref="emailRef" :rules="[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]"
        dark standout="bg-deep-purple-4 text-white"  v-model="email" label="email" color="grey-3" label-color="pink-1"/>
      </q-step>

      <q-step
        :name="2"
        title="Your wallet"
        icon="wallet"
        :done="step > 2"
      >
      <q-input ref="walletRef" :rules="[ val => val.length >= 10 || 'Minimum 10 characters' ]"
        dark standout="bg-deep-purple-4 text-white" v-model="wallet" label="wallet" color="grey-3" label-color="pink-1" />
      </q-step>

      <q-step
        :name="3"
        title="Done"
        icon="recommend"

      >
        <div class="row flex-center">
          <q-icon color="pink-1" name="done" size="5em" /><br>
        </div>
        <div class="row flex-center">
          <p class="text-h4" style="color: #e6e1e5">Done!</p>
        </div>

      </q-step>



      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="stepClick" color="primary" :label="step === 2 ? 'Finish' : 'Continue'" :style="step === 3 ? 'visibility: hidden' : ''"/>
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" :style="step === 3 ? 'visibility: hidden' : ''"/>
        </q-stepper-navigation>
      </template>
    </q-stepper>

      </div>
      <div style="height: 10px;"></div>
    </div>


    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="isModalOpen=true" fab icon="help" color="primary" />
          </q-page-sticky>

  </q-page>


  <q-dialog v-model="isModalOpen" persistent transition-show="flip-down" transition-hide="flip-up" >
    <q-card class="text-white" style="width:100%;background: #26232a;">
      <q-bar>


        <q-space />

        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>


      <q-card-section>
        <div class="text-h6">Send us your question</div>
      </q-card-section>

      <q-card-section class="q-pt-none" >
        <q-input ref="questionRef" :rules="[ val => val.length >= 10 || 'Minimum 10 characters' ]"
          lazy-rules = "ondemand"
          dark standout="bg-deep-purple-4 text-white" v-model="question" label="question" color="grey-3" label-color="pink-1" />
        <br>
        <q-input ref="emailQuestionRef" :rules="[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]"
          lazy-rules = "ondemand"
          dark standout="bg-deep-purple-4 text-white" v-model="emailQuestion" label="email" color="grey-3" label-color="pink-1" />
        <br>

        <q-btn @click="questionClick" color="deep-purple-3" label="Send" />


      </q-card-section>

    </q-card>
  </q-dialog>


</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPageMobile',
  setup () {
    const $q = useQuasar()
    const instance = getCurrentInstance()



    const isMobile = ref('yes')

    const step = ref(1)
    const slide = ref('slide_1')
    const email = ref('')
    const wallet = ref('')
    const isModalOpen = ref(false)
    const emailQuestion = ref('')
    const question = ref('')

    const stepClick = () => {
      if(step.value === 1 ){
        if(!instance.refs.emailRef.validate()){
          $q.notify('Please enter a valid email address')

        }
        else
          instance.refs.stepper.next()


      }
      else if(step.value === 2) {
        if(!instance.refs.walletRef.validate()) {
          $q.notify('Please enter a valid wallet address')
        }
        else
          instance.refs.stepper.next()
      }

      if(step.value === 3)
        $q.notify('Congratulations! You have subscribed to the newsletter.')



    }

    const questionClick = () => {
      if(instance.refs.questionRef.validate() && instance.refs.emailQuestionRef.validate()){
        $q.notify('Your message has been sent. We will contact you.')
        isModalOpen.value = false

      }

    }




    return {
      step,
      slide,
      email,
      wallet,
      isModalOpen,
      emailQuestion,
      question,
      stepClick,
      questionClick,
      isMobile
    }
  }
})
</script>
<style scoped>
.c-page {
  background: #1C1B1F;
}
.c-container {
  margin-left: auto;
  margin-right: auto;
  width: 98%;
}
.c-carousel {
  margin-top: 100px;
}
.c-card {
  background: #332D41;
  height: auto;
  width: 350px;
}
.c-card-2 {
  background: #26232a;
  color: #e6e1e5;
}
.text-brand {
  color: #a2aa33 !important;
}
.bg-brand {
  background: #a2aa33 !important;
}
</style>

<style lang="sass">
.text-negative
  background: #a1989e !important
</style>

