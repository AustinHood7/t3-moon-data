import Head from "next/head";
import { api } from "~/utils/api";
import Image from "next/image";

export default function Home() {

  const moonData = api.example.getMoonData.useQuery();

  const phaseName = moonData.data && moonData.data.phaseName 
  ? moonData.data.phaseName.replace(' ', '_').toLowerCase() 
  : '';

  return (
    <>            
      <Head>
        <title>TRPC Moons</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-indigo-900 to-stone-900">
        <div className="container flex flex-col items-center gap-12 px-4 sm:px-0 py-16 ">
          {moonData.isLoading ? (
            <div className="text-xl text-white">Loading Moon Data...</div>
          ) : (
            <div className="flex flex-col items-center text-center pt-6 px-4 sm:px-0">
              <h1 className="text-5xl text-slate-100 ">{moonData.data?.phaseName}</h1>
              <div className="flex flex-col sm:flex-row items-center justify-evenly gap-20 pt-10">
                <div className="text-2xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20">
                  <h2 className="font-bold"> {moonData.data?.dateTime}</h2> 
                </div>
                <Image 
                  src={`/${phaseName}.png`}
                  alt=''
                  width={300}
                  height={300}
                />
                <div className="text-2xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20 mb-16 md:mb-0">
                  <h2 className="font-bold ">US East</h2> 
                </div>
              </div>
              <div className="flex sm:flex-row w-full gap-10 md:w-[55vw] items-center justify-evenly">
                <div className="md:flex gap-10 justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20" >
                      <h2 className=""><h1 className="text-xl font-bold pb-2">Phase Angle </h1> {moonData.data?.phaseAngle}</h2> 
                    </div>
                      <div className="text-xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20 mb-16 md:mb-0 transition duration-500"  id="dropdown">
                        <div className="h-[25vh] overflow-scroll">
                          The moon phase angle, often referred to as the "elongation", is the angle between the moon and the sun as viewed from Earth. 
                          It's a way to quantify the phases of the moon. It essentially measures how much of the moon's face is illuminated by the sun from the perspective 
                          of an observer on Earth.Astronomers and astrophotographers often use the moon phase angle to plan observations and photographs. 
                          It can also be of interest to anyone observing the moon, as the moon's appearance can change dramatically depending on the phase angle.
                        </div> 
                      </div> 
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20" >
                      <h2 className=""><h1 className="text-xl font-bold pb-2">Phase Age </h1> {moonData.data?.phaseAge}</h2> 
                    </div>
                      <div className="text-xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20 mb-16 md:mb-0" id="dropdown">
                        <div className="h-[25vh] overflow-scroll">
                          The Moon phase age is the number of days since the last New Moon. It indicates the Moon's progress in its cycle and ranges between 0 to approximately 
                          29.5 days. The New Moon phase occurs when the Moon is positioned between the Earth and the Sun, making it almost invisible to us here on Earth.The Moon 
                          phase age can be used for a variety of purposes. For example, astronomers, astrophotographers, and stargazers use it to track the Moon's phases and plan 
                          observations or photography sessions. The Moon phase age also plays a role in various cultural and religious practices and events that are based on the lunar 
                          calendar.It's also worth mentioning that the phase age can help in understanding tidal activity since the gravitational pull that causes tides is strongest 
                          when the Moon is at the New Moon or Full Moon phase, leading to higher than normal tides known as spring tides. During the First Quarter and Last Quarter phases,
                          the pull is weaker, resulting in lower than average tides known as neap tides.
                        </div> 
                      </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20" >
                      <h2 className=""><h1 className="text-xl font-bold pb-2">Phase </h1> {moonData.data?.phase}</h2> 
                    </div>
                    <div className="text-xl text-white p-4 rounded-xl bg-white/10 hover:bg-white/20"  id="dropdown">

                      <div className="h-[25vh] overflow-scroll">
                        This is a normalized measure of the lunar cycle, where the New Moon is 0, First Quarter is 0.25, Full Moon is 0.5, and Last Quarter is 0.75. 
                        The value wraps back to 0 after reaching 1. The value of the phase indicates the Moon's position in its orbit around the Earth. This is a continuous 
                        measure, unlike the phase name which describes discrete segments of the lunar cycle New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, 
                        Waning Gibbous, Last Quarter, Waning Crescent.
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
