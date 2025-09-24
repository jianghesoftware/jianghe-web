import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Recruitment() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigate = useNavigate();
  
  // 招聘职位数据
  const positions = [
    {
      title: "前端开发工程师",
      department: "技术部",
      location: "武汉",
      experience: "3-5年",
      description: "负责公司Web前端开发，实现高质量用户界面和交互效果",
      requirements: [
        "本科及以上学历，计算机相关专业",
        "3年以上前端开发经验，熟悉React、TypeScript等技术",
        "良好的代码风格和团队协作能力"
      ]
    },
    {
      title: "UI/UX设计师",
      department: "设计部",
      location: "武汉",
      experience: "2-4年",
      description: "负责产品界面设计和用户体验优化，打造优质产品体验",
      requirements: [
        "设计相关专业，2年以上UI/UX设计经验",
        "熟练使用Figma、Sketch等设计工具",
        "具备良好的审美能力和用户思维"
      ]
    },
    {
      title: "后端开发工程师",
      department: "技术部",
      location: "襄阳",
      experience: "3-5年",
      description: "负责后端系统架构设计和开发，保障系统稳定高效运行",
      requirements: [
        "计算机相关专业，3年以上后端开发经验",
        "熟悉Java/Python/Go等至少一种后端语言",
        "有分布式系统开发经验者优先"
      ]
    }
  ];
  
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
                加入我们
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  招聘信息
                </h1>
                <p className="text-lg text-gray-600">
                  江和软件正在快速发展，我们期待优秀的你加入团队，共同创造数字化未来
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=modern%20office%20team%20collaboration&sign=1a5d57123e187f83b20029abab928120" 
                  alt="江和软件团队" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我们的团队</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  江和软件拥有一支充满活力和创新精神的团队，我们致力于为客户提供最优质的数字化转型解决方案。在这里，你将与行业精英共事，参与前沿项目，实现个人职业成长。
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "开放包容的企业文化",
                    "具有竞争力的薪酬福利",
                    "丰富的学习和成长机会",
                    "年轻活力的团队氛围",
                    "舒适的办公环境"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <i className="fa-solid fa-check text-blue-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="#positions" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  查看职位列表
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              id="positions"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">热招职位</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {positions.map((position, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <i className="fa-solid fa-map-marker-alt mr-2"></i>
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-briefcase mr-2"></i>
                        <span>{position.experience}经验</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">任职要求:</h4>
                    <ul className="space-y-2 mb-6">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fa-solid fa-angle-right text-blue-600 mt-1 mr-2"></i>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#" className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      立即申请 <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}