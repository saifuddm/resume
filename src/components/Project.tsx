import type { ProjectType } from "../types";

interface ProjectProps {
  project: ProjectType;
  id: string;
}

function Project({ project, id }: ProjectProps) {
  return (
    <div id={id}>
      <h3 className="text-subtext0 text-xl/5 font-semibold">
        {project.name}
        <span className="inline-flex space-x-1 pl-1 text-lg/4 font-normal">
          <p className="scale-70 opacity-50">|</p> <p>{project.description}</p>
        </span>
      </h3>
      <h4 className="text-subtext1 text-md/4 font-extralight">
        {project.dateString}

        {project.link.map((link) => (
          <span className="inline-flex space-x-1 pl-1 text-sm/4">
            <p className="scale-70 opacity-50">|</p>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mauve font-semibold"
            >
              {link.label}
            </a>
          </span>
        ))}
      </h4>
      <ul className="ml-5 list-disc space-y-1 pt-1 text-sm/4">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
