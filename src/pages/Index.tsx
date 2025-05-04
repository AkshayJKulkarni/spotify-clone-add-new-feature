import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  // Discovery widget state
  const [discoverActive, setDiscoverActive] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Toggle Discover Widget
  const toggleDiscover = () => {
    setDiscoverActive(!discoverActive);
  };

  // Handle mood selection
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    updateRecommendations();
  };

  // Handle activity selection
  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity);
    updateRecommendations();
  };

  // Update recommendations
  const updateRecommendations = () => {
    setShowRecommendations(false);
    setTimeout(() => {
      setShowRecommendations(true);
    }, 100);
  };

  // Song database organized by mood and activity
  const songDatabase = {
    happy: {
      general: [
        {title: 'Happy', artist: 'Pharrell Williams', image: 'https://i.scdn.co/image/ab67616d00001e02e8107e6d9214baa81bb79bba'},
        {title: 'Walking on Sunshine', artist: 'Katrina & The Waves', image: 'https://i.scdn.co/image/ab67616d00001e027a39d08057a52acb5a7f857c'},
        {title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', image: 'https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de'},
      ],
      workout: [
        {title: 'Good as Hell', artist: 'Lizzo', image: 'https://i.scdn.co/image/ab67616d00001e024573401205623a5fa3428b80'},
        {title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', image: 'https://i.scdn.co/image/ab67616d00001e02e229393213a85d269f552878'},
      ],
      studying: [
        {title: 'Here Comes the Sun', artist: 'The Beatles', image: 'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'},
        {title: 'Lovely Day', artist: 'Bill Withers', image: 'https://i.scdn.co/image/ab67616d00001e02e4815d9e6fe2c47c5be1f359'},
      ],
      cooking: [
        {title: 'Juice', artist: 'Lizzo', image: 'https://i.scdn.co/image/ab67616d00001e024573401205623a5fa3428b80'},
        {title: "Don't Worry Be Happy", artist: 'Bobby McFerrin', image: 'https://i.scdn.co/image/ab67616d00001e02da5274a49917f44b4e2b69da'},
      ],
      party: [
        {title: 'Celebration', artist: 'Kool & The Gang', image: 'https://i.scdn.co/image/ab67616d00001e0203c517043707b0f2def24cae'},
        {title: 'Best Day Of My Life', artist: 'American Authors', image: 'https://i.scdn.co/image/ab67616d00001e02e8fc1664a647ba34e04c1895'},
      ]
    },
    sad: {
      general: [
        {title: 'Someone Like You', artist: 'Adele', image: 'https://i.scdn.co/image/ab67616d00001e0299611c614801b4706985cfc6'},
        {title: 'Fix You', artist: 'Coldplay', image: 'https://i.scdn.co/image/ab67616d00001e020cc10f246b7f26d5607eeb06'},
        {title: 'Skinny Love', artist: 'Bon Iver', image: 'https://i.scdn.co/image/ab67616d00001e0241f289434dd12cf631838c70'},
      ],
      workout: [
        {title: 'Hurt', artist: 'Johnny Cash', image: 'https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77932ee5'},
        {title: 'Heavy', artist: 'Linkin Park ft. Kiiara', image: 'https://i.scdn.co/image/ab67616d00001e02145e83a6f45f144966459c4c'},
      ],
      studying: [
        {title: 'Breathe Me', artist: 'Sia', image: 'https://i.scdn.co/image/ab67616d00001e027b9c4dca67dd29a36a05a85c'},
        {title: 'Moonlight Sonata', artist: 'Beethoven', image: 'https://i.scdn.co/image/ab67616d00001e0207f719b9f6a62cfec7e5f894'},
      ],
      cooking: [
        {title: 'Back to Black', artist: 'Amy Winehouse', image: 'https://i.scdn.co/image/ab67616d00001e02da401c6225e8fd7ddb618dbf'},
        {title: 'Nothing Compares 2 U', artist: 'Sinéad O\'Connor', image: 'https://i.scdn.co/image/ab67616d00001e02be0f25c61c750cf775b48b2b'},
      ],
      party: [
        {title: "Everybody Hurts", artist: 'R.E.M.', image: 'https://i.scdn.co/image/ab67616d00001e02f054d3fcf14c907d05fe2f91'},
        {title: 'Mr. Brightside', artist: 'The Killers', image: 'https://i.scdn.co/image/ab67616d00001e0201134ddcbf00d9af57742b37'},
      ]
    },
    energetic: {
      general: [
        {title: 'Thunderstruck', artist: 'AC/DC', image: 'https://i.scdn.co/image/ab67616d00001e02cef1fd5317cf6db361289f60'},
        {title: "Can't Hold Us", artist: 'Macklemore & Ryan Lewis', image: 'https://i.scdn.co/image/ab67616d00001e029b19c107109de740bad72df5'},
        {title: 'Eye of the Tiger', artist: 'Survivor', image: 'https://i.scdn.co/image/ab67616d00001e0252c96f47783af12025ac3447'},
      ],
      workout: [
        {title: 'Stronger', artist: 'Kanye West', image: 'https://i.scdn.co/image/ab67616d00001e02f7577e78857f970f5ea4ab3d'},
        {title: 'Till I Collapse', artist: 'Eminem', image: 'https://i.scdn.co/image/ab67616d00001e02e3f51f31dc7cffa6c8cc515f'},
      ],
      studying: [
        {title: 'Symphony No. 5', artist: 'Beethoven', image: 'https://i.scdn.co/image/ab67616d00001e0207f719b9f6a62cfec7e5f894'},
        {title: 'Flight of the Bumblebee', artist: 'Rimsky-Korsakov', image: 'https://i.scdn.co/image/ab67616d00001e0219c9b7bc7dd0edacea4adc93'},
      ],
      cooking: [
        {title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856'},
        {title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', image: 'https://i.scdn.co/image/ab67616d00001e02e229393213a85d269f552878'},
      ],
      party: [
        {title: 'Turn Down for What', artist: 'DJ Snake, Lil Jon', image: 'https://i.scdn.co/image/ab67616d00001e0214de4b512ec7324eb08169a8'},
        {title: 'Levels', artist: 'Avicii', image: 'https://i.scdn.co/image/ab67616d00001e02069c1f87ee77ef7baffe8067'},
      ]
    },
    chill: {
      general: [
        {title: 'Sweater Weather', artist: 'The Neighbourhood', image: 'https://i.scdn.co/image/ab67616d00001e023059a9fdd0fa49b220cba2e3'},
        {title: 'Banana Pancakes', artist: 'Jack Johnson', image: 'https://i.scdn.co/image/ab67616d00001e02835a6488d9ce230167ae2cef'},
        {title: 'Sunday Morning', artist: 'Maroon 5', image: 'https://i.scdn.co/image/ab67616d00001e0290a47e95ecdcf1fba9efe2de'},
      ],
      workout: [
        {title: 'Yellow', artist: 'Coldplay', image: 'https://i.scdn.co/image/ab67616d00001e02de09dc6c2d8d312cb256769b'},
        {title: 'Better Together', artist: 'Jack Johnson', image: 'https://i.scdn.co/image/ab67616d00001e02835a6488d9ce230167ae2cef'},
      ],
      studying: [
        {title: 'Clair de Lune', artist: 'Debussy', image: 'https://i.scdn.co/image/ab67616d00001e0200664224999aa7bb9aae9c2b'},
        {title: 'Coffee', artist: 'Beabadoobee', image: 'https://i.scdn.co/image/ab67616d00001e02ad500e4998a08e59589d92f8'},
      ],
      cooking: [
        {title: 'Sunday Morning', artist: 'Maroon 5', image: 'https://i.scdn.co/image/ab67616d00001e0290a47e95ecdcf1fba9efe2de'},
        {title: 'Three Little Birds', artist: 'Bob Marley', image: 'https://i.scdn.co/image/ab67616d00001e029c893175181f7f9c6222795f'},
      ],
      party: [
        {title: 'Redbone', artist: 'Childish Gambino', image: 'https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce'},
        {title: 'The Less I Know The Better', artist: 'Tame Impala', image: 'https://i.scdn.co/image/ab67616d00001e02597f9c2ec2f8ec5c522c7c1c'},
      ]
    },
    focused: {
      general: [
        {title: 'Brain Power', artist: 'Lo-Fi Study Music', image: 'https://i.scdn.co/image/ab67616d00001e02c93bc6be1c030334f10fabcd'},
        {title: 'Spring 1', artist: 'Max Richter', image: 'https://i.scdn.co/image/ab67616d00001e02a54f1f36e79396c7d14546fe'},
        {title: 'Experience', artist: 'Ludovico Einaudi', image: 'https://i.scdn.co/image/ab67616d00001e02094833b4b838aa0aee039bb9'},
      ],
      workout: [
        {title: 'The Scientist', artist: 'Coldplay', image: 'https://i.scdn.co/image/ab67616d00001e0290a47e95ecdcf1fba9efe2de'},
        {title: 'Gymnopédie No. 1', artist: 'Erik Satie', image: 'https://i.scdn.co/image/ab67616d00001e022f7825848cc74cb9bcdb8524'},
      ],
      studying: [
        {title: 'Gymnopédie No. 1', artist: 'Erik Satie', image: 'https://i.scdn.co/image/ab67616d00001e022f7825848cc74cb9bcdb8524'},
        {title: 'Moonlight Sonata', artist: 'Beethoven', image: 'https://i.scdn.co/image/ab67616d00001e0207f719b9f6a62cfec7e5f894'},
      ],
      cooking: [
        {title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', image: 'https://i.scdn.co/image/ab67616d00001e02094833b4b838aa0aee039bb9'},
        {title: 'River Flows In You', artist: 'Yiruma', image: 'https://i.scdn.co/image/ab67616d00001e02e0afe806e1273436135fed60'},
      ],
      party: [
        {title: 'Space Oddity', artist: 'David Bowie', image: 'https://i.scdn.co/image/ab67616d00001e02c41f4e1133f0e6fba6c73fac'},
        {title: 'Comfortably Numb', artist: 'Pink Floyd', image: 'https://i.scdn.co/image/ab67616d00001e02bbd3cbf49d96c72fc75a70f7'},
      ]
    },
    romantic: {
      general: [
        {title: 'All of Me', artist: 'John Legend', image: 'https://i.scdn.co/image/ab67616d00001e02033aaccb4a7f0efa55b5e93f'},
        {title: 'Perfect', artist: 'Ed Sheeran', image: 'https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96'},
        {title: 'At Last', artist: 'Etta James', image: 'https://i.scdn.co/image/ab67616d00001e02662b53c1e7621493ad3f3e6b'},
      ],
      workout: [
        {title: 'Can\'t Help Falling In Love', artist: 'Elvis Presley', image: 'https://i.scdn.co/image/ab67616d00001e022dfa7b9b5d28d4cd3476a669'},
        {title: 'Make You Feel My Love', artist: 'Adele', image: 'https://i.scdn.co/image/ab67616d00001e0299611c614801b4706985cfc6'},
      ],
      studying: [
        {title: 'La Vie en Rose', artist: 'Louis Armstrong', image: 'https://i.scdn.co/image/ab67616d00001e02f3ec7693f4567df866806992'},
        {title: 'Clair de Lune', artist: 'Debussy', image: 'https://i.scdn.co/image/ab67616d00001e0200664224999aa7bb9aae9c2b'},
      ],
      cooking: [
        {title: 'The Way You Look Tonight', artist: 'Frank Sinatra', image: 'https://i.scdn.co/image/ab67616d00001e02bd572f2e77983bc0989f0923'},
        {title: 'Dream a Little Dream of Me', artist: 'Ella Fitzgerald', image: 'https://i.scdn.co/image/ab67616d00001e0200e4aa1cafa624cef2244467'},
      ],
      party: [
        {title: 'Love On Top', artist: 'Beyoncé', image: 'https://i.scdn.co/image/ab67616d00001e027e1fea351cecc027afcaa5b0'},
        {title: 'Crazy In Love', artist: 'Beyoncé ft. Jay-Z', image: 'https://i.scdn.co/image/ab67616d00001e027e1fea351cecc027afcaa5b0'},
      ]
    }
  };

  // Get recommendations based on selections
  const getRecommendations = () => {
    if (!selectedMood) return [];
    
    if (selectedActivity && songDatabase[selectedMood as keyof typeof songDatabase][selectedActivity as keyof (typeof songDatabase)[keyof typeof songDatabase]]) {
      return songDatabase[selectedMood as keyof typeof songDatabase][selectedActivity as keyof (typeof songDatabase)[keyof typeof songDatabase]];
    }
    
    return songDatabase[selectedMood as keyof typeof songDatabase].general;
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1ED760] to-[#121212] pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl relative z-10">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white mb-6">Music for everyone.</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Millions of songs. No credit card needed.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#1ED760] text-black hover:bg-[#1FDF64] hover:scale-105 transition-transform font-bold text-base py-6 px-8 rounded-full">
                GET SPOTIFY FREE
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform font-bold text-base py-6 px-8 rounded-full">
                DOWNLOAD
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10">Featured Playlists</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Playlist 1 */}
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
              <div className="relative mb-4">
                <img 
                  src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" 
                  alt="Playlist" 
                  className="w-full aspect-square object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ED760] text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  ▶
                </button>
              </div>
              <h3 className="font-bold text-white mb-1 truncate">Today's Top Hits</h3>
              <p className="text-sm text-[#A7A7A7] line-clamp-2">Jung Kook is on top of the Hottest 50!</p>
            </div>
            
            {/* Playlist 2 */}
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
              <div className="relative mb-4">
                <img 
                  src="https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1" 
                  alt="Playlist" 
                  className="w-full aspect-square object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ED760] text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  ▶
                </button>
              </div>
              <h3 className="font-bold text-white mb-1 truncate">RapCaviar</h3>
              <p className="text-sm text-[#A7A7A7] line-clamp-2">New music from Drake, Kendrick Lamar and more.</p>
            </div>
            
            {/* Playlist 3 */}
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
              <div className="relative mb-4">
                <img 
                  src="https://i.scdn.co/image/ab67706f00000002b75d182ee09a8137a7caac39" 
                  alt="Playlist" 
                  className="w-full aspect-square object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ED760] text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  ▶
                </button>
              </div>
              <h3 className="font-bold text-white mb-1 truncate">All Out 2010s</h3>
              <p className="text-sm text-[#A7A7A7] line-clamp-2">The biggest songs of the 2010s.</p>
            </div>
            
            {/* Playlist 4 */}
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
              <div className="relative mb-4">
                <img 
                  src="https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5" 
                  alt="Playlist" 
                  className="w-full aspect-square object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ED760] text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  ▶
                </button>
              </div>
              <h3 className="font-bold text-white mb-1 truncate">Rock Classics</h3>
              <p className="text-sm text-[#A7A7A7] line-clamp-2">Rock legends & epic songs that continue to inspire generations.</p>
            </div>
            
            {/* Playlist 5 */}
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
              <div className="relative mb-4">
                <img 
                  src="https://i.scdn.co/image/ab67706f000000026013e55f0494fe5b8e31951b" 
                  alt="Playlist" 
                  className="w-full aspect-square object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ED760] text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  ▶
                </button>
              </div>
              <h3 className="font-bold text-white mb-1 truncate">Chill Hits</h3>
              <p className="text-sm text-[#A7A7A7] line-clamp-2">Kick back to the best new and recent chill hits.</p>
            </div>
            
            {/* Playlist 6 */}
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
              <div className="relative mb-4">
                <img 
                  src="https://i.scdn.co/image/ab67706f00000002ad9ff8af87e8ea815f2ff25c" 
                  alt="Playlist" 
                  className="w-full aspect-square object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ED760] text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  ▶
                </button>
              </div>
              <h3 className="font-bold text-white mb-1 truncate">Mood Booster</h3>
              <p className="text-sm text-[#A7A7A7] line-clamp-2">Feel good with this positively charged playlist!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-16 bg-[#EFEFEF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">Get Premium free for 1 month</h2>
              
              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1ED760] rounded-full flex items-center justify-center mr-4 text-black">✓</div>
                  <div className="text-black">Ad-free music listening</div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1ED760] rounded-full flex items-center justify-center mr-4 text-black">✓</div>
                  <div className="text-black">Download to listen offline</div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1ED760] rounded-full flex items-center justify-center mr-4 text-black">✓</div>
                  <div className="text-black">Play songs in any order</div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1ED760] rounded-full flex items-center justify-center mr-4 text-black">✓</div>
                  <div className="text-black">Higher sound quality</div>
                </div>
              </div>
              
              <Button className="bg-[#1ED760] text-black hover:bg-[#1FDF64] hover:scale-105 transition-transform font-bold text-base py-6 px-8 rounded-full">
                GET PREMIUM
              </Button>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://i.scdn.co/image/ab678e040000ed3adcd801f861614ad2182a1ad7" 
                alt="Premium" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-2">
              <svg viewBox="0 0 63 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet" width="132" height="40" className="text-white mb-6">
                <g fillRule="evenodd" fill="currentColor">
                  <path d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024
