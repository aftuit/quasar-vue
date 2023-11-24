import { Product, FilterValues, Modals } from 'src/modules/types';
import { defineStore } from 'pinia';
import axios from 'src/service/axios';
import { Notify } from 'quasar';
import { ref } from 'vue';

export type RootState = {
  products: Product[];
  filter: FilterValues;
  modals: Modals;
  isLoading: boolean;
  isSubmitting: boolean;
  isEditing: boolean;
  isDeleted: boolean;
  fading: boolean;
  selectedID: number;
  infoProduct: Product;
  selectedProduct: object;
};

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () =>
    (({
      products: [],
      isLoading: false,
      isSubmitting: false,
      fading: false,
      isEditing: false,
      selectedID: -1,
      infoProduct: {},
      selectedProduct: {
        product_type_id: '1',
        name_uz: '',
        cost: '',
        address: '',
      },
      filter: {
        price: ref(0),
        category: ref([1, 2, 3]),
      },
      modals: {
        info: false,
        action: false,
      },
    } as unknown) as RootState),

  actions: {
    getAllProducts() {
      this.isLoading = true;
      axios
        .get('/product')
        .then((res) => {
          this.products = res.data;
        })
        .catch(() => {
          this.products = [];
        })
        .finally(() => (this.isLoading = false));
    },
    createNewProduct(product: Product) {
      this.isSubmitting = true;
      axios
        .post('/product', JSON.stringify(product), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          this.closeEditModal();
          this.showNotify('positive', res.data);
          this.getAllProducts();
        })
        .catch((err) => {
          this.showNotify('negative', err.message);
        })
        .finally(() => (this.isSubmitting = false));
    },

    updateProduct(product: Product) {
      this.isSubmitting = true;
      axios
        .put('/product', JSON.stringify(product), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          this.closeEditModal();
          this.showNotify('positive', res.data);
          this.getAllProducts();
        })
        .catch((err) => {
          this.showNotify('negative', err.message);
        })
        .finally(() => (this.isSubmitting = false));
    },

    deleteProduct(id: number) {
      this.selectedID = id;
      axios
        .delete(`/product/${id}`)
        .then((res) => {
          this.isDeleted = true;
          setTimeout(() => {
            this.getAllProducts();
            this.selectedID = -1;
            this.showNotify('positive', res.data);
          }, 500);
        })
        .catch(() => {
          this.isDeleted = false;
        })
        .finally(() => {
          this.isDeleted = false;
        });
    },

    sortProducts({price, category}: FilterValues, arr: Product[]) {
      if(price === 0 && category.length === 3) {
        return arr
      }
      else {
        return arr.filter(item => item.cost >= price)
                  .filter(it => category.some(e => Number(e) == it.product_type_id))
      }
    },

    showNotify(type: string, message: string) {
      Notify.create({
        type,
        message,
        position: 'bottom-right',
      });
    },

    toggleInfoModal(product: Product) {
      this.infoProduct = product;
      this.modals.info = !this.modals.info;
    },
    toggleActionModal() {
      this.modals.action = !this.modals.action;
    },
    openEditModal(product: Product){
      this.selectedProduct = product;
      this.modals.action = true;
      this.isEditing = true;
    },
    closeEditModal(){
      this.selectedProduct = {
        product_type_id: '1',
        name_uz: '',
        cost: '',
        address: '',
      };
      this.modals.action = false;
      this.isEditing = false;
    }
  },
});
