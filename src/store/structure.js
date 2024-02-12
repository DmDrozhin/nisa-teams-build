import footer from '@/data/footer-menu.json'
import header from '@/data/header-menu.json'
import homePage from '@/data/home-page.json'

const structure = {
  namespaced: true,
  state: {
    headerData: header,
    footerData: footer,
    homePage: homePage
  },
  getters: {
    HEADER_DATA: (state) => state.headerData,
    HEADER_DATA_PL: (state) => (pl) => state.headerData[pl],
    FOOTER_DATA: (state) => state.footerData,
    FOOTER_DATA_PL: (state) => (pl) => state.footerData[pl],
    HOME_PAGE_PL: (state) => (pl) => state.homePage[pl]
  }
  // mutations: {
  //   SAVE_UI_DATA (state, data) {
  //     state.headerData = data.pl1
  //     state.footerData = data.pl2
  //   }
  // },
  // actions: {
  //   LOAD_UI_DATA ({ commit }) {
  //     commit('SAVE_UI_DATA', { pl1: header, pl2: footer })
  //   }
  // }
}
export default structure
