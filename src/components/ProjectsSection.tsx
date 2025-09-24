import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
    const projects = [{
        title: "金融科技平台",
        category: "金融行业",
        description: "为某大型银行开发的智能风控系统，提升风险识别效率300%。",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=fintech%20platform%20dashboard&sign=ee581d399d16bb43e1f2bf14f14e35b8"
    }, {
        title: "智慧医疗解决方案",
        category: "医疗健康",
        description: "构建区域医疗信息平台，实现患者信息互联互通，优化就医流程。",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=smart%20healthcare%20system&sign=9364b00f34664e27f4e17a0e8e1280e7"
    }, {
        title: "新零售管理系统",
        category: "零售行业",
        description: "为连锁零售企业打造的全渠道管理平台，整合线上线下销售数据。",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=retail%20management%20system&sign=2b2e7b7311eaf7eb57be5e8ffff10a47"
    }];

    const containerRef = useRef<HTMLDivElement>(null);

    const {
        scrollYProgress
    } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50]);

    return (
        <section id="案例" className="py-20 bg-gray-900 text-white" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    style={{
                        opacity,
                        y
                    }}
                    className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="inline-block px-4 py-1 rounded-full bg-blue-900 text-blue-300 text-sm font-medium mb-3">成功案例
                                                          </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">我们的客户故事</h2>
                    <p className="text-gray-300">探索我们如何帮助各行业客户实现数字化转型，创造业务价值。</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2 * index
                        }}
                        viewport={{
                            once: true
                        }}
                        className="bg-gray-800 rounded-xl overflow-hidden group">
                        <div className="h-60 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <span
                                className="inline-block px-3 py-1 bg-blue-900 text-blue-300 text-xs rounded-full mb-3"
                                style={{
                                    fontFamily: "DOUYINSANSBOLD-GB",
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto"
                                }}>
                                {project.category}
                            </span>
                            <h3
                                className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                                style={{
                                    fontFamily: "DOUYINSANSBOLD-GB",
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto"
                                }}>
                                {project.title}
                            </h3>
                            <p
                                className="text-gray-300 mb-4"
                                style={{
                                    fontFamily: "DOUYINSANSBOLD-GB",
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto"
                                }}>
                                {project.description}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors"
                                style={{
                                    fontFamily: "DOUYINSANSBOLD-GB",
                                    fontStyle: "italic",
                                    fontSynthesisStyle: "auto"
                                }}>查看详情
                                                                                  <i
                                    class="fa-solid fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    </motion.div>)}
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
                        style={{
                            fontFamily: "DOUYINSANSBOLD-GB",
                            fontStyle: "italic",
                            fontSynthesisStyle: "auto"
                        }}>查看更多案例
                                                          </a>
                </motion.div>
            </div>
        </section>
    );
}