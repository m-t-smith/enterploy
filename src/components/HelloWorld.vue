
<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/EnterployLogo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          enterploy
        </h1>
        <p class="subheading font-weight-regular">
        Enterprise Employee Management  
        </p>
      </v-flex>
      
      <v-flex xs12>
         <v-text-field
          v-model = "mode"
          disabled
          readonly
          ></v-text-field>
      </v-flex>
      
      <v-flex xs12>
          <v-text-field
            outline
            v-model = "input"
            @change = test()
          ></v-text-field>
        </v-flex>
        
        <v-flex xs12 mb-4>
          <v-btn 
          outline
          @click.native = "xmode('Query')"
          >
            Query
          </v-btn> 
          
          <v-btn 
          outline
          @click.native = "xmode('Insert')"
          >
            Insert
          </v-btn> 
          
          <v-btn 
          outline
          @click.native = "xmode('Delete')"
          >
            Delete
          </v-btn> 
        </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      input: '',
      mode: 'Query'
    }),
    methods: {
      test () {
         // eslint-disable-next-line 
        console.log(this.input)
      },
      xmode (newMode) {
        this.mode = newMode
      }
    }, 
    watch: {
      'mode' : function () {
         // eslint-disable-next-line 
        console.log("Now running in", this.mode, "mode")
      }
    }
  }
</script>

<style>

</style>
