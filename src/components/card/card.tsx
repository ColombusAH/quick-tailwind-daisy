import { component$, Slot } from "@builder.io/qwik";
export interface CardProps {
  image: string;
  title: string;
}

export const Card = component$(({ image, title }: CardProps) => {
  return (
    <div class="card card-bordered">
      <figure>
        <img class="object-cover h-48 w-full" src={image} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <Slot name="content" />
        <div class="justify-end card-actions">
          <Slot name="actions" />
        </div>
      </div>
    </div>
  );
});
