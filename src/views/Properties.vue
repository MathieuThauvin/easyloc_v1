<template>
  <div>
      <h1>Mes biens</h1>
      <b-container>
        <b-card no-body>
          <b-card-header class="text-right">
            <b-button v-b-toggle.collapse-1 variant="primary">Ajouter un bien</b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card class="text-left">
                <b-form>
                  <b-form-group
                    id="prop_name"
                    label="Nom du bien"
                  >
                    <b-form-input
                    required
                    placeholder="Entre le nom du bien"
                    v-model="add_form.prop_name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="prop_address"
                    label="Adresse du bien"
                  >
                    <b-form-input
                    required
                    placeholder="Entre l'adresse du bien"
                    v-model="add_form.prop_address"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="prop_rental_number"
                    label="Nombre de location possible"
                    description="Le nombre de location peut-être supérieur à 1 en cas de colocation"
                  >
                    <b-form-input
                    required
                    placeholder="Entre l'adresse du bien"
                    v-model="add_form.prop_rental_number"
                    ></b-form-input>
                  </b-form-group>
                </b-form>
                <b-button variant="success" size="sm" @click="add_prop">Ajouter le bien</b-button>
              </b-card>
            </b-collapse>
          </b-card-header>
          <b-card-body class="text-left">
            <b-table hover :items="items" :fields="fields">
              <template #cell(actions)="">
                <b-button size="sm" class="mr-2">
                  Details
                </b-button>
              </template>
            </b-table>
          </b-card-body>
        </b-card>
      </b-container>
      <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
      
  </div>
</template>


<script>

export default {
  name: 'Properties',
  data() {
      return {
        fields: [
          {
            key: 'prop_name',
            label: 'Nom du bien',
            sortable: false
          },
          {
            key: 'prop_address',
            label: 'Adresse',
            sortable: false
          },
          {
            key: 'prop_rental_number',
            label: 'Nombre de location',
            sortable: false
          },
          {
            key: 'actions',
            label: 'Actions',
            sortable: false
          }
        ],
        items: [
          { prop_name: 'Colocation Orléans', prop_address :'3 rue de Bourgogne 45000 Orléans', prop_rental_number : 4},
          { prop_name: 'Colocation Orléans 2', prop_address :'5 allée des Roseraies 45000 Orléans', prop_rental_number : 3}
        ],
        add_form:{
          prop_name: '',
          prop_address: '',
          prop_rental_number: 0
        }
      }
    },
    methods:{
      add_prop (){
        this.items.push({
          prop_name: this.add_form.prop_name, 
          prop_address: this.add_form.prop_address, 
          prop_rental_number: this.add_form.prop_rental_number});
        this.add_form.prop_name = '';
        this.add_form.prop_address = '';
        this.add_form.prop_rental_number = 0;
        this.$root.$emit('bv::toggle::collapse', 'collapse-1');
      }
    }
}


</script>