// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://dxchpfadyhdbuapkwcxh.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y2hwZmFkeWhkYnVhcGt3Y3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MDUwNDcsImV4cCI6MjA4Mzk4MTA0N30.xJ-aWa8BKGvtbys7uj_t6x5pYahk6dUGSwbvDlzGTFY',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'https://your-stash-app.vercel.app', // Will update after Vercel deployment

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: 'a3ec77dd-5572-4825-8fcb-3d4464e61d15',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
