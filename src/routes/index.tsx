import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { themeContext } from "~/providers/theme";

export default component$(() => {
  const themeCtx = useContext(themeContext);
  console.log(themeCtx);
  return (
    <div>
      <button
        data-theme={themeCtx.theme}
        class="btn"
        onClick$={() => {
          themeCtx.theme = "cyberpunk";
        }}
      >
        Button
      </button>

      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
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
