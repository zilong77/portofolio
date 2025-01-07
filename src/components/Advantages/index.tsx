"use client";

import { Bridge, Monitor, ShieldCheck } from "@phosphor-icons/react";

const Advantages = () => {
  return (
    <section className="-mt-8">
      <div className="content">
        <div className="px-8 py-10 mb-2 bg-white dark:bg-zinc-800 rounded-2xl">
          <h2 className="text-4xl font-bold mb-5">The Kyronode Advantage</h2>
          <p className="text-lg text-justify mb-8 dark:text-zinc-300">
            Kyronode is dedicated to safeguarding decentralized ecosystems as a
            leading PoS validator. With our high-performance infrastructure, we
            provide maximum security, reliability, and efficiency, ensuring that
            your assets are protected and blockchain networks remain resilient.
            Our focus on innovation and scalability drives the long-term success
            and growth of the blockchain we support.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col gap-4 items-center border border-black dark:border-white rounded-2xl p-4">
              <ShieldCheck size={64} />
              <h3 className=" text-2xl md:max-w-[220px]">
                Expertise in Blockchain Security
              </h3>
              <p className="text-lg text-justify dark:text-zinc-300">
                With years of experience, we have earned the trust of major
                blockchain projects, providing them with consistent and secure
                validation services. Our expertise ensures that your assets are
                protected in a highly efficient and transparent manner.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center border border-black dark:border-white rounded-2xl p-4">
              <Monitor size={64} />
              <h3 className="text-2xl md:max-w-[250px]">
                Continuous Monitoring and Optimization
              </h3>
              <p className="text-lg text-justify dark:text-zinc-300">
                We monitor our validator nodes 24/7, guaranteeing continuous
                performance with high uptime. Our proactive system ensures that
                our validator node is always running at peak efficiency, helping
                you maximize rewards.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center border border-black dark:border-white rounded-2xl p-4">
              <Bridge size={64} />
              <h3 className="text-2xl md:max-w-[250px]">
                Resilient Infrastructure, Maximum Protection
              </h3>
              <p className="text-lg text-justify dark:text-zinc-300">
                Our worldwide server network ensures top-level security and
                reliability, keeping your funds safe and well-protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
