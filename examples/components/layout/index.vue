<template>
  <section class="layout-home">
   <Header></Header> 
   <div class="main-cnt">
     <Container></Container>
   </div>
   <Footer></Footer>
  </section>
</template>
<script>
import Header from './header';
import Footer from './footer';
import Container from './container';
export default {
  components: {
    Header,
    Footer,
    Container
  }

};
</script>
<style lang="scss" scoped>
 .layout-home {
   height: 100%;
 }
</style>