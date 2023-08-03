<template>
  <q-card class="text-white" style="width:100%;background: #26232a;">
    <q-bar>


      <q-space />

      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>


    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none" >
      <q-input v-if="type ==='support'" ref="questionRef" :rules="[ val => val.length >= 10 || 'Minimum 10 characters' ]"
               lazy-rules = "ondemand"
               dark standout="bg-deep-purple-4 text-white" v-model="question" label="your question" color="grey-3" label-color="pink-1" />
      <br>
      <q-input ref="emailQuestionRef" :rules="[ val => val.length >= 3 || 'Minimum 3 characters' ]"
               lazy-rules = "ondemand"
               dark standout="bg-deep-purple-4 text-white" v-model="emailQuestion" :label="'your ' + type" color="grey-3" label-color="pink-1" />
      <br>

      <q-btn @click="questionClick" color="deep-purple-3" label="Send" />


    </q-card-section>

  </q-card>
</template>

<script>
import {defineComponent, getCurrentInstance, ref} from 'vue'
import {useQuasar} from "quasar";

export default defineComponent({
  name: 'Support',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  },
  emits: ['sendquestion'],
  setup(props,{ emit }) {
    const instance = getCurrentInstance()
    const emailQuestion = ref('')
    const question = ref('')
    const $q = useQuasar()

    const questionClick = () => {
      if(props.type === 'support') {
        if(instance.refs.questionRef.validate() && instance.refs.emailQuestionRef.validate()){
          $q.notify('Your message has been sent. We will contact you.')
          emit('sendquestion')
        }
      }
      else {
        if(instance.refs.emailQuestionRef.validate()){
          $q.notify('Your message has been sent. We will contact you.')
          emit('sendquestion')
        }

      }





    }


    return {
      emailQuestion,
      question,
      questionClick
    }

  }
})
</script>
