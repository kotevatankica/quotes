import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const stateStore = defineStore("store", {
  state: () => {
    return {
      selected_barcode: {},
      currentTab: "iOS",
    };
  },
});
