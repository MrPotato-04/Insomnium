<script lang="ts">
import EventCard from "./event-card.svelte";

/**
 * TMP data
 * @todo replace with real data from db
 */
const events_obj = {
    /**
     * TMP array of events
     * @todo replace with real data from db
     */
    day_range: {
        start: new Date(2023, 0, 1),
        end: "@TODO",
    },
    events: [
        {
            title: `Pestcore Collective 2023`,
            date: {
                start: new Date(2023, 0, 1),
                end: new Date(2023, 0, 2),
            },
            lineup: [
                {
                    id: "5hUbXqyif2dZ3ArU1v9Rli",
                    name: "Natte Vistick",
                    url: "https://open.spotify.com/artist/5hUbXqyif2dZ3ArU1v9Rli?si=A1xr2IeyTMSvwJe1C154tg",
                    embed: "https://open.spotify.com/embed/artist/5hUbXqyif2dZ3ArU1v9Rli",
                    embed_open: false,
                },
                {
                    id: "1vYoGQIgamBW4S335Q0EHb",
                    name: "Dikke Baap",
                    url: "https://open.spotify.com/artist/1vYoGQIgamBW4S335Q0EHb?si=O-r1EraFSlSsPDpvCfeegA",
                    embed: "https://open.spotify.com/embed/artist/1vYoGQIgamBW4S335Q0EHb",
                    embed_open: false,
                },
                {
                    id: "66FZq0wsY6770bc4O9Dlig",
                    name: "Vieze Asbak",
                    url: "https://open.spotify.com/artist/66FZq0wsY6770bc4O9Dlig?si=adEdAdUwTAmXZSEV7eKazQ",
                    embed: "https://open.spotify.com/embed/artist/66FZq0wsY6770bc4O9Dlig",
                    embed_open: false,
                },
            ],
        },
        {
            title: `Rave in the Cave`,
            date: {
                start: new Date(2023, 0, 1),
                end: new Date(2023, 0, 2),
            },
            lineup: [
                {
                    name: "Altern-8",
                },
                {
                    name: "SL2",
                },
            ],
        },
    ],
};

export const time_frame = "upcoming";

/**
 * The number of events to show
 * @type {number}
 */
export const limit = 5;

/**
 * The date to start showing events from
 * @type {Date}
 * @default Today
 */
export const start_date = new Date();

/**
 * The number of days to show events for
 * @type {number}
 * @default limit
 */
export const days = limit;

/**
 * The date to stop showing events from
 * @type {Date}
 * @default Today + days(limit if not set )
 */
export const end_date = new Date(
    start_date.getTime() + limit * 24 * 60 * 60 * 1000
);
</script>

<div class="event-list">
    {#each events_obj.events as event}
        <EventCard title="{event.title}" lineup="{event.lineup}" />
    {/each}
</div>

<style scoped lang="scss">
.event-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
