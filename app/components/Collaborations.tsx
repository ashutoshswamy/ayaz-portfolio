"use client";

import { User, Users } from "lucide-react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const collaborators = [
  "Usha Mangeshkar",
  "Anuradha Paudwal",
  "Suresh Wadekar",
  "Ram Shankar",
  "Hemlata",
  "Vishwajeet",
  "Sadhana Sargam",
  "Bela Shende",
  "Vinod Rathod",
  "Varsha Usgaonkar",
  "Sapna Awasthi",
  "Vaishali Samant",
  "Avdhoot Gupte",
  "Swapnil Bandodkar",
  "Ravina Tandon",
  "Bhagayshree",
  "Johnny Lever",
  "Raju Shrivastav",
  "Shakti Kapoor",
  "Asrani",
];

export default function Collaborations() {
  return (
    <motion.section
      id="collaborations"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Collaborations
          </span>
          <div className="flex items-center gap-3">
            <Users
              className="h-5 w-5 text-[var(--color-gold)]"
              aria-hidden="true"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Collaborations & Celebrities
            </h2>
          </div>
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            A distinguished roster of collaborators and respected cultural
            personalities.
          </p>
        </motion.div>
        <motion.ul
          variants={staggerChildren}
          className="grid gap-4 rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {collaborators.map((name) => (
            <motion.li
              key={name}
              variants={fadeUp}
              className="flex items-center gap-2 rounded-xl border border-[color:var(--color-emerald)]/10 bg-[var(--color-offwhite)]/70 px-4 py-3 text-base font-medium text-[color:var(--color-emerald)]"
            >
              <User
                className="h-4 w-4 text-[var(--color-emerald)]/70"
                aria-hidden="true"
              />
              <span>{name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
