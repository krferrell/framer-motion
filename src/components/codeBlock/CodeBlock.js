import React from "react";
import { CopyBlock, zenburn } from "react-code-blocks";

const CodeBlock = (props) => {
  return (
    <div style={{ width: "50vw" }}>
      <CopyBlock
        text={props.code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        wrapLines
        theme={zenburn}
      />
    </div>
  );
};

export default CodeBlock;
