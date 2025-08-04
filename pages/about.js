import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>The World of Naruto | Path of the Ninja</title>
      </Head>
      <h1 className="text-5xl text-center text-naruto-orange mb-8">The World of Naruto</h1>
      
      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
        <p>
          The world of Naruto is a rich tapestry of warring states, hidden villages, and powerful ninja clans. At its core, it's a world where shinobi wield extraordinary abilities derived from an energy source known as <strong>chakra</strong>. This energy, a mixture of physical and spiritual energy, allows them to perform feats far beyond the capabilities of ordinary humans.
        </p>

        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-3xl text-chakra-blue mb-4">Chakra and Jutsu</h2>
          <p>
            By molding chakra through hand seals, ninja can perform a wide variety of techniques, or <strong>jutsu</strong>. These are broadly categorized into three types:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Ninjutsu:</strong> The most common form, involving elemental manipulation (Fire, Water, Earth, Wind, Lightning), summoning creatures, and transforming one's body.</li>
            <li><strong>Genjutsu:</strong> Techniques that target the victim's mind, creating powerful and realistic illusions.</li>
            <li><strong>Taijutsu:</strong> Hand-to-hand combat, relying on raw speed, strength, and martial arts prowess without the need for chakra molding.</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-3xl text-chakra-blue mb-4">The Five Great Shinobi Nations</h2>
          <p>
            The political landscape is dominated by the Five Great Shinobi Nations, each with its own "Hidden Village" led by a Kage, the strongest ninja in the village.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Land of Fire:</strong> Konohagakure (Hidden Leaf Village)</li>
            <li><strong>Land of Wind:</strong> Sunagakure (Hidden Sand Village)</li>
            <li><strong>Land of Water:</strong> Kirigakure (Hidden Mist Village)</li>
            <li><strong>Land of Earth:</strong> Iwagakure (Hidden Stone Village)</li>
            <li><strong>Land of Lightning:</strong> Kumogakure (Hidden Cloud Village)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}