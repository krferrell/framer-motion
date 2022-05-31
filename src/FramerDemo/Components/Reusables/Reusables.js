import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export const CodeBlock = (props) => {
    return (
      <div style={{ width: "100%", height: "100%" , overflowY: "scroll"}}>
        <CopyBlock
          text={props.animationString}
          language={"jsx"}
          showLineNumbers={props.showLineNumbers}
          wrapLines
          theme={dracula}
        />
      </div>
    );
  };