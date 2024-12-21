import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from 'lucide-react'

export default function Accomplishments() {
  return (
    <section className="px-4 py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Accomplishments</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Trophy className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Experian Credit Excellence Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Performance tuning the batch suite, saving costs and execution time.</li>
                <li>Automating test data report creation using JMeter.</li>
                <li>Successfully implementing web services for the first time at Experian.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Trophy className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Dell Silver Award</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Delivering a critical project as a technical lead with zero defects.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Trophy className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Multiple Experian Spot Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <p>For assisting various teams and contributing to their success.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

