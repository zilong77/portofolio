import Image from "next/image";
import Link from "next/link";

const Networks = () => {
  const networks = [
    {
      id: 1,
      image: "/images/Networks/galactica.jpg",
      name: "Galactica",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/galactica",
      explorer: "https://testnet.kyronode.xyz/galactica",
      stake: "https://testnet.kyronode.xyz/galactica/staking/",
    },
    {
      id: 2,
      image: "/images/Networks/nubit.jpg",
      name: "Nubit",
      services: "/not-found",
      explorer: "https://testnet.kyronode.xyz/nubit",
      stake: "https://testnet.kyronode.xyz/nubit/staking/",
    },
    {
      id: 3,
      image: "/images/Networks/og.jpg",
      name: "0g",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/0g",
      explorer: "https://testnet.kyronode.xyz/og",
      stake: "https://testnet.kyronode.xyz/og/staking/0gvaloper1mnq2d6779vpqtlghm90swyhuhgdr6ty7dhqg97",
    },
    {
      id: 4,
      image: "/images/Networks/pell.png",
      name: "Pell",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/pell",
      explorer: "https://testnet.kyronode.xyz/pell",
      stake: "https://testnet.kyronode.xyz/pell/staking/pellvaloper1xc62xzpz85s9mrmcmkvrdgswrdr5qnzj54eu2r",
    },
    {
      id: 5,
      image: "/images/Networks/pryzm.jpg",
      name: "Pryzm",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/pryzm",
      explorer: "https://testnet.kyronode.xyz/pyrzm",
      stake: "https://testnet.kyronode.xyz/pyrzm/staking/prysmvaloper1a6vv6m9uszz2cwxdrrc6remnwmspe9m4ct0689",

    },
    {
      id: 6,
      image: "/images/Networks/swisstronic.jpg",
      name: "Swisstronik",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/swisstronik",
      explorer: "https://testnet.kyronode.xyz/swisstronik",
      stake: "https://testnet.kyronode.xyz/swisstronik/staking/",
    },
    {
      id: 7,
      image: "/images/Networks/warden.png",
      name: "Warden",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/warden",
      explorer: "https://testnet.kyronode.xyz/warden",
      stake: "https://testnet.kyronode.xyz/warden/staking/",
    },
    {
      id: 8,
      image: "/images/Networks/zenrock.png",
      name: "Zenrock",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/zenrock",
      explorer: "https://testnet.kyronode.xyz/zenrock",
      stake: "https://testnet.kyronode.xyz/zenrock/staking/zenvaloper1fzdsytp8s58d4jwdf0swut2ex268r89kdwdl5t",
    },
    {
      id: 9,
      image: "/images/Networks/initia.jpg",
      name: "Initia",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/initia",
      explorer: "https://app.testnet.initia.xyz",
      stake: "https://app.testnet.initia.xyz/validator/initvaloper18ef8v6x0ez5va6c5zr38gflngfthlnuz2l74uh",
    },
    {
      id: 10,
      image: "/images/Networks/dill.jpg",
      name: "Dill",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/dill",
      explorer: "https://alps.dill.xyz/",
      stake: "",
    },
    {
      id: 11,
      image: "/images/Networks/union.png",
      name: "Union",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/union",
      explorer: "https://testnet.kyronode.xyz/union",
      stake: "https://testnet.kyronode.xyz/union/staking/unionvaloper1xd5fqg7sut4swx59aqgf8fj3lwmalu6wmj5h5v",
    },
    {
      id: 12,
      image: "/images/Networks/walrus.jpg",
      name: "Walrus Testnet (Kyro x Winsnip)",
      services: "",
      explorer: "https://walruscan.com/testnet/operator/0x0b99da03c851df39f57a88478f1335d0429174f93bd177b1731dde6cd7e9210d",
      stake: "https://stake.walrus.site/",
    },
    {
      id: 13,
      image: "/images/Networks/kiichain.png",
      name: "Kiichain",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/kiichain",
      explorer: "https://testnet.kyronode.xyz/kiichain-testnet",
      stake: "https://testnet.kyronode.xyz/kiichain-testnet/staking/kiivaloper1ruhm3rujndynpgxswjjpvvlp3vhthq8qzfuaqh",
    },
    {
      id: 14,
      image: "/images/Networks/walrus.jpg",
      name: "Walrus Mainnet (Kyro x Winsnip)",
      services: "",
      explorer: "https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c",
      stake: "https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c",
    },
    {
      id: 15,
      image: "/images/Networks/zenrock.png",
      name: "Zenrock Mainnet",
      services: "https://kyronode.gitbook.io/kyronode-docs/testnet/zenrock",
      explorer: "https://testnet.kyronode.xyz/zenrock",
      stake: "https://mainnet.itrocket.net/zenrock/staking/zenvaloper10h47uhgazmcq2v2k694q906czfafc6ddarrz7ct",
    } 
  ];
  return (
    <section id="networks" className="scroll-mt-28">
      <div className="content">
        <h2 className="text-4xl font-bold">Networks</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
        <p className="text-lg mb-4 text-zinc-700 dark:text-zinc-300">
          Total staked assets: &gt;$4M
        </p>
        <div className="grid text-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
          {networks.map((network) => (
            <div
              key={network.id}
              className="flex flex-col gap-6 bg-white dark:bg-zinc-800 text-left items-start p-8 rounded-lg shadow-md transition hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={network.image}
                  alt={network.name}
                  width={200}
                  height={200}
                  className="w-10 h-10 object-cover bg-amber-300 dark:bg-white rounded-full"
                />
                <h3 className="text-2xl font-semibold ">{network.name}</h3>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-3">
              {network.services !== "" && (
                <Link
                  href={network.services}
                  target="_blank"
                  className="px-4 py-2 border border-black dark:border-white w-full text-center rounded hover:text-white hover:bg-amber-700 dark:hover:text-black dark:hover:bg-amber-600"
                >
                  Services
                </Link>
              )}
                <Link
                  href={network.explorer}
                  target="_blank"
                  className="px-4 py-2 border border-black dark:border-white w-full text-center rounded hover:text-white hover:bg-amber-700 dark:hover:text-black dark:hover:bg-amber-600"
                >
                  Explorer
                </Link>
                {network.stake !== "" && (
                  <Link
                    href={network.stake}
                    target="_blank"
                    className="px-4 py-2 border border-black dark:border-white w-full text-center rounded hover:text-white hover:bg-amber-700 dark:hover:text-black dark:hover:bg-amber-600"
                  >
                    Stake
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
