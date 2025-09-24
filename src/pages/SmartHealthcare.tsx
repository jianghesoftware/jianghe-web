import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SmartHealthcare() {
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
                医疗健康案例
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  智慧医疗解决方案
                </h1>
                <p className="text-lg text-gray-600">
                  构建区域医疗信息平台，实现患者信息互联互通，优化就医流程
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=smart%20healthcare%20system&sign=9364b00f34664e27f4e17a0e8e1280e7" 
                  alt="智慧医疗解决方案" 
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
                  医疗资源分布不均、患者信息孤岛、就医流程繁琐等问题一直困扰着医疗行业。客户需要一套智慧医疗解决方案，实现区域内医疗机构信息共享，优化患者就医体验。
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">解决方案</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>区域医疗信息共享平台，实现患者信息互联互通</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>智能预约挂号系统，减少患者等待时间</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>电子健康档案管理，实现全生命周期健康管理</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span>远程医疗会诊平台，促进优质医疗资源下沉</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">项目成果</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">40%</p>
                    <p className="text-gray-600">患者等待时间减少</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">85%</p>
                    <p className="text-gray-600">病历查询效率提升</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">系统架构</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-user-doctor text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">医生端</h4>
                  <p className="text-gray-600">电子病历管理、远程会诊、智能诊断辅助</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-user-patient text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">患者端</h4>
                  <p className="text-gray-600">在线挂号、报告查询、健康档案管理</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-hospital text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">医院管理端</h4>
                  <p className="text-gray-600">资源调度、科室协作、运营数据分析</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <i className="fa-solid fa-shield-halved text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">监管端</h4>
                  <p className="text-gray-600">医疗质量监控、数据统计分析、决策支持</p>
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