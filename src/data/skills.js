import { FaReact, FaNodeJs, FaFigma, FaAws, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiSupabase } from 'react-icons/si';

export const skillCategories = [
    {
        title: 'Development',
        description: 'Modern, fast & responsive web apps',
        icon: '💻',
        skills: [
            { name: 'HTML', icon: FaHtml5, level: 95, color: '#E34F26' },
            { name: 'CSS', icon: FaCss3Alt, level: 90, color: '#1572B6' },
            { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
            { name: 'React', icon: FaReact, level: 85, color: '#61DAFB' },
            { name: 'TypeScript', icon: SiTypescript, level: 75, color: '#3178C6' },
            { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
        ],
    },
    {
        title: 'Cloud & Automation',
        description: 'Backend, AI agents and workflows',
        icon: '⚙️',
        skills: [
            { name: 'AWS', icon: FaAws, level: 70, color: '#FF9900' },
            { name: 'Supabase', icon: SiSupabase, level: 80, color: '#3ECF8E' },
        ],
    },
    {
        title: 'Design',
        description: 'UI/UX and visuals',
        icon: '🎨',
        skills: [
            { name: 'Figma', icon: FaFigma, level: 80, color: '#F24E1E' },
        ],
    },
];
