<template>
  <nav class="tabs">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: tab === activeTab }"
        @click="$emit('changeTab', tab)"
        role="button"
        tabindex="0"
        @keydown.enter="$emit('changeTab', tab)"
        aria-current="tab === activeTab ? 'true' : 'false'"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="underline" :style="underlineStyle"></div>
  </nav>
</template>

<script>
export default {
  name: 'ColorTabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTab: {
      type: String,
      required: true
    }
  },
  computed: {
    underlineStyle() {
      const index = this.tabs.indexOf(this.activeTab)
      return {
        transform: `translateX(${index * 100}%)`
      }
    }
  }
}
</script>

<style scoped>
.tabs {
  position: relative;
  max-width: 600px;
  margin: 0 auto 2rem;
  border-radius: 14px;
  background: #1e1e2f;
  box-shadow: 0 0 12px #3c3c6daa;
  user-select: none;
}

.tabs ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.15rem;
  color: #aaa;
  justify-content: space-around;
}

.tabs ul li {
  flex: 1;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
  outline-offset: 3px;
}

.tabs ul li:hover,
.tabs ul li:focus {
  color: #d0b7ff;
}

.tabs ul li.active {
  color: #f3e8ff;
  position: relative;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% / 5);
  height: 4px;
  background: #cc7ba4;
  border-radius: 4px 4px 0 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
</style>
