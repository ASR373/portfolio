import React, { useRef, useState } from 'react'
import { FadeIn } from './FadeIn'
import { siteContent } from '../content/siteContent'
import { SectionAccent3D } from './SectionAccent3D'
import './Blogs.css'

function BlogCard({ post, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -6, y: x * 6 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <FadeIn delay={0.1 + index * 0.12}>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="blog__card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <span className="blog__bg-num">{post.id}</span>

        <div className="blog__thumb" aria-hidden="true">
          <img src={post.image} alt="" loading="lazy" />
        </div>

        <div className="blog__card-body">
          <div className="blog__card-header">
            <span className="blog__num">/{post.id}</span>
            <div className="blog__arrow" aria-hidden="true">
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

          <h3 className="blog__title">{post.title}</h3>
          <span className="blog__cta">Read on Medium</span>
        </div>
      </a>
    </FadeIn>
  )
}

export function Blogs() {
  const { sections, blogs } = siteContent

  return (
    <section id="blogs" className="blogs section">
      <div className="blogs__ornament" aria-hidden="true">
        <SectionAccent3D variant="blogs" />
      </div>

      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">{sections.blogs.number}</span>
            <span className="section-title">{sections.blogs.title}</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="blog__grid">
          {blogs.items.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

