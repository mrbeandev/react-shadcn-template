import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

function App() {
	return (
		<div className="flex min-h-svh flex-col flex-wrap sm:max-h-screen items-center justify-center gap-8 p-8">
			<div className="text-center">
				<h1 className="text-2xl font-bold mb-4">Shadcn Components Sample</h1>
				<div className="flex gap-4 justify-center flex-wrap">
					<Button>Default Button</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="outline">Outline</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>This is a sample card component</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card content goes here. You can put any content inside a card.</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Badges</CardTitle>
						<CardDescription>Different badge variants</CardDescription>
					</CardHeader>
					<CardContent className="flex gap-2 flex-wrap">
						<Badge>Default</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="destructive">Destructive</Badge>
						<Badge variant="outline">Outline</Badge>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Avatars</CardTitle>
						<CardDescription>User profile images</CardDescription>
					</CardHeader>
					<CardContent className="flex gap-4">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
							<AvatarFallback>VC</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
					</CardContent>
				</Card>
			</div>

			<div className="w-full max-w-2xl">
				<h2 className="text-xl font-semibold mb-4 text-center">Alerts</h2>
				<div className="space-y-4">
					<Alert>
						<Info className="h-4 w-4" />
						<AlertTitle>Information</AlertTitle>
						<AlertDescription>
							This is an informational alert. It provides general information to the user.
						</AlertDescription>
					</Alert>

					<Alert variant="destructive">
						<XCircle className="h-4 w-4" />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>
							This is an error alert. Something went wrong and needs attention.
						</AlertDescription>
					</Alert>

					<Alert>
						<CheckCircle className="h-4 w-4" />
						<AlertTitle>Success</AlertTitle>
						<AlertDescription>
							This is a success alert. The operation completed successfully.
						</AlertDescription>
					</Alert>

					<Alert>
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Warning</AlertTitle>
						<AlertDescription>
							This is a warning alert. Please be cautious about this action.
						</AlertDescription>
					</Alert>
				</div>
			</div>

			<div className="w-full max-w-md">
				<h2 className="text-xl font-semibold mb-4 text-center">Form Controls</h2>
				<Card>
					<CardHeader>
						<CardTitle>Sample Form</CardTitle>
						<CardDescription>Basic form with shadcn components</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" placeholder="Enter your email" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password" placeholder="Enter your password" />
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox id="terms" />
							<Label htmlFor="terms" className="text-sm">
								Accept terms and conditions
							</Label>
						</div>
						<Button className="w-full">Submit</Button>
					</CardContent>
				</Card>
			</div>

			<div className="w-full max-w-md">
				<h2 className="text-xl font-semibold mb-4 text-center">Tabs</h2>
				<Tabs defaultValue="account" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
					<TabsContent value="account" className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" defaultValue="John Doe" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="username">Username</Label>
							<Input id="username" defaultValue="@johndoe" />
						</div>
					</TabsContent>
					<TabsContent value="password" className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="current">Current password</Label>
							<Input id="current" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="new">New password</Label>
							<Input id="new" type="password" />
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}

export default App;
