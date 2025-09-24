import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RetailManagement() {
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
                零售行业案例
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  新零售管理系统
                </h1>
                <p className="text-lg text-gray-600">
                  为连锁零售企业打造的全渠道管理平台，整合线上线下销售数据
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=retail%20management%20system&sign=2b2e7b7311eaf7eb57be5e8ffff10a47" 
                  alt="新零售管理系统" 
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
                  传统零售企业面临线上线下渠道割裂、数据不互通、库存管理困难等问题。客户需要一套整合全渠道销售数据的新零售管理系统，实现一体化运营管理。
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">解决方案</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>全渠道销售管理平台，整合线上线下销售数据</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>智能库存管理系统，实现库存精准调控</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>会员管理与精准营销系统，提升客户复购率</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>大数据分析平台，提供销售预测与决策支持</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">项目成果</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">25%</p>
                    <p className="text-gray-600">销售额增长</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">35%</p>
                    <p className="text-gray-600">库存周转效率提升</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">系统功能模块</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fa-solid fa-shopping-cart text-blue-600 mr-2"></i>
                    全渠道销售
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 线上线下一体化销售</li>
                    <li>• 多平台订单管理</li>
                    <li>• 统一支付系统</li>
                    <li>• 会员通兑积分</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fa-solid fa-boxes-stacked text-blue-600 mr-2"></i>
                    智能库存
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 实时库存监控</li>
                    <li>• 智能补货提醒</li>
                    <li>• 库存预警系统</li>
                    <li>• 调拨管理</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fa-solid fa-chart-line text-blue-600 mr-2"></i>
                    数据分析
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 销售趋势分析</li>
                    <li>• 客户行为分析</li>
                    <li>• 商品热度排行</li>
                    <li>• 智能决策建议</li>
                  </ul>
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