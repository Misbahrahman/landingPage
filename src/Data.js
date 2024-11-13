import { 
    Cloud, 
    MessageSquare, 
    Cog, 
    Camera, 
    Server, 
    Cpu
  } from 'lucide-react';
  
  // Data arrays
  export const services = [
      {
        title: "AI as a Service (AIaaS)",
        description: "Flexible AI-as-a-Service solutions provide on-demand access to the capabilities of AI, enabling scalable integration without substantial infrastructure.",
        icon: <Cloud className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
      },
      {
        title: "Natural Language Processing",
        description: "Tap into the power of language through intelligent NLP systems for sentiment analysis, chatbots, and automated data extraction.",
        icon: <MessageSquare className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors" />
      },
      {
        title: "AI Automation",
        description: "Streamline repetitive tasks and elevate operational efficiency with AI-powered automation solutions.",
        icon: <Cog className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
      },
      {
        title: "Computer Vision",
        description: "Transform images and videos into actionable insights with advanced computer vision capabilities.",
        icon: <Camera className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
      },
      {
        title: "Cloud AI",
        description: "Scale your AI initiatives with secure, scalable AI models and tools hosted on cloud infrastructure.",
        icon: <Server className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
      },
      {
        title: "Edge Computing Solutions",
        description: "Bring AI to the edge with low-latency solutions designed for real-time decision-making and rapid response.",
        icon: <Cpu className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
      }
  ];
    
  export const industries = [
      "Retail and Wholesale",
      "Government Services",
      "Media and Telecom",
      "Smart Cities",
      "Transportation",
      "Resources and Utilities",
      "Manufacturing",
      "Food and Agriculture",
      "Real Estate",
      "Hospitality",
      "Health and Biotech",
      "Finance"
  ];