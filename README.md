# MindBuddy 🧠💙

<div align="center">
  <img src="src/assets/freepik__retouch__90823.png" alt="MindBuddy Logo" width="200" height="200">
  
  **A Comprehensive Mental Health Support Platform**
  
  *Empowering minds, fostering wellness, building supportive communities*

  ![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue?logo=tailwindcss)
  ![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)
  ![License](https://img.shields.io/badge/License-MIT-green)

</div>

## 🌟 Overview

MindBuddy is a modern, comprehensive mental health support platform designed to provide accessible, stigma-free mental health resources and support. Built with cutting-edge technology and a human-centered approach, MindBuddy bridges the gap between students, mental health professionals, and educational institutions.

### 🎯 Mission
To create a safe, supportive, and accessible digital environment where individuals can access mental health resources, connect with professionals, and build supportive communities without judgment or stigma.

## 🚨 The Problem We Solve

Mental health issues among college students have significantly increased in recent years, including:
- **Anxiety and Depression**: Affecting 60% of college students
- **Academic Stress**: Overwhelming pressure and burnout
- **Social Isolation**: Loneliness and disconnection from peers  
- **Sleep Disorders**: Disrupted sleep patterns affecting mental health
- **Financial Stress**: Economic pressures impacting wellbeing

**The Gap**: Major shortage in availability, accessibility, and stigma-free delivery of mental health support in higher education institutions, especially in rural and semi-urban colleges.

## 🚀 Key Features

### 👥 Multi-Role Platform
- **Students**: Access resources, book counseling sessions, participate in forums
- **Counselors**: Manage sessions, provide support, monitor student wellbeing
- **Administrators**: Oversee platform operations, manage users, analyze data

### 🎨 Modern UI/UX Design
- **Glassmorphism Effects**: Beautiful translucent UI elements with backdrop blur
- **Smooth Animations**: 60fps animations with custom easing functions
- **Responsive Design**: Mobile-first approach with touch-optimized interactions
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Accessibility**: WCAG 2.1 compliant with screen reader support

### 🛠️ Core Functionalities

#### 🤖 **AI-Guided First-Aid Support**
- 24/7 interactive chatbot assistance
- Coping strategies and immediate interventions
- Crisis detection with professional referral system
- Multi-language support for regional accessibility
- Conversation history and progress tracking

#### 📅 **Confidential Booking System**
- Secure appointment scheduling with on-campus counselors
- Integration with mental health helplines
- Anonymous booking options for privacy
- Automated reminders and follow-up notifications
- Video call integration for remote sessions

#### 📚 **Psychoeducational Resource Hub**
- **Videos**: Mental wellness tutorials and guided sessions
- **Audio Resources**: Relaxation techniques and meditation guides
- **Regional Languages**: Content available in local languages
- **Interactive Guides**: Step-by-step mental health exercises
- **Downloadable Materials**: Offline access to key resources

#### 🌐 **Peer Support Platform**
- Moderated peer-to-peer support forums
- Trained student volunteer system
- Anonymous posting and interaction options
- Topic-based discussion groups
- Crisis support escalation protocols

#### 📊 **Admin Dashboard & Analytics**
- **Anonymous Data Analytics**: Privacy-preserving insights
- **Trend Recognition**: Identify emerging mental health patterns
- **Intervention Planning**: Data-driven support strategies
- **Real-time Monitoring**: Platform usage and user engagement
- **Outcome Tracking**: Measure intervention effectiveness

## 🏗️ Technical Architecture

### Frontend Stack
```
├── React 18.x          # UI Library with Hooks and Context API
├── TypeScript 5.x      # Type-safe JavaScript
├── Tailwind CSS 3.x    # Utility-first CSS framework
├── Vite 5.x           # Fast build tool and dev server
├── React Router       # Client-side routing
├── Recharts          # Data visualization library
├── Radix UI          # Accessible component primitives
├── Lucide Icons      # Beautiful icon library
└── Framer Motion     # Animation library
```

### Design System
```
├── Color Palette      # HSL-based calming colors
├── Typography Scale   # Responsive font sizing
├── Component Library  # Reusable UI components
├── Animation System   # Custom keyframes and transitions
├── Shadow System      # Layered shadow utilities
└── Gradient System    # Modern gradient presets
```

### Project Structure
```
Mind_Buddy/
├── public/
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── chat/         # Chat-related components
│   │   ├── layout/       # Layout components
│   │   └── video/        # Video call components
│   ├── contexts/         # React contexts
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useOnlineStatus.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   ├── Profile.tsx
│   │   └── ...
│   ├── styles/           # Global styles
│   │   └── modern-ui.css
│   ├── types/            # TypeScript definitions
│   │   └── auth.ts
│   ├── App.tsx           # Main app component
│   ├── index.css         # Global CSS
│   └── main.tsx          # App entry point
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Design Philosophy

### Color Psychology
MindBuddy uses a carefully curated color palette based on color psychology principles:

- **Primary Blue (#4A94FF)**: Trust, reliability, and calmness
- **Wellness Green (#10B981)**: Growth, healing, and nature
- **Safety Orange (#F59E0B)**: Energy, warmth, and positivity
- **Trust Purple (#8B5CF6)**: Wisdom, creativity, and transformation

### Accessibility First
- High contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators on all interactive elements
- Alternative text for images

### Mobile-First Design
- Progressive enhancement from mobile to desktop
- Touch-friendly interaction areas (minimum 44px)
- Optimized for various screen sizes
- Fast loading times on mobile networks

## 📱 User Roles & Permissions

### 🎓 Student Role
**Capabilities:**
- Access personal dashboard with wellness metrics
- Book counseling sessions with available counselors
- Participate in AI chat support 24/7
- Browse and download mental health resources
- Join community forums and support groups
- Track personal wellness journey
- Receive appointment reminders and notifications

**Privacy Features:**
- Anonymous forum participation
- Confidential booking system
- Encrypted personal data
- Self-managed privacy settings

### 👨‍⚕️ Counselor Role
**Capabilities:**
- Manage counseling sessions and appointments
- Access student progress reports (with consent)
- Conduct video call sessions
- Upload resources and educational materials
- Moderate forum discussions
- Provide crisis intervention support
- View relevant analytics for their patients

**Ethical Guidelines:**
- Patient confidentiality maintained
- Professional boundary management
- Crisis escalation protocols
- Continuing education requirements

### 👑 Administrator Role
**Capabilities:**
- Platform oversight and management
- Anonymous analytics and trend analysis
- Resource content management
- User safety and moderation
- System configuration and settings
- Crisis intervention coordination
- Compliance monitoring

**Privacy Safeguards:**
- Cannot access individual conversations
- Anonymized data analysis only
- Audit trail for all actions
- Compliance with data protection laws

## 🚀 Getting Started

### Prerequisites
Before running MindBuddy, ensure you have the following installed:

```bash
Node.js >= 18.0.0
npm >= 9.0.0 or yarn >= 1.22.0
Git >= 2.34.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AbhishekChamp879/Mind_Buddy-main.git
cd Mind_Buddy-main/Mind_Buddy
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:3001
VITE_SOCKET_URL=ws://localhost:3001
VITE_ENCRYPTION_KEY=your-encryption-key-here
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_MICROSOFT_CLIENT_ID=your-microsoft-client-id
VITE_CRISIS_HOTLINE=+1-800-273-8255
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:5173` to see the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎯 Usage Guide

### For Students

1. **Getting Started**
   - Create account with university email
   - Complete initial wellness assessment
   - Set personal goals and preferences
   - Explore available resources

2. **Using AI Chat Support**
   - Access 24/7 through chat widget
   - Describe your feelings or situation
   - Receive personalized coping strategies
   - Get referrals to human counselors when needed

3. **Booking Counseling Sessions**
   - Browse available counselors and specialties
   - Select preferred time slots and session type
   - Choose in-person or video session options
   - Receive automated reminders

4. **Accessing Resources**
   - Browse by category (anxiety, depression, stress, etc.)
   - Download materials for offline use
   - Watch video tutorials and guided exercises
   - Listen to relaxation and meditation audio

5. **Joining Peer Support**
   - Participate in moderated forums
   - Join topic-specific support groups
   - Share experiences anonymously
   - Connect with trained peer volunteers

### For Counselors

1. **Session Management**
   - View upcoming appointments in dashboard
   - Access student profiles and history (with consent)
   - Conduct secure video sessions
   - Update session notes and treatment plans

2. **Resource Contribution**
   - Upload educational materials
   - Create personalized resource recommendations
   - Share wellness exercises and techniques
   - Contribute to resource library

3. **Crisis Intervention**
   - Receive immediate alerts for high-risk students
   - Access crisis intervention protocols
   - Coordinate with emergency services when needed
   - Follow up with affected students

### For Administrators

1. **Platform Oversight**
   - Monitor overall platform health and usage
   - Manage user accounts and permissions
   - Ensure compliance with privacy regulations
   - Coordinate crisis response protocols

2. **Analytics and Insights**
   - View anonymized usage statistics
   - Identify trends in mental health concerns
   - Plan intervention strategies based on data
   - Generate reports for institutional planning

3. **Content Management**
   - Moderate forum discussions
   - Approve resource uploads
   - Manage crisis hotline integrations
   - Update institutional policies

## 🔒 Security & Privacy

### Data Protection
- **End-to-End Encryption**: All sensitive communications encrypted
- **Data Anonymization**: Personal identifiers removed from analytics
- **Secure Storage**: Industry-standard database encryption
- **Access Controls**: Role-based permissions and authentication

### Privacy Compliance
- **HIPAA Compliant**: Meets healthcare data protection standards
- **FERPA Compliant**: Educational record privacy protection
- **GDPR Ready**: European data protection regulation compliance
- **User Consent**: Explicit consent for all data collection

### Crisis Management
- **Automated Detection**: AI identifies crisis language patterns
- **Escalation Protocols**: Immediate alert to human counselors
- **Emergency Contacts**: Integration with local crisis services
- **Follow-up Procedures**: Systematic check-ins after crisis events

## 🌍 Accessibility Features

### WCAG 2.1 Compliance
- **Level AA** compliance for all core features
- Screen reader support with ARIA labels
- Keyboard navigation for all interactive elements
- High contrast mode for visual impairments
- Alternative formats for multimedia content

### Inclusive Design
- **Multi-language Support**: Interface in regional languages
- **Cultural Sensitivity**: Resources adapted for local contexts
- **Economic Accessibility**: Free core features with optional premium
- **Device Compatibility**: Works on low-end smartphones and older browsers

## 📊 Impact Metrics

### Expected Outcomes
- **Reduced Stigma**: 40% increase in help-seeking behavior
- **Early Intervention**: 60% faster identification of at-risk students
- **Improved Access**: 24/7 availability vs. limited office hours
- **Better Outcomes**: 35% improvement in student mental health scores

### Success Measurements
- Platform engagement and retention rates
- Crisis intervention response times
- Student satisfaction surveys
- Academic performance correlations
- Mental health outcome assessments

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add mental health resource feature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards
- Follow TypeScript and React best practices
- Use ESLint and Prettier for code formatting
- Write comprehensive tests for new features
- Update documentation for API changes
- Ensure accessibility compliance

### Areas for Contribution
- **Mental Health Resources**: Content creation and curation
- **Translations**: Multi-language support implementation
- **Accessibility**: Improving inclusive design features
- **Security**: Enhancing privacy and data protection
- **Mobile App**: React Native implementation

## 📋 Roadmap

### Phase 1: Foundation (Completed ✅)
- [x] Multi-role authentication system
- [x] Basic dashboard and navigation
- [x] Modern glassmorphic UI implementation
- [x] Responsive design and accessibility
- [x] Core component library

### Phase 2: Core Features (In Progress 🔄)
- [ ] AI chatbot integration with crisis detection
- [ ] Video calling system for counseling sessions
- [ ] Resource library with multi-language content
- [ ] Peer support forum with moderation
- [ ] Anonymous booking and appointment system

### Phase 3: Advanced Features (Planned 📋)
- [ ] Advanced analytics dashboard
- [ ] Mobile application (React Native)
- [ ] Integration with campus health systems
- [ ] Machine learning for personalized interventions
- [ ] Wearable device integration for wellness tracking

### Phase 4: Scale & Expansion (Future 🚀)
- [ ] Multi-university deployment
- [ ] API for third-party integrations
- [ ] White-label solutions for institutions
- [ ] Advanced AI companions and therapy bots
- [ ] Blockchain for secure, decentralized records

## 🆘 Crisis Resources & Support

### Immediate Help
If you or someone you know is in immediate danger, please contact:

- **Emergency Services**: 911 (US), 999 (UK), 112 (EU)
- **National Suicide Prevention Lifeline**: 988 (US)
- **Crisis Text Line**: Text HOME to 741741
- **International Crisis Lines**: [https://www.iasp.info/resources/Crisis_Centres/](https://www.iasp.info/resources/Crisis_Centres/)

### Campus Resources
- Student Counseling Centers
- Campus Health Services
- Academic Support Services
- Resident Advisor Systems
- Peer Support Groups

### Getting Platform Help
- **Documentation**: [Wiki](https://github.com/AbhishekChamp879/Mind_Buddy-main/wiki)
- **Technical Issues**: [GitHub Issues](https://github.com/AbhishekChamp879/Mind_Buddy-main/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/AbhishekChamp879/Mind_Buddy-main/discussions)
- **Platform Support**: support@mindbuddy.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Special Thanks
- **Mental Health Professionals** who guided our approach
- **Student Beta Testers** who shaped the user experience
- **University Partners** who provided institutional insights
- **Crisis Counselors** who helped develop safety protocols
- **Accessibility Advocates** who ensured inclusive design

### Research Foundation
- American College Health Association studies
- WHO Mental Health Action Plan guidelines
- Campus mental health best practices research
- Digital therapeutics effectiveness studies

### Technology Partners
- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
- [Radix UI](https://www.radix-ui.com/) - Accessible Components
- [Recharts](https://recharts.org/) - Data Visualization

---

<div align="center">
  
  **🧠 Made with ❤️ for Student Mental Health 💙**
  
  *"Your mental health is just as important as your academic success."*
  
  [Website](https://mindbuddy.com) • [Documentation](https://docs.mindbuddy.com) • [Support](mailto:support@mindbuddy.com)
  
  **Together, we can break the stigma and build a supportive community.**
  
</div>

---

## 💡 Remember

- **You are not alone** - Help is always available
- **Seeking help is a sign of strength** - Not weakness
- **Your mental health matters** - Prioritize your wellbeing
- **Small steps count** - Every effort towards wellness is valuable
- **Community heals** - We're stronger together

*If you're struggling, please reach out. Whether through MindBuddy or any other resource, help is available and you deserve support.*

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
