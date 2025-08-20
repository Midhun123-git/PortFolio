import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sneaker-Head E-commerce",
    description:
      "A modern sneaker e-commerce store built with HTML, CSS, and JavaScript. Features product details, cart functionality, and checkout flow.",
    image: "/projects/shoe.png", // 👟 put sneaker image in public/projects/
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://midhun123-git.github.io/Sneaker-Head/",
    githubUrl: "https://github.com/Midhun123-git/Sneaker-Head",
  },
  {
    id: 2,
    title: "Textile Shop",
    description:
      "A web application for managing textile inventory and customer orders. Includes product records, billing, and sales tracking.",
    image: "/projects/shirt.png", // 👕 put textile shirt image in public/projects/
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://midhun123-git.github.io/Textile-Shop/",
    githubUrl: "https://github.com/Midhun123-git/Textile-Shop",
  },
  {
    id: 3,
    title: "Stone Paper Scissor Game",
    description:
      "A fun Stone-Paper-Scissor game built using HTML, CSS, and JavaScript with interactive UI and score tracking.",
    image: "/projects/game.jpg", // 🎮 add a stone-paper-scissor image in public/projects/
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://midhun123-git.github.io/Stone-Paper-Scissor/",
    githubUrl: "https://github.com/Midhun123-git/Stone-Paper-Scissor",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my front-end development skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Midhun123-git"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
