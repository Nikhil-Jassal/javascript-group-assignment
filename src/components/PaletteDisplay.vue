<template>
  <section class="palette-display">
    <div
      v-for="color in colors"
      :key="color.hex"
      class="color-card"
      :style="{ background: color.gradient }"
      @click="copyToClipboard(color.hex)"
      tabindex="0"
      @keydown.enter="copyToClipboard(color.hex)"
      role="button"
      :aria-label="`Copy ${color.name} color code ${color.hex}`"
    >
      <div class="color-info">
        <h3>{{ color.name }}</h3>
        <p>{{ color.hex }}</p>
        <p>{{ color.rgb }}</p>
        <p>{{ color.hsl }}</p>
        <p :class="['contrast', contrastClass(color.contrast)]">
          Contrast: {{ color.contrast.toFixed(2) }}
        </p>
      </div>

      <button
        class="copy-btn"
        @click.stop="copyToClipboard(color.hex)"
        :aria-label="`Copy ${color.hex} to clipboard`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-copy"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
        </svg>
      </button>

      <transition name="copy-feedback" mode="out-in">
        <p v-if="copied === color.hex" class="copy-feedback">Copied!</p>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaletteDisplay',
  props: {
    colors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      copied: null
    }
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.copied = text
        setTimeout(() => (this.copied = null), 1500)
      })
    },
    contrastClass(contrast) {
      if (contrast >= 7) return 'contrast-high'
      if (contrast >= 4.5) return 'contrast-medium'
      return 'contrast-low'
    }
  }
}
</script>

<style scoped>
.palette-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.4rem;
  width: 100%;
}

.color-card {
  cursor: pointer;
  border-radius: 16px;
  padding: 1.25rem 1rem 1.75rem 1rem;
  color: #f3e8ff;
  box-shadow:
    0 8px 16px rgb(79 95 131 / 0.35),
    inset 0 -2px 8px rgb(255 255 255 / 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: box-shadow 0.3s ease;
  user-select: none;
  outline-offset: 4px;
}

.color-card:focus,
.color-card:hover {
  box-shadow:
    0 10px 30px rgb(79 95 131 / 0.7),
    inset 0 -2px 10px rgb(255 255 255 / 0.3);
}

.color-info h3 {
  margin: 0 0 0.3rem 0;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.06em;
}

.color-info p {
  margin: 0.12rem 0;
  font-weight: 500;
  font-size: 0.9rem;
  opacity: 0.85;
}

.contrast {
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
}

.contrast-high {
  color: #90ee90;
}

.contrast-medium {
  color: #f7df5a;
}

.contrast-low {
  color: #f77373;
}

.copy-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f3e8ffcc;
  padding: 0;
  transition: color 0.3s ease;
}

.copy-btn:hover {
  color: #cc7ba4;
}

.copy-feedback {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #90ee90;
  user-select: none;
  pointer-events: none;
}

.copy-feedback-enter-active,
.copy-feedback-leave-active {
  transition: opacity 0.35s ease;
}

.copy-feedback-enter-from,
.copy-feedback-leave-to {
  opacity: 0;
}
</style>
