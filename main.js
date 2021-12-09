const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'these are nice socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.google.com',
      inStock: true,
      inventory: 11,
      onSale: false,
      features: ['awesome', 'green'],
      types: [
        { id: 1234, colour: 'green', image: "./assets/images/socks_green.jpg"},
        { id: 4321, colour: 'blue', image: "./assets/images/socks_blue.jpg"}
      ],
      sizes: [
        { id: 9999, sml: 'small' },
        { id: 8888, sml: 'medium' },
        { id: 7777, sml: 'large' }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    subtractFromCart() {
      this.cart -= 1
    },
    updateImage(sock) {
      this.image = sock
    }
  }
})