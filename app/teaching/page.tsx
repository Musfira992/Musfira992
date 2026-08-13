import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Teaching and Training' }

export default function Teaching() {
  return (
    <article>
      <h1>Teaching and Training</h1>
      <p className="lede">
        Training, mentoring, and lab instruction across industry and academia.
      </p>

      <h2>At Bayer</h2>
      <ul>
        <li>
          <strong>Staff Training and Quality Assurance:</strong> Trained 10+
          staff on integrated pest management and tissue sampling protocols,
          and co-led quarterly and annual process reviews that improved
          quality control and regulatory compliance.
        </li>
      </ul>

      <h2>At University of Alberta</h2>
      <p>
        I taught at the University of Alberta from 2016 to 2017 as Teaching
        and Senior Teaching Assistant for Molecular Genetics and Heredity,
        where I taught and mentored hundreds of students in microbiology and
        molecular genetics. I supervised more than 950 hours of laboratory
        sessions and led a team of 15 teaching assistants for a course with
        400 students.
      </p>

      <p>Few accomplishments during that period that I&apos;m proud of:</p>
      <ul>
        <li>
          <strong>Technical Expertise in Aseptic and Molecular Genetics
          Techniques:</strong> Demonstrated and taught aseptic, microbiology
          and molecular biology techniques through hands-on lab instruction.
          Proficient in cell culture, serial dilutions, streak plating, and
          Gram staining. Skilled in DNA/RNA and protein extraction, PCR, gel
          electrophoresis (agarose and SDS-PAGE), Western blotting, molecular
          cloning and recombinant DNA technology.
        </li>
        <li>
          <strong>Team Leadership and Interpersonal Skills:</strong>
          Supervised over 950 hours of laboratory sessions for more than 120
          undergraduate students. Mentored and led a team of 15 teaching
          assistants for a high-enrollment course serving over 400 students.
        </li>
        <li>
          <strong>Protocol Optimization and Collaboration:</strong> Identified
          inefficiencies in laboratory protocols impacting student
          performance. Collaborated with the course coordinator to review and
          optimize procedures, which resulted in improved student outcomes.
        </li>
        <li>
          <strong>Laboratory Health and Safety:</strong> Provided
          comprehensive guidance on personal protective equipment (PPE)
          usage, chemical handling, and equipment operation, alongside
          general laboratory responsibilities. Ensured 100% compliance and
          maintained a perfect safety record with zero incidents during my
          tenure.
        </li>
      </ul>
    </article>
  )
}
