import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, []);

  return (
    <Particles 
      init={init}
      options={{
        background: {
            color: {
                value: "#342718",
            },
            opacity: 0,
        },
        fpsLimit: 120,
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "bubble",
                },
                onHover: {
                    enable: false,
                    mode: "bubble",
                    parallax: {
                      enable: false,
                      force: 60,
                      smooth: 10,
                    },
                },
                resize: {
                  enable: true,
                  delay: .5,
                }
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                bubble: {
                  distance: 100,
                  duration: 10,
                  opacity: .8,
                  size: 15,
                },
                trail: {
                  delay: 1,
                  quantity: 1,
                }
            },
        },
        particles: {
            color: {
                value: "#fde68a",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 0,
            },
            collisions: {
                enable: false,
            },
            move: {
              angle: {
                offset: 0,
                value: 25,
              },
                direction: "top",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 40,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: .1,
              },
                value: 0.5,
        
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: .5,
                opacity: 1
              }
            },
            wobble: {
              distance: 3,
              enable: true,
              speed: {
                angle: 50,
                move: 10,
              }
            }
        },
        detectRetina: true,
    }}
    />
  )
};

export default ParticlesComponent;
