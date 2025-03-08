"use client";

import { HardDrives } from "@phosphor-icons/react";

const Servers = () => {
  const servers = [
    {
      id: 1,
      name: "Dedicated Server",
      cpu: "12 Core AMD Ryzen 9 7900",
      ram: "64 GB DDR5 REG ECC",
      storage: "2 x 1 TB NVMe",
      speed: "1 Gbps",
      location: "SG",
    },
    {
      id: 2,
      name: "Dedicated Server",
      cpu: "24 Core AMD EPYC 9224",
      ram: "128 GB REG ECC",
      storage: "2 x 1 TB NVMe",
      speed: "1 Gbps",
      location: "EU",
    },
    {
      id: 3,
      name: "Dedicated Server",
      cpu: "8 Core AMD Ryzen 7 7700",
      ram: "64 GB DDR5",
      storage: "2 x 1 TB NVMe",
      speed: "1 Gbps",
      location: "EU",
    },
  ];
  return (
    <section>
      <div className="content">
        <h2 className="text-4xl font-bold">Our Server</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
        <div className="grid text-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {servers.map((server) => (
            <div
              key={server.id}
              className="flex flex-col text-center justify-center items-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md transition hover:scale-105"
            >
              <HardDrives size={62} />
              <h3 className="text-2xl font-semibold mb-2">{server.name}</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                CPU: {server.cpu}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                RAM: {server.ram}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Storage: {server.storage}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Speed: {server.speed}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Location: {server.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servers;
