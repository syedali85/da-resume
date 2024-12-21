import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function KeyHighlights() {
  return (
    <section className="px-4 py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Key Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Data Strategy Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Developed and executed comprehensive data strategies, including successful cloud platform selection and implementation of enterprise-wide data lakes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Project Governance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Established effective project governance frameworks and operating models, resulting in improved delivery metrics and team performance.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Stakeholder Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Led strategic stakeholder engagement, including C-level presentations and proposal development for major initiatives.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Transformation Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Designed and implemented transformation projects as a Data Solution Architect, balancing technical excellence with business objectives.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Enterprise-Scale Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Created and presented RFP responses and technical proposals for enterprise-scale projects.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Cloud Migration Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Led the migration of legacy mainframe data pipelines to AWS, developing and executing comprehensive migration strategies.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>ETL/ELT Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Proven expertise in delivering modern cloud-based data processing and transformation platforms, specializing in ETL and ELT solutions on AWS.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Team Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Proficient in mentoring and developing team members, fostering their personal and technical growth, and enhancing engineering and agile delivery processes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-6 w-6 text-primary" />
              <CardTitle>Data Self-Service Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Innovated and empowered data customers to self-serve their data needs, leveraging cloud-based data platforms.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

