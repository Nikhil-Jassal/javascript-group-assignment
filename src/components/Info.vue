<template>
  <section class="about-section py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left column: About ColorSpace -->
        <div class="col-lg-6 animate-on-scroll left-column">
          <h2 class="section-title mb-4 mt-4">
            About <span class="text-primary">ColorSpace</span>
          </h2>
          <div class="about-content">
            <p class="lead">
              ColorSpace is your go-to web app to create stunning color palettes and gradients
              easily and quickly.
            </p>
            <p>
              Whether you are a designer, developer, or just a color enthusiast, ColorSpace
              helps you explore colors, mix them, and generate perfect combinations for your
              projects.
            </p>
            <p>
              Our intuitive interface allows you to pick base colors and instantly see beautiful
              palettes and gradient backgrounds — saving you hours of searching and tweaking.
            </p>

            <div class="skills-chart mt-4">
              <h4 class="mb-3">Our Features</h4>

              <div class="skill-bar mb-3">
                <div class="skill-labels">
                  <span>Color Palette Generation</span>
                  <span>100%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" style="width: 100%"></div>
                </div>
              </div>

              <div class="skill-bar mb-3">
                <div class="skill-labels">
                  <span>Gradient Backgrounds</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-success" style="width: 95%"></div>
                </div>
              </div>

              <div class="skill-bar mb-3">
                <div class="skill-labels">
                  <span>Easy Color Picker</span>
                  <span>90%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-info" style="width: 90%"></div>
                </div>
              </div>

              <div class="skill-bar mb-3">
                <div class="skill-labels">
                  <span>User-Friendly Interface</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-warning" style="width: 95%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column: Color palette image or screenshot -->
        <div class="col-lg-6 animate-on-scroll right-column">
            <div class="social-links mt-4">
              <a href="https://github.com/yourusername" target="_blank" class="btn-social" title="GitHub">🐙</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" class="btn-social" title="LinkedIn">🔗</a>
              <a href="https://twitter.com/yourhandle" target="_blank" class="btn-social" title="Twitter">🐦</a>
              <a href="mailto:hello@colorspace.com" class="btn-social" title="Email">✉️</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional info cards -->
      <div class="row mt-5">
        <div class="col-md-6 animate-on-scroll card-column">
          <div class="education-card card hover-grow">
            <h4>Why Choose ColorSpace?</h4>
            <ul>
              <li>Fast and simple color palette generation</li>
              <li>Beautiful gradient previews updated live</li>
              <li>No sign-up or installation required</li>
              <li>Perfect for designers and developers</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 animate-on-scroll card-column">
          <div class="experience-card card hover-grow">
            <h4>Our Mission</h4>
            <p>
              To empower everyone to explore and use colors effortlessly — making design and
              development more creative and enjoyable.
            </p>
            <p>
              We continuously improve ColorSpace by listening to user feedback and adding
              features that simplify your workflow.
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
// No logic needed for this static info page
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
}

/* Columns */
.left-column,
.right-column {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
}

/* Section padding */
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.section-title {
  font-weight: 700;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.text-primary {
  color: #845ec2;
}

.lead {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
}

/* Skill bars */
.skills-chart h4 {
  font-weight: 700;
  margin-bottom: 1rem;
}

.skill-bar {
  margin-bottom: 1.2rem;
}

.skill-labels {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #444;
}

.progress {
  height: 12px;
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  transition: width 0.5s ease;
  border-radius: 8px;
}

.bg-primary {
  background-color: #845ec2;
}

.bg-success {
  background-color: #28a745;
}

.bg-info {
  background-color: #17a2b8;
}

.bg-warning {
  background-color: #ffc107;
}

/* Image */
.about-image {
  text-align: center;
}

.profile-pic {
  max-width: 350px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(132, 94, 194, 0.4);
  cursor: default;
  user-select: none;
}

/* Social links */
.social-links {
  margin-top: 1.5rem;
}

.btn-social {
  display: inline-block;
  margin: 0 0.35rem;
  font-size: 1.5rem;
  color: #845ec2;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.btn-social:hover {
  color: #d65db1;
  transform: scale(1.2);
}

/* Cards */
.card-column {
  flex: 1 1 45%;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(132, 94, 194, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover,
.hover-grow:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(132, 94, 194, 0.4);
}

.card h4 {
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.card ul {
  padding-left: 1.3rem;
  color: #555;
}

.card ul li {
  margin-bottom: 0.6rem;
}

/* Make Our Mission paragraph text black */
.experience-card p {
  color: #000000;
}

/* Responsive */
@media (max-width: 900px) {
  .left-column,
  .right-column,
  .card-column {
    flex: 1 1 100%;
  }

  .row {
    gap: 1.5rem;
  }

  .profile-pic {
    max-width: 280px;
  }
}
</style>
