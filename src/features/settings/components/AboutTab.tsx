import { AboutTabProps } from "@/types/settings";

const AboutTab = ({ theme }: AboutTabProps) => {
  return (
    <div className="p-6 space-y-8">
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.text }}>
        About
      </h3>
      <div className="space-y-4" style={{ color: theme.text + "cc" }}>
        <section
          className="rounded-lg shadow-lg"
          style={{ backgroundColor: theme.primary + "20" }}
        >
          <h4 className="text-xl font-bold mb-2" style={{ color: theme.text }}>
            About the Developer
          </h4>
          <p>
            Hi, I'm Vanshaj (Kraizan) Bhatnagar, the creator of this OS. I'm a
            passionate software developer with a keen interest in building
            interactive and user-friendly applications. With a strong background
            in full stack development, I enjoy working with modern technologies
            like Java, Spring Boot, React, TypeScript, and Tailwind CSS to
            create innovative solutions.
          </p>
          <p>
            Over the years, I've worked on various projects ranging from small
            personal websites to large-scale enterprise applications. My goal is
            to continuously learn and improve my skills while contributing to
            the tech community.
          </p>
        </section>
      </div>
      <div className="space-y-4" style={{ color: theme.text + "cc" }}>
        <h4 className="text-xl font-bold mb-2" style={{ color: theme.text }}>
          Contact Me
        </h4>
        <p>
          If you have any questions or collaboration opportunities, feel free to
          get in touch with me!
        </p>
        <div className="flex flex-wrap gap-x-8" style={{ color: theme.text + "cc" }}>
          <div
            className="rounded-lg shadow-lg"
            style={{ backgroundColor: theme.primary + "20" }}
          >
            <h4 className="text-lg font-bold" style={{ color: theme.text }}>
              Email
            </h4>
            <p>
              <a
                href="mailto:vanshajbhatnagar24@gmail.com"
                className="text-blue-500 underline"
              >
                vanshajbhatnagar24@gmail.com
              </a>
            </p>
          </div>
          <div
            className="rounded-lg shadow-lg"
            style={{ backgroundColor: theme.primary + "20" }}
          >
            <h4 className="text-lg font-bold" style={{ color: theme.text }}>
              LinkedIn
            </h4>
            <p>
              <a
                href="https://www.linkedin.com/in/vanshajbhatnagar"
                className="text-blue-500 underline"
              >
                linkedin.com/in/vanshajbhatnagar
              </a>
            </p>
          </div>
          <div
            className="rounded-lg shadow-lg"
            style={{ backgroundColor: theme.primary + "20" }}
          >
            <h4 className="text-lg font-bold" style={{ color: theme.text }}>
              GitHub
            </h4>
            <p>
              <a
                href="https://github.com/kraizan"
                className="text-blue-500 underline"
              >
                github.com/kraizan
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
