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
            <q-btn round size="lg" color="primary" icon="fa-brands fa-telegram" style="margin-left: 5px;margin-right: 5px;"/>
            <q-btn round size="lg" color="primary" icon="fa-brands fa-instagram" style="margin-left: 5px;margin-right: 5px;"/>
            <q-btn round size="lg" color="primary" icon="fa-brands fa-discord" style="margin-left: 5px;margin-right: 5px;"/>
          </div>
          <div style="height: 6px;"></div>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>


  </q-layout>
</template>
<script setup>
</script>
