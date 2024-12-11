import WebPageLayout from "@/components/layout/webpage-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <WebPageLayout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Create Dynamic Forms with Ease
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Build, share, and analyze forms in minutes. No coding
                    required.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="#">Get Started</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Key Features
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Dynamic Form Fields</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Create forms with various field types including text inputs,
                    textareas, checkboxes, and radio buttons.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Unique Form URLs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Each form gets a unique, automatically generated slug for
                    easy sharing and access.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Form Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Login to view detailed statistics and download form
                    submission data.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                How It Works
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Create your form with our intuitive builder",
                  "Customize fields and design to match your brand",
                  "Share your form using the unique generated URL",
                  "Analyze responses and download data from your dashboard",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      {index + 1}
                    </div>
                    <p className="mt-2 text-lg font-medium text-white">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Pricing Plans
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Basic",
                    price: "Free",
                    features: [
                      "Up to 5 forms",
                      "100 monthly responses",
                      "Basic analytics",
                    ],
                  },
                  {
                    name: "Pro",
                    price: "$19/month",
                    features: [
                      "Unlimited forms",
                      "1000 monthly responses",
                      "Advanced analytics",
                      "Priority support",
                    ],
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    features: [
                      "Unlimited everything",
                      "Dedicated support",
                      "Custom integrations",
                    ],
                  },
                ].map((plan, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <p className="text-2xl font-bold">{plan.price}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4">Choose Plan</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Get Started?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Create your first form in minutes and start collecting
                    responses today.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link href="#">Sign Up Now</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 FormCraft. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-gray-100">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </WebPageLayout>
  );
}
