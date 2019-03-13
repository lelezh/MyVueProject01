<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
      <span class="inner"></span>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },

    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        console.log('addcart!!!');
       // this.$emit('cartadd', event.target);
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style scoped>

  .cartcontrol {
    font-size: 0;
  }

  .cart-decrease {
    vertical-align: top;
    display: inline-block;
    padding: 6px;
  }

  .inner {
    display: inline-block;
    width: 20px;
    height: 20px;
    background:url("/static/minus.png") no-repeat;
    background-size: 20px 20px;
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    padding-top: 6px;

    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .cart-add {
    vertical-align: top;
    display: inline-block;
    width: 32px;
    height: 32px;
    padding: 6px;
    background: url("add.png") no-repeat 6px 6px;
    background-size: 20px 20px;
  }
</style>
