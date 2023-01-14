import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { themeContext } from "~/providers/theme";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const themeState = useContext(themeContext);

  return (
    <header class="bg-white border-b border-gray-300 shadow w-full">
      <nav class=" px-4 h-16 w-full flex items-center justify-between">
        <Link href="/" class="flex items-center space-x-3">
          <QwikLogo />
          <h1 class="text-2xl ">R&M</h1>
        </Link>

        <div class="dropdown dropdown-left">
          <div tabIndex={0} class="m-1 btn">
            Themes
          </div>
          <ul
            tabIndex={0}
            class="p-2 shadow menu dropdown-content flex-nowrap bg-base-100 rounded-box w-52 overflow-y-auto max-h-40 scrollbar scrollbar-thumb-emerald-300 scrollbar-track-gray-100"
          >
            {themeState.themes.map((theme) => (
              <li>
                <a onClick$={() => (themeState.theme = theme)}>{theme}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
});
