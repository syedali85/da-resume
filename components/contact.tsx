"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link , Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Get in Touch</h2>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  alisyed0105@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-ali-syed-a4ba6614/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <Link className="h-5 w-5" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

