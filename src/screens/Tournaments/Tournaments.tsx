import React from "react";
import { ArrowLeftIcon, CalendarIcon, TrophyIcon, UsersIcon, StarIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Avatar, AvatarImage } from "../../components/ui/avatar";

export const Tournaments = (): JSX.Element => {
  // Tournament data
  const tournaments = [
    {
      id: 1,
      title: "Northern Clash Qualifiers",
      game: "League of Legends",
      date: "January 25",
      participants: "128/128",
      prize: "10,000 RP",
      status: "Live",
      image: "/tournament-1.png",
      logo: "/lol-logo-white.png"
    },
    {
      id: 2,
      title: "Valorant Champions Series",
      game: "Valorant",
      date: "February 1",
      participants: "64/128",
      prize: "5,000 VP",
      status: "Open",
      image: "/tournament-2.png",
      logo: "/valorant-logo-white.png"
    },
    {
      id: 3,
      title: "Playground Season 2 Finals",
      game: "Multi-Game",
      date: "February 15",
      participants: "32/64",
      prize: "15,000 Points",
      status: "Open",
      image: "/tournament-3.png",
      logo: "/playground-logo-white.png"
    }
  ];

  // Featured tournament
  const featuredTournament = {
    title: "Northern Clash Qualifiers",
    description: "Show your skills on Summoner's Rift. Gather your team, face the best players in your region, and win exclusive prizes like unique skins and 10,000 Riot Points.",
    date: "January 25",
    participants: "128/128",
    prize: "10,000 RP + Exclusive Skins",
    status: "Live",
    image: "/featured-tournament.png",
    logo: "/lol-logo-white.png"
  };

  // Top players data
  const topPlayers = [
    { rank: 1, name: "DragonSlayer", points: 15420, avatar: "/player-1.png" },
    { rank: 2, name: "ShadowHunter", points: 14890, avatar: "/player-2.png" },
    { rank: 3, name: "StormBreaker", points: 14250, avatar: "/player-3.png" },
    { rank: 4, name: "FireMage", points: 13680, avatar: "/player-4.png" },
    { rank: 5, name: "IceQueen", points: 13120, avatar: "/player-5.png" }
  ];

  return (
    <div className="flex flex-col items-center px-0 py-6 relative bg-[#18122B] min-h-screen">
      <div className="absolute w-[845px] h-[845px] top-6 left-[296px] bg-[#4a8fe7] rounded-[422.5px] blur-[60px] opacity-15" />

      {/* Header */}
      <header className="flex items-center justify-between px-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-transparent mb-8">
        <Button variant="ghost" size="icon" className="relative w-11 h-11 p-0">
          <ArrowLeftIcon className="w-6 h-6" />
        </Button>

        <div className="relative w-[196px] h-16 flex items-center justify-center">
          <img
            className="h-16 w-auto object-contain"
            alt="Logo"
            src="/Logo.png"
          />
        </div>

        <div className="relative w-[47px] h-11">
          <div className="relative h-[45px]">
            <Avatar className="absolute w-10 h-10 top-0.5 left-[7px]">
              <AvatarImage src="/ellipse-6.png" alt="User profile" />
            </Avatar>
            <img
              className="absolute w-[39px] h-[45px] top-0 left-1"
              alt="Ellipse"
              src="/ellipse-7.svg"
            />
            <img
              className="absolute w-4 h-[17px] top-[26px] left-0"
              alt="Level"
              src="/level.svg"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-8 px-20 w-full max-w-[1440px]">
        {/* Page Title */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-white text-[48px] tracking-[-0.48px] leading-[57.6px] font-['Red_Hat_Display',Helvetica]">
            Tournaments
          </h1>
        </div>

        {/* Featured Tournament */}
        <Card className="w-full rounded-3xl overflow-hidden border border-solid border-[#4a8fe780] bg-[#0e0e1b80] backdrop-blur-[2px]">
          <div className="flex">
            <CardContent className="flex-1 p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-medium text-sm">LIVE NOW</span>
              </div>
              
              <h2 className="font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px] mb-4 font-['Red_Hat_Display',Helvetica]">
                {featuredTournament.title}
              </h2>
              
              <p className="text-[#c7c4d4] text-base leading-[24px] mb-6 font-['Red_Hat_Text',Helvetica]">
                {featuredTournament.description}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-[#4a8fe7]" />
                  <span className="text-[#c7c4d4] text-sm">{featuredTournament.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-[#4a8fe7]" />
                  <span className="text-[#c7c4d4] text-sm">{featuredTournament.participants}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrophyIcon className="w-5 h-5 text-[#feb07f]" />
                  <span className="text-[#feb07f] text-sm font-medium">{featuredTournament.prize}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-12 object-contain"
                  alt="Game Logo"
                  src={featuredTournament.logo}
                />
                <Button className="flex gap-2 px-8 py-3 bg-[#4a8fe7] hover:bg-[#3a7fd7] text-white rounded-[40px] font-medium">
                  <TrophyIcon className="w-5 h-5" />
                  Watch Live
                </Button>
              </div>
            </CardContent>

            <div 
              className="w-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${featuredTournament.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0e0e1b80]"></div>
            </div>
          </div>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-[#0e0e1b80] border border-[#4a8fe740] rounded-2xl p-1 mb-8">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-[#4a8fe7] data-[state=active]:text-white text-[#c7c4d4] rounded-xl px-6 py-2"
            >
              All Tournaments
            </TabsTrigger>
            <TabsTrigger 
              value="live" 
              className="data-[state=active]:bg-[#4a8fe7] data-[state=active]:text-white text-[#c7c4d4] rounded-xl px-6 py-2"
            >
              Live
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="data-[state=active]:bg-[#4a8fe7] data-[state=active]:text-white text-[#c7c4d4] rounded-xl px-6 py-2"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              className="data-[state=active]:bg-[#4a8fe7] data-[state=active]:text-white text-[#c7c4d4] rounded-xl px-6 py-2"
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-8">
            {/* Tournament List */}
            <div className="flex-1">
              <TabsContent value="all" className="space-y-4">
                {tournaments.map((tournament) => (
                  <Card key={tournament.id} className="bg-[#0e0e1b80] border border-[#4a8fe740] rounded-2xl overflow-hidden backdrop-blur-[2px]">
                    <div className="flex">
                      <div 
                        className="w-[200px] h-[140px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${tournament.image})` }}
                      ></div>
                      
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                tournament.status === 'Live' 
                                  ? 'bg-red-500/20 text-red-400' 
                                  : 'bg-green-500/20 text-green-400'
                              }`}>
                                {tournament.status}
                              </span>
                              <span className="text-[#c7c4d4] text-sm">{tournament.game}</span>
                            </div>
                            <h3 className="font-bold text-white text-xl mb-2 font-['Red_Hat_Display',Helvetica]">
                              {tournament.title}
                            </h3>
                          </div>
                          <img
                            className="w-16 h-8 object-contain"
                            alt="Game Logo"
                            src={tournament.logo}
                          />
                        </div>

                        <div className="flex items-center gap-6 mb-4">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-[#4a8fe7]" />
                            <span className="text-[#c7c4d4] text-sm">{tournament.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="w-4 h-4 text-[#4a8fe7]" />
                            <span className="text-[#c7c4d4] text-sm">{tournament.participants}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrophyIcon className="w-4 h-4 text-[#feb07f]" />
                            <span className="text-[#feb07f] text-sm font-medium">{tournament.prize}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <StarIcon className="w-5 h-5 text-[#feb07f]" />
                            <span className="text-white font-medium">+1,000 Points</span>
                          </div>
                          <Button className="px-6 py-2 bg-[#4a8fe726] border border-[#4a8fe7] text-[#4a8fe7] rounded-[40px] hover:bg-[#4a8fe7] hover:text-white transition-colors">
                            {tournament.status === 'Live' ? 'Watch' : 'Join'}
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="live">
                <Card className="bg-[#0e0e1b80] border border-[#4a8fe740] rounded-2xl p-8 text-center">
                  <h3 className="text-white text-xl font-bold mb-2">Live Tournaments</h3>
                  <p className="text-[#c7c4d4]">Currently showing live tournaments only</p>
                </Card>
              </TabsContent>

              <TabsContent value="upcoming">
                <Card className="bg-[#0e0e1b80] border border-[#4a8fe740] rounded-2xl p-8 text-center">
                  <h3 className="text-white text-xl font-bold mb-2">Upcoming Tournaments</h3>
                  <p className="text-[#c7c4d4]">Tournaments starting soon</p>
                </Card>
              </TabsContent>

              <TabsContent value="completed">
                <Card className="bg-[#0e0e1b80] border border-[#4a8fe740] rounded-2xl p-8 text-center">
                  <h3 className="text-white text-xl font-bold mb-2">Completed Tournaments</h3>
                  <p className="text-[#c7c4d4]">View past tournament results</p>
                </Card>
              </TabsContent>
            </div>

            {/* Leaderboard Sidebar */}
            <div className="w-[350px]">
              <Card className="bg-[#0e0e1b80] border border-[#4a8fe740] rounded-2xl backdrop-blur-[2px]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white text-xl mb-6 font-['Red_Hat_Display',Helvetica]">
                    Top Players
                  </h3>
                  
                  <div className="space-y-4">
                    {topPlayers.map((player) => (
                      <div key={player.rank} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          player.rank === 1 ? 'bg-[#feb07f] text-black' :
                          player.rank === 2 ? 'bg-[#c7c4d4] text-black' :
                          player.rank === 3 ? 'bg-[#cd7f32] text-white' :
                          'bg-[#4a8fe7] text-white'
                        }`}>
                          {player.rank}
                        </div>
                        
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={player.avatar} alt={player.name} />
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">{player.name}</div>
                          <div className="text-[#c7c4d4] text-xs">{player.points.toLocaleString()} pts</div>
                        </div>
                        
                        {player.rank <= 3 && (
                          <TrophyIcon className={`w-5 h-5 ${
                            player.rank === 1 ? 'text-[#feb07f]' :
                            player.rank === 2 ? 'text-[#c7c4d4]' :
                            'text-[#cd7f32]'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-[#4a8fe726] border border-[#4a8fe7] text-[#4a8fe7] rounded-[40px] hover:bg-[#4a8fe7] hover:text-white transition-colors">
                    View Full Leaderboard
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};