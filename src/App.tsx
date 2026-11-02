type Project = {
  title: string;
  problem: string;
  built: string[];
  result: string;
  tools: string[];
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Daily Deposit Reconciliation",
    problem:
      "Nine stores send cash deposits every day. Matching each deposit to the bank, tracking shortages, and catching the debits that show up weeks later was slow, manual work spread across several spreadsheets.",
    built: [
      "A daily reconciliation run that matches every store's deposits against bank records, guided by a standing rules file so results stay consistent day to day",
      "A debit check that ties each cash shortage debit back to the original deposit it came from",
      "A Monday report showing which deposits are still open, by store, with a clear Friday cut-off",
    ],
    result:
      "Turned a scattered, manual process into a repeatable daily routine with one master log and a weekly open-items report management can act on. Also led to a simple write-off policy for small change variances, which leadership approved.",
    tools: ["Claude", "Excel", "Python scripts", "Bank and armored car reports"],
    demo: "https://github.com/sarahmartin897/deposit-reconciliation-demo",
  },
  {
    title: "Payroll Validation Check",
    problem:
      "Biweekly payroll covers nine locations and two companies. Totals change every cycle, and catching errors before checks go out meant checking the math by hand and guessing at why numbers went up.",
    built: [
      "A repeatable check that validates the payroll report math every cycle",
      "A payroll-to-payroll comparison that explains increases by type of pay (hours, overtime, rate changes, new hires)",
      "Automatic flags for anyone paid under minimum wage and for employees with no pay for two payrolls in a row",
    ],
    result:
      "Every payroll now gets the same thorough review in minutes, with a plain-language explanation of what changed and why, ready to share with the owner.",
    tools: ["Claude", "Paychex reports", "Excel"],
  },
  {
    title: "Card Chargeback Analysis",
    problem:
      "Customers dispute card charges, and each dispute needs a defense package with the receipt before a deadline. Wins were inconsistent and nobody knew why.",
    built: [
      "A generator that turns a receipt into a ready-to-review defense package",
      "An analysis of 116 chargebacks across nine stores to find what separates wins from losses",
      "A simple triage rule for which disputes are worth defending, plus a weekly deadline check",
    ],
    result:
      "Found a clear pattern: disputes on orders with extra card verification were winnable, while one specific type of mobile order was almost never won. Also surfaced $964 in disputes that had never been answered, so none slip through again.",
    tools: ["Claude", "ChatGPT", "Excel", "Payment processor reports"],
  },
  {
    title: "Inactive Employee Cleanup",
    problem:
      "The payroll provider bills a monthly fee for every active employee, paid or not. Stores weren't removing people who had left, so headcount and fees kept climbing.",
    built: [
      "Bulk import files that terminated inactive employees in one upload instead of one at a time, using the correct reason codes and date rules",
      "An ongoing flag in every payroll check so new inactive employees are caught right away",
    ],
    result:
      "Cleared 144 inactive employee records and brought per-employee fees back down, with a process that keeps the list clean going forward.",
    tools: ["Claude", "Paychex Flex imports", "Excel"],
  },
  {
    title: "Benefits Deduction Import",
    problem:
      "After open enrollment, every employee's benefit deductions had to be keyed into the payroll system by hand, one plan at a time.",
    built: [
      "A converter that turns the benefits workbook into a ready-to-upload import file",
      "Built-in fixes for the system's quirks, like case-sensitive plan codes and separate files per company",
    ],
    result:
      "Deductions now go in with one upload per company instead of manual entry, and the steps are saved so the process can be repeated every enrollment.",
    tools: ["Claude", "Paychex Flex imports", "Excel"],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <header className="mb-12">
          <p className="mb-2 font-mono text-sm uppercase tracking-wide text-zinc-500">
            AI Operations · Process Improvement · Workflow Automation
          </p>
          <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">
            Sarah Martin
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-zinc-700">
            I help businesses work smarter by putting AI to work on real,
            everyday operations. Over 12 years running finance and admin for a
            nine-location restaurant group, I've learned exactly where time
            gets lost. Now I use generative AI to fix it.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
              href="https://www.linkedin.com/in/sarahmartin897"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100"
              href="mailto:sarahmartin024@gmail.com"
            >
              Email me
            </a>
          </div>
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="mb-3 text-xl font-semibold">{p.title}</h3>
                <p className="mb-1 text-sm font-semibold text-zinc-500">
                  The problem
                </p>
                <p className="mb-4 leading-relaxed text-zinc-700">
                  {p.problem}
                </p>
                <p className="mb-1 text-sm font-semibold text-zinc-500">
                  What I built
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 leading-relaxed text-zinc-700">
                  {p.built.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="mb-1 text-sm font-semibold text-zinc-500">
                  The result
                </p>
                <p className="mb-4 leading-relaxed text-zinc-700">
                  {p.result}
                </p>
                {p.demo && (
                  <a
                    className="mb-4 inline-block rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700"
                    href={p.demo}
                  >
                    See the working demo →
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-semibold">Always learning</h2>
          <p className="leading-relaxed text-zinc-700">
            I'm building my technical skills through SheCodes, with coursework
            in HTML, CSS and JavaScript. This site is built with React.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
