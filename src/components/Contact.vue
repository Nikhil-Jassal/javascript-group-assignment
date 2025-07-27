<template>
  <section class="contact-section py-5">
    <div class="container">
      <div class="row">
        <!-- Left info column -->
        <div class="col-lg-6 animate-on-scroll left-column">
          <h2 class="section-title mb-4 mt-5">
            Get In <span class="text-primary">Touch</span>
          </h2>
          <p class="lead">
            I'd love to hear from you! Whether you have a project in mind or just want to say hello,
            feel free to reach out.
          </p>

          <div class="contact-info mt-5">
            <div class="info-item">
              <div class="icon-box bg-primary">
                📍
              </div>
              <div>
                <h5>Location</h5>
                <p class="mb-0">Toronto, Canada</p>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-box bg-primary">
                ✉️
              </div>
              <div>
                <h5>Email</h5>
                <p class="mb-0">hello@example.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-box bg-primary">
                📞
              </div>
              <div>
                <h5>Phone</h5>
                <p class="mb-0">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="#" class="btn-social">🐙 GitHub</a>
            <a href="#" class="btn-social">🔗 LinkedIn</a>
            <a href="#" class="btn-social">🐦 Twitter</a>
            <a href="#" class="btn-social">📸 Instagram</a>
          </div>
        </div>

        <!-- Right form column -->
        <div class="col-lg-6 animate-on-scroll right-column">
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name" class="form-label mt-5">Your Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  required
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  required
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="5"
                  required
                  class="form-control"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn-primary btn-lg w-100"
                :disabled="loading"
              >
                <span v-if="!loading">Send Message</span>
                <span
                  v-else
                  class="spinner-border"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </form>

            <div v-if="success" class="alert alert-success">{{ success }}</div>
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="map-section">
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2692505416353!2d-79.38924548450282!3d43.64256617912169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const success = ref('')
const error = ref('')

function submitForm() {
  loading.value = true
  success.value = ''
  error.value = ''

  setTimeout(() => {
    if (form.name && form.email && form.message) {
      success.value = 'Thank you for contacting us! We will get back to you soon.'
      error.value = ''
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      error.value = 'Please fill in all required fields.'
      success.value = ''
    }
    loading.value = false
  }, 1500)
}
</script>

<style scoped>
/* Container & Layout */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* Columns */
.left-column,
.right-column {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
}

/* Section Padding */
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* Section title */
.section-title {
  font-weight: 700;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.text-primary {
  color: #845ec2;
}

/* Lead text */
.lead {
  font-size: 1.2rem;
  color: #555;
}

/* Contact info items */
.contact-info {
  margin-top: 3rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon-box {
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #845ec2;
  color: white;
  border-radius: 50%;
  margin-right: 1rem;
}

/* Social links */
.social-links {
  margin-top: 2rem;
}

.btn-social {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1.5px solid #845ec2;
  color: #845ec2;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin-right: 0.6rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-social:hover {
  background-color: #845ec2;
  color: white;
  cursor: pointer;
}

/* Form */
.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 15px rgb(132 94 194 / 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.55rem 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1.5px solid #ccc;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #845ec2;
  outline: none;
  box-shadow: 0 0 8px rgba(132, 94, 194, 0.5);
}

/* Button */
.btn-primary {
  background-color: #845ec2;
  border: none;
  color: white;
  font-weight: 700;
  padding: 0.85rem 1rem;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

.btn-primary:hover:enabled {
  background-color: #d65db1;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Spinner */
.spinner-border {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 2.5px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner 0.75s linear infinite;
  vertical-align: middle;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

/* Alerts */
.alert {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}

/* Map Section */
.map-section {
  margin-top: 3rem;
}

.map-container iframe {
  width: 100%;
  height: 450px;
  border-radius: 10px;
  border: none;
}

/* Responsive */
@media (max-width: 900px) {
  .row {
    flex-wrap: wrap;
  }

  .left-column,
  .right-column {
    flex: 1 1 100%;
  }

  .left-column {
    margin-bottom: 2rem;
  }
}
</style>
