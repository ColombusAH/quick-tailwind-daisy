import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";

export default component$(() => {
  return (
    <div class="flex flex-wrap content-center justify-evenly w-full">
      <div class="max-w-md mt-2">
        <Card image="/images/characters.jpeg" title="Characters">
          <p q:slot="content" class="h-10">
            See all the characters in the Rick and Morty universe.
          </p>
          <Link q:slot="actions" href="/characters/">
            Blow my mind 🤯
          </Link>
        </Card>
      </div>
      <div class="max-w-md mt-2">
        <Card image="/images/episodes.jpeg" title="Episodes">
          <p q:slot="content" class="h-10">
            See all the episodes in the Rick and Morty universe.
          </p>
          <Link q:slot="actions" href="/episodes/">
            Blow my mind 🤯
          </Link>
        </Card>
      </div>
      <div class="max-w-md mt-2">
        <Card image="/images/locations.jpeg" title="Locations">
          <p q:slot="content" class="h-10">
            See all the locations in the Rick and Morty universe.
          </p>
          <Link q:slot="actions" href="/locations/">
            Blow my mind 🤯
          </Link>
        </Card>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Rick and Morty",
  meta: [
    {
      name: "Rick snd morty app",
      content:
        "Rick and Morty browse app to see characters ,locations and  episodes",
    },
  ],
};
