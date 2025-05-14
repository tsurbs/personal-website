import AboutCard from "~/components/AboutCard";
import ProfileCard from "~/components/ProfileCard";
import ProjectCard from "~/components/ProjectCard";

import MapsLogo from 'public/maps.png';
import StravaLogo from 'public/strava.png';
import WikiLogo from 'public/wikipedia.svg';
import GitLogo from 'public/git.png';
import ExperienceCard from "~/components/ExperienceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Theo Urban',
  description: 'Theo Urban\'s personal website',
  keywords: ['Theo Urban', 'Theo', 'Urban', 'Computer Science', 'AI', 'Carnegie Mellon University'],
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.png',
        href: '/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon.png',
        href: '/icon-dark.png',
      },
    ],
  },
};

export default function HomePage() {
  

  return (
    <main className="relative top-16 overflow-y-scroll">
      <div className="grid grid-cols-6 justify-items-start gap-4 w-full pl-2 pr-2">
        <div className="top-16 z-0 col-span-6 lg:col-span-2"><ProfileCard /> </div>
        <div className="z-0 col-span-6 lg:col-span-4"><AboutCard /></div>
        <div className="z-0 col-span-6 lg:col-start-3 lg:col-span-4"><ExperienceCard /></div>
        <div className="z-0 col-span-6 lg:col-span-4 lg:col-start-3">
          <div className="grid grid-cols-2 gap-2">
            <ProjectCard title="CMUMaps" image={MapsLogo} link="https://cmumaps.com" description={<p>Indoor-outdoor mapping and navigation for the CMU campus, as well as room availability, events search.  I started working on this in Fall 2023 in ScottyLabs, and then recruited and lead an incredible team in Spring 2024.  Released in Summer 2024 with 2000 users!!</p>} />
            <ProjectCard title="StravaAnalysis" image={StravaLogo} link="https://github.com/tsurbs" description={<p>Prediction and Analysis of my Strava running data -- The background of this website is a model of me running around Pittsburgh. It is a great way to test techniques I learn, including route generation via next-token-prediction and NLP run type classification.</p>} />
            <ProjectCard title="WikiFinding" image={WikiLogo} link="https://github.com/tsurbs" description={<p>Scraped and created a graph of a subset of Wikipedia, which gave me the idea to try to beat the wikipedia game (ie. node-to-node pathfinding) using embeddings of the pages, not via content but just graph context (neighbors, neighbors of neighbors...) I had some success but intend to pick this back up soon.</p>} />
            <ProjectCard title="And More..." image={GitLogo} link="https://github.com/tsurbs" description={<p>My other projects include a Running EsoLang, starter code for ScottyLabs' Labrador Committee, a ScottyLabs Superapp, this website, and probably something new by the time you're reading this... check out my GitHub at <a className="text-blue-500" href="https://github.com/tsurbs">github.com/tsurbs</a> </p>} />
          </div>
        </div>
      </div>
    </main>
  );
}
