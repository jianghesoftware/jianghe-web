import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FinancialTechnology() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header scrolled={scrolled} />
      
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
               <div className="flex justify-between items-start mb-6">
                  <button 
                    onClick={() => navigate('/')}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                    <span>返回首页</span>
                  </button>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
                金融行业案例
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  金融科技平台
                </h1>
                <p className="text-lg text-gray-600">
                  为某大型银行开发的智能风控系统，提升风险识别效率300%
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=fintech%20platform%20dashboard&sign=ee581d399d16bb43e1f2bf14f14e35b8" 
                  alt="金融科技平台" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">项目背景</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  随着金融业务的快速发展和复杂化，传统风控系统已无法满足实时风险识别和处理的需求。客户需要一套智能化、自动化的风控解决方案，以应对日益增长的业务量和复杂的风险环境。
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">解决方案</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>基于大数据和人工智能技术构建的智能风控模型</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>实时交易监控与风险预警系统</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>自动化风险评估与决策支持平台</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>可视化数据分析仪表盘</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">项目成果</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">300%</p>
                    <p className="text-gray-600">风险识别效率提升</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">65%</p>
                    <p className="text-gray-600">人工审核成本降低</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">技术架构</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-database text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">数据层</h4>
                  <p className="text-gray-600">分布式数据存储与处理，支持PB级数据量</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-microchip text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">算法层</h4>
                  <p className="text-gray-600">机器学习与深度学习模型，实时风险评估</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-display text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">应用层</h4>
                  <p className="text-gray-600">Web与移动端多端适配，直观操作界面</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}