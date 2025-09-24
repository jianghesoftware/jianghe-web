import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        viewport={{
                            once: true
                        }}>
                        <div className="flex items-center space-x-2 mb-4">
                            <div
                                className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">江</span>
                            </div>
                            <span
                                className="text-xl font-bold text-white"
                                style={{
                                    fontFamily: "DOUYINSANSBOLD-GB",
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto"
                                }}>江和软件</span>
                        </div>
                        <p
                            className="text-gray-400 mb-6"
                            style={{
                                fontFamily: "DOUYINSANSBOLD-GB",
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto"
                            }}>江和软件（海南）有限公司致力于为企业提供创新的数字化解决方案，助力企业实现数字化转型。
                                        </p>
                        <div className="flex space-x-4">
                            {["fa-weixin", "fa-weibo", "fa-linkedin", "fa-github"].map(icon => <a
                                key={icon}
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <i class={`fa-brands ${icon} text-white`}></i>
                            </a>)}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1
                        }}
                        viewport={{
                            once: true
                        }}>
                        <h3
                            className="text-lg font-semibold mb-4"
                            style={{
                                fontFamily: "DOUYINSANSBOLD-GB",
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto"
                            }}>快速链接</h3>
                        <ul className="space-y-2">
                            {["首页", "关于我们", "服务", "案例", "联系我们"].map(item => <li key={item}>
                                <a
                                    href={`#${item === "首页" ? "" : item}`}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    style={{
                                        fontFamily: "DOUYINSANSBOLD-GB",
                                        fontStyle: "italic",
                                        fontSynthesisStyle: "auto"
                         }}>
                        {item}
                    </a>
                </li>)}
                <li key="招聘">
                    <a
                         href="/recruitment"
                        className="text-gray-400 hover:text-white transition-colors"
                        style={{
                            fontFamily: "DOUYINSANSBOLD-GB",
                            fontStyle: "italic",
                            fontSynthesisStyle: "auto"
                        }}>
                        招聘
                    </a>
                </li>
            </ul>
        </motion.div>
        <motion.div
            initial={{
                opacity: 0,
                y: 20
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.5,
                delay: 0.2
            }}
            viewport={{
                once: true
            }}>
                        <h3
                            className="text-lg font-semibold mb-4"
                            style={{
                                fontFamily: "DOUYINSANSBOLD-GB",
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto"
                            }}>服务领域</h3>
                        <ul className="space-y-2">
                            {["软件开发", "系统集成", "IT咨询", "数字化转型", "云服务"].map(service => <li key={service}>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    style={{
                                        fontFamily: "DOUYINSANSBOLD-GB",
                                        fontStyle: "italic",
                                        fontSynthesisStyle: "auto"
                                    }}>
                                    {service}
                                </a>
                            </li>)}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3
                        }}
                        viewport={{
                            once: true
                        }}>
                        <h3
                            className="text-lg font-semibold mb-4"
                            style={{
                                fontFamily: "DOUYINSANSBOLD-GB",
                                fontStyle: "italic",
                                fontSynthesisStyle: "auto"
                            }}>联系我们</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i class="fa-solid fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                                <span
                                    className="text-gray-400"
                                    style={{
                                        fontFamily: "DOUYINSANSBOLD-GB",
                                        fontStyle: "italic",
                                        fontSynthesisStyle: "auto"
                                    }}>海南省海口市美兰区国兴大道互联网金融大厦A座15层</span>
                            </li>
                            <li className="flex items-center">
                                <i class="fa-solid fa-phone text-blue-400 mr-3"></i>
                                <span
                                    className="text-gray-400"
                                    style={{
                                        fontFamily: "DOUYINSANSBOLD-GB",
                                        fontStyle: "italic",
                                        fontSynthesisStyle: "auto"
                                    }}>0898-12345678</span>
                            </li>
                            <li className="flex items-center">
                                <i class="fa-solid fa-envelope text-blue-400 mr-3"></i>
                                <span
                                    className="text-gray-400"
                                    style={{
                                        fontFamily: "DOUYINSANSBOLD-GB",
                                        fontStyle: "italic",
                                        fontSynthesisStyle: "auto"
                                    }}>contact@jianghe-software.com</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <div
                    className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p
                        style={{
                            fontStyle: "italic",
                            fontSynthesisStyle: "auto",
                            fontFamily: "DOUYINSANSBOLD-GB"
                        }}>© {new Date().getFullYear()}江和软件（海南）有限公司. 保留所有权利.</p>
                </div>
            </div>
        </footer>
    );
}