import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Cloud, Code, Users } from 'lucide-react'

export default function Skills() {
  return (
    <section className="px-4 py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Skills & Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <BarChart2 className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Strategic Planning</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Data strategy development</Badge>
              <Badge>Project governance</Badge>
              <Badge>Operating model design</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Stakeholder Management</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>C-level presentations</Badge>
              <Badge>Cross-functional leadership</Badge>
              <Badge>Client engagement</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Cloud & Big Data</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>AWS (EMR, S3, Glue, Lambda, Batch)</Badge>
              <Badge>Spark</Badge>
              <Badge>Hadoop</Badge>
              <Badge>Cloudera</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Development & DevOps</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>Scala</Badge>
              <Badge>Jenkins</Badge>
              <Badge>Git</Badge>
              <Badge>Terraform</Badge>
              <Badge>CI/CD pipelines</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

