"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap } from "lucide-react"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Simple demo authentication (no real auth)
  const handleAuth = async (type: "sign_in" | "sign_up") => {
    setIsLoading(true)
    
    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo purposes, just redirect to dashboard
    router.push("/dashboard")
    
    setIsLoading(false)
  }

  const handleGoogleAuth = () => {
    // For demo purposes, just redirect to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <a 
            href="https://www.zapweb.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-purple-900">ZapProposals</span>
              <p className="text-xs text-purple-600 font-medium">ZAP INTO ACTION, BUILD FAST, WIN BIG</p>
            </div>
          </a>
        </div>
        <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Welcome Back
          </CardTitle>
          <p className="text-gray-600">Sign in to access your proposals</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sign_in" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sign_in">Sign In</TabsTrigger>
              <TabsTrigger value="sign_up">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sign_in" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleAuth("sign_in")}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </TabsContent>
            
            <TabsContent value="sign_up" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleAuth("sign_up")}
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4"
              onClick={handleGoogleAuth}
            >
              Continue with Google (Demo)
            </Button>
          </div>
          
          <p className="mt-4 text-xs text-center text-gray-500">
            Demo Mode: Any email/password will work
          </p>
        </CardContent>
        </Card>
      </div>
    </div>
  )
}
