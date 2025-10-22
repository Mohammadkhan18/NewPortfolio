import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiNestjs,
} from "react-icons/si";
import { MdHtml,MdCss } from "react-icons/md";
import './TechStack.css'
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoPrism } from "react-icons/io5";

function Techstack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-[50px] justify-center">
      <div className="tech-icons" title="Javascript">
      <DiJavascript1 />
      </div>
      <div className="tech-icons" title="HTML">
      <MdHtml />
      </div>
      <div className="tech-icons" title="CSS">
      <MdCss />
      </div>
      <div className="tech-icons" title="TypeScript">
      <SiTypescript />
      </div>
      <div className="tech-icons" title="ReactJS">
      <DiReact />   
      </div>
      <div className="tech-icons" title="React Native">
      <TbBrandReactNative />  
      </div>
      <div className="tech-icons" title="NextJS">
    <SiNextdotjs />
      </div>
      <div className="tech-icons" title="NodeJS">
      <DiNodejs />
      </div>
      <div className="tech-icons" title="ExpressJS">
      <SiExpress />
      </div>
      <div className="tech-icons" title="NestJS">
      <SiNestjs />   
      </div>
      <div className="tech-icons" title="MySQL">
      <SiMysql />
      </div>
      <div className="tech-icons" title="MongoDB">
      <DiMongodb />
      </div>
      <div className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </div>

      <div className="tech-icons" title="Firebase">
      <SiFirebase />
      </div>
      <div className="tech-icons" title="prisma">
      <IoPrism />
      </div>
      <div className="tech-icons" title="Tailwind CSS">
      <SiTailwindcss />
      </div>
      <div className="tech-icons" title="Bootstrap">
      <BsFillBootstrapFill />
      </div>
    </div>
  );
}

export default Techstack;