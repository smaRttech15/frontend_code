import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [resume, setResume] = useState(null);
  const [jobInterest, setJobInterest] = useState('');
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('job', jobInterest);

    try {
      const res = await axios.post('http://localhost:5678/analyze', formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error analyzing resume');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Resume Analyzer</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResume(e.target.files[0])}
        className="mb-4"
      />

      <input
        type="text"
        placeholder="Enter your Job Interest"
        value={jobInterest}
        onChange={(e) => setJobInterest(e.target.value)}
        className="mb-4 w-full p-2 border rounded"
      />

      <button
        onClick={handleUpload}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Analyze
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="font-semibold">Skill Gap:</h3>
          <pre>{result.gap}</pre>

          <h3 className="font-semibold mt-2">Recommended Courses:</h3>
          <ul className="list-disc list-inside">
            {result.recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
