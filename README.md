# VoterVani AI 🗳️

VoterVani AI is a production-ready, smart, and interactive Election Process Education Assistant focused on the Indian Lok Sabha and State Assembly elections. It aims to empower citizens by reducing voter confusion and encouraging informed participation through personalized guidance and AI-driven intelligence.

## 🌟 Key Features

- **Onboarding Wizard**: A personalized multi-step journey that collects user demographics and voter status to tailor the educational experience.
- **Smart Branching Logic**: Custom content paths for:
  - **Future Voters (Under 18)**: Educational preparation and registration timelines.
  - **Unregistered Citizens**: Step-by-step registration guides (Form 6) and official links.
  - **Registered Voters**: Polling day preparation, checklist management, and booth finders.
- **Interactive Election Timeline**: A visual 9-phase breakdown of the Indian election process (Announcement to Results).
- **Gemini-Powered Chat Assistant**: A non-partisan, neutral conversational agent built on Google Gemini 1.5 Flash to answer electoral queries. Supports **Markdown formatting** for clear, structured responses.
- **Educational Checklist**: Dynamic "My Election Checklist" with an option to **export as PDF** for offline use.
- **Knowledge Quiz**: Interactive MCQ module with 10 questions to test and improve electoral literacy.
- **Polling Day Helper**: Approximate polling booth locator using Google Maps integration and essential "Do's and Don'ts".

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Mobile-first, Tricolor Accents: Saffron #FF9933, Green #138808)
- **AI Intelligence**: [Google Gemini 1.5 Flash](https://ai.google.dev/) (via `@google/generative-ai`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
- **Maps**: Google Maps Embed API

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google AI Studio API Key (Gemini)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root and add your Gemini API Key:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Approach & Logic

VoterVani AI uses a **context-aware branching engine**. Based on the initial onboarding data:
1. **Age Check**: Users under 18 are routed to the "Future Voter" module.
2. **Registration Check**: Users who aren't registered receive a high-priority "Registration Path" focusing on Form 6 and NVSP portal guidance.
3. **Task Automation**: The "My Checklist" and "Polling Helper" components dynamically adjust based on the user's election type (Lok Sabha vs. State Assembly).

## ⚠️ Assumptions & Limitations
- **Educational Focus**: This is a tool for education and guidance; it does not perform real-time voter registration or show live election results.
- **Public Data**: Process information is based on publicly available ECI guidelines as of 2024-2025.
- **Official Verification**: Users are always encouraged to verify final dates and booth locations on the official [voters.eci.gov.in](https://voters.eci.gov.in) portal.
- **Maps**: The polling helper provides approximate locations based on pincode search.

---
*Developed for the Election Commission of India educational awareness initiative (Mock Project).*
