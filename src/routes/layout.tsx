import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <div id="container" class="flex flex-col min-h-full max-h-max min-w-full max-w-max">
        <Header />
        <div id="main" class="flex flex-col md:flex-row flex-grow w-full min-w-full">
          <div class="p-4 bg-gray-300 flex">Sidebar</div>
          <div class="grid grid-cols-1 flex-grow">
            <Slot />
          </div>
        </div>

        <div id="footer" class="p-4 bg-gray-500">
          Footer
        </div>
      </div>
    </>
  );
});
