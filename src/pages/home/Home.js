import React from "react";
import { CodeBlock } from "../../components";

const strng = {
  message: `import React from "react";
  import { CodeBlock } from "../../components";
  
  const Home = () => {
    return (
      <>
        <h1>Hello! Welcome to a Framer Motion Demo</h1>
        <CodeBlock  
        language="jsx" 
        showLineNumbers={true} 
        />
      </>
    );
  };
  
  export default Home;`,
};

const Home = () => {
  return (
    <>
      <CodeBlock code={strng.message} language="jsx" showLineNumbers={false} />
    </>
  );
};

export default Home;
