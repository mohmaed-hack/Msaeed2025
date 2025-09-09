@@ .. @@
 import gsap from "gsap";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 
-import { expCards } from "../constants";
+import { bakeryStory } from "../constants";
 import TitleHeader from "../components/TitleHeader";
 import GlowCard from "../components/GlowCard";
@@ .. @@
   return (
-    <section
-      id="experience"
-      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
-    >
+    <section id="about" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
       <div className="w-full h-full md:px-20 px-5">
         <TitleHeader
-          title="Professional Work Experience"
-          sub="💼 My Career Overview"
+          title="Our Bakery Journey & Story"
+          sub="🍰 From Humble Beginnings to Sweet Success"
         />
         <div className="mt-32 relative">
           <div className="relative z-50 xl:space-y-32 space-y-10">
-            {expCards.map((card) => (
+            {bakeryStory.map((card) => (
               <div key={card.title} className="exp-card-wrapper">