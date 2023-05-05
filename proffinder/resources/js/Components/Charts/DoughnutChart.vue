<script>
import { Doughnut, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins

export default {
   extends: Doughnut,
   mixins: [reactiveProp],
   props: {
   },
   data() {
      return {
         options: {
         }
      }
   },
   mounted() {
      //renderChart function renders the chart with the datacollection and options object.
      this.updateRender();
   },
   methods: {
      updateRender(){
         this.renderChart(this.chartData, this.options);
      }
   }
}
</script>
