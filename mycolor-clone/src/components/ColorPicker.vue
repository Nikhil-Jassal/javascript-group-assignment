<template>
  <div class="color-picker">
    <input
      type="color"
      :value="baseColor"
      @input="$emit('updateColor', $event.target.value)"
      aria-label="Select base color"
    />
    <button class="random-btn" @click="$emit('randomColor')" title="Generate Random Color">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0114.85-3.36L23 10"></path><path d="M20.49 15a9 9 0 01-14.85 3.36L1 14"></path></svg>
      Random
    </button>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    baseColor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.color-picker {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

input[type="color"] {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow:
    0 0 8px #0008,
    inset 0 0 8px #fff3;
  transition: box-shadow 0.3s ease;
}

input[type="color"]:hover {
  box-shadow:
    0 0 12px #7d63ad,
    inset 0 0 12px #f0e;
}

.random-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1rem;
  background: #7d63ad;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  color: #f3e8ff;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 0 10px #7d63adaa;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.random-btn svg {
  stroke: #f3e8ff;
  width: 18px;
  height: 18px;
  transition: stroke 0.3s ease;
}

.random-btn:hover {
  background: #a56fab;
  box-shadow: 0 0 15px #a56fabcc;
}

.random-btn:hover svg {
  stroke: #fff;
}
</style>
