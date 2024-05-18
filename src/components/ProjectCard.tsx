interface ProjectCardProps {
  image: string;
  title: string;
  secondaryBadge?: string;
  description: string;
  badges: string[];
}

export default function ProjectCard({ image, title, secondaryBadge, description, badges }: ProjectCardProps) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="h-48 overflow-hidden">
        <img src={image} alt={title} class="w-full h-full object-cover" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {title}
          {secondaryBadge && <div class="badge badge-secondary">{secondaryBadge}</div>}
        </h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          {badges.map((badge) => (
            <div key={badge} class="badge badge-outline">{badge}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
