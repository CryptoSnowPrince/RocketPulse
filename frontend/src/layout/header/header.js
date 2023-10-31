import Connect from "../../components/Connect";

export default function Header() {
    return (
        <>
            <a href="https://rocketpool.net/#header" className="hidden" id="#header">Header</a>
            <a
                href="https://rocketpool.net/#stake-run-node"
                className="hidden"
                id="#stake-run-node"
            >stake-run-node</a>
            <a
                href="https://rocketpool.net/#security"
                className="hidden"
                id="#security"
            >Security</a>
            <a
                href="https://rocketpool.net/#how-it-works"
                className="hidden"
                id="#how-it-works"
            >How it works</a>
            <a
                href="https://rocketpool.net/#community"
                className="hidden"
                id="#community"
            >Community</a>
            <a href="https://rocketpool.net/#news" className="hidden" id="#news"
            >News</a>
            <a href="https://rocketpool.net/#team" className="hidden" id="#team"
            >Team</a>
            <a href="https://rocketpool.net/#dao" className="hidden" id="#dao">Dao</a>
            <a
                href="https://rocketpool.net/#node-operator-interest"
                className="hidden"
                id="#node-operator-interest"
            >Node Operator Interest</a>
            <a href="https://rocketpool.net/#footer" className="hidden" id="#footer"
            >Footer
            </a>
            <div
                className="bg-gradient-to-r from-rporange-bg to-rppink-bg"
                id="header"
            >
                <div className="bg-header relative overflow-hidden">
                    <div className="bg-fx"></div>
                    <div className="rocket"></div>
                    <div className="trail"></div>
                    <div className="bg-clouds-top"></div>
                    <div className="relative overflow-hidden">
                        <div className="relative pt-6 pb-16 sm:pb-24">
                            <main className="lg:mt-16 mt-5 mx-auto max-w-7xl px-4 sm:mt-24">
                                <div className="flex flex-col lg:flex-row justify-items-center lg:justify-between gap-3">
                                    <img alt="img"
                                        src={"https://rocketpool.net/assets/rocketpool-a7624790.webp"}
                                        className="md:max-w-xl"
                                    />
                                    <Connect />
                                </div>
                                <div className="mt-20 pb-12 sm:pb-16">
                                    <div className="relative">
                                        <div className="absolute inset-0 h-1/2"></div>
                                        <div
                                            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                                        >
                                            <div className="max-w-4xl mx-auto">
                                                <dl className="sm:grid sm:grid-cols-2">
                                                    <div
                                                        className="flex flex-col p-6 text-center sm:border-0"
                                                    >
                                                        <dt
                                                            className="order-2 mt-2 text-lg leading-6 font-semibold uppercase text-gray-50 tracking-wide"
                                                        >
                                                            ETH Staked
                                                        </dt>
                                                        <dd
                                                            className="text-5xl sm:text-8xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
                                                        >
                                                            <span>810,080</span>
                                                        </dd>
                                                    </div>
                                                    <div
                                                        className="flex flex-col border-t p-6 text-center sm:border-0"
                                                    >
                                                        <dt
                                                            className="order-2 mt-2 text-lg leading-6 font-semibold uppercase text-gray-50 tracking-wide"
                                                        >
                                                            Node Operators
                                                        </dt>
                                                        <dd
                                                            className="text-5xl sm:text-8xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
                                                        >
                                                            <span>3,312</span>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
