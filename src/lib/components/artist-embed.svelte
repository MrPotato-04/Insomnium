<script lang="ts">
import type { IEventArtist } from "$lib/types/events";

export let artist: IEventArtist;

</script>

<div class="embed">
  <iframe
      title="Spotify Embed"
      style="border-radius:12px"
      src="{artist.embed}?utm_source=generator&theme=0"
      width="100%"
      height="152"
      frameBorder="0"
      allowfullscreen={true}
      allow="autoplay; clipboard-write; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
</div>

<style lang="scss" scoped>
.embed {
  position: absolute;
  top: 3rem;
  left: 0;
  z-index: 100;

  background: #282828;
  width: max-content;
  height: max-content;

  border-radius: 12px;
}
</style>