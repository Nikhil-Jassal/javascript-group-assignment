<script setup>
import { ref } from 'vue'

const color1 = ref('#845EC2')
const color2 = ref('#D65DB1')

function generate() {
  document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}
</script>

<template>
  <div class="container">
    <h1>ColorSpace</h1>
    <p class="subtitle">
      Never waste Hours on finding the perfect Color Palette again!<br />
      Just Enter a Color!<br />
      And Generate nice Color Palettes
    </p>

    <div class="color-input">
      <div>
        <input type="color" v-model="color1" />
        <div class="color-code">{{ color1 }}</div>
      </div>
      <div>
        <input type="color" v-model="color2" />
        <div class="color-code">{{ color2 }}</div>
      </div>
    </div>

    <button class="generate-btn" @click="generate">Generate</button>

    <div class="bottom-text">
      color scheme <span class="left">left</span>color palettes <span class="right">right</span>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  margin: 0;
  background: #121212;
  color: #eee;
  font-family: 'Inter', sans-serif;
  transition: background 0.5s ease;
}

.container {
  max-width: 400px;
  margin: 5rem auto;
  text-align: center;
  user-select: none;
  padding: 2rem;
  border-radius: 20px;
  position: relative;
}

.logo {
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: #999;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

h1 {
  font-weight: 900;
  font-size: 3.5rem;
  margin: 0;
  color: #845ec2;
  user-select: text;
}

.subtitle {
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #ddd;
  user-select: text;
}

.color-input {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.color-input div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type='color'] {
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 10px #845ec2;
}

.color-code {
  margin-top: 0.5rem;
  font-family: monospace;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  color: #845ec2;
  user-select: text;
}

.generate-btn {
  margin-top: 3rem;
  padding: 0.8rem 3rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  background: #845ec2;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 0 20px #845ec2;
  transition: background-color 0.3s ease;
}

.generate-btn:hover {
  background: #d65db1;
}

.bottom-text {
  margin-top: 5rem;
  font-size: 1rem;
  color: #aaa;
  letter-spacing: 0.05em;
  user-select: none;
}

.bottom-text .left {
  font-weight: 700;
  color: #f9f871;
}

.bottom-text .right {
  font-weight: 700;
  color: #f9f871;
}

.top-left-logo {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 60px;  /* adjust as needed */
  height: auto;
  cursor: pointer;
  z-index: 1000;
}

/* Menu top right */
.top-right-menu {
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 1000;
}

.top-right-menu ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.top-right-menu li {
  color: #ccc;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s ease;
  user-select: none;
}

.top-right-menu li:hover {
  color: #845ec2;
}
</style>

