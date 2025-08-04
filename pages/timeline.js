import Head from 'next/head';
import TimelineEvent from '../components/TimelineEvent';

const timelineData = [
  { id: 1, title: 'Birth of Naruto & Nine-Tails Attack', description: 'The Nine-Tailed Fox attacks Konoha. Minato Namikaze, the Fourth Hokage, seals the beast inside his newborn son, Naruto Uzumaki.' },
  { id: 2, title: 'Team 7 Formation', description: 'Naruto, Sasuke, and Sakura form Team 7 under the leadership of Kakashi Hatake.' },
  { id: 3, title: 'Chunin Exams', description: 'The allied shinobi villages host the Chunin Exams, which are disrupted by an invasion led by Orochimaru.' },
  { id: 4, title: 'Sasuke Leaves the Village', description: 'Seeking power to defeat his brother Itachi, Sasuke defects from Konoha to join Orochimaru.' },
  { id: 5, title: 'Jiraiya\'s Training', description: 'Naruto leaves the village for two and a half years to train with the legendary Sannin, Jiraiya.' },
  { id: 6, title: 'The Akatsuki\'s Rise', description: 'The criminal organization Akatsuki begins its hunt for the tailed beasts, leading to numerous conflicts.' },
  { id: 7, title: 'Pain\'s Assault', description: 'The leader of the Akatsuki, Pain, attacks and destroys Konoha. Naruto returns to defeat him and becomes the village hero.' },
  { id: 8, title: 'Fourth Great Ninja War', description: 'The allied shinobi forces unite to fight against Tobi, Kabuto, and the reanimated army in the final great war.' },
];

export default function Timeline() {
  return (
    <div>
      <Head>
        <title>Ninja History | Path of the Ninja</title>
      </Head>
      <h1 className="text-5xl text-center text-naruto-orange mb-12">Ninja History</h1>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-parchment-white shadow-md inset-0 top-0 left-1/2 -ml-1"></div>
        {timelineData.map((event, index) => (
          <TimelineEvent key={event.id} event={event} side={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  );
}