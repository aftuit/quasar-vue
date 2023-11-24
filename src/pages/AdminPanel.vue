<template lang="">
  <div class="admin-panel">
    <ModalForm />
    <div class="q-px-xl wrap">
      <div class="head flex justify-between items-center q-pt-lg">
        <h2 class="text-h4">Dashboard</h2>
          <q-btn @click="toggleActionModal" color="primary" icon="add" label="Create product" />
      </div>
      <div class="q-mt-xl">
        <q-table
          title="Products"
          :rows="products"
          :columns="columns"
          row-key="name"
          :filter="filter"
        >
        <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" :class="props.row.id === selectedID? 'fading': ''">
          <q-th key='id' :props="props">
            {{ props.rowIndex + 1 }}
          </q-th>
          <q-th key='name_uz' :props="props">
            {{ props.row.name_uz }}
          </q-th>
          <q-th key='type' :props="props">
            {{ getProductType(props.row.product_type_id) }}
          </q-th>
          <q-th key='price' :props="props">
            {{ formatCurrency(props.row.cost) }}
          </q-th>
          <q-th key='address' :props="props">
            {{ props.row.address }}
          </q-th>

          <q-th key='created_date' :props="props">
            {{ formatDate(props.row.created_date) }}
          </q-th>
          <q-th key='actions' :props="props">
            <q-btn @click="openEditModal(props.row)" size="sm" color="info" class="q-mx-sm" icon="edit_square" />
            <q-btn @click="deleteProduct(props.row.id)" size="sm" color="negative" class="q-mx-sm" icon="delete_outline" />
          </q-th>
        </q-tr>
      </template>
      </q-table>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import ModalForm from 'src/components/ModalForm.vue';
import { useMainStore } from 'src/stores/stores';
import { storeToRefs } from 'pinia';
import { getProductType, formatCurrency, formatDate } from '../util/helper';
export default defineComponent({
  name: 'admin-panel',
  components: {ModalForm},
  data() {
    return {
      columns: [
        { name: 'id', label: '№', field: 'id' },
        { name: 'name_uz', label: 'Name', field: 'name_uz', sortable: true },
        { name: 'type', label: 'Type', field: 'type', sortable: true },
        { name: 'price', label: 'Price', field: 'price' },
        { name: 'address', label: 'Address', field: 'address' },
        { name: 'created_date', label: 'Created date', field: 'created_date' },
        {
          name: 'actions',
          align: 'center',
          label: 'Actions',
          field: 'actions',
        },
      ],
      filter: '',
    };
  },
  setup() {
    const mainStore = useMainStore();
    const { products, selectedID } = storeToRefs(mainStore);
    const { getAllProducts, deleteProduct, toggleActionModal, openEditModal } = mainStore;

    return {
      products,
      mainStore,
      getAllProducts,
      deleteProduct,
      selectedID,
      toggleActionModal,
      openEditModal

    };
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    getProductType,
    formatCurrency,
    formatDate,
  },
});
</script>
<style lang="scss">
.admin-panel {
  margin-top: 100px;
  background: $gray;
  .fading {
    transition: all 1s ease;
    opacity: 0;
  }
}
</style>
