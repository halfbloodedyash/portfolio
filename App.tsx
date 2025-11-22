import React from 'react';
import { DATA } from './data/resume';
import { Avatar } from './components/ui/avatar';
import { Badge } from './components/ui/badge';
import { ResumeCard } from './components/resume-card';
import { ProjectCard } from './components/project-card';
import { Navbar } from './components/navbar';

function App() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-24">
      
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-white">
                Hi, I'm {DATA.name} 👋
              </h1>
              <p className="max-w-[600px] text-base text-muted-foreground md:text-xl">
                {DATA.description}
              </p>
            </div>
            <Avatar src={DATA.avatarUrl} alt={DATA.name} fallback={DATA.initials} className="size-28 sm:size-32 border-2 border-gray-100 dark:border-zinc-800" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-12">
        <h2 className="text-xl font-bold mb-4 dark:text-white">About</h2>
        <p className="text-pretty font-sans text-sm text-muted-foreground leading-relaxed">
          {DATA.summary}
        </p>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="mt-12">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Work Experience</h2>
        <div className="flex flex-col gap-y-6">
          {DATA.work.map((role, id) => (
            <ResumeCard
              key={id}
              logoUrl={role.logoUrl}
              altText={role.company}
              title={role.company}
              subtitle={role.title}
              href={role.href}
              badges={role.badges}
              period={`${role.start} - ${role.end}`}
              description={role.description}
            />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mt-12">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Education</h2>
        <div className="flex flex-col gap-y-6">
          {DATA.education.map((edu, id) => (
            <ResumeCard
              key={id}
              logoUrl={edu.logoUrl}
              altText={edu.school}
              title={edu.school}
              subtitle={edu.degree}
              href={edu.href}
              period={`${edu.start} - ${edu.end}`}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-12">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <Badge key={id} className="text-xs font-medium">{skill}</Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12">
        <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto">
                {DATA.projects.map((project, id) => (
                    <ProjectCard
                        key={id}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                        href={project.href}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="mt-12">
        <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Hackathons</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended 21+ hackathons. People from around the country would come together and build incredible things in 2-3 days.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                {DATA.hackathons.map((hackathon, id) => (
                    <ResumeCard
                        key={id}
                        logoUrl={hackathon.image}
                        altText={hackathon.title}
                        title={hackathon.title}
                        subtitle={hackathon.location}
                        badges={[]}
                        period={hackathon.dates}
                        description={hackathon.description}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12 mb-24 text-center">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-4">Contact</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Get in Touch</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Want to chat? Just shoot me a dm <a href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">with a direct question on twitter</a> and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </section>

      <Navbar />
    </main>
  );
}

export default App;