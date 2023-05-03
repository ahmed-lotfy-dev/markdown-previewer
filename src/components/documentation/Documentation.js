import { useEffect } from "react";
import data from "../../lib/basic-syntax.json";

const Documentation = () => {
  const { basic_syntax } = data;

  useEffect(() => {
    console.log(basic_syntax);
    console.log(basic_syntax[0].examples[0].html);
  }, []);

  return (
    <div className="wrapper">
      {basic_syntax.map((item) => {
        return (
          <div className="example-wrapper" key={item.name}>
            <div>
              <h2>{item.name.toLocaleUpperCase()}:</h2>
              <p>{item.description}</p>
            </div>
            {item.examples.map((example, index) => {
              return (
                <div key={index}>
                  <div className="example-inside">
                    <h3>Example-{index + 1}</h3>
                    <h4>- Markdown</h4>
                    <h5>{example.markdown}</h5>
                    <h4>- Html</h4>
                    <h5>{example.html}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Documentation;
