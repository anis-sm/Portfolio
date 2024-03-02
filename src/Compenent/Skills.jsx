import React, { Component } from "react";
import SkillCard from "./SkillCard";
import { SKILLS } from "../Utils/data";
import SkillinfoCard from "./SkillsInfoCard";
class Skills extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedSkill: SKILLS[0]
        };
    }

    handelSelectSkill = (data) => {
        this.setState({ selectedSkill: data });
    }



    render(){
        const { selectedSkill } = this.state;

        return(
            <section className="skills-container" id="Skills_page">
                <h5>Technical Proficiencty</h5>
                <div className="skills-containt">
                    <div className="skills">
                        {SKILLS.map((item)=> (
                            <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title} 
                            isActive={selectedSkill.title === item.title}
                            onClick={()=>{
                                this.handelSelectSkill(item); 
                            }}
                            />
                        ))}
                        
                    </div>
                    <div className="skills-info">
                    <SkillinfoCard
                            heading={selectedSkill.title}
                            skills={selectedSkill.skills}
                        />
                    </div>
                </div>
            </section>
        )
    }
}
export default Skills