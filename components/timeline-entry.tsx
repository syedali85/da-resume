import React from 'react';

interface TimelineEntryProps {
  title: string;
  company: string;
  date: string;
  location: string;
  logo: string;
  children: React.ReactNode;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ title, company, date, location, logo, children }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16">
        <img src={logo} alt={`${company} logo`} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-lg">{company}</p>
        <p className="text-sm text-gray-500">{date} | {location}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default TimelineEntry;

