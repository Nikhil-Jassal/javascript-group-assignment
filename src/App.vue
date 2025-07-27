<script setup>
import logo from './assets/OIP.jpeg'

const menuItems = [
  { label: 'Palettes', path: '/palettes' },
  { label: 'Contact', path: '/contact' },
  { label: 'Info', path: '/info' },
]
</script>

<template>
  <div class="container">
    <img :src="logo" alt="Logo" class="top-left-logo" />

    <nav class="top-right-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.label">
          <router-link
            :to="item.path"
            class="menu-link"
            active-class="active-link"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Render the current page -->
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

/* Your existing styles for logo, menu, etc. */

body {
  margin: 0;
  background: #121212;
  color: #eee;
  font-family: 'Inter', sans-serif;
  transition: background 0.5s ease;
}

.container {
  max-width: 100%;       /* wider */
  width: 90vw;            /* responsive: 90% of viewport width */
  margin: 5rem auto;
  text-align: center;
  user-select: none;
  padding: 2rem;
  border-radius: 20px;
  position: relative;
}


.top-left-logo {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 60px;
  height: auto;
  cursor: pointer;
  z-index: 1000;
}

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

.menu-link {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background-color: #4b2a82;
  color: #ddd;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  user-select: none;
}

.menu-link:hover {
  background-color: #845ec2;
  color: white;
}

.active-link {
  background-color: #d65db1;
  color: white;
  font-weight: 700;
}
</style>
