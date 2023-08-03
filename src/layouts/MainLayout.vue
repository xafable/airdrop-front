<template>
  <q-layout view="hHh lpR fFf">



    <q-page-container>
      <router-view />
    </q-page-container>


    <q-footer elevated class="bg-grey-8 text-white" style="background: #492532 !important ;">
      <q-toolbar>
        <q-toolbar-title>

          <div style="height: 6px;"></div>
          <div class="row justify-center">
            <q-btn @click="clickedTelegram()" round size="lg" color="primary" icon="fa-brands fa-telegram" style="margin-left: 5px;margin-right: 5px;"/>
            <q-btn @click="clickedDiscord()" round size="lg" color="primary" icon="fa-brands fa-discord" style="margin-left: 5px;margin-right: 5px;"/>
          </div>
          <div style="height: 6px;"></div>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>


  </q-layout>
</template>
<script>
import { defineComponent } from 'vue'
import { useMainStore } from 'stores/main';



export default defineComponent({
  name: 'MainLayout',
  setup () {
    const store = useMainStore()

    const clickedTelegram = () => {
      store.setIsTelegramModalOpen(true)
    }
    const clickedDiscord = () => {
      store.setIsDiscordModalOpen(true)
    }


    return {
      clickedDiscord,
      clickedTelegram
    }

  }

  }
)
</script>

