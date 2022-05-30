import React from "react";
import { CopyBlock, zenburn } from "react-code-blocks";

const CodeBlock = ({code}) => {
  return (
    <div style={{ width: "50vw" }}>
      <CopyBlock
        text={code}
        language='jsx'
        showLineNumbers={true}
        wrapLines
        theme={zenburn}
      />
    </div>
  );
};

export default CodeBlock;