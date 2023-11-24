<template >
  <q-dialog v-model="modals.action">
    <q-card class="form-card">
      <q-form @submit="submitHandler" class="modal-form q-pa-lg">
        <div class="q-gutter-sm">
          <div>
            <p class="text-weight-medium text-body1 q-mb-none">Select type:</p>
            <select
              name="product_type_id"
              :defaultValue="selectedProduct.product_type_id"
            >
              <option
                :value="option.value"
                :selected="option.value == selectedProduct.product_type_id"
                v-for="option in options"
                :key="option.id"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="q-mt-lg">
            <p class="text-weight-medium text-body1 q-mb-none">Name:</p>
            <input
              required
              :defaultValue="selectedProduct.name_uz"
              name="name_uz"
              dense
            />
          </div>
          <div class="q-mt-lg">
            <p class="text-weight-medium text-body1 q-mb-none">Cost:</p>
            <input
              required
              :defaultValue="selectedProduct.cost"
              name="cost"
              dense
              type="number"
            />
          </div>
          <div class="q-mt-lg">
            <p class="text-weight-medium text-body1 q-mb-none">Address:</p>
            <input
              required
              :defaultValue="selectedProduct.address"
              name="address"
              dense
            />
          </div>
        </div>
        <q-separator class="q-my-md" />
        <div class="flex justify-end">
          <q-btn type="submit" color="primary" :disabled="isSubmitting">
            Submit
            <q-spinner class="q-ml-sm" v-if="isSubmitting" size="1em" />
          </q-btn>
          <q-btn
            label="Cancel"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
            @click="onCancel"
          />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent } from 'vue';
import { useMainStore } from 'src/stores/stores';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Modal-form',
  data() {
    return {
      options: [
        { label: "O'simliklar", value: '1', color: 'teal' },
        { label: 'Yovvoyi hayvonlar', value: '2', color: 'teal' },
        { label: 'Daraxtlar', value: '3', color: 'teal' },
      ],
    };
  },
  setup() {
    const mainStore = useMainStore();
    const { products, modals, isSubmitting, selectedProduct, isEditing } =
      storeToRefs(mainStore);
    const {
      getAllProducts,
      createNewProduct,
      toggleActionModal,
      closeEditModal,
      updateProduct,
    } = mainStore;

    return {
      products,
      mainStore,
      getAllProducts,
      createNewProduct,
      modals,
      toggleActionModal,
      isSubmitting,
      selectedProduct,
      closeEditModal,
      isEditing,
      updateProduct,
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      let data = e.target.elements;
      const { product_type_id, name_uz, cost, address } = data;

      const body = {
        product_type_id: product_type_id.value,
        name_uz: name_uz.value,
        cost: cost.value,
        address: address.value,
        created_date: new Date(),
      };
      if (this.isEditing) {
        this.updateProduct({ ...body, id: this.selectedProduct.id });
      } else {
        this.createNewProduct(body);
      }
    },
    onCancel() {
      this.closeEditModal();
    },
  },
});
</script>
<style lang="scss">
.form-card {
  width: 50%;
}
.modal-form {
  background: #fff;
  select,
  input {
    font-size: 16px;
    padding: 10px;
    width: 100%;
    outline: none;
    border: 1px solid rgb(194, 192, 192);
  }
}
</style>
