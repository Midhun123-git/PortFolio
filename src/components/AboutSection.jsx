import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-amber-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer | Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I’m <span className="font-bold text-amber-600">Midhun Madhu</span>,
              a self-driven MERN stack developer with over 2 years of dedicated
              learning and project building. I specialize in{" "}
              <span className="font-medium">
                React, Node.js, Express.js, and MongoDB
              </span>{" "}
              to create responsive, accessible, and high-performance web
              applications.
            </p>

            <p className="text-muted-foreground">
              My journey has helped me grow not only in coding but also in
              debugging, problem-solving, and delivering real-world solutions. I
              am always eager to explore new technologies and apply them in
              modern, scalable projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button bg-amber-600">
                Get In Touch
              </a>

              {/* ✅ CV Download Button - links to your uploaded PDF */}
              <a
                href="/midhun-madhu-cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-amber-600 text-amber-600 hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive UIs with React, Tailwind
                    CSS, and modern libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Creating secure and scalable APIs with Node.js, Express.js,
                    and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Projects</h4>
                  <p className="text-muted-foreground">
                    Delivering complete MERN solutions with authentication,
                    payments, and deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
