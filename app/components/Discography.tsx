"use client";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const works = [
  {
    title: "Mahima Swami Samarth Ki",
    collaborators: "Usha Mangeshkar / Mohammad Ayaz",
    label: "Venus Music",
  },
  {
    title: "Jai Guru Jai Guru",
    collaborators: "Anuradha Paudwal / Mohammad Ayaz",
    label: "T-Series",
  },
  {
    title: "Vandhan Majhe Ghyave",
    collaborators: "Usha Mangeshkar / Mohammad Ayaz",
    label: "Zee Music",
  },
  {
    title: "Siddharam Gajto",
    collaborators: "Anuradha Paudwal / Mohammad Ayaz",
    label: "Zee Music",
  },
  {
    title: "Namo Namo Deva",
    collaborators: "Ram Shankar / Mohammad Ayaz",
    label: "Zee Music",
  },
  {
    title: "Deva Majhe Siddheshwara",
    collaborators: "Varsha Usgaonkar / Mohammad Ayaz",
    label: "T-Series",
  },
  {
    title: "Darshan Dya Ishwara",
    collaborators: "Anup Jalota / Mohammad Ayaz",
    label: "Zee Music",
  },
  {
    title: "Raytechya Rakshanala Hote Shivaji Raja",
    collaborators: "",
    label: "T-Series",
  },
  {
    title: "Udo Udo Ga Amba Bai",
    collaborators: "",
    label: "T-Series",
  },
  {
    title: "Bhimraya Kuni Shodhun Dakhwal Ka",
    collaborators: "",
    label: "T-Series",
  },
  {
    title: "Shirdi Ke Sai Baba",
    collaborators: "Bhagayshree Chavan / Mohammad Ayaz",
    label: "T-Series",
  },
  {
    title: "Utha Siddha Rameshwara",
    collaborators: "Suresh Wadekar / Mohammad Ayaz",
    label: "Zee Music",
  },
  {
    title: "Bhakti Shivachi Karto",
    collaborators: "Sadhana Sargam / Mohammad Ayaz",
    label: "",
  },
];

export default function Discography() {
  return (
    <motion.section
      id="discography"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Discography
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Discography</h2>
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            A complete catalog of albums and songs, presented with clarity and
            respect for every collaborator and label.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="overflow-hidden rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70"
        >
          <div className="grid gap-2 border-b border-[color:var(--color-emerald)]/10 px-6 py-4 text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] sm:grid-cols-[2fr_1.5fr_1fr]">
            <span>Title</span>
            <span>Collaborators</span>
            <span>Label</span>
          </div>
          <motion.ul variants={staggerChildren}>
            {works.map((work) => (
              <motion.li
                key={work.title}
                variants={fadeUp}
                className="grid gap-3 border-b border-[color:var(--color-emerald)]/10 px-6 py-5 text-sm text-[color:var(--text-dark)]/80 sm:grid-cols-[2fr_1.5fr_1fr] sm:text-base"
              >
                <span className="font-semibold text-[color:var(--color-emerald)]">
                  {work.title}
                </span>
                <span className="text-[color:var(--text-dark)]/75">
                  {work.collaborators || "—"}
                </span>
                <span className="text-[color:var(--text-dark)]/70">
                  {work.label || "—"}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
