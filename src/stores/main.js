import { defineStore } from 'pinia'

export const useMainStore = defineStore('counter', {
  state: () => ({
    isSupportModalOpen: false,
    isTelegramModalOpen: false,
    isDiscordModalOpen: false
  }),
  getters: {
    supportModalOpen: (state) => state.isSupportModalOpen,
    telegramModalOpen: (state) => state.isTelegramModalOpen,
    discordModalOpen: (state) => state.isDiscordModalOpen,
  },
  actions: {
    setIsSupportModalOpen(value) {
      this.isSupportModalOpen = value
    },
    setIsTelegramModalOpen(value) {
      this.isTelegramModalOpen = value
    },
    setIsDiscordModalOpen(value) {
      this.isDiscordModalOpen = value
    },
  },
})
