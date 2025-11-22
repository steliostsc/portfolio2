import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "Enhance Audio",
    image_link: "/tools/enhanceaudio.png",
    icon: Film,
    description:
      "Refine dialogue, music, and sound effects to achieve clear, balanced, and professional-quality audio.",
    color: "text-orange-400",
  },
  {
    name: "Color Correction",
    image_link: "/tools/colorcorrection.jpg",
    icon: Scissors,
    description:
      "Perform precise adjustments to color, contrast, and exposure to ensure visually consistent and cinematic results.",
    color: "text-purple-400",
  },
  {
    name: "Motion Tracking",
    image_link: "/tools/motiontracking.png",
    icon: Sparkles,
    description: "Accurately track subjects or objects to seamlessly attach text, graphics, or visual elements.",
    color: "text-blue-400",
  },
  {
    name: "Visual Effects",
    image_link: "/tools/vfx.png",
    icon: Palette,
    description: "Execute green screen removal, digital overlay integration, and background clean-up for polished, professional visuals.",
    color: "text-cyan-400",
  },
  {
    name: "Motion Graphics",
    image_link: "/tools/motiongraphics.png",
    icon: Volume2,
    description: "Implement fundamental animations, lower thirds, and transitions to enhance visual engagement.",
    color: "text-green-400",
  },
  {
    name: "Subtitles",
    image_link: "/tools/subtittles.png",
    icon: Volume2,
    description: "Incorporate accurate and legible captions to improve accessibility and audience comprehension.",
    color: "text-green-400",
  },
];


//export const specializations = [
/*  {
    title: "YouTube Content Creation",
    skills: [
      "Retention Editing",
      "Thumbnail Design",
      "SEO Optimization",
      "Analytics Understanding",
    ],
    icon: "🎬 ",
    description:
      "Specialized in creating engaging YouTube content that keeps viewers watching",
  },
  {
    title: "Social Media Videos",
    skills: [
      "Short-form Content",
      "Vertical Video",
      "Platform Optimization",
      "Viral Techniques",
    ],
    icon: "📱",
    description:
      "Expert in creating content optimized for Instagram, TikTok, and other platforms",
  },
  {
    title: "Corporate Videos",
    skills: [
      "Professional Presentation",
      "Brand Consistency",
      "Clean Aesthetics",
      "Message Clarity",
    ],
    icon: "🏢",
    description:
      "Creating polished corporate content that communicates effectively",
  },
  {
    title: "Educational Content",
    skills: [
      "Screen Recording",
      "Tutorial Structure",
      "Clear Explanations",
      "Interactive Elements",
    ],
    icon: "📚",
    description:
      "Specialized in making complex topics easy to understand through video",
  },
  {
    title: "Motion Graphics",
    skills: [
      "2D Animation",
      "Logo Animation",
      "Lower Thirds",
      "Kinetic Typography",
    ],
    icon: "✨",
    description: "Creating eye-catching animations that enhance storytelling",
  },
  {
    title: "Color Grading",
    skills: [
      "Cinematic Looks",
      "Color Matching",
      "Mood Creation",
      "Technical Correction",
    ],
    icon: "🎨",
    description:
      "Professional color work that gives videos a polished, cinematic feel",
  },*/
//]; 

export const achievements = [
  {
    title: "150+ Projects Completed",
    description:
      "Delivered over 150 video projects across diverse industries.",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "Happy Clients",
    description:
      "Maintained strong client relationships with positive feedback.",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "Professional Experience",
    description:
      "Developed expertise in video editing while continuously refining technical skills.",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "Fast Turnaround",
    description:
      "Deliver professional, high-quality work efficiently and on schedule.",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Evaluate client needs and the overall goals of the project.",
  },
  {
    step: "02",
    title: "Content Review",
    description:
      "Review raw footage and plan the editing structure.",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Create the initial edit, establishing foundational cuts, transitions, and structure.",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, effects and enhancing audio to deliver a polished final video.",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Present the work for feedback and incorporate revisions to meet client expectations.",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Deliver the completed video in the specified formats.",
  },
];
