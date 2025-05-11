import type { ExperienceType } from "../types";
interface ExperienceProps {
  experience: ExperienceType;
  id: string;
}

function Experience({ experience, id }: ExperienceProps) {
  return (
    <div id={id}>
      <h3 className="text-subtext0 text-xl/5 font-semibold">
        {experience.company}
        <span className="inline-flex space-x-1 pl-1 text-lg/4 font-normal">
          <p className="scale-70 opacity-50">|</p> <p>{experience.position}</p>
        </span>
      </h3>
      <h4 className="text-subtext1 text-md/4 font-extralight">
        {experience.dateString}
        <span className="inline-flex space-x-1 pl-1 text-sm/4">
          <p className="scale-70 opacity-50">|</p> <p>{experience.location}</p>
        </span>
      </h4>
      <ul className="ml-5 list-disc space-y-1 pt-1 text-sm/4">
        {experience.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
