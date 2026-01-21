# Trip Info App

A travel itinerary dashboard for multi-day trips. This app presents each day with a structured timeline, highlights, transportation details, accommodations, meals, and reference links. The experience is designed to make planning and day-by-day execution easy to scan and update.

## Key Features

- Day-by-day itinerary with time blocks and activity types
- Transportation segments with durations and map links
- Lodging, meals, and notes per day
- Optional attractions and alternate routes
- Cost notes and fee reminders where applicable
- i18n support (e.g. zh-TW and en)

## Data Source

The itinerary data lives in `constants.ts` and is rendered by the itinerary components under `components/`.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (if needed)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` if your repository name changes
2. Optional: override the base path by setting `VITE_BASE_PATH` environment variable before building
3. Deploy:
   ```bash
   npm run deploy
   ```

The app will be available at the URL specified in `package.json`'s `homepage` field.
