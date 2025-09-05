# Rypto Studio Backend System

## 🚀 Complete Next.js Backend Implementation

This project includes a **complete backend system** built entirely with Next.js built-in features - no external databases or services required!

## 📁 Backend Structure

```
app/api/
├── contact/route.ts          # Contact form submissions
├── projects/
│   ├── route.ts             # GET all projects, POST new project
│   └── [id]/route.ts        # GET, PUT, DELETE specific project
├── services/
│   └── route.ts             # GET all services, POST new service
├── team/
│   └── route.ts             # GET all team members, POST new member
└── admin/
    └── stats/route.ts       # Dashboard statistics

lib/
└── data-storage.ts          # File-based data storage system

data/                        # Local data storage (auto-created)
├── contacts.json           # Contact form submissions
├── projects.json           # Portfolio projects
├── services.json           # Service offerings
└── team.json              # Team members
```

## 🛠️ Features

### ✅ **Contact Form System**
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - View submissions (admin)
- Email validation and data sanitization
- Automatic data persistence

### ✅ **Project Management**
- **GET** `/api/projects` - List all projects
- **POST** `/api/projects` - Create new project
- **GET** `/api/projects/[id]` - Get specific project
- **PUT** `/api/projects/[id]` - Update project
- **DELETE** `/api/projects/[id]` - Delete project
- Support for categories, technologies, featured status

### ✅ **Service Management**
- **GET** `/api/services` - List active services
- **POST** `/api/services` - Create new service
- Service features, pricing, and status management

### ✅ **Team Management**
- **GET** `/api/team` - List active team members
- **POST** `/api/team` - Add team member
- Social links and profile management

### ✅ **Admin Dashboard**
- **GET** `/api/admin/stats` - Real-time statistics
- Contact submissions tracking
- Project and team metrics

## 🗄️ Data Storage

### **File-Based Storage**
- Uses Node.js `fs` module for data persistence
- JSON files for easy reading and debugging
- Automatic data directory creation
- Type-safe data interfaces

### **Data Types**
```typescript
interface ContactSubmission {
  id: string
  name: string
  email: string
  company?: string
  message: string
  service?: string
  budget?: string
  createdAt: string
}

interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  createdAt: string
  updatedAt: string
}
```

## 🚀 Getting Started

### **1. Initialize Sample Data**
```bash
node scripts/init-data.js
```

### **2. Start Development Server**
```bash
npm run dev
```

### **3. Test API Endpoints**
- **Contact Form**: Submit via `/contact` page
- **View Data**: Check `/admin/dashboard`
- **API Testing**: Use browser dev tools or Postman

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get contact submissions |
| GET | `/api/projects` | List all projects |
| POST | `/api/projects` | Create new project |
| GET | `/api/projects/[id]` | Get specific project |
| PUT | `/api/projects/[id]` | Update project |
| DELETE | `/api/projects/[id]` | Delete project |
| GET | `/api/services` | List active services |
| POST | `/api/services` | Create new service |
| GET | `/api/team` | List team members |
| POST | `/api/team` | Add team member |
| GET | `/api/admin/stats` | Get dashboard stats |

## 🔧 Usage Examples

### **Submit Contact Form**
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I need a website!',
    service: 'web-dev',
    budget: '10k-25k'
  })
})
```

### **Create New Project**
```javascript
const response = await fetch('/api/projects', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'E-commerce Website',
    description: 'Modern online store',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: true
  })
})
```

## 🎯 Benefits

### **✅ Zero Configuration**
- No database setup required
- No external services needed
- Works out of the box

### **✅ Production Ready**
- Type-safe API routes
- Error handling and validation
- Data persistence
- Admin dashboard

### **✅ Scalable**
- Easy to migrate to external database
- Modular architecture
- RESTful API design

### **✅ Developer Friendly**
- Full TypeScript support
- Clear data structures
- Easy to extend and modify

## 🔄 Migration Path

When ready to scale, you can easily migrate to:
- **PostgreSQL** with Prisma
- **MongoDB** with Mongoose
- **Supabase** for real-time features
- **Vercel Postgres** for serverless

The data structures and API endpoints remain the same!

## 📝 Notes

- Data is stored in the `data/` directory
- All API routes include proper error handling
- Contact form includes email validation
- Admin dashboard shows real-time statistics
- File-based storage is perfect for development and small projects

---

**🎉 Your Rypto Studio now has a complete backend system running entirely on Next.js!**
