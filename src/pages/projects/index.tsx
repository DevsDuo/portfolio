import * as S from "./styles.tsx"
import { project_list } from "./project_list.ts"
import { useState } from "react"
import { Project } from "../../components/Project/index.tsx";


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


export function Projects() {

    const [renderAll, setRenderAll] = useState(false);

    function toggleRenderAll() {
        if (renderAll == false) {
            setRenderAll(true)
        } else {
            setRenderAll(false)
        }
    }

    const maxRows = Math.ceil((project_list.length - 6)/ 3)
    // VER DEPOIS
    

    return (
        <div>
        <S.ProjectTitle>PROJETOS</S.ProjectTitle>

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
        
                

            <S.HiddenContainer render={renderAll}>   
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
                
                    
            <button onClick={toggleRenderAll}>ver mais</button>
            </section>
        </S.SectionCenter>
        </div>
    )
}