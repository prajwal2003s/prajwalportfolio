'use client'

import { experience } from '@/lib/data/experience'
import { skills } from '@/lib/data/skills'
import { certificates } from '@/lib/data/certificates'
import { freelanceProjects } from '@/lib/data/freelance-projects'

export default function ResumeTemplate() {
  return (
    <div className="bg-[#f1f5f9] py-10 flex justify-center">

      {/* A4 Container */}
      <div
        className="bg-white shadow-lg"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '20mm',
          fontFamily: 'Inter, sans-serif',
        }}
      >

        {/* HEADER */}
        <div className="border-b border-gray-300 pb-5 mb-5">
          <h1 className="text-3xl font-bold text-gray-900">
            Prajwal Sathawane
          </h1>

          <p className="text-base font-semibold text-blue-600 mt-1">
            SOFTWARE ENGINEER
          </p>

          <p className="text-sm text-gray-600 mt-2">
            prajwalsathawane2003@gmail.com | +91-9284593499 | Nagpur, India
          </p>

          <p className="text-sm text-gray-600">
            github.com/prajwal2003s | linkedin.com/in/prajwal-sathawane
          </p>
        </div>

        {/* SUMMARY */}
        <div className="mb-5">
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider border-l-4 border-blue-600 pl-2 mb-2">
            Professional Summary
          </h2>

          <p className="text-[13px] text-gray-700 leading-relaxed">
            Software developer skilled in React, Next.js, and Python (Django),
            focused on building scalable web applications and real-world solutions.
            Passionate about building end-to-end systems with clean UI and efficient backend.
          </p>
        </div>

        {/* SKILLS */}
        <div className="mb-5">
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider border-l-4 border-blue-600 pl-2 mb-2">
            Technical Skills
          </h2>

          <div className="text-[13px] text-gray-700 space-y-1">
            <p><b>Languages:</b> JavaScript, Python, HTML, CSS</p>
            <p><b>Frontend:</b> React.js, Next.js, Tailwind CSS</p>
            <p><b>Backend:</b> Django, Node.js</p>
            <p><b>Database:</b> MongoDB, MySQL</p>
            <p><b>Tools:</b> Git, Postman, Vercel, Netlify</p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mb-5">
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider border-l-4 border-blue-600 pl-2 mb-2">
            Key Projects
          </h2>

          {freelanceProjects.slice(0, 4).map((project) => (
            <div key={project.id} className="mb-3">
              <p className="text-sm font-semibold text-gray-900">
                {project.title}
              </p>

              <p className="text-xs text-gray-600 italic">
                {project.client} • {project.completionDate}
              </p>

              <p className="text-[13px] text-gray-700 mt-1">
                {project.description}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                <b>Technologies:</b> {project.technologies.join(', ')}
              </p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <div className="mb-5">
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider border-l-4 border-blue-600 pl-2 mb-2">
            Experience
          </h2>

          {experience.slice(0, 2).map((job) => (
            <div key={job.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {job.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {job.company}
                  </p>
                </div>

                <p className="text-xs text-gray-500">
                  {job.period}
                </p>
              </div>

              <ul className="text-[13px] text-gray-700 mt-1 ml-4 list-disc">
                {job.description.slice(0, 2).map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="mb-5">
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider border-l-4 border-blue-600 pl-2 mb-2">
            Education
          </h2>

          <div className="flex justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                B.Tech in Information Technology
              </p>
              <p className="text-xs text-gray-600">
                K.D.K. College of Engineering, Nagpur
              </p>
            </div>

            <p className="text-xs text-gray-500">
              2021 – 2025
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider border-l-4 border-blue-600 pl-2 mb-2">
            Certifications
          </h2>

          {certificates.slice(0, 3).map((cert) => (
            <p key={cert.id} className="text-[13px] text-gray-700 mb-1">
              {cert.title} – {cert.issuer}
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}