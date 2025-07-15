import { defineStore } from 'pinia'

export const useContactFormStore = defineStore('contactForm', {
  state: () => ({
    name: '',
    email: '',
    message: ''
  })
})
