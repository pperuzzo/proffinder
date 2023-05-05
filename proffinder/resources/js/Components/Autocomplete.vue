<template>
    <form class="w-full mt-2 pl-12 pr-12" @submit.prevent="submit">
        <div class="flex items-center border-b border-main py-2">
            <input 
                class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                :placeholder = ph 
                :aria-label= ph 
                @input="onChange"
                v-model="search"
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
            >
            <button class="hidden md:block flex-shrink-0 bg-main hover:bg-red-700 border-main hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                {{buttonValue}}
            </button>
        </div>
        <ul
            id="autocomplete-results"
            ref="autocomplete"
            v-show="isOpen"
            class="absolute p-0 pt-1 overflow-auto w-32 md:w-96 bg-gray-800 rounded border border-gray-700 "
        >
            <li
                v-for="(result, i) in results"
                :key="i"
                @click="setResult(result.item)"
                class="list-none text-sm text-left p-2 cursor-pointer text-white border-gray-700 border-b last:border-b-0"
                :class="{ 'bg-gray-700': i === arrowCounter }"
            >
                {{ result.item }} <span class="text-gray-600"> - {{ result.department }}</span>
            </li>
        </ul>
        <button class="md:hidden mt-2 flex-shrink-0 bg-main hover:bg-red-700 border-main hover:border-red-700 text-xs border-4 text-white py-1 px-2 rounded w-full" type="submit">
            {{buttonValue}}
        </button>

    </form>
</template>

<script>
export default {
  name: 'Autocomplete',
  props: {
    data: {
        type: Array,
        default: () => [],
    },
    ph: String,
    buttonValue: String,
    url: String,
  },
  data() {
    return {
        isOpen: false,
        results: [],
        search: '',
        arrowCounter: 0,
        maxSize: 5,
    };
  },
  methods: {
    onChange() {
        this.$emit('input', this.search);
        this.results = this.filterSearch();

        if(this.results.length == 0){
            this.isOpen = false;
        }
        else{
            this.isOpen = true;
        }
    },
    filterSearch() {
        if (!this.maxSize || this.maxSize > this.data.length) {
            this.maxSize = this.data.length;
        }
        let count = 0;
        let i = 0;
        let res = new Array();
        while (count< this.maxSize && i < this.data.length ) {
            if (this.data[i].item.toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
                res.push({'item': this.data[i].item, 'department': this.data[i].department});
                count++;
            }
            i++;
        }
        return res;
    },
    setResult(result) {
        this.search = result;
        this.isOpen = false;
    },
    onArrowDown(evt) {
        if (this.arrowCounter < this.results.length) {
            this.arrowCounter = this.arrowCounter + 1;
        }
    },
    onArrowUp() {
        if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter -1;
        }
    },
    onEnter() {
        this.search = this.results[this.arrowCounter].item;
        this.isOpen = false;
        this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
        if (!this.$refs['autocomplete'].contains(evt.target)) {
            this.isOpen = false;
            this.arrowCounter = -1;
        }
    },
    submit() {
        this.$inertia.get(this.url+ "/"+this.search.split(' ').join('_'));
    },
  },
  watch: {
    data: function (val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>
