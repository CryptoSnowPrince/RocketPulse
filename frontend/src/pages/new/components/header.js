export default function Header() {
    return (
        <>
            <a href="https://rocketpool.net/#header" class="hidden" id="#header">Header</a>
            <a
                href="https://rocketpool.net/#stake-run-node"
                class="hidden"
                id="#stake-run-node"
            >stake-run-node</a>
            <a
                href="https://rocketpool.net/#security"
                class="hidden"
                id="#security"
            >Security</a>
            <a
                href="https://rocketpool.net/#how-it-works"
                class="hidden"
                id="#how-it-works"
            >How it works</a>
            <a
                href="https://rocketpool.net/#community"
                class="hidden"
                id="#community"
            >Community</a>
            <a href="https://rocketpool.net/#news" class="hidden" id="#news"
            >News</a>
            <a href="https://rocketpool.net/#team" class="hidden" id="#team"
            >Team</a>
            <a href="https://rocketpool.net/#dao" class="hidden" id="#dao">Dao</a>
            <a
                href="https://rocketpool.net/#node-operator-interest"
                class="hidden"
                id="#node-operator-interest"
            >Node Operator Interest</a>
            <a href="https://rocketpool.net/#footer" class="hidden" id="#footer"
            >Footer
            </a>
            <div
                class="bg-gradient-to-r from-rporange-bg to-rppink-bg"
                id="header"
            >
                <div class="bg-header relative overflow-hidden">
                    <div class="bg-fx"></div>
                    <div class="rocket"></div>
                    <div class="trail"></div>
                    <div class="bg-clouds-top"></div>
                    <div class="relative overflow-hidden">
                        <div class="relative pt-6 pb-16 sm:pb-24">
                            <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                                <div class="flex justify-center">
                                    <img alt="img"
                                        src={"https://rocketpool.net/assets/rocketpool-a7624790.webp"}
                                        class="md:max-w-3xl"
                                    />
                                </div>
                                <div class="mt-20 pb-12 sm:pb-16">
                                    <div class="relative">
                                        <div class="absolute inset-0 h-1/2"></div>
                                        <div
                                            class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                                        >
                                            <div class="max-w-4xl mx-auto">
                                                <dl class="sm:grid sm:grid-cols-2">
                                                    <div
                                                        class="flex flex-col p-6 text-center sm:border-0"
                                                    >
                                                        <dt
                                                            class="order-2 mt-2 text-lg leading-6 font-semibold uppercase text-gray-50 tracking-wide"
                                                        >
                                                            ETH Staked
                                                        </dt>
                                                        <dd
                                                            class="text-5xl sm:text-8xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
                                                        >
                                                            <span>810,080</span>
                                                        </dd>
                                                    </div>
                                                    <div
                                                        class="flex flex-col border-t p-6 text-center sm:border-0"
                                                    >
                                                        <dt
                                                            class="order-2 mt-2 text-lg leading-6 font-semibold uppercase text-gray-50 tracking-wide"
                                                        >
                                                            Node Operators
                                                        </dt>
                                                        <dd
                                                            class="text-5xl sm:text-8xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
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
