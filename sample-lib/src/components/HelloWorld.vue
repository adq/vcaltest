<template>
  <div>
  <DatePicker v-model="selectedDates" class="multiselect" mode="range">
    <template v-slot="{ inputValue, togglePopover }">
      <button @click="togglePopover()" class="multiselect">
        {{inputValue}}
      </button>
    </template>
  </DatePicker>
  </div>
</template>


<script>
import { DatePicker } from 'v-calendar';

export default {
  name: 'HelloWorld',
  components: {
    DatePicker,
  },
  data() {
    return {
      selectedDates: {
        start: new Date(),
        end: new Date(),
      }
    }
  }
};
</script>
