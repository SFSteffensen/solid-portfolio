import { type Component } from "solid-js";
import { useParams } from "@solidjs/router";

const ProjectDetail: Component = () => {
  const params = useParams();

  return (
    <div class="min-h-screen bg-gradient-to-br from-base to-mantle pt-32">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-6xl font-bold text-heading text-gradient mb-4">
          Project: {params.slug}
        </h1>
        <p class="text-xl text-subtext0">
          Project detail page - coming soon!
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
