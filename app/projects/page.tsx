import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Projects' }

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p className="lede">
        Data science and research work across crop science, molecular
        biology, and precision agriculture.
      </p>

      <p>
        <Link
          href="/blog/enhancing-nutrient-use-efficiency-for-sustainable-agriculture"
          className="button"
        >
          Enhancing Nutrient Use Efficiency for Sustainable Agriculture →
        </Link>
      </p>
      <p className="muted">
        In this post, we begin with the real-world challenge of improving
        nutrient use efficiency in modern agriculture, and evaluate
        alternative statistical models to more accurately quantify nitrogen
        responsiveness.
      </p>

      <p>
        <Link
          href="/blog/chemprop-drug-discovery-on-databricks"
          className="button"
        >
          AI Drug Discovery Made Easy: Your Complete Guide to Chemprop on
          Databricks →
        </Link>
      </p>
      <p className="muted">
        Notes on using Chemprop, a directed message-passing graph neural
        network for molecular property prediction, as a managed workflow on
        Databricks &mdash; from loading pretrained models to training
        multi-task ADMET regressors.
      </p>

      <h2>My Research</h2>
      <p>
        <a href="https://ualberta.scholaris.ca/items/23bdbfc3-c9ad-453e-8940-219eab399e6c">
          Statistical and In-field Challenges Involved in Quantifying Crop
          Nitrogen Use Efficiency (NUE) and Spatial Soil Fertility in Central
          Alberta
        </a>
      </p>
      <p className="muted">
        My Master&apos;s thesis, hosted on the University of Alberta&apos;s
        research repository.
      </p>
    </section>
  )
}
