import { useState,useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import axios from "axios"
import Marker from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [code,setcode]=useState(`function sum(){
  return 1+1
}
`)

const [res,setres]=useState();

  const reviewcode=async ()=>{
    const response=await axios.post("http://localhost:3000/ai/get-review",{code});

    setres(response.data);

  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
             <Editor
              value={code}
              onValueChange={code => setcode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />

          </div>
          <div className="review"
            onClick={reviewcode} 
          >Review</div>
        </div>
        <div className="right" >
          <Marker  rehypePlugins={[ rehypeHighlight ]}>{res}</Marker>
        </div>
      </main>
    </>
  );
}



export default App;
