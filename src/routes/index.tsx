import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";

export default component$(() => {
  return (
    <div class="flex flex-wrap content-center justify-evenly w-full">
      <div class="max-w-md mt-2">
        <Card
          image="/images/characters.jpeg"
          title="Top image"
          description=" Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente."
        >
          <Link href="/flower/">
            Blow my mind 🤯
          </Link>
        </Card>
      </div>
      <div class="max-w-md mt-2">
        <Card
          image="/images/episodes.jpeg"
          title="Top image"
          description=" Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente."
        >
          <Link class="mindblow" href="/flower/">
            Blow my mind 🤯
          </Link>
        </Card>
      </div>
      <div class="max-w-md mt-2">
        <Card
          image="/images/locations.jpeg"
          title="Top image"
          description=" Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente."
        >
          <Link class="mindblow" href="/flower/">
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
