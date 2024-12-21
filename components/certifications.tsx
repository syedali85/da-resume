import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Certifications</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Card>
            <CardHeader>
              <Award className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Hadoop Big Data Developer</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge>Cloudera</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Scrum Master</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge>Scrum Alliance</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

