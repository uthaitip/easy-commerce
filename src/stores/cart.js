import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [
      // {
      //   name: "test",
      //   imageUrl:
      //     "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
      //   quantity: 10,
      //   about: "testt",
      //   status: "open",
      //   price: 100,
      //   quantity: 1,
      // },
    ],
    checkout: {},
  }),
  getters: {
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0);
    },

    summaryPrice(state) {
      // reduce => loop do somting
      // ==> เก็บสะสม กับ ค่าปัจจุบัน
      return state.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    loadCart() {
      const previousCart = localStorage.getItem("cart-data");
      if (previousCart) {
        this.items = JSON.parse(previousCart);
      }
    },
    addToCart(productData) {
      // check product ซ้ำๆ
      const findProductIndex = this.items.findIndex((item) => {
        return item.name === productData.name;
      });

      console.log("findIndex", findProductIndex);

      if (findProductIndex < 0) {
        productData.quantity = 1;
        console.log("findProductIndex111", findProductIndex);
        this.items.push(productData);
      } else {
        console.log("aaa");
        const currentItem = this.items[findProductIndex];
        console.log("bbb", currentItem);
        this.updateQuantity(findProductIndex, currentItem.quantity + 1);
      }

      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity;
      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    removeItemInCart(index) {
      this.items.splice(index, 1);
      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    placeorder(userData) {
      console.log("Checkout", this.items);
      const orderData = {
        ...userData,
        totalPrice: this.summaryPrice,
        paymentMethod: "Credit Card",
        createData: new Date().toLocaleString(),
        orderNumber: `AA${Math.floor(Math.random() * 90000 + 10000)}`,
        products: this.items,
      };

      localStorage.setItem("order-data", JSON.stringify(orderData));
    },
    loadCheckout() {
      const orderData = localStorage.getItem("order-data");
      if (orderData) {
        this.checkout = JSON.parse(orderData);
      }
    },
  },
});
