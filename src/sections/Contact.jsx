@@ .. @@
         <TitleHeader
-          title="Get in Touch – Let's Connect"
-          sub="💬 Have questions or ideas? Let's talk! 🚀"
+          title="Order Custom Cakes & Get in Touch"
+          sub="🎂 Ready to place an order? Let's create something special! 📞"
         />
         <div className="grid-12-cols mt-16">
           <div className="xl:col-span-5">
@@ .. @@
                 <div>
-                  <label htmlFor="name">Your name</label>
+                  <label htmlFor="name">Your Name</label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     value={form.name}
                     onChange={handleChange}
-                    placeholder="What's your good name?"
+                    placeholder="What's your name?"
                     required
                   />
                 </div>
@@ .. @@
                 <div>
-                  <label htmlFor="message">Your Message</label>
+                  <label htmlFor="message">Order Details / Message</label>
                   <textarea
                     id="message"
                     name="message"
                     value={form.message}
                     onChange={handleChange}
-                    placeholder="How can I help you?"
+                    placeholder="Tell us about your custom order or message..."
                     rows="5"
                     required
                   />
@@ .. @@
                     <p className="text">
-                      {loading ? "Sending..." : "Send Message"}
+                      {loading ? "Sending Order..." : "Place Order"}
                     </p>
                     <div className="arrow-wrapper">