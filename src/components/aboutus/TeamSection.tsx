"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  { id: 1, name: "Name 1", image: "/images/Team/AshishGupta.png"},
  { id: 2, name: "Name 2", image: "/images/Team/ShubhamDhanwate.png"},
  { id: 3, name: "Name 3", image: "/images/Team/Dvija.png"},
  { id: 4, name: "Name 4", image: "/images/Team/RD.png"},
];

const TeamSection = () => {
  return (
    <section className="w-full bg-[#00224D] py-24 px-8 md:px-20 min-h-screen">
      <div className="max-w-[1450px] mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-end gap-1 mb-4">
            <span className="text-[10px] font-light uppercase text-[#FAC02E]">
              Our Team
            </span>
            <div className="h-[1px] flex w-12 bg-yellow-500/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
            The Minds Behind
          </h2>
        </motion.div>

      {/* Unified Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              className="relative group cursor-pointer aspect-[4/5] rounded-xl overflow-hidden bg-[#0a254a]"
            >
              {/* Blue Hover Background Layer */}
              <div className="absolute inset-0 transition-opacity duration-500 
                bg-gradient-to-br from-[#064ED3] to-[#002B7F] opacity-0 group-hover:opacity-100" 
              />

              {/* Top Right Plus Icon */}
              <div className="absolute top-5 right-5 z-20">
                <Image
                src='/images/aboutus/plusicon.png'
                alt=''
                width={30}
                height={40}/>
              </div>

              {/* Background Pattern/Graphic Overlay */}
              <div className="absolute inset-0 z-10 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
                {/* Optional: You can place a background SVG pattern here to match your reference */}
              </div>

              {/* Team Member Image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Bottom Shadow for Name/Text if you choose to add it later */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;