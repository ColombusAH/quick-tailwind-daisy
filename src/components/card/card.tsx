import { component$, Slot } from "@builder.io/qwik";
export interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const Card = component$(({ image, title, description }: CardProps) => {
  return (
    <div class="card card-bordered">
      <figure>
        <img class="object-cover h-48 w-full" src={image} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {title}
        </h2>
        <p>{description}</p>
        <div class="justify-end card-actions">
          <Slot />
        </div>
      </div>
    </div>
  );
});
