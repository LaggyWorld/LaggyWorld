import { Card } from "@/components/ui/card"

export default function StaffGuide() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Staff Guide</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Must be at least 16 years old</li>
            <li>Active player on the server for at least 1 month</li>
            <li>No previous bans or serious warnings</li>
            <li>Good communication skills and friendly attitude</li>
            <li>Available to moderate for at least 8 hours per week</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Fill out the staff application form (coming soon)</li>
            <li>Undergo an interview with current staff members</li>
            <li>Complete a trial period (2 weeks)</li>
            <li>Receive final evaluation and decision</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Staff Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Moderate chat and maintain a friendly environment</li>
            <li>Help new players and answer questions</li>
            <li>Report and handle rule violations</li>
            <li>Participate in staff meetings</li>
            <li>Contribute to server improvement discussions</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
