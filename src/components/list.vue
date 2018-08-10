<template>
  <div class="hello">
    <button style="margin-bottom:20px;" @click="newdata">刷新数据</button>
    <ul class="list">
      <li v-for="(item, index) in listcontent" :key="index">
        <h3>{{item.target.author.name}} <span>{{item.target.author.headline}}</span></h3>
        <p>{{item.target.excerpt}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
    }
  },
  created(){
    this.hqdata()
  },
  computed:{
    listcontent(){
      return this.$store.state.listDate.list
    }
  },
  methods:{
    hqdata(){
		  	this.$store.dispatch('saveDate','../../static/list1.json');
    },
    newdata(){
		  	this.$store.dispatch('saveDate','../../static/list2.json');
		}
  },
  mounted(){
    // axios
    //   .get('../../static/list2.json').then(res=>{
    //     this.listdata = res.data.data
    //     console.log(this.listdata)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  width:400px;
  margin:0 auto;
}
.list li{
  list-style: none;
  border:1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
