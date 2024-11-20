import { PackageSearch } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Wand2 } from 'lucide-react';
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
        description: "Flexible AI-as-a-Service solutions provide on-demand access to the capabilities of AI. From predictive analytics to intelligent automation, our AIaaS solutions enable you to integrate scalable AI capabilities into your organization without the need for substantial infrastructure.",
        icon: <Cloud className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
    },
    {
        title: "Natural Language Processing (NLP)",
        description: "Tap into the power of language through intelligent NLP systems. From sentiment analysis and chatbots to automated data extraction, our NLP services help businesses leverage language data for deeper insights and enhanced customer interactions.",
        icon: <MessageSquare className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
    },
    {
        title: "AI Automation",
        description: "Streamline repetitive tasks and elevate operational efficiency with AI-powered automation. By automating workflows and reducing manual intervention, our AI solutions allow you to save time, cut costs, and focus on what matters most.",
        icon: <Cog className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
    },
    {
        title: "Computer Vision",
        description: "Transform images and videos into actionable insights with advanced computer vision capabilities. From object detection and facial recognition to real-time quality control, our solutions help you automate and enhance visual data processing.",
        icon: <Camera className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors" />
    },
    {
        title: "Cloud AI",
        description: "Scale your AI initiatives with the cloud. Our Cloud AI solutions provide secure, scalable AI models and tools hosted on cloud infrastructure, offering flexibility and high availability for any workload—perfect for enterprises of any size.",
        icon: <Server className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
    },
    {
        title: "Edge Computing Solutions",
        description: "Bring AI to the edge with low-latency solutions designed for real-time decision-making and rapid response. Our edge computing services empower devices to process and analyze data closer to the source, ideal for applications in remote locations, IoT, and time-sensitive environments.",
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