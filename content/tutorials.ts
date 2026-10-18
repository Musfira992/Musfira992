export type TutorialMeta = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

// Registry of tutorials. Each slug maps to content/tutorials/<slug>.mdx
export const tutorials: TutorialMeta[] = [
  {
    slug: 'reading-a-dna-sequence',
    title: 'Reading a DNA Sequence',
    description:
      'A gentle introduction to nucleotides, reading frames, and how raw sequence data is interpreted — the foundation for interactive bioinformatics tutorials to come.',
    date: '2026-06-14',
    tags: ['Bioinformatics', 'DNA', 'Beginner'],
  },
  {
    slug: 'unlocking-bioinformatics-understanding-the-command-line-from-scratch',
    title: 'Unlocking Bioinformatics: Understanding the Command Line from Scratch',
    description:
      'Why the command line becomes essential in bioinformatics: scale, reproducibility, automation, tooling, and remote compute.',
    date: '2026-08-20',
    tags: ['Command Line', 'Bioinformatics', 'Beginner'],
  },
  {
    slug: 'command-line-basics-command-line-essentials',
    title: 'Command Line Essentials',
    description:
      'A practical reference for navigating, managing, viewing, and searching files from the terminal, with bioinformatics examples.',
    date: '2026-08-20',
    tags: ['Command Line', 'Linux', 'Beginner'],
  },
]

export function getTutorial(slug: string) {
  return tutorials.find((t) => t.slug === slug)
}
