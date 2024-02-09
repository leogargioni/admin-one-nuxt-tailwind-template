import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([
    {
      id: 19,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
      login: 'percy64',
      name: 'Howell Hand',
      company: 'Kiehn-Green',
      city: 'Emelyside',
      progress: 70,
      created: 'Mar 3, 2021'
    },
    {
      id: 11,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
      login: 'dare.concepcion',
      name: 'Hope Howe',
      company: 'Nolan Inc',
      city: 'Paristown',
      progress: 68,
      created: 'Dec 1, 2021'
    },
    {
      id: 32,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
      login: 'geovanni.kessler',
      name: 'Nelson Jerde',
      company: 'Nitzsche LLC',
      city: 'Jailynbury',
      progress: 49,
      created: 'May 18, 2021'
    },
    {
      id: 22,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
      login: 'macejkovic.dashawn',
      name: 'Kim Weimann',
      company: 'Brown-Lueilwitz',
      city: 'New Emie',
      progress: 38,
      created: 'May 4, 2021'
    }
  ])
  const history = ref([
    {
      amount: 375.53,
      name: 'Home Loan Account',
      date: '3 days ago',
      type: 'deposit',
      business: 'Turcotte',
      account: "1"
    },
    {
      amount: 470.26,
      name: 'Savings Account',
      date: '3 days ago',
      type: 'payment',
      business: 'Murazik - Graham',
      account: "2"
    },
    {
      amount: 971.34,
      name: 'Checking Account',
      date: '5 days ago',
      type: 'invoice',
      business: 'Fahey - Keebler',
      account: "3"
    },
    {
      amount: 374.63,
      name: 'Auto Loan Account',
      date: '7 days ago',
      type: 'withdrawal',
      business: 'Collier - Hintz',
      account: "4"
    }
  ])

  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    history,
    setUser
  }
})
