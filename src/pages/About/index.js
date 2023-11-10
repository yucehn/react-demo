import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

import Child from "./components/child";
import ClassComponent from "./components/classComponent";

const About = () => {
  const [testState, setTestState] = useState("about");
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b><script>alert(1)</script>`;
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data),
  });

  function change(e) {
    setTestState(e);
  }

  useEffect(() => {
    console.log("testState", testState);
    return () => {
      console.log("unmount testState", testState);
    };
  }, [testState]);

  return (
    <div>
      about: {testState}
      {/* <div dangerouslySetInnerHTML={{__html:data}}></div> */}
      <div dangerouslySetInnerHTML={sanitizedData()} />
      <Child change={change} />
      <ClassComponent />
    </div>
  );
};

export default About;
