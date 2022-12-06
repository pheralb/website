export interface blogInterface {
  title: string;
  date: string;
  slug: string;
  description?: string;
}

export const blogData = [
  {
    title: "Supabase Auth with Remix & Typescript",
    description: "How to use Supabase Auth with Remix.",
    date: "06/12/2022",
    slug: "supabase-auth-remix",
  },
];
