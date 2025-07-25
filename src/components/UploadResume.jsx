import React, { useState } from 'react';

export default function UploadResume() {
  const [job, setJob] = useState('');
  const [resume, setResume] = useState(null);

  const handleAnalyze = () => {
    alert(`Analyzing resume for job interest: ${job}`);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Upload Resume (PDF):</label>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setResume(e.target.files[0])}
        className="mb-4"
      />
      <label className="block mb-2 font-semibold">Job Interest:</label>
      <input
        type="text"
        placeholder="e.g., Project Management"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={handleAnalyze}
        disabled={!job || !resume}
      >
        Analyze
      </button>
    </div>
  );
}