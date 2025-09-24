import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      title: "软件开发",
      description: "定制化软件开发服务，满足企业特定业务需求，提升运营效率与竞争力。",
      icon: "fa-code",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=software%20development%20team%20working%20on%20code&sign=6d4c2a4d2905061dc4c89abc14236623"
    },
    {
      title: "系统集成",
      description: "整合企业现有系统与新系统，实现数据无缝流通，构建高效协同工作环境。",
      icon: "fa-plug",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=system%20integration%20technology%20concept&sign=ea70d03a4f63d0c8a2da91c3abdeafa9"
    },
    {
      title: "IT咨询",
      description: "专业的IT战略咨询服务，帮助企业制定数字化转型路线图，优化IT基础设施。",
      icon: "fa-comments",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=IT%20consulting%20business%20meeting&sign=848dae9ba011be56c405eca063856e04"
    },
    {
      title: "数字化转型",
      description: "全方位数字化转型解决方案，助力企业实现业务模式创新与智能化升级。",
      icon: "fa-rocket",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=digital%20transformation%20concept&sign=5f640ad3127b788d0a3a1892c65a22ce"
    },
    {
      title: "云服务",
      description: "提供云迁移、云管理与云安全服务，帮助企业降低IT成本，提升灵活性。",
      icon: "fa-cloud",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cloud%20computing%20technology%20concept&sign=e72fd6d01b8c82d9cd1fe5a9bb7f8000"
    },
    {
      title: "大数据分析",
      description: "挖掘企业数据价值，提供数据驱动决策支持，发现业务增长新机遇。",
      icon: "fa-chart-line",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=big%20data%20analytics%20dashboard&sign=88bd3e80968da163df128a200f45edfe"
    }
  ];
  
  return (
    <section id="服务" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
            我们的服务
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">全方位数字化解决方案</h2>
          <p className="text-gray-600">我们提供专业的技术服务，助力企业实现数字化转型，提升核心竞争力。</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <i class={`fa-solid ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  了解更多
                  <i class="fa-solid fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            查看全部服务
          </a>
        </motion.div>
      </div>
    </section>
  );
}