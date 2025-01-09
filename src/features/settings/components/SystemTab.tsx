import { useSettings } from '@/context/SettingsContext';
import { SystemTabProps } from '@/types/settings';

const SystemTab = ({ theme }: SystemTabProps) => {
  const { APP_VERSION } = useSettings();

  return (
    <div className="p-6 space-y-8">
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.text }}>
        System Settings
      </h3>
      <section
        className="rounded-lg shadow-lg"
        style={{ backgroundColor: theme.primary + "20" }}
      >
        <h4 className="text-xl font-bold mb-2" style={{ color: theme.text }}>
          Kraizan OS
        </h4>
        <p>
          Kraizan OS is a modern, customizable portfolio interface designed to
          provide a seamless and interactive experience for showcasing projects,
          skills, and experiences. Built with the latest web technologies,
          Kraizan OS offers a unique and engaging way to present my
          professional profile.
        </p>
        <p>
          With a focus on user experience and aesthetics, Kraizan OS combines
          functionality with a visually appealing design. Whether you're a
          developer, designer, or any other professional, I hope you enjoy using Kraizan OS!
        </p>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th
                className="border p-2"
                style={{
                  backgroundColor: theme.primary + "40",
                  color: theme.text,
                }}
              >
                Specification
              </th>
              <th
                className="border p-2"
                style={{
                  backgroundColor: theme.primary + "40",
                  color: theme.text,
                }}
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Version</td>
              <td className="border p-2">{APP_VERSION}</td>
            </tr>
            <tr>
              <td className="border p-2">Tech Stack</td>
              <td className="border p-2">React, TypeScript, Tailwind CSS</td>
            </tr>
            <tr>
              <td className="border p-2">Features</td>
              <td className="border p-2">
                Interactive UI, Customizable Themes, Seamless Navigation
              </td>
            </tr>
            <tr>
              <td className="border p-2">License</td>
              <td className="border p-2">MIT</td>
            </tr>
            <tr>
              <td className="border p-2">Repository</td>
              <td className="border p-2">
                <a
                  href="https://github.com/kraizan/portfolio-os"
                  className="text-blue-500 underline"
                >
                  GitHub
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <p style={{ color: theme.text + "cc" }}>System settings coming soon...</p>
    </div>
  );
};

export default SystemTab;