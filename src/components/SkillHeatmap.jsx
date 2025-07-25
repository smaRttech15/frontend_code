import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'Python', A: 120, B: 90 },
  { subject: 'SQL', A: 98, B: 110 },
  { subject: 'AI', A: 86, B: 130 },
  { subject: 'Data Science', A: 99, B: 100 },
  { subject: 'ML', A: 85, B: 95 },
];

export default function SkillHeatmap() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Skill Gap Heatmap</h2>
      <RadarChart cx={200} cy={150} outerRadius={120} width={400} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Student Skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Industry Demand" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}
