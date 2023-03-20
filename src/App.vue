<template>
  <Navbar />
  <HeroSection />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    Footer
  }
}
</script>