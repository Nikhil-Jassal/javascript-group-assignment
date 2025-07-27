<template>
  <div
    class="color-card"
    :style="{ backgroundColor: color.hex }"
    @click="copyToClipboard(color.hex)"
    :title="'Click to copy ' + color.hex"
  >
    <div class="color-info">
      <div class="color-hex">{{ color.hex }}</div>
      <div class="color-rgb">{{ color.rgb }}</div>
      <div class="color-hsl">{{ color.hsl }}</div>
      <div class="contrast" :class="contrastClass">
        Contrast: {{ color.contrast.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorCard',
  props: {
    color: Object
  },
  computed: {
    contrastClass() {
      if (this.color.contrast >= 7) return 'contrast-high'
      if (this.color.contrast >= 4.5) return 'contrast-medium'
      return 'contrast-low'
    }
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`Copied ${text} to clipboard!`)
      })
    }
  }
}
</script>

<style scoped>
.color-card {
  width: 140px;
  height: 180px;
  border-radius: 12px;
  color: white;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  transition: transform 0.2s ease;
}

.color-card:hover {
  transform: scale(1.05);
}

.color-info > div {
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  text-shadow: 0 0 5px rgba(0,0,0,0.8);
}

.contrast-high {
  color: #4caf50;
  font-weight: 700;
}
.contrast-medium {
  color: #ffeb3b;
  font-weight: 700;
}
.contrast-low {
  color: #f44336;
  font-weight: 700;
}
</style>
