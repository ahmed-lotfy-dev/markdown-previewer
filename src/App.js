import './App.css';
import { useEffect, useState } from 'react';
import { marked } from 'marked'

import Markdown from './components/markdown/Markdown';
import Preview from './components/preview/Preview';
import Documentation from "./components/documentation/Documentation"

import { useLocalStorage } from './components/hooks/useLocalstorage';


const App = () => {

  const [code, setCode] = useLocalStorage("markdown-code", '## Hello')
  const [compiled, setCompiled] = useLocalStorage("compiled-code", '<h2 id="hello">Hello</h2>')
  const [active, setActive] = useLocalStorage("active", "markdown")

  const handleChange = (e) => {
    setCode(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }
  console.log(active);

  return (
    <>
      <h1 className='heading'>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={() => setActive("markdown")} className={active === "markdown" ? "btn" : ""}>MarkDown</button>
          <button onClick={() => setActive("preview")} className={active === "preview" ? "btn" : ""}>Preview</button>
          <button onClick={() => setActive('documentation')} className={active === "documentation" ? "btn" : ""}>Documentation</button>
        </div>
        {active === "markdown" && <Markdown code={code} handleChange={handleChange} />}
        {active === "preview" && <Preview compiled={compiled} />}
        {active === "documentation" && <Documentation />}
      </div >
    </>
  )
}

export default App;