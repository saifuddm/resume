import { MoonIcon, SunIcon } from "lucide-react";
import { useStore } from "./data/store";
import { useEffect } from "react";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  const { experience, projects, isDark, toggleDarkMode, initializeDarkMode } =
    useStore();

  // Initialize dark mode based on system preference
  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="border-1 h-[11in] w-[8.5in] p-2 px-4 text-sm/4">
          <h1 className="text-center text-5xl font-extralight">
            Murtaza Saifuddin
          </h1>
          <div className="border-crust flex flex-row justify-center gap-2 border-b-2 pb-2">
            <a href="mailto:murtaza.saifuddin97@gmail.com">
              murtaza.saifuddin97@gmail.com
            </a>
            <p>|</p>
            <a href="tel:+16472701297">+1 (647) 270-1297</a>
            <p>|</p>
            <p>Toronto, ON, Canada</p>
          </div>
          <div className="border-crust grid grid-cols-[30%_70%] border-b-2">
            <div
              className="border-crust space-y-1 border-r-2 pr-2 "
              id="leftPage"
            >
              <div
                className="border-mantle space-y-2 border-b-2 pb-1"
                id="about"
              >
                <h2 className="text-subtext0 text-2xl font-light">Me</h2>
                <p className="text-pretty ">
                  I’m an electrical engineer by training and a software
                  developer by passion, driven by a vivid imagination and a love
                  of building things. I thrive on experimenting with new
                  technologies and turning ideas into reality—whether I’m
                  sketching web layouts or architecting scalable back-ends and
                  shipping polished features. I enjoy every step of the creative
                  journey, from initial design spark to final deployment, and
                  I’m always eager to learn the next tool or technique that’ll
                  bring my next project to life.
                </p>
                <div id="links">
                  <h3 className="text-subtext1 pb-1 text-xl/5 font-light">
                    Links
                  </h3>
                  <p className="text-balance">
                    GitHub:{" "}
                    <a
                      className="text-mauve font-semibold"
                      href="https://github.com/saifuddm"
                    >
                      saifuddm
                    </a>
                  </p>
                  <p className="text-balance">
                    LinkedIn:{" "}
                    <a
                      className="text-mauve font-semibold"
                      href="https://www.linkedin.com/in/saifuddm/"
                    >
                      /in/saifuddm
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="border-mantle space-y-2 border-b-2 pb-1"
                id="skills"
              >
                <h2 className="text-subtext0 text-2xl font-light">
                  Proficiencies
                </h2>
                <div>
                  <h3 className="text-subtext1 text-xl/5 font-light">
                    Languages
                  </h3>
                  <p className="text-balance pt-1">
                    Java (SpringBoot), JavaScript, TypeScript, React (Next.js,
                    Native), Flutter, Python.
                  </p>
                </div>
                <div>
                  <h3 className="text-subtext1 text-xl/5 font-light">
                    Services, Tools &{" "}
                    <span className="text-lavender ">More</span>
                  </h3>
                  <p className="text-balance pt-1 ">
                    AWS, Expo, Docker, Jenkins, Git, GitHub, Splunk, Tailwind
                    CSS, Puppeteer, Selenium, Bun, Deno, Supabase, Firebase,
                    PostgreSQL, MongoDB, Stripe, Twilio, Figma, Confluence,
                    Jira.
                  </p>
                </div>
              </div>

              <div className=" space-y-2 pb-1" id="education">
                <h2 className="text-subtext0 text-2xl font-light">Education</h2>
                <div>
                  <h3 className="text-red text-xl/5 font-light">
                    McMaster University
                  </h3>
                  <p className="text-balance text-sm/4">
                    Bachelor of Electrical Engineering, 2015-2020
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-2 pl-2" id="experience">
              <h2 className="text-subtext0 pb-2 text-2xl font-light">
                Work Experience
              </h2>
              <div className="flex flex-col space-y-3">
                {experience
                  .filter((experience) => experience.active)
                  .map((experience, index) => (
                    <Experience
                      key={index}
                      experience={experience}
                      id={experience.company}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div id="project" className="flex flex-col space-y-2">
            <h2 className="text-subtext0 text-2xl font-light">Projects</h2>
            {projects.map((project, index) => (
              <Project
                key={index}
                project={project}
                id={`project-${project.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-mantle sticky bottom-5 left-5 w-fit space-x-2 rounded-md p-2 print:hidden">
        <button
          className={`${!isDark ? "bg-crust text-yellow" : ""} rounded-md p-2`}
          onClick={toggleDarkMode}
        >
          <SunIcon size={20} />
        </button>
        <button
          className={`${isDark ? "bg-crust text-blue" : ""} rounded-md p-2`}
          onClick={toggleDarkMode}
        >
          <MoonIcon size={20} />
        </button>
      </div>
    </>
  );
}

export default App;
