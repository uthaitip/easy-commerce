import { defineStore } from "pinia";

export const useUserProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 1,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test 123",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 1,
        about: "testt",
        status: "open",
        price: 100,
      },
    ],
  }),
  loaded: false,
  actions: {
    filterProducts(searchText) {
      return this.list.filter((product) => product.name.includes(searchText));
    },
  },
});
// export const useUserProductStore = defineStore("user-product", {
//   state: () => ({
//     list: [
//       {
//         name: "test",
//         imageUrl:
//           "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
//         quantity: 10,
//         about: "testt",
//         status: "open",
//         price: 100,
//       },
//     ],
//     loaded: false,
//   }),
// });
