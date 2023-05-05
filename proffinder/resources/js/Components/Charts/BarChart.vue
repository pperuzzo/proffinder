<script>
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins

export default {
   extends: Bar,
   mixins: [reactiveProp],
   props: {
   },
   data() {
      return {
         options: {
            legend: {
               display: false
            },
            scales: {
               yAxes: [{
                     ticks: {
                        beginAtZero: true
                     }
               }]
            }
         }
      }
   },
   mounted() {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartData, this.options);
   },
   methods: {
      updateRender(){
         this.renderChart(this.chartData, this.options);
      }
   }
}
</script>
