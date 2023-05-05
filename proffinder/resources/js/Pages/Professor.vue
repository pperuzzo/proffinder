<template>
    <div class="antialiased bg-blackalt leading-normal tracking-normal">
        <nav class="bg-gray-900 fixed w-full z-10 top-0 shadow">
            <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
                <div class="w-1/2 md:w-full pl-2 md:pl-0">
                    <a class="text-main text-base xl:text-xl no-underline hover:no-underline font-bold"  href="/"> 
                        Prof Finder
                    </a>
                </div>
                <div class="w-1/2 md:hidden">
                    <a href="/" class="inline-block py-3 mr-2 rounded leading-tight text-white float-right">
                        <span class="text-base"><span class="text-base">&#171;</span> New search</span>
                    </a>
                </div>
                <div class="w-full flex-grow md:flex md:items-center md:w-auto mt-2 md:mt-0 bg-gray-900 z-20">
                    <div class="hidden md:block w-1/3">
                        <div class="relative float-left flex items-center md:border-b border-main py-2 pl-4 pr-4 md:pr-0">
                            <div class="relative w-full border-none">
                                <a href="/" class="inline-block py-3 pr-8 rounded leading-tight w-full text-white">
                                    <span class="text-base"><span class="text-base">&#171;</span> New search</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3">
                        <div class="relative flex items-center md:border-b border-main md:py-2 md:pr-0">
                            <div class="relative w-full border-none inline-block py-3 md:pr-8 rounded leading-tight text-white text-center">
                                {{prof}}
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 hidden md:block">
                        <div class="relative pull-right float-right flex items-center border-b border-main py-2 pl-4 pr-4 md:pr-0">
                            <div class="relative w-full border-none">
                                <select 
                                    class="appearance-none bg-transparent border-none focus:outline-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full text-white"
                                    ref="changeClass"
                                    @change="onChangeClass($event)"
                                >
                                    <option class="pt-6" value="" disabled selected>Filter by class</option>
                                    <option value = "all" class="text-black">All</option>
                                    <option
                                        v-for="(c, i) in classes"
                                        :key="i"
                                        class="text-black"
                                        :value= c.Course
                                    >
                                        {{ c.Course }}
                                    </option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-main">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <div class="relative w-full border-none">
                                <select 
                                    class="appearance-none bg-transparent border-none focus:outline-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full text-white" 
                                    ref="changeSemester"
                                    disabled
                                    @change="onChangeSemester($event)"
                                >
                                    <option class="pt-6" value="" disabled selected>Filter by semester</option>
                                    <option value="all" class="text-black">All</option>
                                    <option
                                        v-for="(s, i) in dropdownSemesters"
                                        :key="i"
                                        class="text-black"
                                        :value= s
                                    >
                                        {{ s }}
                                    </option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-main">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!--Container-->
        <div class="container w-full mx-auto pt-32 md:pt-20 pb-10"> 
            <div class="w-full px-4 md:px-0 md:mt-8 mb-2 text-gray-800 leading-normal">
                <div class="flex flex-wrap">
                    <div class="md:hidden relative pull-right float-right flex items-center border-b border-main py-2 pl-4 pr-4 md:pr-0">
                        <div class="relative w-full border-none">
                            <select 
                                class="appearance-none bg-transparent border-none focus:outline-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full text-white"
                                ref="changeClass"
                                @change="onChangeClass($event)"
                            >
                                <option class="pt-6" value="" disabled selected>Filter by class</option>
                                <option value = "all" class="text-black">All</option>
                                <option
                                    v-for="(c, i) in classes"
                                    :key="i"
                                    class="text-black"
                                    :value= c.Course
                                >
                                    {{ c.Course }}
                                </option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-main">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <div class="relative w-full border-none">
                            <select 
                                class="appearance-none bg-transparent border-none focus:outline-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full text-white" 
                                ref="changeSemesterMobile"
                                disabled
                                @change="onChangeSemester($event)"
                            >
                                <option class="pt-6" value="" disabled selected>Filter by semester</option>
                                <option value="all" class="text-black">All</option>
                                <option
                                    v-for="(s, i) in dropdownSemesters"
                                    :key="i"
                                    class="text-black"
                                    :value= s
                                >
                                    {{ s }}
                                </option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-main">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-1 text-center">
                                    <h5 class="font-bold uppercase text-green-600">Total A</h5>
                                    <h3 class="font-bold text-3xl text-gray-600">{{ A }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-1 text-center">
                                    <h5 class="font-bold uppercase text-orange-500">Total B</h5>
                                    <h3 class="font-bold text-3xl text-gray-600">{{ B }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-1 text-center">
                                    <h5 class="font-bold uppercase text-yellow-600">Total C</h5>
                                    <h3 class="font-bold text-3xl text-gray-600">{{ C }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-1 text-center">
                                    <h5 class="font-bold uppercase text-blue-600">Total D</h5>
                                    <h3 class="font-bold text-3xl text-gray-600">{{ D }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-1 text-center">
                                    <h5 class="font-bold uppercase text-indigo-600">Total F</h5>
                                    <h3 class="font-bold text-3xl text-gray-600">{{ F }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-1 text-center">
                                    <h5 class="font-bold uppercase text-red-600">Total W</h5>
                                    <h3 class="font-bold text-3xl text-gray-600">{{ W }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="border-b-2 border-gray-600 my-8 mx-4">

                <div class="flex flex-row flex-wrap flex-grow mt-2">
                    <div id="graphInTime" ref="graphInTime" class="w-full p-3 transition-all duration-1000 ease-in-out">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="p-3">
                                <h5 class="inline-block font-bold uppercase text-gray-600">Number of </h5>
                                <div class="relative inline-block border-b border-main">
                                    <select 
                                        class="focus:outline-none bg-transparent text-white appearance-none border-none inline-block py-3 pl-3 pr-8 leading-tight"
                                        @change="updateGradeInTime($event)"
                                        ref ="changeGrade"
                                    >
                                        <option class="pt-6 text-black" value="A" selected>A's</option>
                                        <option class="text-black" value="B">B's</option>
                                        <option class="text-black" value="C">C's</option>
                                        <option class="text-black" value="D">D's</option>
                                        <option class="text-black" value="F">F's</option>
                                        <option class="text-black" value="W">W's</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-main">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                <h5 class="inline-block font-bold uppercase text-gray-600"> over time.</h5>
                            </div>
                            <div ref="line">
                                <line-chart
                                    :chart-data="gfsDataCollection"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="border-b border-gray-800 p-3">
                                <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <bar-chart class="p-3"
                                :chart-data="barDataCollection"
                                ref="bar"
                            /> 
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="border-b border-gray-800 p-3">
                                <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <doughnut-chart class="p-3"
                                :chart-data="barDataCollection"
                                ref="doughnut"
                            />                   
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="border-b border-gray-800 p-3">
                                <h5 class="font-bold uppercase text-gray-600">What people say about {{ prof }}</h5>
                            </div>
                            <div class="p-5">
                                <a
                                    :href="`https://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&query=${searchName(prof)}`"
                                    target="blank"
                                    class="bg-main hover:bg-red-700 border-main hover:border-red-700 text-sm border-2 text-white py-1 px-1 text-center rounded inline-block w-full" 
                                >
                                    Read student's reviews of {{ prof }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="border-b border-gray-800 p-3">
                                <h5 class="font-bold uppercase text-gray-600">Check out similar professors:</h5>
                            </div>
                            <div class="p-5">
                                <table class="w-full p-5 text-gray-200">
                                    <tbody>
                                        <tr
                                            v-for="(suggestion, i) in actualSuggestions"
                                            :key="i"
                                            class="border-gray-700 border-b last:border-b-0 md:border-0"
                                        >
                                        <a :href="`/prof/${escape(suggestion.Instructor)}`">
                                            <td v-if="isDepartment" class="py-4">
                                                <span class="w-full">{{ suggestion.Instructor}} <span class="text-gray-600">- Professor in the {{ suggestion.Department }} department</span></span>
                                            </td>
                                            <td v-else>
                                                {{ suggestion.Instructor}} <span class="text-gray-600">- Professor of {{ suggestion.Course }}</span>
                                            </td>
                                            <td class="hidden md:block py-2 float-right">
                                                <a
                                                    :href="`/prof/${escape(suggestion.Instructor)}`" 
                                                    class="flex-shrink-0 bg-main hover:bg-red-700 border-main hover:border-red-700 text-sm border-2 text-white py-1 px-1 rounded" 
                                                >
                                                See more...
                                                </a>
                                            </td>
                                        </a>
                                        </tr>                           
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center sm:items-center sm:justify-between">
                <div class="text-center text-sm text-gray-500 sm:text-left">
                    <div class="flex items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="ml-4 -mt-px w-5 h-5 text-gray-400">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <a href="mailto:it@alensxr.com" class="ml-1 underline">
                            Feedback
                        </a>
                    </div>
                </div>
                <div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                    © 2020 proffinder.com 
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import LineChart from '../Components/Charts/LineChart'
import BarChart from '../Components/Charts/BarChart'
import DoughnutChart from '../Components/Charts/DoughnutChart'

export default {
    props: {
        prof: String,
        suggestions: {
            type: Object,
            default: () => [],
        },
        data: {
            type: Array,
            default: () => [],
        },
        classes: {
            type: Array,
            default: () => [],
        },
        semesters:{
            type: Array,
            default: () => [],
        },
    },
    metaInfo() {
        return {
            title: `${this.prof} - Prof Finder`
        }
    },
    data () {
        return {
            course: "",
            semester: "",
            selectedGrade: "A",
            removeGraph: false,
            isDepartment: true,
            gfsDataCollection: {},
            barDataCollection: {},
            actualSemesters: [],
            actualData: [],
            actualSuggestions: [],
            dropdownSemesters: [],
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            F: 0,
            W: 0,
      }
    },
    components:{
        LineChart,
        BarChart,
        DoughnutChart
    },
    methods: {
        escape(val) {
            return val.split(' ').join('_')
        },
        searchName(string) {
            var str = string.split(" ");
            var longest = 0;
            var word = null;
            str.forEach(function(str) {
                if (longest < str.length) {
                    longest = str.length;
                    word = str;
                }
            });
            return word;
        },
        onChangeClass(event){
            this.course = event.target.value;
            if (this.course != ""){
                this.$refs['changeSemester'].value = "";
                this.$refs['changeSemesterMobile'].value = "";
                this.semester = "";
                this.actualData = this.getData();
                this.actualSemesters = this.getSemesters();
                this.dropdownSemesters = this.actualSemesters.reverse();
                this.toggleGraph();
                this.$refs['changeSemester'].disabled = false;
                this.$refs['changeSemesterMobile'].disabled = "";
                this.selectedGrade = "A";
                this.$refs['changeGrade'].value = "A";
                this.updateGrades();
                this.updateGradeInTime();
                this.updateSuggestions();
            }
        },
        onChangeSemester(event){
            this.semester = event.target.value;
            if (this.semester != ""){
                this.actualSemesters = [this.semester];
                this.actualData = this.getData();
                this.toggleGraph();
                this.updateGrades();
            }
        },
        getSemesters(){
            if (this.course == "" || this.course == "all"){
                return this.semesters.map(({Semester}) => Semester);
            }
            else{
                let res = [];
                this.actualData.forEach((d) => {
                    if (!res.includes(d.Semester)){
                        res.push(d.Semester)
                    }
                });
                return res;
            }
        },
        getData(){
            if (this.semester == "" || this.semester == "all"){
                if (this.course != "all"){
                    return this.data.filter(d => d.Course == this.course).sort((a,b) => (a.SemesterValue > b.SemesterValue) ? 1 : -1);
                }
                else{
                    return this.data.sort((a,b) => (a.SemesterValue > b.SemesterValue) ? 1 : -1);
                }
            }
            else{
                if (this.course != "all"){
                    return this.data.filter(d => d.Course == this.course && d.Semester == this.semester).sort((a,b) => (a.SemesterValue > b.SemesterValue) ? 1 : -1);
                }
                else{
                    return this.data.filter(d => d.Semester == this.semester).sort((a,b) => (a.SemesterValue > b.SemesterValue) ? 1 : -1);
                }
            }
        },
        updateGrades(){
            this.A = 0;
            this.B = 0;
            this.C = 0;
            this.D = 0;
            this.F = 0;
            this.W = 0;
            this.actualData.forEach((d) => {
                this.A += d['A'];
                this.B += d['B'];
                this.C += d['C'];
                this.D += d['D'];
                this.F += d['F'];
                this.W += d['W'];
            });
            this.updateBarGrades([this.A, this.B, this.C, this.D, this.F, this.W])
        },
        updateGradeInTime(event = null){
            if (event != null )
                this.selectedGrade = event.target.value;
            this.gfsDataCollection = {
                labels: this.actualSemesters,
                datasets: [{
                    label: "Number of "+ this.selectedGrade+"'s",
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    fill: false,
                    pointBorderColor: "#F05340",
                    borderColor: "#F05340",
                    data: this.getGradeForSemesters(),
                    lineTension: 0.1
                }]
            }
        },
        updateBarGrades(gradeData){
            this.barDataCollection = {
                labels: ["A", "B", "C", "D", "F", "W"],
                datasets: [{
                    data: gradeData,
                    fill: false,
                    backgroundColor: ["rgba(56, 161, 105, 0.2)", "rgba(237, 137, 54, 0.2)", "rgba(214, 158, 46, 0.2)", "rgba(49, 130, 206, 0.2)", "rgba(90, 103, 216, 0.2)", "rgba(229, 62, 62, 0.2)"],
                    borderColor: ["rgb(56, 161, 105)", "rgb(237, 137, 54)", "rgb(214, 158, 46)", "rgb(49, 130, 206)", "rgb(90, 103, 216)", "rgb(229, 62, 62)"],
                    borderWidth: 1
                }]
            }
        },
        updateSuggestions(){
            if (this.course == "" || this.course == "all"){
                this.actualSuggestions = this.suggestions.Department;
                this.isDepartment = true; 
            }else{
                if (this.course in this.suggestions) {
                    this.actualSuggestions = this.suggestions[this.course];
                    this.isDepartment = false;
                }
            }
        },
        getGradeForSemesters(){
            let res = [];
            let gfs = [];
            this.actualSemesters.forEach((s) => {
                if (!res.includes(s)){
                    res.push(s);
                    let sum = 0;
                    const result = this.actualData.filter(e => e.Semester == s);

                    result.forEach((r) => {
                        sum += r[this.selectedGrade];
                    });
                    gfs.push(sum);
                }
            });
            return gfs;
        },
        toggleGraph(){
            if (this.actualSemesters.length <= 1){
                this.$refs['graphInTime'].classList.remove('opacity-100');
                this.$refs['graphInTime'].classList.add('opacity-0');
                setTimeout(() => { this.toggleGraphHeight(false);}, 500);
            }
            else{
                this.$refs['line'].classList.remove('hidden');
                this.$refs['graphInTime'].classList.remove('opacity-0');
                this.toggleGraphHeight(true);
                this.$refs['graphInTime'].classList.add('opacity-100');
            }
        },
        toggleGraphHeight(isCollapsed) {
            const el = this.$refs['graphInTime'];
            const ch = el.clientHeight,
            sh = el.scrollHeight,
            noHeightSet = !el.style.height;
            el.style.height = (isCollapsed || noHeightSet ? sh : 0) + "px";
            if (noHeightSet){
                return this.toggleGraph.call(this);
            }
            else{
                if (!isCollapsed){
                    setTimeout(() => { this.$refs['line'].classList.add('hidden'); }, 1000);
                }
            }
        },
    },
    mounted(){
        this.actualSemesters = this.semesters.map(({Semester}) => Semester);
        this.actualData = this.data;
        this.actualSuggestions = this.suggestions.Department;
        this.updateGrades();
        this.updateGradeInTime();
        if (this.actualSemesters.length <= 1){
            this.$refs['graphInTime'].classList.add('hidden');
        }
    }
}
</script>

