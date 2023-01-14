import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { themeContext } from "~/providers/theme";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const themeState = useContext(themeContext);

  return (
    <header class="bg-white border-b border-gray-300 shadow">
      <nav class="max-w-7xl px-4 mx-auto h-16 w-full flex items-center justify-between">
        <Link href="/" class="flex items-center space-x-3">
          <QwikLogo />
          <h1 class="text-2xl ">R&M</h1>
        </Link>

        <div class="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} class="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
