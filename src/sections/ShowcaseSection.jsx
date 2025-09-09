@@ .. @@
   return (
   )
-    <div id="work" ref={sectionRef} className="app-showcase">
+    <div id="products" ref={sectionRef} className="app-showcase">
       <div className="w-full">
         <div className="showcaselayout">
           <div ref={rydeRef} className="first-project-wrapper">
             <div className="image-wrapper">
-              <img src="/images/project1.png" alt="Ryde App Interface" />
+              <img src="/images/signature-cakes.png" alt="Signature Cakes Collection" />
             </div>
             <div className="text-content">
               <h2>
-                On-Demand Rides Made Simple with a Powerful, User-Friendly App
-                called Ryde
+                Signature Cakes & Custom Creations Made with Love and Premium Ingredients
               </h2>
               <p className="text-white-50 md:text-xl">
-                An app built with React Native, Expo, & TailwindCSS for a fast,
-                user-friendly experience.
+                Handcrafted cakes using traditional techniques and the finest ingredients
+                for unforgettable celebrations.
               </p>
             </div>
           </div>
@@ .. @@
           <div className="project-list-wrapper overflow-hidden">
             <div className="project" ref={libraryRef}>
-              <div className="image-wrapper bg-[#FFEFDB]">
+              <div className="image-wrapper bg-[#F5E6D3]">
                 <img
-                  src="/images/project2.png"
-                  alt="Library Management Platform"
+                  src="/images/artisan-pastries.png"
+                  alt="Artisan Pastries Collection"
                 />
               </div>
-              <h2>The Library Management Platform</h2>
+              <h2>Artisan Pastries & Fresh Breads</h2>
             </div>
 
             <div className="project" ref={ycDirectoryRef}>
-              <div className="image-wrapper bg-[#FFE7EB]">
-                <img src="/images/project3.png" alt="YC Directory App" />
+              <div className="image-wrapper bg-[#FFF0E6]">
+                <img src="/images/seasonal-treats.png" alt="Seasonal Treats" />
               </div>
-              <h2>YC Directory - A Startup Showcase App</h2>
+              <h2>Seasonal Treats & Holiday Specials</h2>
             </div>
           </div>
         </div>