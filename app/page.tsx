"use client";

import { Icon } from "@iconify/react";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import logo from "../public/logo.svg";

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center -mt-8">
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            alt="CSX Labs"
            className="h-12 w-auto invert dark:invert-0"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg text-black dark:text-neutral-300">a for-profit research institution</h1>
        </div>
        {showArrow && (
          <button 
            onClick={handleScrollDown}
            className="absolute bottom-8 animate-bounce opacity-50 hover:opacity-100 transition-all"
            aria-label="Scroll down"
          >
            <Icon icon="ph:caret-down-thin" className="w-8 h-8" />
          </button>
        )}
      </div>
      <div className="p-4 text-sm flex flex-col gap-24">
        <Section>
          <h2 className="text-lg font-medium mb-6 text-black dark:text-neutral-100">Model</h2>
          <div className="text-base leading-7">
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Research to Market</strong>
              </div>
              <LinkPreview 
                imageSrc="/site-thumbnails/google-docs.avif"
                isStatic={true}
                url="https://docs.google.com/document/d/1bPdp7qnl5W4JDvfUu2DJ5r8kizlN-MF9UsgO-y49qzQ/edit?usp=sharing"
              >
                Amelia
              </LinkPreview>{" "}
              is our system for incubating robust, profitable businesses through the execution of academic research in startup technology products. We are currently working on solving tariff and customs management, starting with construction companies in a product called Riff.
            </div>
          </div>
          <div className="text-base leading-7">
            <div className="mb-4">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Transparent Progress</strong>
              </div>
              Our team will post the progress for our projects under the Amelia system. We sell our products by speaking to people at events. If we fill their need for the right price, they buy it. Simple.
            </div>
          </div>
        </Section>
        <Section>
          <h2 className="text-lg font-medium mb-6 text-black dark:text-neutral-100">Problem</h2>
          <div className="text-base leading-7">
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Academic Research Limitations</strong>
              </div>
              Professors often spend significant time applying for grants to fund their research, then pursue results targeted by funding sources. Many researchers feel disconnected from the real-world applications of their work.
            </div>
            
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Industry Disconnect</strong>
              </div>
              Software engineers at major tech companies frequently express dissatisfaction with their impact and limited scope of responsibility. Many professionals seek side projects with greater purpose and autonomy.
            </div>
            
            <div className="mb-4">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Growth Pressure</strong>
              </div>
              The pressure for immediate hyperbolic growth in startups often leads to sacrificing superior technology and innovation for short-term metrics that appeal to investors.
            </div>
          </div>
          <div className="text-base leading-7">
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Technology Impact</strong>
              </div>
              We've witnessed how research-focused companies can create groundbreaking products that transform industries. Sometimes the most impactful innovations emerge from exploration rather than targeted growth hacking.
            </div>
            
            <div className="mb-4">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Market Independence</strong>
              </div>
              Our experience has shown that focusing on technology advancement and user needs yields better long-term results than chasing growth metrics. We believe in building technology that solves meaningful problems without external pressures dictating our direction.
            </div>
          </div>
        </Section>
        <Section>
          <h2 className="text-lg font-medium mb-6 text-black dark:text-neutral-100">Philosophy</h2>
          <div className="text-base leading-7">
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Focus on the User, and All Else Will Follow</strong>
              </div>
              A business interaction is fundamentally a value exchange between two or more humans. We put emerging technologies to use, providing value to people.
            </div>
            
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Embrace Risk to Compound Success</strong>
              </div>
              CSX Labs stands for Computer Science Exploration Laboratories. Exploration means venturing into uncomfortable territories with high perceived risk. Our failures yield lessons that compound in value over time, strengthening our core values through iterations of Solus Regera, Nullref, Candle, Blue-ESPARK, DChat, and others.
            </div>
            
            <div className="mb-4">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Integrity and Transparency Build Longevity</strong>
              </div>
              We operate with integrity by adhering to our principles and maintaining transparency. While ensuring customer privacy, we share our learnings openly, building long-term trust through honest operation and accountability.
            </div>
          </div>
          <div className="text-base leading-7">
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Health is Wealth</strong>
              </div>
              <div className="text-base">There is an epidemic of burnout among software engineers at companies both big and small. We prioritize personal health and values alignment among our members over business metrics.</div>
            </div>
            
            <div className="mb-8">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Financial Independence Enables Mission Focus</strong>
              </div>
              <div className="text-base">Our health as a business comes from creating core, resistant businesses that are financially healthy regardless of market volatility. We build stable companies that can operate free of market conditions and stay true to core principles.</div>
            </div>
            
            <div className="mb-4">
              <div className="border-b border-neutral-600 pb-1 mb-4">
                <strong className="text-black dark:text-neutral-100">Solidarity in Purpose</strong>
              </div>
              <div className="text-base">On March 10th, 2024, our core team members solemnly swore to solidarity in advancing technology for humanity by our principles and the characteristics outlined in an{" "}
              <LinkPreview
                imageSrc="/site-thumbnails/google-docs.avif"
                isStatic={true}
                url="https://drive.google.com/file/d/1dr74v3FQz4xgiCksmLZyTspa973SigOc/view?usp=sharing">
                Oath of Solidarity
              </LinkPreview>{". "}
              This Oath goes beyond the company but rather an alignment of our life purpose and professional principles we abide by.</div>
            </div>
          </div>
        </Section>
        <Section>
          <h2 className="mb-3 md:mb-0 text-lg font-medium text-black dark:text-neutral-100">Team</h2>
          <div className="col-span-2 flex flex-wrap gap-12 md:gap-24 md:grid md:grid-cols-2">
            <TeamMember
              name="Adam Blumenfeld"
              profilePicturePath="/team/adam.jpeg"
              title="CEO"
              twitter="https://x.com/nullref0"
              linkedin="https://linkedin.com/in/nullstream"
              github="https://github.com/ecsbeats"
              keybase="https://keybase.io/nullref"
            />
            <TeamMember
              name="Satvik Eltepu"
              profilePicturePath="/team/satvik.jpeg"
              title="CFO"
            />
            <TeamMember
              name="Srujan Murthy"
              profilePicturePath="/team/srujan.jpeg"
              title="COO"
            />
          </div>
        </Section>
        <Section className="gap-0">
          <h1 className="text-xl font-medium text-black dark:text-neutral-100">Contact</h1>
          <div>
            <h3 className="border-b border-neutral-600 pb-1 mb-2 text-black dark:text-neutral-100 font-bold">By Email</h3>
            <ul className="mt-4 mb-12 flex flex-col space-y-1.5">
              <li className="flex items-start">
                <span className="inline-block w-56 font-bold text-black dark:text-neutral-100">info@csxlabs.org</span>
                <span className="text-base">General Information</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-56 font-bold text-black dark:text-neutral-100">sales@csxlabs.org</span>
                <span className="text-base">Sales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-56 font-bold text-black dark:text-neutral-100">partnerships@csxlabs.org</span>
                <span className="text-base">Partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-56 font-bold text-black dark:text-neutral-100">governments@csxlabs.org</span>
                <span className="text-base">Governments, Defense, and Intelligence</span>
              </li>
            </ul>
            <h3 className="border-b border-neutral-600 pb-1 mb-2 text-black dark:text-neutral-100 font-bold">By Phone</h3>
            <p className="mt-4 mb-12 text-base">
              <b className="text-black dark:text-neutral-100">+1 (925) 307-9351</b> - 8:30am-5pm PT weekdays. <br /> <br />
              If we can&apos;t pick up we will get back to you within 24 hours.
            </p>
            <h3 className="border-b border-neutral-600 pb-1 mb-2 text-black dark:text-neutral-100 font-bold">By Mail</h3>
            <p className="mt-4 mb-4 font-bold text-base text-black dark:text-neutral-100">
              2108 N Street STE 4995<br />
              Sacramento, CA 95816-5712<br />
              USA
            </p>
            <p className="mb-12 text-base">
              For large packages, please contact us first for delivery details.
            </p>
          </div>
        </Section>
        <Section>
          <div className="text-lg font-medium text-black dark:text-neutral-100">Copyright</div>
          <div className="col-span-2 text-base">
            Copyright © 2024 CSX Labs, LLC. All rights reserved.
          </div>
        </Section>
      </div>
    </>
  );
}

