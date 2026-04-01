import EntryExperience from '@/components/EntryExperience'
import Characters from '@/components/Characters'
import World from '@/components/World'
import Features from '@/components/Features'
import Episodes from '@/components/Episodes'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <EntryExperience />
      <Characters />
      <World />
      <Features />
      <Episodes />
      <CallToAction />
      <Footer />
    </main>
  )
}
