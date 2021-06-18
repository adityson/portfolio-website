import { NextApiRequest, NextApiResponse } from "next";

export interface repoType {
  id: string;
  name: string;
  html_url: string;
  pushed_at: string;
  language: string;
  fork: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userRes = await fetch(`https://api.github.com/users/adityson`);
  const user = await userRes.json();

  const userRepoRes = await fetch(
    `https://api.github.com/users/adityson/repos`
  );
  const repoAll = await userRepoRes.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  const reposSend = repoAll.filter((repo: any) => !repo.fork)
                    .map(({
                        id, name, html_url, pushed_at, language
                    }: repoType) => ({
                        id, name, html_url, pushed_at, language
                    }));

  return res.status(200).json({ repos: reposSend });
}
