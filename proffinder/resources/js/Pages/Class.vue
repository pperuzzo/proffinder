<template>
  <main>
    <div class="antialiased bg-blackalt leading-normal tracking-normal relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
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
                                {{course}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!--Container-->
        <div class="container w-full mx-auto pt-20 mb-10 mt-12 md:mt-0">
            <div class="w-full px-4 md:px-0 md:mt-8 mb-2 text-gray-800 leading-normal">
                <div class="flex flex-row flex-wrap flex-grow mt-2">
                    <div class="w-full p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="flex items-center border-b border-main py-2">
                                <input 
                                    class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                    type="text"
                                    placeholder="Filter by name..."
                                    @input="onChange"
                                    v-model="search"
                                >
                            </div>
                            <div>
                                <ul
                                    class="p-0 pt-1 m-0 overflow-auto w-full bg-gray-900"
                                >
                                    <li
                                        v-for="(d, i) in data"
                                        :key="i"
                                        class="list-none text-base text-left p-4 text-white border-gray-800 border-b last:border-b-0 hover:bg-gray-800"
                                        :data-instructor="d.Instructor"
                                    >
                                        {{ d.Instructor }} <span class="text-gray-600">- <b>{{ d.Percentage }}%</b> of A's</span>
                                        <button @click="showProfData(d.Instructor)" class="flex-shrink-0 md:float-right w-full md:w-auto bg-main hover:bg-red-700 border-main hover:border-red-700 text-sm border-2 text-white py-1 px-1 rounded" type="button">
                                            See More
                                        </button>
                                    </li>
                                </ul>
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
  </main>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        course: String
    },
    data() {
        return {
            search: '',
        };
    },
    metaInfo() {
        return {
            title: `${this.course} - Prof Finder`,
        }
    },
    methods: {
        showProfData(instructor){
            console.log("prof/"+instructor.split(' ').join('_'));
            this.$inertia.get("../prof/"+instructor.split(' ').join('_'));
        },
        onChange(){
            this.$el.querySelectorAll('[data-instructor]').forEach((e) => {
                if (e.getAttribute('data-instructor').toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
                    e.classList.remove('hidden');
                    e.classList.add('block');
                }
                else{
                    e.classList.remove('block');
                    e.classList.add('hidden');
                }
            });
        },
    }
}
</script>