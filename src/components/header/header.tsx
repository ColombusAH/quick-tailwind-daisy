import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="bg-white border-b border-gray-300 shadow">
      <nav class="max-w-7xl px-4 mx-auto h-16 w-full flex items-center justify-between">
        <Link href="/" class="flex items-center space-x-3">
          <QwikLogo />
          <h1 class="text-2xl ">R&M</h1>
        </Link>

        <ul>
          <li>
            <a href="https://rickandmortyapi.com/" target="_blank">
              Rick and Morty API
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
