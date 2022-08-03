<script lang="ts">
    //import '$styles/global.css';
    import '$src/app.css';
    //import '../../static/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
    import { session, page } from '$app/stores';
    import Footer from '$components/Footers/Footer.svelte';
    import Navbar from '$components/Navbars/Navbar.svelte';
    import HeaderStats from '$components/Headers/HeaderStats.svelte';
    import Sidebar from '$components/Sidebar/Sidebar.svelte';

</script>

<div id="root">
  <Sidebar location={$page.url}/>
  <div class="relative md:ml-64 bg-blueGray-50">
    <Navbar />
    <div class="relative bg-pink-600 md:pt-32 pt-12 pb-16">
      <div class="px-4 md:px-10 mx-auto w-full">
      </div>
    </div>
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <slot />
      <Footer />
    </div>
  </div>
</div>



