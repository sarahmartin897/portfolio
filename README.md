# Sarah Martin: AI Operations Portfolio

I help businesses work smarter by putting AI to work on real, everyday operations. Over 12 years running finance and admin for a nine-location restaurant group, I've learned exactly where time gets lost. Now I use generative AI to fix it.

Below are five workflows I designed and built. Company names, employee details and account numbers have been removed.

---

## 1. Daily Deposit Reconciliation

**The problem:** Nine stores send cash deposits every day. Matching each deposit to the bank, tracking shortages, and catching the debits that show up weeks later was slow, manual work spread across several spreadsheets.

**What I built:**
- A daily reconciliation run that matches every store's deposits against bank records, guided by a standing rules file so results stay consistent day to day
- A debit check that ties each cash shortage debit back to the original deposit it came from
- A Monday report showing which deposits are still open, by store, with a clear Friday cut-off

**The result:** Turned a scattered, manual process into a repeatable daily routine with one master log and a weekly open-items report management can act on. Also led to a simple write-off policy for small change variances, which leadership approved.

**Tools:** Claude, Excel, Python scripts, bank and armored car reports

---

## 2. Payroll Validation Check

**The problem:** Biweekly payroll covers nine locations and two companies. Totals change every cycle, and catching errors before checks go out meant checking the math by hand and guessing at why numbers went up.

**What I built:**
- A repeatable check that validates the payroll report math every cycle
- A payroll-to-payroll comparison that explains increases by type of pay (hours, overtime, rate changes, new hires)
- Automatic flags for anyone paid under minimum wage and for employees with no pay for two payrolls in a row

**The result:** Every payroll now gets the same thorough review in minutes, with a plain-language explanation of what changed and why, ready to share with the owner.

**Tools:** Claude, Paychex reports, Excel

---

## 3. Card Chargeback Analysis

**The problem:** Customers dispute card charges, and each dispute needs a defense package with the receipt before a deadline. Wins were inconsistent and nobody knew why.

**What I built:**
- A generator that turns a receipt into a ready-to-review defense package
- An analysis of 116 chargebacks across nine stores to find what separates wins from losses
- A simple triage rule for which disputes are worth defending, plus a weekly deadline check

**The result:** Found a clear pattern: disputes on orders with extra card verification were winnable, while one specific type of mobile order was almost never won. Also surfaced $964 in disputes that had never been answered, so none slip through again.

**Tools:** Claude, ChatGPT, Excel, payment processor reports

---

## 4. Inactive Employee Cleanup

**The problem:** The payroll provider bills a monthly fee for every active employee, paid or not. Stores weren't removing people who had left, so headcount and fees kept climbing.

**What I built:**
- Bulk import files that terminated inactive employees in one upload instead of one at a time, using the correct reason codes and date rules
- An ongoing flag in every payroll check so new inactive employees are caught right away

**The result:** Cleared 144 inactive employee records and brought per-employee fees back down, with a process that keeps the list clean going forward.

**Tools:** Claude, Paychex Flex imports, Excel

---

## 5. Benefits Deduction Import

**The problem:** After open enrollment, every employee's benefit deductions had to be keyed into the payroll system by hand, one plan at a time.

**What I built:**
- A converter that turns the benefits workbook into a ready-to-upload import file
- Built-in fixes for the system's quirks, like case-sensitive plan codes and separate files per company

**The result:** Deductions now go in with one upload per company instead of manual entry, and the steps are saved so the process can be repeated every enrollment.

**Tools:** Claude, Paychex Flex imports, Excel

---

## About this site

This repo is also my portfolio website, built with React, TypeScript and Tailwind CSS as part of my SheCodes coursework.

📧 sarahmartin024@gmail.com · 💼 [LinkedIn](https://www.linkedin.com/in/sarahmartin897)
