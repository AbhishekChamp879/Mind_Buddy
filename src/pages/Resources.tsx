import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Play, 
  Volume2, 
  Download, 
  Search,
  Clock,
  Users,
  Heart,
  Brain,
  Moon,
  Coffee,
  Zap,
  Filter,
  Phone
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'tool' | 'pdf';
  category: 'stress' | 'mindfulness' | 'sleep' | 'anxiety' | 'depression' | 'study' | 'trauma' | 'relationships';
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  language: 'english' | 'hindi' | 'spanish' | 'tamil' | 'bengali';
  thumbnail?: string;
  views?: number;
  rating?: number;
  url?: string;
  downloadUrl?: string;
  author?: string;
  publishedDate?: string;
  tags?: string[];
}

const mockResources: Resource[] = [
  // Stress Management Resources
  {
    id: '1',
    title: 'Deep Breathing for Exam Anxiety',
    description: 'Learn the 4-7-8 breathing technique specifically designed for Indian students to calm pre-exam nerves and improve focus during competitive exams.',
    type: 'video',
    category: 'anxiety',
    duration: '8 min',
    difficulty: 'beginner',
    language: 'english',
    views: 15247,
    rating: 4.8,
    url: 'https://www.youtube.com/watch?v=YRPh_GaiL8s',
    author: 'Dr. Priya Sharma, Clinical Psychologist',
    publishedDate: '2024-08-15',
    tags: ['breathing', 'exam-stress', 'anxiety-relief']
  },
  {
    id: '2',
    title: 'प्रगतिशील मांसपेशी विश्राम (Progressive Muscle Relaxation)',
    description: 'हिंदी में शारीरिक तनाव मुक्त करने और गहरी विश्राम को बढ़ावा देने के लिए ऑडियो गाइड। भारतीय संस्कृति के अनुकूल तकनीकें।',
    type: 'audio',
    category: 'stress',
    duration: '15 min',
    difficulty: 'beginner',
    language: 'hindi',
    views: 8924,
    rating: 4.9,
    url: 'https://open.spotify.com/episode/4rOtJKE7VcBXq9b2X8sT6h',
    downloadUrl: '/audio/pmr-hindi.mp3',
    author: 'डॉ. अर्जुन पटेल',
    publishedDate: '2024-09-01',
    tags: ['तनाव-मुक्ति', 'विश्राम', 'मांसपेशी']
  },
  {
    id: '3',
    title: 'Sleep Hygiene for Indian Students',
    description: 'Evidence-based strategies to improve sleep quality considering Indian lifestyle, late-night study culture, and family dynamics. Includes tips for hostels and shared rooms.',
    type: 'article',
    category: 'sleep',
    duration: '7 min read',
    difficulty: 'beginner',
    language: 'english',
    views: 12134,
    rating: 4.7,
    url: 'https://www.sleepfoundation.org/how-sleep-works/sleep-hygiene-tips',
    downloadUrl: '/pdfs/sleep-hygiene-indian-students.pdf',
    author: 'Dr. Kavita Menon, Sleep Specialist',
    publishedDate: '2024-08-20',
    tags: ['sleep', 'student-life', 'hostel-life']
  },
  {
    id: '4',
    title: 'Mindful Study Planner & Pomodoro Timer',
    description: 'Interactive web tool designed for Indian academic calendar. Plan focused study sessions with built-in mindfulness breaks, exam countdown, and stress monitoring.',
    type: 'tool',
    category: 'study',
    difficulty: 'intermediate',
    language: 'english',
    views: 5672,
    rating: 4.6,
    url: 'https://pomofocus.io/',
    author: 'Mind Buddy Team',
    publishedDate: '2024-09-10',
    tags: ['productivity', 'study-planning', 'mindfulness']
  },
  {
    id: '5',
    title: 'JEE/NEET Stress Management Guide',
    description: 'Comprehensive PDF guide specifically for competitive exam aspirants. Covers managing parental pressure, peer comparison, and maintaining mental health during preparation.',
    type: 'pdf',
    category: 'anxiety',
    duration: '25 min read',
    difficulty: 'intermediate',
    language: 'english',
    views: 18765,
    rating: 4.9,
    url: 'https://www.apa.org/topics/stress/manage',
    downloadUrl: '/pdfs/competitive-exam-stress-management.pdf',
    author: 'Dr. Rajesh Kumar & Dr. Sneha Joshi',
    publishedDate: '2024-07-15',
    tags: ['competitive-exams', 'parental-pressure', 'academic-stress']
  },
  {
    id: '6',
    title: 'Depression Awareness in Indian Context',
    description: 'Understanding depression symptoms, cultural stigma, and when to seek help. Addresses misconceptions common in Indian families and provides practical coping strategies.',
    type: 'video',
    category: 'depression',
    duration: '18 min',
    difficulty: 'intermediate',
    language: 'english',
    views: 9876,
    rating: 4.8,
    url: 'https://www.youtube.com/watch?v=z-IR48Mb3W0',
    author: 'Dr. Priya Sharma',
    publishedDate: '2024-08-30',
    tags: ['depression', 'mental-health-awareness', 'cultural-context']
  },
  {
    id: '7',
    title: 'Yoga Nidra for Deep Relaxation',
    description: 'Traditional Indian relaxation technique combining mindfulness with yogic practices. Perfect for students dealing with academic pressure and sleep issues.',
    type: 'audio',
    category: 'mindfulness',
    duration: '30 min',
    difficulty: 'beginner',
    language: 'english',
    views: 7432,
    rating: 4.7,
    url: 'https://www.youtube.com/watch?v=M0u9GST_j3s',
    downloadUrl: '/audio/yoga-nidra-students.mp3',
    author: 'Yogacharya Ramesh Sharma',
    publishedDate: '2024-08-25',
    tags: ['yoga', 'relaxation', 'traditional-healing']
  },
  {
    id: '8',
    title: 'তনাব মোকাবেলার কৌশল (Stress Management Techniques)',
    description: 'Bengali language guide for stress management incorporating Bengali cultural values and family dynamics. Practical techniques for students and working professionals.',
    type: 'article',
    category: 'stress',
    duration: '10 min read',
    difficulty: 'beginner',
    language: 'bengali',
    views: 3456,
    rating: 4.6,
    url: 'https://example.com/bengali-stress-guide',
    downloadUrl: '/pdfs/stress-management-bengali.pdf',
    author: 'ডঃ সুমিত্রা বসু',
    publishedDate: '2024-09-05',
    tags: ['তনাব', 'মানসিক-স্বাস্থ্য', 'বাঙালি-সংস্কৃতি']
  },
  {
    id: '9',
    title: 'Digital Detox for Mental Health',
    description: 'How to manage social media addiction, reduce screen time, and create healthy boundaries with technology. Essential for Gen Z mental health.',
    type: 'tool',
    category: 'anxiety',
    difficulty: 'intermediate',
    language: 'english',
    views: 6789,
    rating: 4.5,
    url: 'https://freedom.to/',
    author: 'Dr. Kavita Menon',
    publishedDate: '2024-09-12',
    tags: ['digital-wellness', 'social-media', 'technology-balance']
  },
  {
    id: '10',
    title: 'Relationship Counseling for Indian Couples',
    description: 'Navigate relationship challenges in the context of Indian family structures, arranged marriages, and cultural expectations. Communication techniques and conflict resolution.',
    type: 'video',
    category: 'relationships',
    duration: '22 min',
    difficulty: 'advanced',
    language: 'english',
    views: 4321,
    rating: 4.7,
    url: 'https://www.youtube.com/watch?v=example',
    author: 'Dr. Rajesh Kumar, Marriage Therapist',
    publishedDate: '2024-08-18',
    tags: ['relationships', 'marriage', 'family-dynamics']
  },
  {
    id: '11',
    title: 'PTSD Recovery Resources',
    description: 'Trauma-informed healing approaches combining Western therapy with Indian spiritual practices. Safe space information and emergency resources.',
    type: 'article',
    category: 'trauma',
    duration: '15 min read',
    difficulty: 'advanced',
    language: 'english',
    views: 2134,
    rating: 4.9,
    url: 'https://www.ptsd.va.gov/understand/what/index.asp',
    downloadUrl: '/pdfs/trauma-recovery-guide.pdf',
    author: 'Dr. Kavita Menon, Trauma Specialist',
    publishedDate: '2024-07-30',
    tags: ['trauma', 'ptsd', 'recovery', 'healing']
  },
  {
    id: '12',
    title: 'தமிழ் மனநல வழிகாட்டி (Tamil Mental Health Guide)',
    description: 'Tamil language comprehensive mental health guide covering anxiety, depression, and stress management with cultural sensitivity for Tamil-speaking communities.',
    type: 'pdf',
    category: 'anxiety',
    duration: '20 min read',
    difficulty: 'beginner',
    language: 'tamil',
    views: 1876,
    rating: 4.8,
    url: 'https://example.com/tamil-mental-health',
    downloadUrl: '/pdfs/tamil-mental-health-guide.pdf',
    author: 'டாக்டர் கமலா சுந்தரம்',
    publishedDate: '2024-08-12',
    tags: ['மனநலம்', 'தமிழ்', 'கவலை']
  },
  {
    id: '13',
    title: 'Mindfulness Meditation for Beginners',
    description: 'Start your mindfulness journey with simple 5-minute daily practices. Includes guided meditations in English and Hindi for Indian practitioners.',
    type: 'audio',
    category: 'mindfulness',
    duration: '45 min',
    difficulty: 'beginner',
    language: 'english',
    views: 11234,
    rating: 4.6,
    url: 'https://www.headspace.com/meditation/mindfulness',
    downloadUrl: '/audio/mindfulness-beginners.mp3',
    author: 'Mind Buddy Meditation Team',
    publishedDate: '2024-09-01',
    tags: ['meditation', 'mindfulness', 'beginners']
  },
  {
    id: '14',
    title: 'Academic Burnout Prevention Toolkit',
    description: 'Early warning signs, prevention strategies, and recovery techniques for students experiencing academic burnout. Includes self-assessment tools and action plans.',
    type: 'tool',
    category: 'stress',
    difficulty: 'intermediate',
    language: 'english',
    views: 8765,
    rating: 4.7,
    url: 'https://burnout-assessment.vercel.app/',
    author: 'Dr. Sneha Joshi',
    publishedDate: '2024-08-28',
    tags: ['burnout', 'academic-stress', 'prevention']
  },
  {
    id: '15',
    title: 'Crisis Support & Emergency Resources',
    description: 'Comprehensive list of mental health crisis support resources in India. Includes helpline numbers, online chat services, and immediate safety planning.',
    type: 'article',
    category: 'depression',
    duration: '5 min read',
    difficulty: 'beginner',
    language: 'english',
    views: 15432,
    rating: 5.0,
    url: 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders',
    downloadUrl: '/pdfs/crisis-support-resources-india.pdf',
    author: 'Mind Buddy Crisis Team',
    publishedDate: '2024-09-15',
    tags: ['crisis', 'emergency', 'support', 'helpline']
  }
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Categories', icon: BookOpen },
    { id: 'stress', label: 'Stress Relief', icon: Heart },
    { id: 'mindfulness', label: 'Mindfulness', icon: Brain },
    { id: 'sleep', label: 'Sleep Hygiene', icon: Moon },
    { id: 'anxiety', label: 'Anxiety & Exams', icon: Zap },
    { id: 'depression', label: 'Depression Support', icon: Coffee },
    { id: 'study', label: 'Study Skills', icon: BookOpen },
    { id: 'trauma', label: 'Trauma Recovery', icon: Heart },
    { id: 'relationships', label: 'Relationships', icon: Users },
  ];

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;
    const matchesType = selectedType === 'all' || resource.type === selectedType;

    return matchesSearch && matchesCategory && matchesLanguage && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'audio': return Volume2;
      case 'article': return BookOpen;
      case 'tool': return Zap;
      case 'pdf': return Download;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-severity-high text-white';
      case 'audio': return 'bg-severity-medium text-white';
      case 'article': return 'bg-primary text-primary-foreground';
      case 'tool': return 'bg-secondary text-secondary-foreground';
      case 'pdf': return 'bg-severity-low text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-severity-low text-white';
      case 'intermediate': return 'bg-severity-medium text-white';
      case 'advanced': return 'bg-severity-high text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Psychoeducational Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Evidence-based resources to support your mental health journey. All content is reviewed by licensed professionals.
        </p>
      </div>

      {/* Search & Filters */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Find Resources</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="category" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="category">Category</TabsTrigger>
              <TabsTrigger value="type">Type</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
            </TabsList>

            <TabsContent value="category" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-1"
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="type" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {['all', 'article', 'video', 'audio', 'tool', 'pdf'].map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="capitalize"
                  >
                    {type === 'all' ? 'All Types' : type === 'pdf' ? 'PDF Documents' : type}
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="language" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {['all', 'english', 'hindi', 'tamil', 'bengali', 'spanish'].map((language) => (
                  <Button
                    key={language}
                    variant={selectedLanguage === language ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(language)}
                    className="capitalize"
                  >
                    {language === 'all' ? 'All Languages' : 
                     language === 'hindi' ? 'हिंदी' :
                     language === 'tamil' ? 'தமிழ்' :
                     language === 'bengali' ? 'বাংলা' : language}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredResources.length} of {mockResources.length} resources
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            // Generate a comprehensive PDF with all resources
            const resourceList = filteredResources.map(r => 
              `${r.title}\n${r.description}\nType: ${r.type} | Duration: ${r.duration} | Language: ${r.language}\nAuthor: ${r.author || 'N/A'}\nURL: ${r.url || 'N/A'}\n---\n`
            ).join('\n');
            
            const blob = new Blob([`Mind Buddy Resources Collection\n\n${resourceList}`], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'mind-buddy-resources.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
          }}
        >
          <Download className="h-4 w-4 mr-2" />
          Export Resources
        </Button>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const TypeIcon = getTypeIcon(resource.type);
          
          return (
            <Card key={resource.id} className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-md ${getTypeColor(resource.type)}`}>
                      <TypeIcon className="h-4 w-4" />
                    </div>
                    <Badge variant="secondary" className={getDifficultyColor(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {resource.language}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{resource.duration}</span>
                  </div>
                  {resource.views && (
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{resource.views.toLocaleString()} views</span>
                    </div>
                  )}
                </div>

                {resource.author && (
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">By:</span> {resource.author}
                  </div>
                )}

                {resource.tags && (
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {resource.rating && (
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Heart
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(resource.rating!) 
                              ? 'text-primary fill-current' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {resource.rating}/5
                    </span>
                  </div>
                )}

                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => {
                      if (resource.url) {
                        if (resource.type === 'tool') {
                          // Open tools in the same tab
                          window.location.href = resource.url;
                        } else {
                          // Open articles, videos, etc. in new tab
                          window.open(resource.url, '_blank', 'noopener,noreferrer');
                        }
                      }
                    }}
                  >
                    {resource.type === 'article' ? 'Read Article' : 
                     resource.type === 'video' ? 'Watch Video' :
                     resource.type === 'audio' ? 'Listen Now' : 
                     resource.type === 'pdf' ? 'View PDF' :
                     'Use Tool'}
                  </Button>
                  {resource.downloadUrl && (
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => {
                        // Create a temporary link to trigger download
                        const link = document.createElement('a');
                        link.href = resource.downloadUrl!;
                        link.download = `${resource.title.replace(/[^a-zA-Z0-9]/g, '-')}.${resource.type === 'pdf' ? 'pdf' : 'mp3'}`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No resources found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Help Section */}
      <Card className="bg-gradient-calm border-0">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <span>Need Immediate Support?</span>
          </CardTitle>
          <CardDescription>
            If you're experiencing a mental health crisis, don't wait - reach out for immediate help.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="safety"
              onClick={() => window.open('tel:+91-9152987821', '_self')}
              className="flex flex-col items-center p-4 h-auto"
            >
              <Phone className="h-5 w-5 mb-2" />
              <span className="font-semibold">AASRA</span>
              <span className="text-xs">24x7 Helpline</span>
              <span className="text-xs">+91-91529-87821</span>
            </Button>
            <Button 
              variant="trust"
              onClick={() => window.open('tel:+91-80-25497777', '_self')}
              className="flex flex-col items-center p-4 h-auto"
            >
              <Phone className="h-5 w-5 mb-2" />
              <span className="font-semibold">Vandrevala</span>
              <span className="text-xs">Foundation</span>
              <span className="text-xs">+91-80-2549-7777</span>
            </Button>
            <Button 
              variant="gentle"
              onClick={() => window.open('tel:+91-22-25563291', '_self')}
              className="flex flex-col items-center p-4 h-auto"
            >
              <Phone className="h-5 w-5 mb-2" />
              <span className="font-semibold">Connecting</span>
              <span className="text-xs">Trust</span>
              <span className="text-xs">+91-22-2556-3291</span>
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('/booking', '_self')}
              className="flex flex-col items-center p-4 h-auto"
            >
              <Users className="h-5 w-5 mb-2" />
              <span className="font-semibold">Book Session</span>
              <span className="text-xs">Professional Help</span>
              <span className="text-xs">Available 24/7</span>
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>In case of emergency, please call <strong>102</strong> (National Emergency Helpline) or visit your nearest hospital.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resources;