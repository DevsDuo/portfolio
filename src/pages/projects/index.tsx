import * as S from "./styles.tsx"
import { project_list } from "./project_list.ts"
import { useState } from "react"
import { Project } from "../../components/Project/index.tsx";
import Button from "../../components/Button/index.tsx";


export interface projectType {
    name:string;
    link:string;
    html:boolean;
    css:boolean;
    js:boolean;
    react:boolean;
    desc:string;
    img:string;
    
}

const maxRows = 520 * (Math.ceil((project_list.length - 6)/ 3))
export const maxRowsPx = maxRows +" px";

export function Projects() {

    const [renderAll, setRenderAll] = useState(false);

    function toggleRenderAll() {
        if (renderAll == false) {
            setRenderAll(true)
        } else {
            setRenderAll(false)
        }
    }

    
    
    

    return (
        <div>
        <S.ProjectTitle id="projects">PROJETOS</S.ProjectTitle>

        <S.SectionCenter>
            <section>
                
           <S.CenterDiv>   
            {project_list.map((i:projectType, index) => {
                if (index <= 5) {
                    return (
                        <Project 
                            name={i.name}
                            link={i.link}
                            html={i.html}
                            css={i.css}
                            js={i.js}
                            react={i.react}
                            desc={i.desc}
                            img={i.img}
                        />
                    )
                }
            })}
            </S.CenterDiv>      
        
                

            <S.HiddenContainer render={renderAll === true ? maxRowsPx : '0px'}>   
            {project_list.map((i:projectType, index) => {
                if (index > 5) {
                    return (
                        
                            <Project 
                            name={i.name}
                            link={i.link}
                            html={i.html}
                            css={i.css}
                            js={i.js}
                            react={i.react}
                            desc={i.desc}
                            img={i.img}
                        />
                        
                    )
                }
            })}
              </S.HiddenContainer>  
                
             <S.ButtonContainer>
                <Button text={renderAll === true ? "VER MENOS" : "VER MAIS"} link={toggleRenderAll}/>
            </S.ButtonContainer>       
            
            </section>
        </S.SectionCenter>
        </div>
    )
}