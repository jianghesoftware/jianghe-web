import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            <div
                className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 transform origin-top-right z-0"></div>
            <div
                className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-50 z-0"></div>
            <div
                className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}>
                        <span
                            className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
                            style={{
                                fontFamily: "DOUYINSANSBOLD-GB",
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto"
                            }}>创新科技 · 引领未来
                                                    </span>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                            style={{
                                fontFamily: "DOUYINSANSBOLD-GB",
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto"
                            }}>数字化转型<br />
                            <span
                                className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">解决方案提供商
                                                            </span>
                        </h1>
                        <p
                            className="text-lg text-gray-600 mb-8 max-w-lg"
                            style={{
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto",
                                fontFamily: "DOUYINSANSBOLD-GB"
                            }}>江和软件专注于为企业提供全方位的数字化转型服务，助力企业实现业务增长与效率提升，共创智慧未来。
                                                    </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.98
                                }}
                                style={{
                                    fontFamily: "DOUYINSANSBOLD-GB",
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto"
                                }}>与我们联系
                                                            </motion.button>
                            <motion.button
                                className="bg-white border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg transition-all duration-300"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.98
                                }}
                                style={{
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto",
                                    fontFamily: "DOUYINSANSBOLD-GB"
                                }}>过往成功案例
                                                            </motion.button>
                        </div>
                        <div className="mt-12 flex items-center">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => <></>)}
                            </div>
                            <div className="ml-4">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map(star => <></>)}
                                </div>
                                <></>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3
                        }}
                        className="relative">
                        <div
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-transform hover:rotate-0 duration-500">
                            <img
                                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20office%20interior%20with%20technology%20equipment%20and%20professional%20team&sign=c0d3465966a3b80446fa7ad4e09fe688"
                                alt="江和软件团队"
                                className="w-full h-auto" />
                        </div>
                        <div
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <i className="fa-solid fa-line-chart text-xl"></i>
                                </div>
                                <div className="ml-3">
                                    <p className="text-2xl font-bold text-gray-900">98%</p>
                                    <p className="text-sm text-gray-500">客户满意度</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 transform rotate-3 transition-transform hover:rotate-0 duration-500">
                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <i className="fa-solid fa-building text-xl"></i>
                                </div>
                                <div className="ml-3">
                                    <p className="text-2xl font-bold text-gray-900">200+</p>
                                    <p className="text-sm text-gray-500">合作企业</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}