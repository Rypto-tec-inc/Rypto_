# Setting Up Modern Web Technologies for WinLiberia Website

Hey there! I'm working on this project with my friend Pereze, and we're rebuilding the WinLiberia website using some really cool modern web technologies. Let me walk you through everything we're installing and setting up.

## What We're Building

We're creating a modern, interactive website for WinLiberia using cutting-edge technologies that will make the site look amazing and perform smoothly. Here's everything we're installing:

## Core Technologies We're Using

### 1. React Three Fiber
**What it is:** A React renderer for Three.js that lets us create 3D graphics and animations directly in React.

**Installation:**
```bash
npm install @react-three/fiber @react-three/drei
```

**Why we need it:** We want to add some cool 3D elements and interactive graphics to make the website stand out.

**Basic setup:**
```javascript
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Our 3D components will go here */}
    </Canvas>
  )
}
```

### 2. Framer Motion
**What it is:** An amazing animation library that makes creating smooth, beautiful animations super easy.

**Installation:**
```bash
npm install framer-motion
```

**Why we need it:** We want smooth page transitions, hover effects, and engaging animations throughout the site.

**Basic usage:**
```javascript
import { motion } from 'framer-motion'

function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      This will animate in smoothly!
    </motion.div>
  )
}
```

### 3. Shadcn/UI
**What it is:** A collection of beautiful, accessible UI components built with Radix UI and Tailwind CSS.

**Installation:**
```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add label
```

**Why we need it:** We want professional-looking components that are accessible and customizable.

### 4. Additional Libraries We're Using

#### GSAP (GreenSock Animation Platform)
```bash
npm install gsap @gsap/react
```
**For:** Advanced animations and timeline controls

#### React Hook Form
```bash
npm install react-hook-form @hookform/resolvers zod
```
**For:** Form handling and validation

#### React Icons
```bash
npm install react-icons
```
**For:** Beautiful icons throughout the site

#### React CountUp
```bash
npm install react-countup
```
**For:** Animated number counters (perfect for lottery results!)

#### React Phone Number Input
```bash
npm install react-phone-number-input
```
**For:** Professional phone number input with country codes

## Our Current Project Structure

Looking at our current setup, we already have:
- ✅ Next.js 15.5.2 (latest version)
- ✅ React 19.1.0 (cutting edge!)
- ✅ TypeScript
- ✅ Tailwind CSS 4
- ✅ Some Shadcn components already set up

## What We Still Need to Install

Based on our goals, here's what Pereze and I still need to add:

```bash
# 3D Graphics
npm install @react-three/fiber @react-three/drei

# Advanced Animations
npm install framer-motion

# Additional Shadcn components
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add badge
npx shadcn@latest add progress
npx shadcn@latest add skeleton
```

## Our Development Approach

Pereze and I are taking a systematic approach:

1. **First:** Set up all the core libraries
2. **Second:** Create reusable components with Shadcn
3. **Third:** Add 3D elements with React Three Fiber
4. **Fourth:** Implement smooth animations with Framer Motion
5. **Finally:** Polish everything with GSAP for advanced effects

## Why These Technologies?

- **React Three Fiber:** Makes 3D web development accessible
- **Framer Motion:** Industry standard for React animations
- **Shadcn/UI:** Beautiful, accessible components out of the box
- **GSAP:** For complex animations and timeline control
- **Next.js 15:** Latest features and performance optimizations

## Next Steps

After installing everything, we'll be creating:
- Interactive 3D lottery ball animations
- Smooth page transitions
- Animated counters for results
- Beautiful form components
- Responsive design that works on all devices

This is going to be an amazing project! Pereze and I are excited to see how it turns out.

---

*Documentation created by me and my friend Pereze for the WinLiberia website rebuild project.*
