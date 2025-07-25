import React from 'react';

export default function Suggestions() {
  const sampleCourses = [
    'Coursera: AI for Everyone',
    'edX: Data Analytics in Business',
    'IBM SkillsBuild: Agile Project Management',
    'LinkedIn: Essential Communication Skills',
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Recommended Courses</h2>
      <ul className="list-disc list-inside">
        {sampleCourses.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>
    </div>
  );
}