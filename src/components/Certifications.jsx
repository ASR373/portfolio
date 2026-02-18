import React from 'react'
import { FadeIn } from './FadeIn'
import { siteContent } from '../content/siteContent'
import { SectionAccent3D } from './SectionAccent3D'
import './Certifications.css'

function CertificationCard({ cert, index }) {
  const isLink = Boolean(cert.link) && typeof cert.link === 'string'
  const Card = isLink ? 'a' : 'div'
  const cardProps = isLink
    ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
    : { role: 'article', 'aria-disabled': 'true' }

  return (
    <FadeIn delay={0.1 + index * 0.12}>
      <Card className={`cert__card ${!isLink ? 'cert__card--disabled' : ''}`} {...cardProps}>
        <span className="cert__bg-num">{cert.id}</span>

        <div className="cert__card-header">
          <span className="cert__num">/{cert.id}</span>
          <div className="cert__arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 15L15 5M15 5H7M15 5V13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h3 className="cert__title">{cert.title}</h3>
        <p className="cert__issuer">{cert.issuer}</p>

        <span className="cert__cta">{isLink ? 'View credential' : 'Add credential'}</span>
      </Card>
    </FadeIn>
  )
}

export function Certifications() {
  const { sections, certifications } = siteContent

  return (
    <section id="certifications" className="certifications section">
      <div className="certifications__ornament" aria-hidden="true">
        <SectionAccent3D variant="certifications" />
      </div>

      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">{sections.certifications.number}</span>
            <span className="section-title">{sections.certifications.title}</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="cert__grid">
          {certifications.items.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
