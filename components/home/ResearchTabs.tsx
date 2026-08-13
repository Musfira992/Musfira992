'use client'

import { useState } from 'react'
import { researchTabs } from '@/content/research'
import DotPlot from './DotPlot'
import styles from './ResearchTabs.module.css'

export default function ResearchTabs() {
  const [activeId, setActiveId] = useState(researchTabs[0].id)
  const active = researchTabs.find((t) => t.id === activeId) ?? researchTabs[0]

  return (
    <section className={styles.wrap}>
      <h2>Research</h2>
      <p className="lede">
        A quick tour of the kinds of analysis and visualization behind the
        work on this site.
      </p>

      <div className={styles.tabs} role="tablist" aria-label="Research domains">
        {researchTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === activeId}
            className={styles.tab}
            data-active={t.id === activeId}
            onClick={() => setActiveId(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel">
        <p className={styles.desc}>{active.description}</p>
        {active.kind === 'dotplot' ? (
          <DotPlot />
        ) : (
          <img className={styles.image} src={active.src} alt={active.alt} loading="lazy" />
        )}
      </div>
    </section>
  )
}
