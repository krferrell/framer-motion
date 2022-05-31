import { useState } from "react";
import { MainContainer } from "./styles";
import Sidebar from "./Components/Sidebar/Sidebar";
import AnimationGrid from "./Components/AnimationGrid/AnimationGrid";
import CodeSnippet from "./Components/CodeSnippet/CodeSnippet";

const FramerDemo = () => {

    const [currAnimation, setCurrAnimation] = useState('');

    return (
        <MainContainer>
            <Sidebar setCurrAnimation={setCurrAnimation} currAnimation={currAnimation}/>
            <AnimationGrid/>
            <CodeSnippet currAnimation={currAnimation}/>
        </MainContainer>
    )
}

export default FramerDemo;
