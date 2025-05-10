import {useState, useRef } from 'react';
function AppMain() {
  const inputRef = useRef<html.inputElement>(null);
  const [response, setResponses'] = useState<string[]>([]);

  const runQuery = () => {
    if (!inputRef.current) return;
    const val = inputRef.current.value.trim();
    if (val) {
      // Here we'd use real api call later
      setResponse(s => [...s, "Fake response for: " + val]);
    }
  };

  return (\
    <div className="min-p4 max-w-screen">
      <h1>GRP Assistant</h1>
      <div className="flex gap-4 groub my-4" >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a command"
          className="flex-1 bg-gray-100 px-4 py-2 rounded sm"
          onEnter=((e)=> { if (e.key === 'Enter') runQuery(); } />
        </div>
      <button onClick={runQuery} className="px-6 py-2 mt-auto rounded bg-blue-300 text-white">Submit</button>
      <p className="text-gray-600">
        {responses.map(((r, i) => (<li key={i}>{r}</li>))}
      </p>
    </div>
  </div>\n);
}

export default AppMain;