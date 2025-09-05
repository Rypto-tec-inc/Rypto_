import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-muted-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">Return Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full bg-transparent">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
