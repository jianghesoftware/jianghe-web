import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="关于我们" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
            关于江和
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">创新科技，驱动未来</h2>
          <p className="text-gray-600">江和软件（海南）有限公司致力于为企业提供全方位的数字化转型解决方案，助力企业实现业务增长与效率提升。</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=modern%20software%20company%20office%20with%20team%20collaboration&sign=7e84b585289cc22c2164abf900fd79ad" 
                alt="江和软件办公环境" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-100 rounded-lg -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-indigo-100 rounded-lg -z-10"></div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "专业技术人员" },
                { value: "30+", label: "行业解决方案" },
                { value: "98%", label: "客户留存率" },
                { value: "10+", label: "年行业经验" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">公司简介</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              江和软件（海南）有限公司成立于2020年，是一家专注于企业数字化转型的高新技术企业。公司总部位于海南自由贸易港，依托政策优势和技术创新，为国内外企业提供全方位的数字化解决方案。
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              通过技术创新与行业洞察，赋能企业数字化转型，帮助客户在数字经济时代保持竞争力，实现可持续发展。
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">核心价值观</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "fa-lightbulb", title: "创新驱动" },
                { icon: "fa-handshake", title: "诚信为本" },
                { icon: "fa-users", title: "客户至上" },
                { icon: "fa-cogs", title: "精益求精" }
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i class={`fa-solid ${value.icon}`}></i>
                  </div>
                  <span className="font-medium text-gray-800">{value.title}</span>
                </div>
              ))}
            </div>
            
            <motion.button
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              了解更多公司信息
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}