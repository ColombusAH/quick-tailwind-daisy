import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <div id="container" class="flex flex-col min-h-full max-h-max">
        <Header />
        <div id="main" class="flex flex-col md:flex-row flex-grow">
          <div class="p-4 bg-gray-300 flex">Sidebar</div>
          <div class="p-4 bg-gray-100 flex-grow">
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
