<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import EventList from "$lib/components/events/event-list.svelte";
  import Logo from "$lib/components/logo.svelte";
</script>

<div class="page-container">
  <Container>
      <Logo height="100" />
  </Container>
  <Container>
    <EventList />
  </Container>
</div>

<style lang="scss">
  
</style>
