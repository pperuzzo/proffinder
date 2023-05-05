<template>
  <main>
    <div class="antialiased bg-blackalt leading-normal tracking-normal relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <nav class="bg-gray-900 fixed w-full z-10 top-0 shadow h-24">
            <div class="w-full container mx-auto flex flex-wrap items-center h-24 pl-2 md:pl-0">
                <a class="text-main text-3xl no-underline hover:no-underline font-bold" href="/"> 
                    Prof Finder
                </a>
                <span class="md:pl-4 text-sm md:text-base text-gray-600">A data driven professor picker for Santa Monica College</span>
            </div>
        </nav>

        <!--Container-->
        <div class="container w-full mx-auto pt-20 mb-10 mt-24 md:mt-0">
            <div class="w-full px-4 md:px-0 md:mt-8 mb-2 text-gray-800 leading-normal">
                <div class="flex flex-row flex-wrap flex-grow mt-2">
                    <div class="w-full p-3">
                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                            <div class="p-12">
                                <div class="flex items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                    <div class="ml-4 text-lg leading-7 font-semibold">
                                        <span class="text-white">Search for a professor:</span>
                                    </div>
                                </div>
                                <autocomplete :data="instructors" ph="Jane Doe" buttonValue="Search Professor" url="prof" />
                                <div class="text-red-500 w-full max-w-sm mt-2 md:ml-12" v-if="$page.errors.professor">
                                    {{ $page.errors.professor }}
                                </div>
                            </div>
                            <div class="p-12 pt-0">
                                <div class="flex items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    <div class="ml-4 text-lg leading-7 font-semibold">
                                        <span class="text-white">Search for a class:</span>
                                    </div>
                                </div>
                                <autocomplete :data="courses" ph="CS 52" buttonValue="Search Class" url="class" />
                                <div class="text-red-500 w-full max-w-sm mt-2 md:ml-12" v-if="$page.errors.class">
                                    {{ $page.errors.class }}
                                </div>
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

import Autocomplete from '../Components/Autocomplete';

export default {
    props: {
        instructors: {
            type: Array,
            default: () => [],
        },
        courses: {
            type: Array,
            default: () => [],
        },
    },
    metaInfo() {
        return {
            title: `Welcome - Prof Finder`,
        }
    },
    components:{
        Autocomplete,
    }
}
</script>

