<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import DeviceDetector from "device-detector-js";

export default defineComponent({
  name: 'App',
  setup() {
    const deviceDetector = new DeviceDetector();

    const _isMobile = () => {
      const deviceType = deviceDetector.parse(navigator.userAgent)
      return deviceType.device.type.toUpperCase() === 'smartphone'.toUpperCase() || deviceType.os.name.toUpperCase() === 'iOS'.toUpperCase()
    }

    return {
      _isMobile,

    };
  },
  mounted() {
    if (!this._isMobile())
      this.$router.push('/')
    else
      this.$router.push('/mobile')

    }

})
</script>
