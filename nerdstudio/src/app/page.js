// app/page.tsx (or app/page.js)
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard'); // Redirect to the default page
}
