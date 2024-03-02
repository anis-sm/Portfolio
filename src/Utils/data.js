import Frontend from "../assets/Front-end.png";
import Backend from "../assets/Backend.png";
import Tools from "../assets/Tools.png";
import SoftSkills from "../assets/Softskills.png";

export const SKILLS = [
    {
        title: "Frontend",
        icon: Frontend,
        skills:[
            { skill:"HTML5",percentage:"80%"},
            { skill:"CSS",percentage:"60%"},
            { skill:"JAVASCRIPT",percentage:"72%"},
            { skill:"React.js",percentage:"50%"},
        ],
        
    },
    {
        title: "Backend",
        icon: Backend,
        skills:[
            { skill:"SQL DB",percentage:"65%"},
            { skill:"C",percentage:"80%"},
            { skill:"PYTHON",percentage:"70%"},
            { skill:"PHP",percentage:"60%"},
        ],
        
    },
    {
        title: "Tools",
        icon: Tools,
        skills:[
            { skill:"VS Code",percentage:"78%"},
            { skill:"Flutter",percentage:"40%"},
            { skill:"Qmaker",percentage:"64%"},
            { skill:"Git / Github",percentage:"80%"},
        ],
        
    },
    {
        title: "Soft Skills",
        icon: SoftSkills,
        skills:[
            { skill:"Problem-Solving",percentage:"84%"},
            { skill:"Collaboration",percentage:"87%"},
            { skill:"Team-work",percentage:"90%"},
            { skill:"Attention to details",percentage:"92%"},
        ],    
    },
];
