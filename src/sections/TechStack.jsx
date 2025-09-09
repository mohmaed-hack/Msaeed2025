@@ .. @@
 import TitleHeader from "../components/TitleHeader";
 import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
-import { techStackIcons } from "../constants";
-// import { techStackImgs } from "../constants";
+import { bakerySpecialties } from "../constants";
 
-const TechStack = () => {
+const BakerySpecialties = () => {
   // Animate the tech cards in the skills section
   useGSAP(() => {
     // This animation is triggered when the user scrolls to the #skills wrapper
@@ .. @@
   return (
-    <div id="skills" className="flex-center section-padding">
+    <div id="gallery" className="flex-center section-padding">
       <div className="w-full h-full md:px-10 px-5">
         <TitleHeader
-          title="How I Can Contribute & My Key Skills"
-          sub="🤝 What I Bring to the Table"
+          title="Our Bakery Specialties & Signature Items"
+          sub="🎂 What Makes Us Special"
         />
         <div className="tech-grid">
           {/* Loop through the techStackIcons array and create a component for each item. 
               The key is set to the name of the tech stack icon, and the classnames are set to 
               card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
               classes are only applied on larger screens. */}
-          {techStackIcons.map((techStackIcon) => (
+          {bakerySpecialties.map((specialty) => (
             <div
-              key={techStackIcon.name}
+              key={specialty.name}
               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
             >
               {/* The tech-card-animated-bg div is used to create a background animation when the 
@@ .. @@
                 {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                     which renders the 3D model of the tech stack icon. */}
                 <div className="tech-icon-wrapper">
-                  <TechIconCardExperience model={techStackIcon} />
+                  <TechIconCardExperience model={specialty} />
                 </div>
                 {/* The padding-x and w-full classes are used to add horizontal padding to the 
                     text and make it take up the full width of the component. */}
                 <div className="padding-x w-full">
                   {/* The p tag contains the name of the tech stack icon. */}
-                  <p>{techStackIcon.name}</p>
+                  <p>{specialty.name}</p>
                 </div>
               </div>
             </div>
@@ .. @@
 };
 
-export default TechStack;
+export default BakerySpecialties;