const Section: React.FC<React.PropsWithChildren & { className?: string }> = ({ children, className }) => {
  return (
    <div className={clsx(className, "flex flex-col gap-6 md:mr-24 md:grid md:grid-cols-3 md:gap-24")}>
      {children}
    </div>
  )
}

const TeamMember: React.FC<{
  name: string, 
  profilePicturePath: string,
  title: string,
  twitter?: string,
  linkedin?: string,
  github?: string,
  keybase?: string
}> = ({ name, profilePicturePath, title, twitter, linkedin, github, keybase }) => {
  return (
    <div className="flex gap-10">
      <Image
        src={profilePicturePath}
        width={100}
        height={100}
        className="rounded-full"
        alt={"Portrait of " + name}
      />
      <div className="flex-col space-y-3">
        <div>
          <h1 className="text-lg">{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="flex gap-2 text-lg">
          {twitter &&
            <Link
              href={twitter}
              target="_blank"
              >
              <Icon icon="prime:twitter" />
            </Link>
          }
          {linkedin &&
            <Link
              href={linkedin}
              target="_blank"
              >
                <Icon icon="mdi:linkedin" />
            </Link>
          }
          {github &&
            <Link
              href={github}
              target="_blank"
              >
              <Icon icon="mdi:github" />
            </Link>
          }
          {keybase &&
            <Link
              href={keybase}
              target="_blank"
              >
              <Icon icon="material-symbols:key" />
            </Link>
          }
        </div>
      </div>
    </div>
  )
}
