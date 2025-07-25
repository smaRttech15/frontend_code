import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="mt-6 bg-white shadow-lg p-6 rounded-lg max-w-2xl">
      <h2 className="text-xl font-bold text-indigo-700 mb-2">Skill Gap Analysis</h2>
      <p><strong>Missing Skills:</strong> {result.gapSkills.join(", ")}</p>
      <p className="mt-4 font-semibold">Recommended Certifications:</p>
      <ul className="list-disc list-inside">
        {result.recommendedCerts.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;
