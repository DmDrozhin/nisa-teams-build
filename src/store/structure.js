const structure = {
  namespaced: true,
  state: {
    topMenu: {
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
    }
  },
  getters: {
    TOP_MENU: (state) => state.topMenu
  }
}
export default structure
