import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const text = () => ({
  components: { LgInput },
  template: '<lg-input v-model="value"></lg-input>',
  date() {
    return {
      value: 'admin'
    }
  }
})

export const password = () => ({
  conponents: { LgInput },
  template: '<lg-input text="password" v-model="value"></lg-input>',
  date() {
    return {
      value: '123456'
    }
  }
})
