import footer from '@/data/footer.json'

const structure = {
  namespaced: true,
  state: {
    headerData: {
      nav1: [
        { name: 'Home', path: '#home' },
        { name: 'Pricing', path: '#pricing' },
        { name: 'About', path: '#about' },
        { name: 'Blog', path: '#blog' },
        { name: 'Contact', path: '#contact' }
      ],
      nav2: [
        { name: 'Login', path: '#login' },
        { name: 'Buy Nesa', path: '#nesa' }
      ]
    },
    footerData: {}
  },
  getters: {
    HEADER_DATA: (state) => state.headerData,
    FOOTER_DATA: (state) => state.footerData
  },
  mutations: {
    SAVE_UI_DATA (state, pl) { state.footerData = pl }
  },
  actions: {
    LOAD_UI_DATA ({ commit }) {
      commit('SAVE_UI_DATA', footer)
    }
  }
}
export default structure
