import { NgFor } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { Title } from '@angular/platform-browser'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'fwks-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        NgFor,
    ],
    templateUrl: './app.component.html',
    styles: `
        .font-roboto {
            font-family: 'Roboto'
        }
    `,
})
export class AppComponent {
    title = 'Murilo Almeida @ resume'
    _ = inject(Title).setTitle(this.title)

    hardSkills = [
        'C#', '.NET Core', 'ASP.NET Core', 'ASP.NET MVC', '.NET Framework',
        'Typescript', 'Python', 'GO', 'Javascript', 'Java',
        'Kafka', 'RabbitMQ', 'Docker', 'Kubernetes',
        'SQL Server', 'Mongo', 'Postgres', 'Cassandra', 'Elastic Search', 'Azure',
        'Azure Blob', 'Azure Notification Hubs', 'Azure Event Hubs', 'Azure Functions',
        'Playwright', 'Specflow', 'Unit Testing', 'Team City', 'Jenkins', 'Git',
        'open api'
    ]

    softSkills = [
        'Scrum', 'Agile', 'technical solutions', 'solution architecture', 'team training & mentoring',
        'team career management', 'business requirements analysis',
        'microservices', 'distributed applications', 'continuous integration & delivery (CI&CD)',
        'troubleshooting', 'risk assessment', 'documentation', 'quality control'
    ]

    jobs: Experience[] = [
        {
            id: 1,
            company: 'FARFETCH',
            location: 'Porto, Portugal',
            title: 'Engineering Lead',
            startedAt: 'Jun\'19',
            leftAt: 'Feb\'24',
            description: `
                At Farfetch, I engineered new marketing and communication services while supporting 
                existing applications, mastering technologies like Kafka, Kubernetes, ASP.NET Core, 
                and more. As an Engineering Lead, I drove positive change by prioritizing code quality, 
                fostering continuous improvement, and supporting team growth. Collaborating closely 
                with product managers, I translated requirements into actionable plans, 
                ensuring successful feature implementation and alignment with business objectives.
            `,
            skills: []
        },
        {
            id: 3,
            company: 'Actminds Inc. / Programmers Informática',
            title: 'Lead Software Engineer',
            location: 'South Bend, USA / Campinas, Brazil',
            startedAt: 'Sep\'16',
            leftAt: 'Jun\'19',
            description: `
                As a developer at Actminds, Inc., I enhanced ASP.NET API and Angular apps, AngularJS 
                and Angular, .NET Core, Node.js, and more. Collaborating with a US-based client, 
                I contributed to project planning and traveled for on-site work, broadening my 
                perspective. Beyond development, I led talent initiatives, creating assessments, 
                matching talents, and fostering knowledge transfer through events and webinar
            `,
            skills: []
        },
        {
            id: 5,
            company: 'Finamax, Goldsoft and Viceri respectively.',
            title: 'Software Engineer',
            location: 'Jundiaí, São Paulo',
            startedAt: 'Feb\'13',
            leftAt: 'Sep\'16',
            description: `
                I'm condensing the experience of the initial three companies into one in order to simplify and 
                shorten, really, the description since my responsabilities were the same as in being part of a 
                team working on transforming requirements into software. As an IC, my job was to create, migrate 
                and maintain several applications in different technologies and keep up with the support tasks 
                as well as backlog. Discussing the future roadmap and the current improvements in order to 
                minimize future and recurring problems.
            `,
            skills: []
        }
    ]

    scrollTo(article: Element): void {
        article.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
}

interface Experience {
    id: number
    company: string
    location: string
    title: string
    startedAt: string
    leftAt: string | undefined
    description: string
    skills: {
        group: string
        tags: string[]
    }[]
}