import ProfessionalSummary from './ProfessionalSummary';
import TimelineEntry from './timeline-entry';

export default function Journey() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24">
      <h2 className="mb-16 text-center text-4xl font-bold">Professional Journey</h2>
      <p className="mb-16 text-center text-lg text-gray-600">
      </p>
      <div className="space-y-16">
        <TimelineEntry
          title="Data Solution Architect/Technical Lead"
          company="Experian"
          date="December 2018 - Present"
          location="Nottingham"
          logo="/logo/experian-logo.png"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Established and implemented new project governance frameworks and agile delivery metrics, significantly improving team performance and delivery timelines.</li>
            <li>Led cloud strategy evaluation and selection process through comprehensive POCs, directing the migration path for critical UK & Ireland data pipelines.</li>
            <li>Presented strategic proposals and architectural recommendations to C-level stakeholders, securing buy-in for major transformation initiatives.</li>
            <li>Architected and led migration of core business applications to AWS, scaling processing capacity from 1 million to 170 million records monthly, driving £1.3 million annual revenue growth.</li>
          </ul>
        </TimelineEntry>

        <TimelineEntry
          title="Lead Developer"
          company="NTT DATA Services"
          date="January 2010 - November 2018"
          location="Nottingham, United Kingdom"
          logo="/logo/nttdata-logo.png"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Implemented web service solutions on mainframe, eliminating the need for middleware, improving performance, and reducing costs.</li>
            <li>Delivered scalable solutions by migrating applications from legacy M204 databases to DB2.</li>
            <li>Led a team of software engineers to deliver client projects.</li>
            <li>Created low-level technical design documents based on client requirements, and conducted code reviews and implementation planning.</li>
          </ul>
        </TimelineEntry>

        <TimelineEntry
          title="Software Engineer"
          company="Keane"
          date="December 2007 - January 2010"
          location="Not specified"
          logo="/logo/keane-logo.png"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Developed SQL scripts to generate ad-hoc reports based on business requirements.</li>
            <li>Provided technical support for client applications, resolving issues 20% faster through improved diagnostic processes.</li>
            <li>Optimized daily batch jobs by implementing stored procedures.</li>
          </ul>
        </TimelineEntry>
      </div>
    </section>
  )
}

