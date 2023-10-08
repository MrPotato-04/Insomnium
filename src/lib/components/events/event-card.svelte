<script lang="ts">
import type { IEventArtistArray } from "$lib/types/events";

export let title: string;
export let lineup: IEventArtistArray;

async function load() {
  const res = await fetch(`https://api.spotify.com/v1/artists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      ids: lineup.map((artist) => artist.id),
    }),
  })
  const data = await res.json();

  return data;
}

const data = load().then((data) => {
  console.log(data);
  return data.artists.map((artist) => {
    return {
      id: artist.id,
      name: artist.name,
      url: artist.external_urls.spotify,
      embed: `https://open.spotify.com/embed/artist/${artist.id}`,
      embed_open: false,
    };
  });
});

const openEmbed = (e: MouseEvent) => {
    const target = e.target as HTMLParagraphElement;
    const artist = target.innerText;
    window.open(`/artist/${artist}`, "_blank");
};

</script>

<div class="event-card">
    <h2>{title}</h2>
    {data}
    <ul>
        {#each lineup as artist}
            <li>
                <p on:click={openEmbed}>
                  {artist.name}
                </p>
                
            </li>
        {/each}
    </ul>
</div>

<style lang="scss" scoped>
.event-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        li {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            position: relative;
            overflow: visible;

            p {
                text-decoration: none;
                color: var(--color-text);
                font-weight: bold;
                font-size: 1rem;
                line-height: 1.5rem;
                gap: 0.5rem;
                align-items: center;

                

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>